import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

interface TeacherItemProps {
  text?: string;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ text }) => {
  return (
    <article className="teacher-item">
      <header>
        <img src="http://lorempixel.com/400/400" alt="Foto" />
        <div>
          <strong>Nome do professor</strong>
          <span>Máteria</span>
        </div>
      </header>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas quaerat,
        cumque voluptas saepe dolores corrupti quidem ipsum, earum porro
        exercitationem iste omnis tempora aliquid ad fugit fuga? Voluptate,
        itaque. Commodi?
      </p>

      <footer>
        <p>
          Preço/hora <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
