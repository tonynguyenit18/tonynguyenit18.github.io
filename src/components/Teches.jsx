import React from "react";
import reactIcon from "../images/react-icon.png";
import reactNativeIcon from "../images/react-native-icon.png";
import reduxIcon from "../images/redux-icon.png";
import nodeIcon from "../images/nodejs-icon.png";
import htmlIcon from "../images/html5-icon.png";
import cssIcon from "../images/css-icon.png";
import "../css/teaches.css"


const techlist = [
    {
        img: reactIcon,
        title: "React"
    },
    {
        img: reactNativeIcon,
        title: "React Native"
    },
    {
        img: reduxIcon,
        title: "Redux"
    },
    {
        img: nodeIcon,
        title: "Node JS"
    },
    {
        img: htmlIcon,
        title: "HTML"
    },
    {
        img: cssIcon,
        title: "CSS"
    }
]

const Teches = () => {
    return (
        <div className="teches" id="teches">
            <p style={{ fontSize: "40px", color: "#fff", marginTop: "20px" }}>I Am Using</p>
            <div className="row teches-wrap">
                {techlist.map(tech => (
                    <div key={tech.title} className="col-6 col-md-4 tech-wrap">
                        <img className="tech-img" src={tech.img} alt={tech.title} />
                        <p>{tech.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Teches;