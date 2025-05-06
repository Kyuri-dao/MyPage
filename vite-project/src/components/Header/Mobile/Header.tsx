import "../../General.css"

import githubLogo from "../../../assets/github-mark-white.svg"
import qiitaLogo from "../../../assets/qiita-white-icon.png"

export default function Header(){
    return(
        <>
            <div className="m-header">
                <div className="m-title-ct">
                    <h1 className="m-title">Kyuri</h1>
                    <h4 className="m-title-desc">情報系学徒</h4>
                </div>

                <div className="m-headerlink">
                    <a href="https://github.com/Kyuri-dao">
                        <img src={githubLogo} alt="GitHubのロゴ" className="m-logo"/>
                    </a>
                    <a href="https://qiita.com/Kyuri-dao">
                        <img src={qiitaLogo} alt="Qiitaのロゴ" className="m-logo" />
                    </a>
                </div>
            </div>
        </>
    )
}