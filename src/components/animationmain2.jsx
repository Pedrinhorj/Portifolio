import { useEffect, useRef } from "react";
import "../animation.css";

const SubContainer = () => {
  const ref1 = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref1.current.classList.add("visible");
          observer.unobserve(ref1.current);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(ref1.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref1} className="subcontainer">
      <article>
        <h1>Sumário</h1>
        <h2>Pedro Arthur Santos Macedo</h2>
        <p>Arraial do Cabo, RJ</p>
        <p>(22) 99887-6969</p>
        <p>pedroarthrj@gmail.com</p>
        <p>nascimento: 23/10/2000</p>
      </article>

      <article>
        <h1>Educação</h1>
        <h4>TECNÓLOGO EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h4>
        <p>Unopar: Cabo Frio, RJ</p>
      </article>
    </div>
  );
};

export default SubContainer;
