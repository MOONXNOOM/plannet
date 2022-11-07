import React, { Component } from 'react';
import './Comment.css'

class Commentform extends Component {
    state = {
        value:''
    }
    handleChange = e => {
        const value = e.target.value
        this.setState({
            value,
        })
    }
    handleSubmit = e => {
        e.preventDefault()

        this.props.addList(this.state.value)
        this.setState({
            value:''
        })
    }

    render() {
        return(
            <li className='comment-form'>
                <form onSubmit={this.handleSubmit}>
                    <span className='ps_box'>
                        <input
                        type='text'
                        className='int'
                        placeholder='댓글 작성'
                        onChange={this.handleChange}
                        value={this.state.value}>
                        </input>
                    </span>
                    <button className='btn'>등록</button>
                </form>
            </li>
        )
    }
}
export default Commentform;