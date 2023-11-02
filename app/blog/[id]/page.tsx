import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getPost(id:string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate:10
        }
    })
    return response.json();
  }

type Props = {
    params: { id: string}
}

// export async function generateStaticParams() {
//     const posts:any[] =await getPosts();
//     return posts.map((post) => ({
//         slug:post.id.toString(),
//     }))
// }
export async function generateMetadata({params:{id}}: Props): Promise<Metadata> {
    const post = await getPost(id);
    return {
        title: post.title,
    }
}

async function removePost(id:string) {
    "use server"
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {method: "DELETE",
    headers: {"Content-type": "application/json"}
})

    revalidatePath("/blog");
    redirect("/blog");
}

const Post = async ({params: {id}} :Props) => {
    const post = await getPost(id);
    return (
        <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>

        <form action={removePost.bind(null, id)}>
        <input type="submit" value="delete post" />
        </form>

        <Link href={`/blog/${id}/edit`}>Edit</Link>
        </>
       );
}
 
export default Post;