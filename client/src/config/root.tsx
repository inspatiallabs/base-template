import { Dynamic } from "@inspatial/kit/control-flow";
import { route } from "./route.ts";
import { InCloudStatus, NTA } from "@inspatial/kit/block";

/*################################(ROOT)################################*/
export function Root() {
  return (
    <>
      <Dynamic chain={route.chain} />
      <InCloudStatus display={true} />
      <NTA display={false} />
    </>
  );
}
