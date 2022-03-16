import React, { Component } from "react";
import "./Post.css";


// class-based component
class Post extends Component{
    render(){
        return(
            <div className="Post">
                <h2>This is inside the Post</h2>
            </div>
        );
    }
}

export default Post;