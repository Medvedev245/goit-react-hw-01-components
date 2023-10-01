import styles from './App.module.css';
import { User } from '../User/User';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../Friends/Friends';
import { TransactionHistory } from '../Transactions/TransactionHistory';
import userData from '../../user.json';
import data from '../../data.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';

export const App = () => {
  return (
    <div className={styles.container}>
      <User el={userData} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
