
import FriendListItem from "../FriendListItem/FriendListItem"
export default function FriendList({items}){
    return (
        <ul>
           {items.map((item)=>(
            <li key = {item.id}>
             <FriendListItem friend={item}/>
            </li> 
             ))}
        </ul>
       
    )
}