import { Component } from "solid-js";
import { transformDate } from "../../utility/transformDate";

/**
 * Props for PostListItem component
 *
 * @field date - date when the post was written
 * @field title - title of the post
 * @field href - link to the post
 */
interface PostListItemProps {
  date: Date;
  title: string;
  href: string;
}

/**
 * Renders a small card as list item with the title and date for a post that links to that post.
 *
 * @param props - must satisfy PostListItemProps interface
 */
const PostListItem: Component<PostListItemProps> = (props) => (
  <li class="card card-compact max-w-md bg-neutral">
    <a href={props.href} class="link-hover">
      <span class="text-sm text-primary">
        {transformDate(props.date)}:<br />
      </span>
      <span class="card-title text-secondary-focus">{props.title}</span>
    </a>
  </li>
);

export default PostListItem;
