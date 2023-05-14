let Comment = class extends Object{
    constructor(user_id, post_id) {
        super();
        let date = new Date().toString()
        let comment_id = post_id + "_" + date
        let likes = [0]
        let dislikes = [0]
    }
}