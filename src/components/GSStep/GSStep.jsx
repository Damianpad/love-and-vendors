import { GSStepStyled } from "./GSStep.styled";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function GSStep() {

    const location = useLocation();
    const [select, setSelect] = useState(false);

    const getStarted = "/getting-started"

    const isOnGetStarted = location.pathname === getStarted

  return (
    <GSStepStyled>
      <h1>Getting Started</h1>
      <section className="stepContainer">
        <section className="step1">
          <section className="numberContainer">
            <span className="stepNumber">1</span>
          </section>

          <span className="stepName">Get Started</span>
        </section>

        <section className="step2">
          <section className="numberContainerNotSelected">
            <span className="stepNumber">2</span>
          </section>

          <span className="stepName">Basic Info</span>
        </section>

        <section className="step3">
          <section className="numberContainerNotSelected">
            <span className="stepNumber">3</span>
          </section>

          <span className="stepName">Finish</span>
        </section>
      </section>
    </GSStepStyled>
  );
}
