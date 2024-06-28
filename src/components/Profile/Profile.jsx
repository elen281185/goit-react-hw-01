import css from "./Profile.module.css"
export default function Profile ({name, tag, location, image, followers, views, likes}){
    return (
      <div className={css.profile}>
      <div className={css.profileInfo}>
        <img
          className={css.profileImg}
          src={image}
          alt={name}
        />
        <p className={css.profilename}>{name}</p>
        <p className={css.profileText}>@{tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>
    
      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Followers</span>
          <span className={css.profileItemText}>{followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Views</span>
          <span className={css.profileItemText}>{views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileItemTitle}>Likes</span>
          <span className={css.profileItemText}>{likes}</span>
        </li>
      </ul>
    </div>
    )
}