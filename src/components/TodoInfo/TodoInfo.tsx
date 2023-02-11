import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({
  todo: {
    id, title, user, completed,
  },
}) => (
  <article
    data-id={id}
    className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': completed,
      },
    )}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    {user && <UserInfo user={user} />}
  </article>
);