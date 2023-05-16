import {ReactComponent} from "*.svg";

let Comment = class extends ReactComponent{
    constructor(username, post_id) {
        super();
        this.date = new Date().toString()
        this.id = post_id + "_" + this.date
        this.likes = []
        this.dislikes = []
    }

    render() {
        return(
            <div id={this.id}>
                <p>{this.username}</p>
                <p>{this.text}</p>
                <div className={"Likes&Dislikes"}>
                    <p>{this.likes.length}</p>
                    <button className={"Like"} onClick={() =>{
                        return(
                            this.likes.append(this.username)
                        )
                    }}>
                        Like
                    </button>
                    <p>{this.dislikes.length}</p>
                    <button className={"Dislike"} onClick={() =>{
                        return(
                            this.dislikes.append(this.username)
                        )
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