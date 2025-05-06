//import React from "react";
import "./Card.css";

import Github from "../../assets/github-mark-white.svg";
import Qiita from "../../assets/qiita-white-icon.png";

const Card = ({serviceName} : any) => {
    let serviceLink;
    let serviceImg;
    let serviceAccount;
    if(serviceName === "Github"){
        serviceLink = "https://github.com/Kyuri-dao";
        serviceAccount = "Kyuri/Kyuri-dao"
        serviceImg = Github;
    }else if(serviceName === "Qiita"){
        serviceLink = "https://qiita.com/Kyuri-dao";
        serviceAccount = "Kyuri"
        serviceImg = Qiita;
    }

    return(
        <div className="card-container">
            <div className="card-titlelogo">
                <img src={serviceImg} alt="ロゴ画像" className="card-service-logo" />
            </div>
            <div className="card-context">
                <p className="card-content-exp-big">{serviceName}</p>
                <p className="card-content-exp">{serviceAccount}</p>
            </div>
        </div>
    );
}

export default Card;