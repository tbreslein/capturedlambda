export interface Frontmatter {
  frontmatter: {
    title: string;
    date: string;
    draft?: boolean;
  };
  url: string;
}

export type Post = {
  title: string;
  date: Date;
  url: string;
  draft: boolean;
};

export function getSortedPosts(posts: Frontmatter[]): Post[] {
  return posts
    .map((post) => {
      return {
        title: post.frontmatter.title,
        date: new Date(post.frontmatter.date),
        url: post.url,
        draft: post.frontmatter.draft || false,
      };
    })
    .sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
