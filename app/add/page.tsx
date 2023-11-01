const NewPostForm = () => {
    return ( 
        <form className="form">
          <input type="text" placeholder="tile" required name="title"/>
          <textarea name="body"  placeholder="content" required />
          <div>
            <input type="submit" value="Add post" />
          </div>
          </form>
     );
}
 
export default NewPostForm;
