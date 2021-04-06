import Image from "next/image";
import React, { useState } from "react";
import FilmModal from "../FilmModal";

const FilmCard = (props) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div>
        <div>
          <FilmModal
            {...props}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <a key={props._id}>
            <Image
              src={props.staticImageUrl}
              alt={props.name}
              width={200}
              height={200}
            />
            <div>
              <h2>{props.brand}</h2>

              <h3>{props.name}</h3>
            </div>
            <br></br>
            <button
              variant="outline-secondary"
              onClick={() => setModalShow(true)}
            >
              View Film
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default FilmCard;
