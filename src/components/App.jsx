import { Section } from 'components/section/section';

import { Profile } from 'components/profile/profile';
import user from '../data/user.json';

import { Statictics } from 'components/statistics/statistics';
import stats from '../data/data.json';

import { FriendList } from 'components/friendlist/friendlist';
import friends from '../data/friends.json';

import { TransactionHistory } from 'components/transaction/transactionHistory';
import items from '../data/transactions.json';

export default function App() {
  return (
    <div>
      <h1>goit-react-hw-01-components</h1>
      <Section title={"Task-1 'Social profile'"}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>
      <Section title={"Task-2 'Upload stats'"}>
        <Statictics title="Upload stats" stats={stats} />
      </Section>
      <Section title={"Task-3 'FriendList'"}>
        <FriendList title="FriendList" friends={friends} />
      </Section>
      <Section title={"Task-4 'TransactionHistory'"}>
        <TransactionHistory items={items} />
      </Section>
    </div>
  );
}