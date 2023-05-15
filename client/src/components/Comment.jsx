let Comment = class extends Object{
    constructor(username, post_id) {
        super();
        let date = new Date().toString()
        let id = post_id + "_" + date
        let likes = []
        let dislikes = []
        let title = ''
        let imageSrc = ''
        let comments = []
    }
    
}