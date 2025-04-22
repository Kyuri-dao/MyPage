//import React from "react";
import "./Card.css";

import Github from "./assets/github-mark.svg";
import Qiita from "./assets/qiita-icon.png";

const Card = ({serviceName, serviceExp} : any) => {
    let serviceLink;
    let serviceImg;
    if(serviceName === "Github"){
        serviceLink = "https://github.com/Kyuri-dao";
        serviceImg = Github;
    }else if(serviceName === "Qiita"){
        serviceLink = "https://qiita.com/Kyuri-dao";
        serviceImg = Qiita;
    }

    return(
        <div className="card-container">
            <div className="card-titlelogo">
                <img src={serviceImg} alt="ロゴ画像" className="card-service-logo" />
            </div>
            <div className="card-context">
                {/* <p className="card-context-title">{serviceName}</p> */}
                <p className="card-content-exp">{serviceExp}</p>
                <a href={serviceLink}>
                    <p className="card-content-exp">外部サイトに遷移します...</p>
                </a>
            </div>
        </div>
    );
}

export default Card;