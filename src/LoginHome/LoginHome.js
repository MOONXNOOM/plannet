import './LoginHome.css';
import React from 'react';
import Planet from './img/plannet.png';
import Profile from './img/profile.jpg';

function LoginHome() {
  return (
  <div className='container'>
    <div className='item'>
      <img className='planet' src={Planet} alt="행성"/>
          <p id='plannet' align="center" top="10px">plannet</p>
          <p id='planit' align="center">let's plan it</p>
            <img className='profile' src={Profile} alt="프로필"/>
              <div className='nickname' align="center">
                <p><b>홍길동</b></p>
                <p>(gildong123)</p>
              </div>
                <div className='intro1' align="center">
                  <p>개발하는 홍길동의 플래닛</p>
                  <p>#개발자</p>
                  <p>#백엔드</p>
                  <p>#프론트엔드</p>
                </div>
                  <div className='intro2' align="center">
                  <p>Phone : 010-1234-5678</p>
                  <p>Email : gildong123@naver.com</p>
                  <p>Instagram : gildong_123</p>
                  </div>
                  <div className="achieve">
                    <h2>전체 목표 달성률</h2>
                     <textarea type="text" className="ach"></textarea>
                  </div>
    </div>
      <div>
        <div class="calendar"><h1>Calendar</h1>
        <div class="cal">캘린더 자리</div>
        </div>
          <div className='list'><h1>List</h1>
          <textarea type='text' className='li' placeholder='리스트를 작성 하세요'></textarea>
          </div>
      </div>
      <div>
        <div className='memo'><h1>Memo</h1>
        <textarea type='text' className='me' placeholder='메모를 입력하세요'></textarea>
        </div>
          <div className='doing'><h1>Motivation</h1>
          <textarea type='text' className='do' placeholder='동기부여 되는 구문을 작성하세요'></textarea>
            </div>
          </div>
        </div>
  );
}
export default LoginHome;

