import Link from "next/link";

import s from "./TheHeader.module.scss";

const TheHeader = () => {
  return (
    <header className={s.header}>
      <Link className={s.item} href="/">
        Home
      </Link>
      <Link className={s.item} href="/blog">
        Blog
      </Link>
      <Link className={s.item} href="/about">
        About
      </Link>
    </header>
  );
};

export default TheHeader;
