<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  import Index from "./views/Index.svelte";

  import "node_modules/@fortawesome/fontawesome-free/css/all.min.css";

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
  <Route path="/" component="{Index}" />
</Router>
