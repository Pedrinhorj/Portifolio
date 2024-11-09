import { useRef, useEffect } from "react";
import WithLabel from "./Progress/HTMl/WithLabel";
import WithLabelCSS from "./Progress/CSS/CSS";
import WithLabelJS from "./Progress/JAVASCRIPT/javascript";
import WithLabelReact from "./Progress/REACT.JS/react";
import WithLabelBoot from "./Progress/Bootstrap/WithLabelBoot";
import Accordion from "./acordion/acordion";
import "../animation.css";

export default function Animationmain3() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("visible");
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2>Linguagens e competencias</h2>

      <div ref={ref} className="subcontainer1">
        <article className="competencias">
          <Accordion />
        </article>
        <article className="languages">
          <div className="HTML">
            <label htmlFor="">HTML5</label>
            <WithLabel />
          </div>

          <div className="CSS">
            <label htmlFor="">CSS</label>
            <WithLabelCSS />
          </div>

          <div className="javascript">
            <label htmlFor="">JavaScript</label>
            <WithLabelJS />
          </div>

          <div className="react">
            <label htmlFor="">React.js</label>
            <WithLabelReact />
          </div>

          <div className="bootstrap">
            <label htmlFor="">bootstrap</label>
            <WithLabelBoot />
          </div>
        </article>
      </div>
    </div>
  );
}
