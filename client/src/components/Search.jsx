//import searchPosts from "server/controllers/postCtrl.js"
import Search_result from "./Search_result";

const Search_post = ({user_id}) => {
    return(
        <div className={"Search_container"}>
            <input placeholder={"Enter the search term"}/>
            <button onClick={() => {
                return(
                    <Search_result user_id={user_id} /*search={}*//>
                )}}>Search</button>
        </div>
    )
}

export default Search_post