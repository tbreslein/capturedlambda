<script lang="ts">
  export let date: Date;
  export let title: string;
  export let href: string;
</script>

<li><a {href}>{date}:<br />{title}</a></li>
