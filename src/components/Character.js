import React, { useState } from "react";
import { Link } from "react-router-dom";

// recieve object from characterList
// object destsructure
const Character = ({ characterData }) => {
  const [charData, setCharData] = useState([]);
  const char = characterData;
  console.log(char);

  function getClickedChar() {}

  return (
    //   single character stylings
    <div className="col-lg-4  shadow  p-1">
      <h2>
        <Link to={`${characterData.url}`}>{characterData.name}</Link>
      </h2>

      {/* ***modal popup */}

      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        // value={characterData.url}
      >
        View More
        <Link
          to={{
            pathname: "/modal",
            state: { modal: true },
          }}
        ></Link>
      </button>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Character Details
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
                value={characterData}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h2>{characterData.name}</h2>
              <strong>height</strong>
              <p>{characterData.height}</p>
              <strong>mass</strong>
              <p>{characterData.mass}</p>
              <strong>hair color</strong>
              <p>{characterData.hair_color}</p>
              <strong>skin color</strong>
              <p>{characterData.skin_color}</p>
              <p>{characterData.url}</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
