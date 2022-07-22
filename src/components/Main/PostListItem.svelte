<script lang="ts">
  import { transformDate } from "../../utility/transformDate";

  export let date: Date;
  export let title: string;
  export let href: string;
</script>

<li class="card card-compact max-w-md bg-neutral">
  <a {href} class="link-hover"
    ><span class="text-sm text-primary">{transformDate(date)}:<br /></span><span
      class="card-title text-secondary-focus">{title}</span
    ></a
  >
</li>
