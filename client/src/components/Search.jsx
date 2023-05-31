//import searchPosts from "../../../server/controllers/postCtrl.js"
import Search_result from "./Search_result";

const Search_post = ({username}) => {
    return(
        <div className={"Search_container"}>
            <input id={"Search_input"} type={"text"} placeholder={"Enter the search term"}/>
            <button onClick={() => {
                return(console.log(0)
                    //searchPosts
                    /*<Search_result username={username} keyword={document.getElementById("Search_input").value}/>
                */)}}>Search</button>
        </div>
    )
}

export default Search_post