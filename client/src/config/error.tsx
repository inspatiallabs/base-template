import { Error } from "@inspatial/kit/control-flow";
import { route } from "./route.ts";

/*################################(Error Window)################################*/
export function ErrorWindow() {
  if (!route) return;

  return (
    <Error
      error={route.error}
      on:home={() => route.to("/")}
      on:back={() => route.back()}
      on:reload={() => route.reload()}
    />
  );
}

export default ErrorWindow;
