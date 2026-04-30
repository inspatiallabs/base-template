import { createRoute } from "@inspatial/kit/route";
import { useAuth } from "@inspatial/kit/data-flow";
import { ErrorWindow } from "./error.tsx";

/*################################(Route)################################*/
export const route = createRoute({
  authGating: {
    signInPath: "/",
    afterSignInPath: "/dashboard",
    publicPathPrefixes: ["/"],
    // guestOnlyPathPrefixes: ["/"],
    // authedPathPrefixes: ["/"],
    getAuthStatus: () => useAuth.status.peek(),
    onAuthChange: (cb) => useAuth.status.subscribe(cb),
  },
  defaultView: ErrorWindow,
});
