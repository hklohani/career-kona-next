import { useRef } from "react";
import Nav from "../../layout/nav";

const NewPost = (props) => {
    const titleInputRef = useRef()
    const DescriptionInputRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value
        const enteredDescription = DescriptionInputRef.current.value

        const postData = {
            title: enteredTitle,
            description: enteredDescription
        }
        props.onAddPost(postData)
    }
  return (
      <>
      
      <form onSubmit={handleSubmit} style={{textAlign: "center"}}>
      <Nav/>
      <label style={{display: "block", marginTop: "20px"}}>
        Title:
        <input ref = {titleInputRef} type="text" name="title" />
      </label>
      <label style={{display: "block", marginTop: "20px", marginBottom: "20px"}}>
        Description:
        <textarea ref = {DescriptionInputRef} type="textarea" name="description" />
      </label>
      <input type="submit" value="Submit" />
    </form>
      </>
  );
};

export default NewPost