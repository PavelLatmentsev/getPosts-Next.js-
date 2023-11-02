import NewPostForm from "@/components/CreatePost";
import { redirect } from "next/navigation";
const NewPost = () => {
  return ( 
    <NewPostForm onSucces={async (id) => {
      "use server";

      redirect(`/blog/${id}`)
    }}/>
   );
}
 
export default NewPost;