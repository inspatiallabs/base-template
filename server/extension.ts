import { landingAPI } from "./landing/api.ts";
import { sectionEntry } from "./landing/entry.ts";

/*################################## (Extension) ##################################*/
export const bioloonExtension = defineExtension("bioloon", {
  label: "Bioloon",
  description: "The Bioloon extension.",
  entryTypes: [sectionEntry],
  apiGroups: [landingAPI],
  settingsTypes: [],
  install(incloud) {
    // Perform any setup needed when the extension is installed
  },
});
