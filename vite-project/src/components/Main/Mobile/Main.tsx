import "../../General.css"
import myProjectSrc from "../../../assets/myproject.png"

import Card from "../../Card/Card"

export default function Main(){
    return(
        <>
            <div className="main">
                <div className="m-main">
                    <h2>Introduce</h2>
                    <div className="m-main-title">
                        <h2>My dev status</h2>
                        <h4>取り組んでいるもの</h4>
                    </div>
                    <div className="m-main-cont">
                        <p className="m-main-cont-title">React Nativeでのアプリ開発</p>
                        <div className="m-main-cont-cen">
                            <p className="m-text">有志で学内アプリを制作中...</p>
                            <p className="m-text">かなり先になると思いますが、リリースまでやり遂げたい。</p>
                        </div>
                        <div>
                            <img src={myProjectSrc} alt="開発中の画像" className="m-main-src"/>
                            <p>開発中の画像</p>
                        </div>  
                    </div>
                </div>
                <div className="m-main">
                    <div className="m-main-title">
                        <h2>In the future</h2>
                        <h4>将来的に...</h4>
                    </div>
                    <div className="m-main-cont">
                        <p className="m-main-cont-title">Ubuntuサーバーを用いたバックエンド開発</p>
                        <div className="m-main-cont-cen">
                            <p className="m-text">今までバックエンドから逃げ続けてきたので。そろそろしっかりやりたいな。（願望）</p>
                        </div>
                    </div>
                </div>

                <div className="m-link">
                    <h2>Accounts</h2>
                    <Card serviceName={"Github"}/>
                    <Card serviceName={"Qiita"}/>
                </div>
            </div>
        </>
    )
}