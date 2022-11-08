import React from 'react';
import '../App';
import './Modal.css';
import Api from "../api/plannetApi";


const Modal = (props) => {
    const { open, close, header } = props;
    
    const getId = window.localStorage.getItem("userId");

    const onClickLogout = () => {
        window.localStorage.setItem("userId", "");
        window.localStorage.setItem("userPw", "");
        window.localStorage.setItem("isLogin", "false");
        window.location.replace("/");
    }
    const onClickWithdraw = async() => {
        await Api.memberDelete(getId);
        window.localStorage.setItem("userId", "");
        window.localStorage.setItem("userPw", "");
        window.location.replace("/");
    }
    const onClickGoLogin = () => {
        window.location.replace("/doLogin");
    }
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open && 
                <section>
                    <header>
                        {header}
                        <button className='close' onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        {(header === '안내') ? <button className='yes btn-m' onClick={onClickLogout}>yes</button>: ''}
                        {(header === '탈퇴') ? <button className='yes btn-m' onClick={onClickWithdraw}>yes</button>: ''}
                        {(header === '로그인') ? <button className='yes btn-m' onClick={onClickGoLogin}>login</button>: ''}
                        <button className='close' onClick={close}>close</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default Modal;