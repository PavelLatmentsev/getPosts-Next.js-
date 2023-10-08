"use client"

import { getPostsBySearch } from "@/servises/getPosts";
import { FormEventHandler, useState } from "react";

type Props = {
    onSearch: (value:any[] )=> void
}
const PostSearch = ({onSearch}: Props) => {
    const [search, setSearch]=useState("");
    const handleSubmit: FormEventHandler<HTMLFormElement>= async (event) => {
  event?.preventDefault();
const posts = await getPostsBySearch(search);
onSearch(posts)
    }

    return ( <form onSubmit={handleSubmit}>
<input
 type="seacrh"
   placeholder="search"
    value={search}
      onChange={event => setSearch(event.target.value)}/>
<button type="submit">Поиск</button>
    </form> );
}
 
export default PostSearch;
