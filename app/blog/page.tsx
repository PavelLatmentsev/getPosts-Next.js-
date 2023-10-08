"use client"
import PostSearch from "@/components/PostSearch";
import Posts from "@/components/Posts";
import getPosts from "@/servises/getPosts";
import { Metadata } from "next"
import { useState, useEffect } from "react";

export const metadata: Metadata = {
    title: 'Blog Next App',
  }

  
const Blog =  () => {
const [posts, setPosts]= useState<any>([]);
const [loading, setLoading]= useState(true);

useEffect(() => {
    getPosts()
    .then(setPosts)
    .finally(()=> setLoading(false))
}, [])
    return (
    
    <>
        <h1>Blog Page</h1> 
        <PostSearch onSearch={setPosts}/>
        {loading ? <h3>Loading</h3> :<Posts posts={posts}/> } 
    </>
 );
}
 
export default Blog;