const Search_result = ({username, keyword}) => {
    let post_pages = document.getElementById("Post_pages")
    post_pages.forEach(post => {
        if(post.text.search(keyword) !== -1)
            return post
    })
}

export default Search_result