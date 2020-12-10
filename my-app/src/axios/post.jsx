import React from 'react';
import axios from 'axios';

class Post extends React.Component{
        state={
        posts:[]
    };
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            console.log(res.data);
const posts=res.data;
this.setState({posts});
        });
    }
    render(){
        return(
            <div>
          List of posts

          <ul>
              <li>
                  {
                      this.state.posts.map((post)=>(
                      <li>{post.id}.{post.title}</li>
                      ))
                  }
              </li>
          </ul>
            </div>
        )
    }
}
export default Post;