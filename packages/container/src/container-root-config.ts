import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@mfe-single-spa/navigation",
  app: () => System.import("@mfe-single-spa/navigation"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
