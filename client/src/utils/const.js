export const MAIN_URL = "http://localhost:8080/"
export const CREATE_POST = MAIN_URL + 'post/'
export const UPDATE_POST = (post_id) => {
    return(MAIN_URL + `post/${post_id}`)
}
export const SEARCH = (key_word) => {
    return(MAIN_URL + `post/search/${key_word}`)
}

export const GET_POST_PAGE = (page_number) =>{
    return(MAIN_URL + `post/page/${page_number}`)
}
export const DELETE_POST = (post_id) => {
    return(MAIN_URL + `post/${post_id}`)
}
export const UPLOAD_POST_PICTURE = (post_id) => {
    return(MAIN_URL + `post/${post_id}/picture`)
}
export const CREATE_COMMENT = MAIN_URL + 'comment/'
export const UPDATE_COMMENT = (comment_id) => {
    return(MAIN_URL + `comment/${comment_id}`)
}
export const DELETE_COMMENT = (comment_id) => {
    return(MAIN_URL + `comment/${comment_id}`)
}
export const page_length=9