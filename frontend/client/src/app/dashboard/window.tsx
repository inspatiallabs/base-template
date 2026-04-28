import { View } from "@inspatial/kit/structure";
import { ErrorBoundary } from "@inspatial/kit/control-flow";

/*################################(WINDOW)################################*/
export function DashboardWindow() {
  /*************************** (Render) ***************************/
  return (
    <>
      <ErrorBoundary>
        <View>Dashboard Window</View>
      </ErrorBoundary>
    </>
  );
}

export default DashboardWindow;
