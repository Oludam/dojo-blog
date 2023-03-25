import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState ('')
    const [body, setBody] = useState ('')
    const [author, setAuthor] = useState ('yoshi')
    const [isloading, setisLoading] = useState (false)
    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author}

        setisLoading(true)

        fetch('http://localhost:8001/blogs', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() =>{
            console.log('new blog added');
            setisLoading(false)
            history.push('/')
        })
    }
    return ( 
        <div className="create">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title: </label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange = {(e) => setBody(e.target.value)}
                >
                    
                </textarea>

                <label> Blog author: </label>
                <select
                value={author}
                onChange={(e) => setTitle(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>

                {!isloading && <button>Add blog</button>}
                {isloading && <button disabled>Adding blog...</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;