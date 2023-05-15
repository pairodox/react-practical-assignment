let Post = class extends Object {
    constructor(username) {
        super();
        let date = new Date().toString()
        let id = username + "_" + date
        let likes = []
        let dislikes = []
        let title = ''
        let imageSrc = ''
        let comments = []
    }

    render() {
        return(
            <div id={this.id}>

            </div>
        )
    }
}