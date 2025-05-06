import "../../General.css"

import githubLogo from "../../../assets/github-mark-white.svg"
import qiitaLogo from "../../../assets/qiita-white-icon.png"

export default function DesktopHeader(){
    return(
        <>
            <div className="d-header">
                <div className="d-title-ct">
                    <h1 className="m-title">Kyuri</h1>
                    <h4 className="m-title-desc">情報系学徒</h4>
                </div>

                <div className="d-headerlink">
                    <div>
                        <a href="https://github.com/Kyuri-dao">
                            <img src={githubLogo} alt="Githubのロゴ" className="d-logo"/>
                        </a>
                    </div>
                    <div>
                        <a href="https://qiita.com/Kyuri-dao">
                            <img src={qiitaLogo} alt="Qiitaのロゴ" className="d-logo"/>
                        </a>               
                    </div>
                </div>
            </div>
        </>
    )
}