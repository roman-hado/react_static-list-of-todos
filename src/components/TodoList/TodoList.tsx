import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todosArray: Todo[];
};

export const TodoList:React.FC<Props> = ({ todosArray }) => (
  <>
    {todosArray.map((todo) => (
      (
        <div
          className={classNames('item', {
            completed: todo.completed,
          })}
          key={todo.user.id}
        >
          <br />
          <UserInfo prop={todo.user} />
          <TodoInfo todo={todo} />
          <br />
        </div>
      )
    ))}
  </>
);
