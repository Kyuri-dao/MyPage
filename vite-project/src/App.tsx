//import { useState } from 'react';
import './App.css';

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import github_logo from "./assets/github-mark-white.svg";
import qiita_logo from "./assets/qiita-white-icon.png"; 
import ts_logo from "./assets/ts_logo.svg";
import react_logo from "./assets/react.svg";
import cs_logo from "./assets/c_sharp_logo.png";
import my_rn_pj from "./assets/my_rn_project.png";

import Card from "./Card";





function App() {

  return (
    <>
      <div className='main-container'>
        <header className='main-header'>
          <div className='title'>
            <p className='title-index'>Kyuri-dao/Dev</p>
            <p>情報系学徒</p>
          </div>
          
          <div className='title-menu'>
            <a href="https://github.com/Kyuri-dao">
              <img src={github_logo} alt="git hubのロゴ" className='service-logo'/>
            </a>
            <a href="https://qiita.com/Kyuri-dao">
              <img src={qiita_logo} alt="Qiitaのロゴ" className='service-logo' />
            </a>
          </div>
        </header>

        <div className='child-container'>
          <div className='swipe-area'>
            <p>My develop status</p>
            <Swiper>
              <SwiperSlide>
                <div  className='swipe-index'>
                  <div className='swipe-title'>
                  <p>TypeScript/JavaScript</p>
                    <div className='swipe-image-area'>
                      <img src={ts_logo} alt="ts logo" className='ts-logo'/>
                      <p>&</p>
                      <img src={react_logo} alt="React logo" className='react-logo'/>
                    </div>
                  </div>
                  <div className='swipe-explain'>
                    <p>TS & React Nativeを用いたアプリ制作</p>
                    <p className='swipe-explain-mini'>・簡易的なユーザー情報</p>
                    <p className='swipe-explain-mini'>・シラバス</p>
                    <p className='swipe-explain-mini'>・列車運行情報</p>
                    <img src={my_rn_pj} alt="React Nativeで作られたアプリの画像" className='my_rn_pj'/>
                    <p className='swipe-explain-mini'>iOS18での動作テストの様子</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='swipe-index'>
                  <div className='swipe-title'>
                    <p>C#</p>
                    <img src={cs_logo} alt="c# logo" className='cs-logo'/>
                  </div>
                  <div className='swipe-explain'>
                    <p>C# & .NET MAUIを用いたアプリ制作</p>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className='swipe-index'>
                  <div className='swipe-title'>
                    <p>TypeScript</p>
                    <img src={react_logo} alt="Reactロゴ" className='react-logo' />
                  </div>
                  <div className='swipe-explain'>
                    <p>React & Viteを用いたwebサイト制作</p>
                    <p className='swipe-explain-mini'>・ReactとViteを用いた自己紹介ページ（このサイトのことです!）</p>
                    <p className='swipe-explain-mini'>できればこのページを拡張していきたい</p>
                    <p className='swipe-explain-mini'>・バックエンドもいじっていきます</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </div>

        <div className='link-area'>
          <p>My link list</p>
          <Card 
            serviceName = "Github" 
            serviceExp = "リポジトリがあります"
          />

          <Card 
            serviceName = "Qiita" 
            serviceExp = "何も上げてないよ"
          />
        </div>
      </div>
    </>
  )
}

export default App
