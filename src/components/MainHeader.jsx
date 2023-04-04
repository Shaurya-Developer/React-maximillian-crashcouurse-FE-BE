import { Link } from "react-router-dom";

import { MdPostAdd, MdMessage } from "react-icons/md";

import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
} // instead of anchor element(a) we should use Link element provided by react-router-dom bcz a element refresh the page and whole react app gets reloaded so it does not remains single page application(SPA), therefore we use Link then our SPA behaviour is there in Link instead of href we use Link

export default MainHeader;
