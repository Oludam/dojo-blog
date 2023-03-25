import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";



const Home = () => {
   const {data:blogs, isLoading, error} = useFetch ('http://localhost:8001/blogs')
    

   const [name, setName] = useState('mario')
    
    

   
    return ( 
        <div className="home">
            {Error && <div>{error}</div>}
            {isLoading && <div>Loading ...</div>}
            {blogs && <BlogList blogs={blogs} title = 'All blogs!!'/>}
            {/* <button onClick={() => setName ('luigi')}>change name</button>
            <p>{name}</p> */}
            
        </div> 
     );
}
 
export default Home;