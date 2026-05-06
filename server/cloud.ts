import { createInCloud } from "@inspatial/cloud";
import { bioloonExtension } from "./extension.ts";

/*################################## (Cloud) ##################################*/
// This file initializes in cloud instance for your project.
// It imports the necessary extensions and creates the cloud instance using `createInCloud()`. 
// The cloud instance is configured to use your app extension, which defines the features and functionality of your project.
createInCloud("bioloon", [bioloonExtension]);
