const NewPostForm = ({onSucces}:{onSucces:(id?: number)=>Promise<void>}) => {
    async function createPost(data:FormData) {
        "use server"

        const {title, body} = Object.fromEntries(data);
      
        const response = await fetch ("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify({title, body, userId:101}),
        })
      
        const post = await response.json();
        console.log(post)
        await   onSucces(post.id);
      }
    return ( 
        <form className="form" action={createPost}>
          <input type="text" placeholder="tile" required name="title"/>
          <textarea name="body"  placeholder="content" required />
          <div>
            <input type="submit" value="Add post" />
          </div>
          </form>
     );
}
 
export default NewPostForm;