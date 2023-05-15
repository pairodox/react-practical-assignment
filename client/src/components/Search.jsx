//import searchPosts from "server/controllers/postCtrl.js"
import Search_result from "./Search_result";

const Search_post = ({username}) => {
    return(
        <div className={"Search_container"}>
            <input placeholder={"Enter the search term"}/>
            <button onClick={() => {
                return(
                    <Search_result username={username} /*search={}*//>
                )}}>Search</button>
        </div>
    )
}

export default Search_post