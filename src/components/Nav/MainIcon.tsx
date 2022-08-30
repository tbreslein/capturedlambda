import { Component } from "solid-js";

/**
 * Renders the main icon of the page, which is a small lambda in brackets
 */
const MainIcon: Component = () => (
  <div class="flex-1">
    <a href="/" class="btn btn-ghost normal-case text-xl text-accent">
      [λ]
    </a>
  </div>
);

export default MainIcon;
