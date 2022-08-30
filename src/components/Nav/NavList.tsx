import { Component, For } from "solid-js";

/**
 * Properties of a navigation item
 * @field href - link to where the item is supposed to point to
 * @field name - name that is being rendered for this item
 * @field d - svg path for this item
 */
type NavItem = {
  href: string;
  name: string;
  d: string;
};

/**
 * Array of the Links in the navbar
 */
const navItems: NavItem[] = [
  {
    href: "/",
    name: "Home",
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    href: "/about",
    name: "About",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    href: "/contact",
    name: "Contact",
    d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
];

/**
 * Renders a List of navigation items
 */
const NavList: Component = () => (
  <ul class="menu p-0 menu-horizontal md:menu-vertical">
    <For each={navItems}>
      {({ href, name, d }) => (
        <li>
          <a href={href} class="btn-ghost text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 block"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d={d} />
            </svg>
            <span class="hidden sm:block">{name}</span>
          </a>
        </li>
      )}
    </For>
  </ul>
);

export default NavList;
