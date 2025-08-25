import React from "react";

function ModalWin({title, content}) {

    return (
        <div className="ModalWin">
            <div className="modal-content">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default ModalWin;