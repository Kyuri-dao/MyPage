import "../../General.css"

import myProjectSrc from "../../../assets/myproject.png";
import ubuntuLogo from "../../../assets/Ubuntu_logo.svg"

// import Card from "../../Card/Card";

export default function DesktopMain(){
    return(
        <>
            <div className="main">
                <div className="d-main">
                    <h2 className="d-main-mid">Introduce</h2>
                    <div className="d-main-title">
                        <h2>My development status</h2>
                        <h3>取り組んでいるもの</h3>
                    </div>

                    <div className="d-main-cont">
                        <div>
                            <div>
                                <p className="d-main-cont-title">React Nativeでのアプリ開発</p>
                            </div>
                            
                            <div className="m-main-cont-cen">
                                <p className="d-text">有志で学内アプリを制作中</p>
                                <p className="d-text">かなり先になると思いますが、リリースまでやり遂げたい。</p>
                            </div>

                            <div className="m-main-cont-cen">
                                <h3 className="d-text">開発環境等</h3>
                                <div className="d-main-list">
                                    <p className="d-text-list">・React Native</p>
                                    <p className="d-text-list">・Expo</p>
                                    <p className="d-text-list">・友人のサーバー（仮）</p>
                                    <p className="d-text-list">・その他様々なコンポーネント</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-main-src-ct">
                            <img src={myProjectSrc} alt="開発中の画像" className="d-main-src"/>
                            <p className="d-main-src-desc">開発中の画像</p>
                        </div>
                    </div>
                </div>

                <div className="d-main">
                    <div className="d-main-title">
                        <h2>In the future</h2>
                        <h4>将来的に...</h4>
                    </div>

                    <div className="d-main-cont">
                        <div>
                            <div>
                                <p className="d-main-cont-title">Ubuntuサーバーを用いたバックエンド開発</p>
                            </div>
                            <div className="m-main-cont-cen">
                                <p className="d-text">今までバックエンドから逃げ続けてきたので。そろそろしっかりやりたいな。（願望）</p>
                                <p className="d-text">幸運なことにサーバを借りることができたので、何かpythonの処理を投げたりとか。</p>
                            </div>

                            <div className="d-main-src-ct">
                                <img src={ubuntuLogo} alt="ubuntuのロゴ" className="d-main-ubuntu" />
                                <p className="d-main-src-desc">Ubuntuロゴ</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}