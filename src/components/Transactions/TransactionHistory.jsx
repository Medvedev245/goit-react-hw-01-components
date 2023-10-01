import styles from './Transactions.module.css';

export const TransactionHistory = ({ items }) => {
  console.log(items);
  console.log(items.length);
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];

  // }
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.head}>
        <tr className={styles.tr}>
          <th className={styles.type}>Type</th>
          <th className={styles.type}>Amount</th>
          <th className={styles.type}>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.table}>
        {items.map(({ id, type, currency, amount }) => (
          <tr key={id} className={styles.row}>
            <td className={styles.el}>{type}</td>
            <td className={styles.el}>{amount}</td>
            <td className={styles.el}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
