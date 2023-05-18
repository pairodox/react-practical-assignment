import React, {Component} from "react";

let Post = class extends Component {

    constructor(username, text, title, post_id) {
        super({username, text, title, post_id});
        this.date = new Date().toString()
        this.id = post_id
        this.likes = []
        this.dislikes = []
        this.title = title
        this.image_src = ''
        this.comments = []
        this.text = text
    }

    render() {
        return(
            <div id={this.id}>
                <p>{this.title}</p>
                <image path={this.image_src}/>
                <p>{this.text}</p>
                <div className={"Likes&Dislikes"}>
                    <p>{this.likes.length}</p>
                    <button className={"Like"} onClick={() =>{
                        if(!this.likes.includes(this.username)) {
                            this.likes.append(this.username)
                            this.dislikes.filter(user => user !== this.username)
                        }
                        else{
                            this.likes.filter(user => user !== this.username)
                        }
                    }}>
                        Like
                    </button>
                    <p>{this.dislikes.length}</p>
                    <button className={"Dislike"} onClick={() =>{
                        if(!this.dislikes.includes(this.username)) {
                            this.dislikes.append(this.username)
                            this.likes.filter(user => user !== this.username)
                        }
                        else{
                            this.dislikes.filter(user => user !== this.username)
                        }
                    }}>
                        Dislike
                    </button>

                </div>
                <button className={"Edit"}>Edit</button>
                <button className={"Delete"}>Delete</button>
                <p>Made by {this.username} at {this.date}</p>
                <div className={"Comments"}>
                    {this.comments}
                </div>
            </div>)
    }
}

export default Post