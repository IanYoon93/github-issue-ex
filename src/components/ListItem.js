import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Badge from './Badge';
import ListItemLayout from './ListItemLayout';
import styles from './ListItem.module.css';

dayjs.extend(relativeTime);

export default function ListItem({
  // checked,
  // onChangeCheckBox,
  onClickTitle,
  data,
}) {
  const badges = data.labels;
  const state = data.state === 'open' ? 'opened' : 'closed';
  const date = data.state === 'open' ? data.created_at : data.closed_at;

  return (
    <ListItemLayout>
      <div>
        <div role="button" onClick={onClickTitle} className={styles.title}>
          {data.title}
          {badges.length > 0 &&
            badges.map((props, idx) => <Badge {...props} key={`${idx}`} />)}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()} by {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  );
}
