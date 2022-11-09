import React from 'react';
import '../App';
import './Modal.css';
import Api from "../api/plannetApi";


const Modal = (props) => {
    const { open, close, header, boardNo, option } = props;
    
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
        window.localStorage.setItem("isLogin", "false");
        window.location.replace("/");
    }
    const onClickGoLogin = () => {
        window.location.replace("/doLogin");
    }
    const onClickEdit = () => {
        const link = "/edit/" + boardNo;
        window.location.assign(link);
        window.localStorage.setItem("boardNo", boardNo);
    }
    const onClickDelete = async() => {
        await Api.boardDelete(boardNo);
        window.location.replace("/board");
    }
    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open && 
                <section>
                    <header>
                        &nbsp;
                        <button className='close' onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{props.children}</main>
                    <footer>
                        {(header === '안내') ? <button className='yes btn-m' onClick={onClickLogout}>yes</button>: ''}
                        {(header === '탈퇴') ? <button className='yes btn-m' onClick={onClickWithdraw}>yes</button>: ''}
                        {(header === '로그인') ? <button className='yes btn-m' onClick={onClickGoLogin}>login</button>: ''}
                        {(header === '글수정삭제' && option === '수정') ? <button className='yes btn-m' onClick={onClickEdit}>yes</button>: ''}
                        {(header === '글수정삭제' && option === '삭제') ? <button className='yes btn-m' onClick={onClickDelete}>yes</button>: ''}
                        <button className='close' onClick={close}>close</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default Modal;