import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const routes = constructRoutes(
  document.querySelector("#mfe-single-spa-layout")
);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
constructLayoutEngine({ routes, applications });
applications.forEach(registerApplication);
// registerApplication({
//   name: "@mfe-single-spa/navigation",
//   app: () => System.import("@mfe-single-spa/navigation"),
//   activeWhen: () => true,
//   customProps: (name, location) => ({
//     activeRoute: location.pathname,
//   }),
// });

start();
