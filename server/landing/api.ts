import { defineAPIAction, defineAPIGroup } from "@inspatial/cloud";
import { HERO_SECTION_ID } from "./const.ts";

/*################################(API ACTION)################################*/
const getHeroSection = defineAPIAction("getHeroSection", {
  authRequired: false,
  async action({ orm }) {
    const section = await orm.getEntry("section", HERO_SECTION_ID);
    return section.clientData;
  },
});

/*################################(API GROUP)################################*/
export const landingAPI = defineAPIGroup("landing", {
  actions: [getHeroSection],
});
