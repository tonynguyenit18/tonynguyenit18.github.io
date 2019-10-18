import React, { useState } from "react";
import "../css/portfolio.css";
import bgKeyninja from "../images/keyninja-bg.png";
import bgParkieAu from "../images/parkieau-bg.png";
import bgDaesy from "../images/daesy-bg.png";

const projects = [
    {
        bg: bgKeyninja,
        shortDes: "Melbourne based company which provides propeties management service and key delivery.",
        btnTitle: "View Website",
        url: "https://keyninja.io",
        title: "Keyninja"
    },
    {
        bg: bgParkieAu,
        shortDes: "ParkieAU is an application to help people living in Melbourne Australia checking available spot and its restriction in CBD.",
        btnTitle: "Open App Store",
        url: "https://apps.apple.com/us/app/parkieau/id1480145624?ls=1",
        title: "ParkieAU"
    },
    {
        bg: bgDaesy,
        shortDes: "DAESY is a drug & alcohol awareness education program with contact details of relevant support services.",
        btnTitle: "Open App Store",
        url: "https://apps.apple.com/us/app/daesy/id1483064076?ls=1",
        title: "DAESY"
    }
]
const Portfolio = () => {
    const [desClassName, setDesClassName] = useState({});

    const toggleDes = title => () => {
        title = title.replace(" ", "")
        if (desClassName.status && desClassName.status == "show") {
            setDesClassName({ title, status: "hide" })
        } else {
            setDesClassName({ title, status: "show" })
        }
    }
    return (
        <div className="d-flex flex-column align-items-center pt-5" style={{ width: "100%", minHeight: "75vh", overflow: "hidden" }} id="portfolio">
            <p className="header-text">PORTFOLIO</p>
            <div className="d-flex justify-content-center portfolio-wrap ">
                {projects.map(p => (
                    <div key={p.title} className="project-wrap">
                        <div className="project-image-wrap" onClick={toggleDes(p.title)}>
                            <img src={p.bg} />
                            <div className={`project-details d-flex flex-column align-items-center ${desClassName.title == p.title.replace(" ", "") ? desClassName.status : ""}`}>
                                <p className="text-on-image mt-3 description">{p.shortDes}</p>
                                <a href={p.url} className="btn-primary-outline_white mb-3" target="_blank">{p.btnTitle}<strong style={{ marginLeft: "10px", fontWeight: "bold" }}>></strong></a>
                            </div>
                        </div>
                        <p className="title-text mt-3" style={{ textAlign: "center" }}>{p.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio;