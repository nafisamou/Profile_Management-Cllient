import React from "react";

const ConfirmationModal = ({
  title,
  message,
  successButtonName,
  closeModal,
  successAction,
  modalData,
}) => {
  return (
    <div>
      <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-xl">{title}</h3>
          <p className="py-4 text-emerald-500 font-sans font-semibold text-2xl">
            {message}
          </p>
          <div className="modal-action">
            <label
              onClick={() => successAction(modalData)}
              htmlFor="confirmation-modal"
              className="btn btn-success btn-outline text-white"
            >
              {successButtonName}
            </label>
            <label onClick={closeModal} className="btn btn-outline ">
              Dismiss
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
