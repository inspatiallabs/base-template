import { defineExtension } from "@inspatial/cloud";
import { landingAPI } from "./src/landing/api.ts";
import { sectionEntry } from "./src/landing/entry.ts";


/*################################## (Extension) ##################################*/
export const bioloonExtension = defineExtension("bioloon", {
  label: "Bioloon",
  description: "The Bioloon extension.",
  entryTypes: [sectionEntry],
  apiGroups: [landingAPI],
  settingsTypes: [],
  install(_incloud) {
    // Perform any setup needed when the extension is installed
  },
});
