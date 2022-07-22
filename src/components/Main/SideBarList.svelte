<script lang="ts">
  import { PostsByYear } from "../../utility/postList";

  export let postsByYear: PostsByYear[];
</script>

<ul class="menu bg-base-100 w-56 p-2 rounded-box">
  {#each postsByYear as { year, posts } (year)}
    <li class="menu-title"><span>{year}</span></li>
    {#each posts as post (post.title)}
      <li class="text-xs">{post.title}</li>
    {/each}
  {/each}
</ul>
