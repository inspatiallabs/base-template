import { createRenderer } from "@inspatial/kit/renderer";
import { InTrigger } from "@inspatial/kit/trigger";
import { InTheme } from "@inspatial/kit/theme";
import { InRoute } from "@inspatial/kit/route";
import { InPresentation } from "@inspatial/kit/presentation";
import { InMotion } from "@inspatial/kit/motion";
import { InCloud } from "@inspatial/kit/cloud";

/*################################(CREATE INSPATIAL RENDERER)################################*/

createRenderer({
  root: () => import("./root.tsx").then((m) => m.Root),
  mount: "#app",
  mode: "auto",
  debug: "minimal",
  globalGuard: true,
  extensions: [
    InTrigger(),
    InTheme(),
    InRoute(),
    InPresentation(),
    InMotion(),
    InCloud({ reconnect: "reload" }),
  ],
});
