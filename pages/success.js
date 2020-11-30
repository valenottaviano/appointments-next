import { Fragment } from "react";
import NavBarComponent from "../components/NavBarComponent";

export default function success() {
  return (
    <Fragment>
      <NavBarComponent backgroundColor="white" />
      <section id="success-container">
        <h2>Turno concretado exitosamente!</h2>
      </section>
      <style jsx>{`
        #success-container {
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #success-container h2 {
          color: #09215d;
        }
      `}</style>
    </Fragment>
  );
}
