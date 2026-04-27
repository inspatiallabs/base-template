import { Stack } from "@inspatial/kit/structure";
import { Auth } from "@inspatial/kit/widget/data-flow";

/*################################(WINDOW)################################*/

export function AppWindow() {
  /*************************** (Render) ***************************/
  return (
    <Stack
      style={{
        web: {
          overflow: "hidden",
          height: "100vh",
          width: "100vw",
        },
      }}
    >
      <Auth />
    </Stack>
  );
}

export default AppWindow;
