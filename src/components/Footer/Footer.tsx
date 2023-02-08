import { Component } from "solid-js";

const buttonClasses = "btn btn-xs btn-ghost";

/**
 * Renders the global footer for the page, containing links to Twitter and Github, as well as a small copyright notice
 */
const Footer: Component = () => (
  <>
    <div class="p-24">
      <p />
    </div>
    <footer class="fixed bottom-0 footer footer-center p-2 bg-base-300">
      <div class="grid grid-flow-col gap-4 underline">
        <a href="https://twitter.com/tommyb_dev" class={buttonClasses}>
          Twitter
        </a>
        <a href="https://github.com/tbreslein" class={buttonClasses}>
          Github
        </a>
      </div>
      <p>Copyright © 2022-2023 - All right reserved by Tommy Breslein</p>
    </footer>
  </>
);

export default Footer;
