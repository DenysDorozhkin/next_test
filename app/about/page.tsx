import { Metadata } from 'next';

import s from "./About.module.scss";

export const metadata: Metadata = {
  title: "Next App: About",
};

const About = () => {
  return <h2 className={s.subitem}>Select subitem</h2>;
};

export default About;
