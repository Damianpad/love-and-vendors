import { GSStepStyled } from "./GSStep.styled";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function GSStep() {
  const location = useLocation();
  const [select, setSelect] = useState(false);

  const getStarted = "/getting-started";
  const coupleInfo = "/couple-info";
  const coupleFinish = "/couple-finish";

  const vendorInfo = "/vendor-info"

  const isOnGetStarted = location.pathname === getStarted;
  const isOnClientInfo = location.pathname === coupleInfo;
  const isOnClientFinish = location.pathname === coupleFinish;

  const isOnVendorInfo = location.pathname === vendorInfo;

  return (
    <GSStepStyled>
      <section className="stepContainer">
        <section className="step1">
          <section className={isOnGetStarted || isOnVendorInfo ? "numberContainer"
          : "numberContainerNotSelected"}>
            <span className="stepNumber">1</span>
          </section>

          <span className="stepName">Get Started</span>
        </section>

        <section className="step2">
          <section className={isOnClientInfo ? "numberContainer"
          : "numberContainerNotSelected"}>
            <span className="stepNumber">2</span>
          </section>

          <span className="stepName">Basic Info</span>
        </section>

        <section className="step3">
          <section className={isOnClientFinish ? "numberContainer"
          : "numberContainerNotSelected"}>
            <span className="stepNumber">3</span>
          </section>

          <span className="stepName">Finish</span>
        </section>
      </section>
    </GSStepStyled>
  );
}
