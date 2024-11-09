import { useEffect, useRef } from "react";
import "../animation.css";

const Subcontainer2 = () => {
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
    <div ref={ref} className="subcontainer2">
      <h1>Quem sou eu?</h1>

      <article>
        <h3>Pedro Arthur</h3>
        <h4>Desenvolvedor Front-End</h4>

        <p>
          Recém-formado em Análise e Desenvolvimento de Sistemas, com sólidos
          conhecimentos em HTML, CSS e JavaScript, além de experiência prática
          em React e Node.js. Buscando uma oportunidade para aplicar e expandir
          meus conhecimentos em ambientes de desenvolvimento web. Tenho uma
          paixão por criar interfaces de usuário intuitivas e funcionais, bem
          como por desenvolver aplicações robustas e escaláveis. Hábil em
          resolver problemas e em aprender rapidamente novas tecnologias, estou
          pronto para contribuir em projetos desafiadores e crescer junto à
          equipe.
        </p>
      </article>
    </div>
  );
};

export default Subcontainer2;
