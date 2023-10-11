// #region constants

import TaskCard from "./TaskCard";

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 *
 */
const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task._id} task={task} />
      ))}
    </div>
  );
};

TaskList.propTypes = propTypes;
TaskList.defaultProps = defaultProps;
// #endregion

export default TaskList;
