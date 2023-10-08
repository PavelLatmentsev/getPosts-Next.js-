import { getPostsBySearch } from './../servises/getPosts';
import getPosts from "@/servises/getPosts";
import { create } from "zustand";

type UsePosts = {
    posts: any[];
    loading: boolean;
    getPosts:() => Promise<void>;
    getPostsBySearch:(value:string)=> Promise<void>;
}

export const usePosts = create<UsePosts>()((set)=> ({
    posts: [],
    loading: false,
    getPosts:async() => {
        set({loading: true});
        const posts = await getPosts();
        set({posts:posts, loading:false})
    },
    getPostsBySearch: async (search) => {
        set({loading: true});
        const posts = await getPostsBySearch(search);
        set({posts:posts, loading:false})
    }
}))