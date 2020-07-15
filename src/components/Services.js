import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Pokeball from '../pokeball.png';
import {connect} from 'react-redux'


class Services extends Component {
  
   
    render() {
        
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A Pokeball"></img>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                            <span  className="card-title red-text bold">{post.title}</span>
                            </Link>
                            
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) :
            (
                <div className="center">
                    No Posts Yet
                </div>
            )
        return (
            <div className="container home">
                <h4 className="center">Services</h4>
                {postList}
            </div>
        )
    }
}

const mapStatetoProps = (state)=>{
return {
    posts : state.posts
}
}
export default connect(mapStatetoProps)(Services)
