import React from "react";

const Modal = ({ charDetails }) => {
  console.log(charDetails);
  return (
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
              // value={character}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <h2>{charDetails.name}</h2>
              <strong>height</strong>
              <p>{charDetails.height}</p>
              <strong>mass</strong>
              <p>{charDetails.mass}</p>
              <strong>hair color</strong>
              <p>{charDetails.hair_color}</p>
              <strong>skin color</strong>
              <p>{charDetails.skin_color}</p>
              <p>{charDetails.url}</p>
            </div>
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
  );
};

export default Modal;
