import React, { useState } from "react";

const Modal = (characterDetails) => {
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
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div>
              <h2>{characterDetails.charDetails.name}</h2>
              <strong>height</strong>
              <p>{characterDetails.charDetails.height}</p>
              <strong>mass</strong>
              <p>{characterDetails.charDetails.mass}</p>
              <strong>hair color</strong>
              <p>{characterDetails.charDetails.hair_color}</p>
              <strong>skin color</strong>
              <p>{characterDetails.charDetails.skin_color}</p>
              <strong>url</strong>
              <p>{characterDetails.charDetails.url}</p>
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
