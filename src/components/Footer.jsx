import React from "react";
import happyFace from '../images/happy-face.png';
import smile from '../images/smile.png';
import "../css/footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="d-flex px-5" >
                <div className="happy-face_footer">
                    <img src={happyFace} style={{ width: "100%", height: "100%" }} alt="Happy face" />
                    <img className="smile_footer" src={smile} alt="Smile" />
                </div>
            </div>
        </div>
    )
}

export default Footer