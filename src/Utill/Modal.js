import React from 'react';
import '../App';
import './Modal.css';

const Modal = (props) => {
    const onClickLogout = () => {
        console.log("Logout 추가");
        window.localStorage.setItem("userId", "");
        window.localStorage.setItem("userPw", "");
        window.localStorage.setItem("isLogin", "FALSE");
        window.location.replace("/");
    }
    const { open, close, header } = props;
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
                        <button className='close' onClick={close}>close</button>
                    </footer>
                </section>
            }
        </div>
    );
};
export default Modal;