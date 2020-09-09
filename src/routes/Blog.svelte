<script>
import { Router, Link, Route } from "svelte-routing";

import BlogPost from "./BlogPost.svelte";

export let url = "blog";
</script>

Hey from Blog
<br />
<br />
<br />
<br />

<Router url="{url}">
  <nav>
    <Link to="blog-post">BlogPost</Link>
  </nav>
  <div>
    <Route path="blog-post" component="{BlogPost}" />
  </div>
</Router>
