import styles from './App.module.css';
import { User } from 'components/User/User';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friends/Friends';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';
import userData from 'jsons/user.json';
import data from 'jsons/data.json';
import friends from 'jsons/friends.json';
import transactions from 'jsons/transactions.json';

export const App = () => (
  <div className={styles.container}>
    <User el={userData} />
    <Statistics title="Upload stats" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
  </div>
);
