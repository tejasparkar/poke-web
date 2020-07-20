import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deletePost} from '../actions/PostActions';

class Posts extends Component {
    handleClick = ()=>{
        this.props.deletepost(this.props.post.id);
        this.props.history.push('/');
    }
    render() {
       console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center" onClick={this.handleClick}><button className="btn gray">Delete Post</button></div>
                </div>
        ) : (
            <div className="center">
                Loading post.....
                </div>
        )
        return (
            <div className="container">
               {post}
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps)=>{
 let id = parseInt(ownProps.match.params.post_id);
 
 return{
     post: state.posts.find((post)=>{return post.id === id})
 }
}

const mapDispatchToProps = (dispatch)=>{
return{
    deletepost : (id) => {
        dispatch(deletePost(id))
    }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Posts)
