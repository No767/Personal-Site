import type { NextPage } from "next";
import { NavBar } from "../components/shared/navbar";
import { Footer } from "../components/shared/footer";
import { IndexBody } from "../components/index-components/body";
const Home: NextPage = () => {
  return (
    <div>
      <NavBar />
      <IndexBody />
      <Footer />
    </div>
  );
};

export default Home;
