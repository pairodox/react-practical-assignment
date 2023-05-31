//import getPostsPage from "../../../server/controllers/postCtrl.js"
//import postSchema from "../../../server/models/index.js"
import {page_length} from "../utils/const";

const Post_pages = ({username, page_number}) => {
    let posts = document.getElementsByClassName("Post")
    let post_pages = []
    let j = 0
    for(let i=0; i<posts.length; i++){
        if(i%page_length>0){
            post_pages[j].append(posts[i])
        }
        else
            j++
    }
    j = page_number
    return(
        <div className={"Page"}>
            <p>post_pages[j]</p>
            <div id={"Page_navigation"}>
                <button id={"Previous_page"} onClick={() =>{
                    if(j>0 && j<post_pages.length)
                        j--
                }}>Prev</button>
                <p>{j}</p>
                <button id={"Next_page"} onClick={() =>{
                    if(j>=0 && j<post_pages.length - 1)
                        j++
                }}>Next</button>
            </div>
        </div>
    )
    /*Create element with id="Post_pages"*/
    /*Use class component and splices to create pages*/

}
export default Post_pages