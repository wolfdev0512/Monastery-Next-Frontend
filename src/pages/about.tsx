import type { NextPage } from "next";
import SEO from "component/Seo";
// views
import { Top } from "views/About";
const About: NextPage = () => {
  return (
    <>
      <SEO title="Monastery" description="this is home page" />
      <Top />
    </>
  );
};

export default About;
