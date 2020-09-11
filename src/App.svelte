<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";

  // Admin Layout
  import Admin from "./layouts/Admin.svelte";
  // Auth Layout
  import Auth from "./layouts/Auth.svelte";

  // No Layout Pages
  import Index from "./views/Index.svelte";
  import Landing from "./views/Landing.svelte";
  import Profile from "./views/Profile.svelte";

  export let url = "";
</script>

<Router url="{url}" basepath="{process.env.PRODUCTION ? 'tailwind-webapp-svelte/':''}">
  <!-- admin layout -->
  <Route path="admin/*" component="{Admin}" />
  <!-- auth layout -->
  <Route path="auth/*" component="{Auth}" />
  <!-- no layout pages -->
  <Route path="landing" component="{Landing}" />
  <Route path="profile" component="{Profile}" />
  <Route path="/" component="{Index}" />
</Router>
