import { useEffect, useRef, useState } from "react"

export default function Blog(){

    const[blogForm, setBlogFrom] = useState({title:"", content:""});
    const[blog, setBlog] = useState([]);
    const titleRef = useRef(null);

   function handleSubmit(e){
        e.preventDefault();
        setBlog([{title:blogForm.title, content:blogForm.content}, ...blog]);
        setBlogFrom({title:"", content:""});

        // titleRef.current.focus();
    }

    function removeOn(i){
        setBlog(blog.filter((blog, index) => i!==index))
    }

    useEffect(()=>{
        titleRef.current.focus();
    })
   
    return(
        <>
        <div  className="blog_container">
        <form onSubmit={handleSubmit} className="blog">
            <h2>Title</h2>
            <input placeholder="Write a title..."
            value={blogForm.title}
            onChange={(e) => setBlogFrom({title:e.target.value, content:blogForm.content})}
            ref={titleRef}/>
            <hr/>
            <h2>Content</h2>
            <textarea rows={6}
            value={blogForm.content}
            onChange={(e) => setBlogFrom({title:blogForm.title, content:e.target.value})}></textarea>
            <hr/>
            <button>Add</button>
        </form>

        <div className="postBlog">
         {blog.map((blog,i) =>
        (
         <div>
            
               <h2>{blog.title}</h2>
               <hr/>
               <p>{blog.content}</p>
               <button onClick={() => removeOn(i)}>Remove</button>
         </div>
        )
        )}
        </div>
        </div>


        </>
    )
}