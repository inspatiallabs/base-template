import { defineExtension } from "@inspatial/cloud";
import { landingAPI } from "./src/landing/api.ts";
import { sectionEntry } from "./src/landing/entry.ts";


/*################################## (Extension) ##################################*/
export const appExtension = defineExtension("my_inspatial_app", {
  label: "My Inspatial App",
  description: "The My Inspatial App extension.",
  entryTypes: [sectionEntry],
  apiGroups: [landingAPI],
  settingsTypes: [],
  install(_incloud) {
    // Perform any setup needed when the extension is installed
  },
});
