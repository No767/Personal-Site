import type { NextPage } from "next";
import { NavBar } from "../../components/shared/navbar";
import { Footer } from "../../components/shared/footer";
import { PersonalBody } from "../../components/personal-components/body";
const Personal: NextPage = () => {
  return (
    <div>
      <NavBar />
      <PersonalBody />
      <Footer />
    </div>
  );
};

export default Personal;
