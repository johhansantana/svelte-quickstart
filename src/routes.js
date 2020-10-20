import First from "./pages/First.svelte";
import Second from "./pages/Second.svelte";

const routes = [
  {
    name: "/",
    component: First,
  },
  {
    name: "/second",
    component: Second,
  },
];

export { routes };
