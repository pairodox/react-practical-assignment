let Post = class extends Object {

    constructor(login) {
        super();
        let date = new Date().toString()
        let post_id = login + "_" + date
    }

}