import { defineEntry } from "@inspatial/cloud";

/*##############################(ENTRY)#################################*/
// Entries are your data schema structures.
// They define the shape of the data in your app and can be used to perform CRUD operations on that data.
// Add and update your entries here...
export const sectionEntry = defineEntry("section", {
  systemGlobal: true,
  label: "Section",
  description: "A section of the app, looked up by its unique name.",
  fields: [
    {
      key: "name",
      label: "Name",
      type: "DataField",
      description: "Unique slug used to fetch this section (e.g. 'hero').",
      required: true,
      unique: true,
    },
    {
      key: "logo",
      label: "Logo",
      type: "ImageField",
      allowedImageTypes: "all",
      publicFile: true,
    },
    {
      key: "backgroundImage",
      label: "Background Image",
      type: "ImageField",
      allowedImageTypes: "all",
      publicFile: true,
    },
    {
      key: "title",
      label: "Title",
      type: "DataField",
      description: "The title of the section.",
    },
    {
      key: "description",
      label: "Description",
      type: "DataField",
      description: "The description of the section.",
    },
    {
      key: "link",
      label: "Link",
      type: "URLField",
      description: "The link for the section.",
    },
    {
      key: "linkLabel",
      label: "Link Label",
      type: "DataField",
      description: "The label for the section link.",
    }
  ],
});
