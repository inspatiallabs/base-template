import { createLog, type LogProps } from "@inspatial/kit/vader";

/*################################(CREATE LOG)################################*/
export const log: LogProps = await createLog({
  name: "InSpatial",
  subject: "App",
}).catch(() => console as unknown as LogProps);
