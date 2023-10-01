import styles from './User.module.css';

export const User = props => {
  const userName = props.el.username;
  const tag = props.el.tag;
  const location = props.el.location;
  const avatar = props.el.avatar;
  const stats = props.el.stats;
  return (
    <section className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={avatar} className={styles.avatar} />
        <p className={styles.name}>{userName}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}> {stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}> {stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </section>
  );
};
