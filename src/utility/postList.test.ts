import { expect, test } from "@jest/globals";

import { getSortedPosts } from "./postList";

test("when given an empty list, getSortedPosts returns an empty list", () => {
  expect(getSortedPosts([])).toStrictEqual([]);
});

const expected = [
  { title: "foo", date: new Date("5-3-2022"), url: "", draft: true },
  { title: "bar", date: new Date("5-2-2022"), url: "", draft: true },
  { title: "baz", date: new Date("4-3-2022"), url: "", draft: true },
  { title: "foobar", date: new Date("5-3-2021"), url: "", draft: false },
  { title: "foobaz", date: new Date("5-3-1990"), url: "", draft: false },
];

test("when given a sorted Frontmatter[], getSortedPosts returns Post[] in the same order", () => {
  const input = [
    { frontmatter: { title: "foo", date: "5-3-2022", draft: true }, url: "" },
    { frontmatter: { title: "bar", date: "5-2-2022", draft: true }, url: "" },
    { frontmatter: { title: "baz", date: "4-3-2022", draft: true }, url: "" },
    {
      frontmatter: { title: "foobar", date: "5-3-2021", draft: false },
      url: "",
    },
    {
      frontmatter: { title: "foobaz", date: "5-3-1990", draft: false },
      url: "",
    },
  ];

  expect(getSortedPosts(input)).toStrictEqual(expected);
});

test("when given a reversed Frontmatter[], getSortedPosts returns Post[] in the correct order", () => {
  const input = [
    { frontmatter: { title: "foo", date: "5-3-2022", draft: true }, url: "" },
    { frontmatter: { title: "bar", date: "5-2-2022", draft: true }, url: "" },
    { frontmatter: { title: "baz", date: "4-3-2022", draft: true }, url: "" },
    {
      frontmatter: { title: "foobar", date: "5-3-2021", draft: false },
      url: "",
    },
    {
      frontmatter: { title: "foobaz", date: "5-3-1990", draft: false },
      url: "",
    },
  ].reverse();

  expect(getSortedPosts(input)).toStrictEqual(expected);
});

test("when given an unsorted Frontmatter[], getSortedPosts returns Post[] in the correct order", () => {
  const input = [
    { frontmatter: { title: "bar", date: "5-2-2022", draft: true }, url: "" },
    { frontmatter: { title: "foo", date: "5-3-2022", draft: true }, url: "" },
    {
      frontmatter: { title: "foobaz", date: "5-3-1990", draft: false },
      url: "",
    },
    { frontmatter: { title: "baz", date: "4-3-2022", draft: true }, url: "" },
    {
      frontmatter: { title: "foobar", date: "5-3-2021", draft: false },
      url: "",
    },
  ];

  expect(getSortedPosts(input)).toStrictEqual(expected);
});
