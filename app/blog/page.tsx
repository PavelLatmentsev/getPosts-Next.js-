import { Metadata } from "next"
import Link from "next/link";
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate:60
        }
    })

    if(!response.ok) throw new Error("Error Blog");
    return response.json();
  }


export const metadata: Metadata = {
    title: 'Blog Next App',
   
  }

  
const Blog = async () => {
    const posts = await getData();
    console.log(posts)
    return (
    
    <>
        <h1>Blog Page</h1> 
        <ul>
            {posts.map((post: any) => {
            return    <li key={post.id}><Link href= {`/blog/${post.id}`}>{post.title}</Link></li>
            })}
        </ul>
    </>
 );
}
 
export default Blog;