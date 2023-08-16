import { Metadata } from "next";
import Link from "next/link";

import s from "./Blog.module.scss";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });
  if (!response.ok) throw new Error("Unable to fetch posts...");
  return response.json();
}

export const metadata: Metadata = {
  title: "Next App: Blog",
};

export default async function Blog() {
  const posts = await getData();

  return (
    <ul className={s.list}>
      {posts.map((post: any) => (
        <li key={post.id} className={s.item}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
