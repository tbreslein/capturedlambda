import { Component } from "solid-js";
import MainIcon from "./MainIcon";
import NavList from "./NavList";

/**
 * Renders a small card as list item with the title and date for a post that links to that post.
 */
const Nav: Component = () => (
  <>
    <div class="hidden md:block">
      <aside class="w-14 pl-0 md:w-36 fixed left-0 top-0 h-screen bg-neutral p-10">
        <MainIcon />
        <NavList />
      </aside>
    </div>

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
  </>
);

export default Nav;
