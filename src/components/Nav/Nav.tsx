import { Component } from "solid-js";
import MainIcon from "./MainIcon";
import NavList from "./NavList";

/**
 * Renders the Navbar.
 *
 * This component is switches between a top and a sidebar depending on the screen size.
 */
const Nav: Component = () => (
  <>
    <div class="hidden md:block">
      <aside class="w-14 pl-0 md:w-36 fixed left-0 top-0 h-screen bg-base-200 p-10">
        <MainIcon />
        <NavList />
      </aside>
    </div>

    <div class="block md:hidden">
      <nav class="navbar bg-base-300">
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
