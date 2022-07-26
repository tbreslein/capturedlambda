<!--
 @component
 Displays a card displaying a date and title of a blog post, and linking to its href.

 Props:
 date: Date
 title: string
 href: string
-->

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
