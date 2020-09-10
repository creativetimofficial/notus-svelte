<!-- App.svelte -->
<script>
  import { Router, Route } from "svelte-routing";

  // Admin Layout
  // import Admin from "./layouts/Admin.svelte";
  // Auth Layout
  // import Auth from "./layouts/Auth.svelte";

  // No Layout Pages
  import Index from "./views/Index.svelte";
  import Landing from "./views/Landing.svelte";
  import Profile from "./views/Profile.svelte";

  // import About from "./routes/About.svelte";
  // import Blog from "./routes/Blog.svelte";

  export let url = "";


</script>

<Router url="{url}">
  <!-- <nav>
    <Link to="/">Home</Link>
    <Link to="about">About</Link>
    <Link to="blog">Blog</Link>
  </nav> -->
    <!-- <Route path="blog/*" component="{Blog}" />
    <Route path="about" component="{About}" /> -->
  <!-- admin layout -->
  <!-- <Route path="admin/*" component="{Admin}" /> -->
  <!-- auth layout -->
  <!-- <Route path="auth/*" component="{Auth}" /> -->
  <!-- no layout pages -->
  <Route path="landing" component="{Landing}" />
  <Route path="profile" component="{Profile}" />
  <Route path="/" component="{Index}" />
</Router>
