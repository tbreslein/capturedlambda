import { Component, JSXElement } from "solid-js";

/**
 * Props for PortfolioHero component
 *
 * @field children - JSX components slotted into the hero; should consist of one div with text and an Image
 * @field reverse - whether to show the hero in reverse
 */
interface PortfolioHeroProps {
  children: JSXElement;
  reverse: boolean;
}

/**
 * Renders a hero element, if the children consist of a div with text and an Image element.
 * You can pass the boolean prop `reverse` to switch the order of the text and the image.
 *
 * @param props - must satisfy PortfolioHeroProps interface
 */
const PortfolioHero: Component<PortfolioHeroProps> = (props) => (
  <div class="hero min-h-screen">
    <div
      class={`hero-content flex-col ${props.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
        }`}
    >
      {props.children}
    </div>
  </div>
);

export default PortfolioHero;
