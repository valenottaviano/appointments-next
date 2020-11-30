import { Fragment } from "react";
import HeroSectionComponent from "../components/HeroSectionComponent";
import InfoSectionComponent from "../components/InfoSectionComponent";
import NavBarComponent from "../components/NavBarComponent";

export default function Home() {
  return (
    <Fragment>
      <NavBarComponent backgroundColor="#EDF8FF" />
      <HeroSectionComponent />
      <InfoSectionComponent />
    </Fragment>
  );
}
