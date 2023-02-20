import { Component, For } from "solid-js";

interface SmallProjectListItemProps {
  title: string;
  descriptions: string[];
  url: string;
}

const smallProjects: SmallProjectListItemProps[] = [
  {
    title: "outcome",
    descriptions: [
      "Minimal C++ library for a type similar to Haskell's Either or Rust's Result",
      "Also includes a type for bundling small error reports",
    ],
    url: "https://github.com/tbreslein/outcome",
  },
  {
    title: "capturedlambda",
    descriptions: [
      "This website! My dive into some frontend web dev",
      "Simple static page using the AstroJS meta",
    ],
    url: "https://github.com/tbreslein/capturedlambda",
  },
  {
    title: "tdos",
    descriptions: [
      "I always wanted to know how kernels work, so I started to build one",
      "Follows the 'Writing an OS in Rust' guide by Philipp Oppermann",
    ],
    url: "https://github.com/tbreslein/tdos",
  },
  {
    title: "repoteer",
    descriptions: [
      "Keeps the git repos on your system up to date",
      "Useful if you have a lot of repos that you work on on multiple machines",
    ],
    url: "https://github.com/tbreslein/repoteer",
  },
  // {
  //   title: "Myosotis",
  //   descriptions: [
  //     "Planned colaborative ToDo-App for Android",
  //     "Keep ToDos between multiple people synced",
  //   ],
  //   url: "https://github.com/tbreslein/myosotis",
  // },
];

const SmallProjectListItem: Component<SmallProjectListItemProps> = (props) => (
  <li class="card card-compact max-w-mdi bg-base-300 shadow-xl">
    <div class="card-body">
      <h2 class="card-title">{props.title}</h2>
      <ul>
        <For each={props.descriptions}>{(text) => <li>{text}</li>}</For>
      </ul>
      <p class="object-fill" />
      <div class="card-actions justify-end">
        <a href={props.url} target="_blank">
          <button class="btn btn-primary">GitHub</button>
        </a>
      </div>
    </div>
  </li>
);

/**
 * Renders a list of small project cards.
 */
const SmallProjectList: Component = () => (
  <div class="hero min-h-screen">
    <div class="hero-content flex-col">
      <div>
        <h1 class="text-center">My smaller projects</h1>
        <ul class="grid grid-cols-1 gap-x-[1.5rem] md:grid-cols-2">
          <For each={smallProjects}>
            {({ title, descriptions, url }) => (
              <SmallProjectListItem
                title={title}
                descriptions={descriptions}
                url={url}
              />
            )}
          </For>
        </ul>
      </div>
    </div>
  </div>
);

export default SmallProjectList;
