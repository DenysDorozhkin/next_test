import s from "./Blog.module.scss";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={s.blog}>
      <h1 className="title">Blog</h1>
      {children}
    </section>
  );
}
