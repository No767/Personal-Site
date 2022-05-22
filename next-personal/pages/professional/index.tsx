import type { NextPage } from "next";
import { NavBar } from "../../components/shared/navbar";
import { Footer } from "../../components/shared/footer";
import { ProfessionalBody } from "../../components/professional-components/body";
const Professional: NextPage = () => {
  return (
    <div>
      <NavBar />
      <ProfessionalBody />
      <Footer />
    </div>
  );
};

export default Professional;
