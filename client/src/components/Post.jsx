let Post = class extends Object {

    constructor(user_id) {
        super();
        let date = new Date().toString()
        let post_id = user_id + "_" + date
        let likes = [0]
        let dislikes = [0]
    }

}