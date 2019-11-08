import React, { Component } from 'react';
 import { Route,NavLink} from 'react-router-dom';
// import {NavLink} from 'router';
 import Post from './Posts/Posts';
 import NewPost from './NewPost/NewPost';
 import FullPost from './FullPost/FullPost';

class Blog extends Component{
    render(){
        return <div>
            <h2>Blogs</h2>
            <header>
                <NavLink to="/NewPost">New Post</NavLink>
                <NavLink to="/FullPost">Full Post</NavLink>
            </header>
            <switch>
                <Route path="posts" exact Component={Post} ></Route>
                <Route path="/NewPost"  Component={NewPost} ></Route>
                <Route path="/FullPost"  Component={FullPost} ></Route>
            </switch>
        </div>
    }
}
export default Blog;