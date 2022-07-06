import React from "react";
import { useState } from "react";
import "../styles/Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <button className="btn_modal" onClick={() => setModal(true)}>
        Open modal
      </button>

      {modal && (
        <div className="overlay">
          <div className="modal">
            <div className="modal_content">
              <button className="close_modal" onClick={() => setModal(false)}>
                X
              </button>
              <h2> Hello voici ma modale ! </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                sunt quia error labore sint inventore cum incidunt, magnam illum
                voluptas nihil nobis voluptate aspernatur minima magni tempora!
                Tempora, beatae expedita?
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
