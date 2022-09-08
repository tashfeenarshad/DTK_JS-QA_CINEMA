import React from 'react'

const Popup = (props) => {

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                {console.log("Huh")}
            <iframe width="560" height="315" src={props.trailerVideo} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                    Close
                </button>
            </div>
        </div>
    ) : "";
}

export default Popup;