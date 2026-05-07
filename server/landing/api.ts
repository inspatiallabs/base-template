import { defineAPIAction, defineAPIGroup } from "@inspatial/cloud";
import { raiseServerException } from "@inspatial/cloud";

/*################################(API ACTION)################################*/
const getSection = defineAPIAction("getSection", {
  description: "Fetch a section by its unique name.",
  authRequired: false,
  params: [
    {
      key: "name",
      label: "Name",
      description: "Unique name of the section to fetch.",
      type: "DataField",
      required: true,
    },
  ],
  async action({ orm, params, inRequest }) {
    const section = await orm.findEntry("section", [
      {
        field: "name",
        op: "=",
        value: params.name,
      },
    ]);
    if (!section) {
      raiseServerException(404, `Section '${params.name}' not found`);
    }
    const data = section.clientData;
    const accountId = orm.systemGobalUser.accountId;
    const fileUrl = (id: unknown) =>
      typeof id === "string" && id
        ? `${inRequest.fullHost}/files/${accountId}/${id}`
        : null;
    return {
      ...data,
      logoUrl: fileUrl(data.logo),
      backgroundImageUrl: fileUrl(data.backgroundImage),
    };
  },
});

/*################################(API GROUP)################################*/
export const landingAPI = defineAPIGroup("landing", {
  actions: [getSection],
});
