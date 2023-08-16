import { Metadata } from "next";

import s from "../Blog.module.scss";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  if (!response.ok) throw new Error("Unable to fetch post...");
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

const Post = async ({ params: { id } }: Props) => {
  const post = await getData(id);
  return (
    <div className={s.post}>
      <h2 className={s.title}>{post.title}</h2>
      <h3 className={s.subtitle}>
        Post№ <span>{post.id}</span>
      </h3>
      <p className={s.text}>{post.body}</p>
    </div>
  );
};

export default Post;
