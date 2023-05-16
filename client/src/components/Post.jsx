import {ReactComponent} from "*.svg";

let Post = class extends ReactComponent {

    constructor(username, text, title) {
        super();
        this.date = new Date().toString()
        this.id = username + "_" + this.date
        this.likes = []
        this.dislikes = []
        this.title = title
        this.imageSrc = ''
        this.comments = []
        this.text = text
    }

    render() {
        return(
            <div id={this.id}>
                <p>{this.title}</p>
                <image path={this.image}/>
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
                    <p>Made by {this.username} at {this.date}</p>
                </div>
            </div>
        )
    }
}

export default Post