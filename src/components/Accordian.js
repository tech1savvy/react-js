import React, { useState } from "react";
import styles from "./Accordion.module.css";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionContainer}>
      <button className={styles.accordionHeader} onClick={toggleAccordion}>
        {">"} Accordion Header
      </button>
      {isOpen && (
        <div className={styles.accordionContent}>
          <hr />
          <p>This is the content inside the accordion.</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
