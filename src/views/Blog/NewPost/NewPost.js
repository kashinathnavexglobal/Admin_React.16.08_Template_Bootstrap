import React, { Component } from 'react'

class NewPost extends Component{
    render(){
        return(
             <div> 
                 <h2>Create a New Post</h2>
                 <form>
                     <div>
                        <label>Enter the first name</label>
                        <input type="text" name="firstname" class="firstname"/>
                     </div>
                     <div>
                        <label>Enter the second name</label>
                        <input type="text" name="secondname"/>
                     </div>
                     <div>
                        <label>Enter the Email</label>
                        <input type="text" name="email"/>
                     </div>
                 </form>
             </div>
        )
    }
}
export default NewPost;

