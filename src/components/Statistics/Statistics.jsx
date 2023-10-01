import styles from './Statistics.module.css';

export const Statistics = ({ stats }) => {
  return (
    <ul className={styles.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li
          style={{ background: getRandomColor() }}
          className={styles.item}
          key={id}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
