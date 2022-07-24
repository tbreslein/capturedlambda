<script lang="ts">
  import { PostsByYear } from "../../utility/postList";

  export let postsByYear: PostsByYear[];
</script>

<ul class="menu bg-base-100 p-1">
  {#each postsByYear as { year, posts } (year)}
    <li class="menu-title"><span>{year}</span></li>
    {#each posts as post (post.title)}
      <li class="text-sm">
        <a class="link-hover" href={post.url}>{post.title}</a>
      </li>
    {/each}
  {/each}
</ul>
