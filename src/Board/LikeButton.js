import React from 'react';
import {HeartOutlined, HeartFilled} from '@ant-design/icons';
import './LikeButton.css'

class LikeButton extends React.Component{
    state = {
        inChecked: false,
        notice: '',
    };

    onClick = () => {
        this.state.isChecked ?
        this.setState({
            isChecked: false,
            notice:'',
        })
        :
        this.setState({
            isChecked: true,
            // notice:'좋아요',
        });
    }
    render(){
        return(
            <React.Fragment>
                {this.state.isChecked ?
                <HeartFilled className='button red' onClick={this.onClick} /> :		
                <HeartOutlined className='button' onClick={this.onClick} />}
                <h3>{this.state.notice}</h3>
            </React.Fragment>
        )
    }
}
export default LikeButton;