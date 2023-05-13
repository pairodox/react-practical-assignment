import searchPosts from "server/controllers/postCtrl.js"
import Search_result from "./Search_result";

const Search_post = ({user_id}) => {
    return(
        <button onClick={() => {
            return(
                <Search_result user_id={user_id}/>
            )}}>Search</button>
    )
}

export default Search_post