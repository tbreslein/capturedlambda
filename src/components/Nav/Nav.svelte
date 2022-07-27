<!--
  @component
  Displays the navigation sidebar, consisting of the `<MainIcon />` and `<NavList />` components.
-->
<script lang="ts">
  import MainIcon from "./MainIcon.svelte";
  import NavList from "./NavList.svelte";
</script>

<!-- mobile -->
<div class="hidden md:block">
  <aside class="w-14 pl-0 md:w-36 fixed left-0 top-0 h-screen bg-neutral p-10">
    <MainIcon />
    <NavList />
  </aside>
</div>

<!-- desktop -->
<div class="block md:hidden">
  <nav class="navbar bg-neutral">
    <div class="flex-1">
      <MainIcon />
    </div>
    <div class="flex-none">
      <NavList />
    </div>
  </nav>
</div>
