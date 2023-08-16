import Link from "next/link";

import s from "./About.module.scss";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={s.about}>
      <h1 className="title">About us</h1>
      <ul className={s.list}>
        <li>
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li>
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </section>
  );
}
