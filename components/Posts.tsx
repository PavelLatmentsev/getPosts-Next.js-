// import Link from "next/link"; ---Вариант без zustand

// type Props = {
//     posts: any[]
// }

// const Posts = ({posts}:Props) => {
//     return ( 
//         <ul>
//         {posts.map((post: any) => {
//         return    <li key={post.id}><Link href= {`/blog/${post.id}`}>{post.title}</Link></li>
//         })}
//     </ul>
//      );
// }
 
// export default Posts;

//--zustand
// "use client"
// import { usePosts } from "@/store";
// import Link from "next/link";
// import { useEffect } from "react";
// import { shallow } from "zustand/shallow";

// const Posts = () => {

    
//     const [posts, loading, getPosts]=usePosts((state) => [state.posts, state.loading, state.getPosts], shallow);

//     useEffect(() => {
//         getPosts()
//     },[getPosts]);
    
//     return loading ? (  
//     <h3>Loading</h3>) :
//         (<ul>
//         {posts.map((post: any) => {
//         return    <li key={post.id}><Link href= {`/blog/${post.id}`}>{post.title}</Link></li>
//         })}
//     </ul>
//      );
// }
 
// export default Posts;

//---c библиотекой swr 

"use client"
import getPosts from "@/servises/getPosts";
import Link from "next/link";
import useSWR from "swr";

const Posts = () => {

const {data:posts, isLoading}=useSWR("posts", getPosts);
    return isLoading ? (  
    <h3>Loading</h3>) :
        (<ul>
        {posts.map((post: any) => {
        return    <li key={post.id}><Link href= {`/blog/${post.id}`}>{post.title}</Link></li>
        })}
    </ul>
     );
}
 
export default Posts;