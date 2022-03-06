import classes from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={classes.item}>
      <img src="https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png" />
      <div>{props.message}</div>
      <div>
        <span>{props.likeCount} likes</span>
      </div>
    </div>
  );
};

export default Post;
