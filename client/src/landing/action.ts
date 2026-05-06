import { useCloud } from "@inspatial/kit/cloud";

/*################################(GET)################################*/

export const getHeroSection = useCloud({
  operation: "get",
  entry: "section",
  id: "01KQXPQAC8760R3Y653A155E1C",
});


export const getHeroSectionAPI = useCloud({
  scope: "api",
  operation: "call",
  group: "landing",
  action: "getHeroSection",
});
