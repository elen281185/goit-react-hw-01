import clsx from "clsx";
import css from "./FriendListItem.module.css"
export default function FriendListItem({
  friend: {avatar, name, isOnline},
}){
  const friendOnline = clsx(css.friendName, isOnline ? css.onLine : css.ofLine);
    return (
        <div>
        <img className={css.friendFoto} src={avatar} alt={name}  />
        <p className={css.friendName}>{name}</p>
        <p className={friendOnline}>{isOnline ? "Online" : "Ofline"}</p>
      </div> 
    )
}