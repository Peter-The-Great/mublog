<script lang="ts">
  import { Route, Router } from "svelte-navigator";
  import Navbar from "./lib/Navbar.svelte";
  import Post from "./pages/Post.svelte";
  import Timeline from "./pages/Timeline.svelte";
</script>

<main class="m-10">
  <Router primary={false}>
    <Navbar />
    <div class="mt-8">
      <Route path="/"><Post /></Route>
      <Route path="/t/:slug" let:params><Post /></Route>
      <Route path="/all"><Timeline /></Route>
    </div>
  </Router>
</main>
