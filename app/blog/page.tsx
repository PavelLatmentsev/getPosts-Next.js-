// "use client"--- без zustand(обычный вариант через Props)
// import PostSearch from "@/components/PostSearch";
// import Posts from "@/components/Posts";
// import getPosts from "@/servises/getPosts";
// import { Metadata } from "next"
// import { useState, useEffect } from "react";

// export const metadata: Metadata = {
//     title: 'Blog Next App',
//   }

  
// const Blog =  () => {
// const [posts, setPosts]= useState<any>([]);
// const [loading, setLoading]= useState(true);

// useEffect(() => {
//     getPosts()
//     .then(setPosts)
//     .finally(()=> setLoading(false))
// }, [])
//     return (
    
//     <>
//         <h1>Blog Page</h1> 
//         <PostSearch onSearch={setPosts}/>
//         {loading ? <h3>Loading</h3> :<Posts posts={posts}/> } 
//     </>
//  );
// }
 
// export default Blog;


//-------c zustand
import NewPostForm from "@/components/CreatePost";
import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import { Metadata } from "next"
import { revalidatePath } from "next/cache";

export const metadata: Metadata = {
    title: 'Blog Next App',
  }

  
const Blog =  () => {

    return (
    
    <>
        <h1>Blog Page</h1> 
        <PostSearch/>
        <Posts/>

        <hr />
<NewPostForm onSucces={async () => {
      "use server"

     revalidatePath("/blog")
    }}/>
        
    </>

    
 );
}
 
export default Blog;