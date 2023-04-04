import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";
import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" name="author" id="name" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
} // we are using Form component provided by react bcz simple JSX form element send http request to the server on form submit and we dont want that, and Form component will trigger action function on submit

export default NewPost;

export async function action(data) {
  const formData = await data.request.formData(); // data is automatically given to us by react and it have request property in it, it gives us a promise
  const postData = Object.fromEntries(formData);

  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/"); // so when our function works perfectly we redirect it to some path
}
