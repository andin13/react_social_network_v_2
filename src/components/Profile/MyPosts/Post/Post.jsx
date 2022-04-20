import s from "./Post.module.css";

const Post = ({message, likeCount}) => {

  const imageUrl = "https://cdn4.iconfinder.com/data/icons/web-app-flat-circular-icons-set/64/Iconos_Redondos_Flat_Usuario_Icn-512.png";

  return (
    <div className={s.item}>
      <img src={imageUrl} alt='' />
      <div>{message}</div>
      <div>
        <span>{likeCount} likes</span>
      </div>
    </div>
  );
};

export default Post;
