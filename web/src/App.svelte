<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import Navbar from "./lib/Navbar.svelte";
  import Post from "./pages/Post.svelte";
</script>

<main class="m-10">
  <Navbar />
  <div class="mt-8">
    <Router primary={false}>
      <Route path="/"><Post /></Route>
      <Route path="/post/:slug" let:params><Post /></Route>
    </Router>
  </div>
</main>
