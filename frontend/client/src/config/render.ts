import { createRenderer } from "@inspatial/kit/renderer";
import { envSupportsFeature } from "@inspatial/kit/vader";
import { InTrigger } from "@inspatial/kit/trigger";
import { InTheme } from "@inspatial/kit/theme";
import { InRoute } from "@inspatial/kit/route";
import { InPresentation } from "@inspatial/kit/presentation";
import { InMotion } from "@inspatial/kit/motion";
import { InCloud } from "@inspatial/kit/cloud";

/*################################(CREATE INSPATIAL RENDERER)################################*/

const hasDocument = envSupportsFeature("hasDocument");

if (!hasDocument) {
  const { seedRouteOutput } = await import("@inspatial/kit/build");
  await seedRouteOutput(".", "src");
} else {
  await import("./../../.inspatial/route/route-manifest.generated.ts");
  await import("./../../.inspatial/route/route-views.generated.ts");
}

const rootModule = import("./root.tsx");

createRenderer({
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
}).then(async (InSpatial: any) => {
  const { Root } = await rootModule;
  if (hasDocument) {
    InSpatial.render(document.getElementById("app"), Root);
  }

  if (!hasDocument && typeof InSpatial.registerExtensions === "function") {
    const { InServe } = await import("@inspatial/kit/build");
    await InSpatial.registerExtensions([InServe()]);
  }
});
