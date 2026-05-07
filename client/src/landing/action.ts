import { useCloud } from "@inspatial/kit/cloud";

/*################################(GET SECTION)################################*/
export const getSection = useCloud({
  scope: "api",
  operation: "call",
  group: "landing",
  action: "getSection",
});
