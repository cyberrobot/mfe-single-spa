import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import "./layout.css";

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

start();
