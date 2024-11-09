import "./acordion.css";
import { useState } from "react";

const AccordionItem = ({ title, children, isOpen, onToggle }) => (
  <div>
    <div
      className="accordion-title "
      onClick={onToggle}
      style={{ cursor: "pointer", padding: "15px", background: "#000213" }}
    >
      {title}
    </div>
    {isOpen && <div className="accordion-content ">{children}</div>}
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <AccordionItem
        title="Habilidades"
        isOpen={openIndex === 0}
        onToggle={() => toggleItem(0)}
      >
        <p>- Desenvolvimento de aplicações web em React e Node.js</p>
        <p>- Vastos conhecimentos em Photoshop e Corel Drawn</p>
        <p>- Conhecimentos básicos em Arquietura de computadores</p>
        <p>- Sempre aprendendo algo novo</p>
      </AccordionItem>
      <AccordionItem
        title="Comunicação"
        isOpen={openIndex === 1}
        onToggle={() => toggleItem(1)}
      >
        <p>- Tenho boa comunicação</p>
        <p>- Trabalho bem em equipe</p>
      </AccordionItem>
      {/* <AccordionItem
        title="Ap"
        isOpen={openIndex === 2}
        onToggle={() => toggleItem(2)}
        >
      </AccordionItem> */}
    </div>
  );
};

export default Accordion;
