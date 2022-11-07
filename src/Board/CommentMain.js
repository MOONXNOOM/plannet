import { Component } from "react";
import Comment from './Comment'
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import './Comment.css'

class CommentMain extends Component {

    state = {
        value: '',
        list: [
            {userid: '123', content: '게시글 1', date:'2022-11-07'},
            {userid: '456', content: '게시글 2', date:'2022-11-07'},
            {userid: '789', content: '게시글 3', date:'2022-11-07'}
        ]
    }
    addList = (content) => {
        this.setState({
            list: [
                ...this.state.list,
                {userid:'곰돌이사육사', content,date:'2022-11-07'}
            ]
        })
    }
    updateList = list => {
        this.setState({
            ...this.state,
            list,
        })
    }

    render() {
        return(
            <>
            <Comment>
                <CommentForm addList = {this.addList}/>
                <CommentList list = { this.state.list }
                            updateList = {this.updateList}/>
            </Comment>
            </>
        )
    }
}
export default CommentMain;