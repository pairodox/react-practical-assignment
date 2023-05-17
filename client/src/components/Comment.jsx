import React, {Component} from "react";

let Comment = class extends Component{
    constructor(username, post_id, comment_id, text) {
        super({username, post_id, comment_id, text});
        this.date = new Date().toString()
        this.id = comment_id
        this.likes = []
        this.dislikes = []
        this.text = text
    }

    render() {
        return(
            <div id={this.id}>
                <p>{this.username}</p>
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
                    <p>{this.date}</p>
                </div>
            </div>
        )
    }
}

export default Comment