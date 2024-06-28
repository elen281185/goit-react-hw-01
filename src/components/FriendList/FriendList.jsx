
import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"
export default function FriendList({items}){
    return (
        <ul className={css.friendList}>
           {items.map((item)=>(
            <li className={css.friendItem} key = {item.id}>
             <FriendListItem friend={item}/>
            </li> 
             ))}
        </ul>
       
    )
}