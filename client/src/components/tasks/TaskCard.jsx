// #region constants

import { useMutation } from "@apollo/client";
import { DELETE_TASK } from "../../graphql/tasks";
import { AiOutlineDelete } from "react-icons/ai";

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
const TaskCard = ({ task }) => {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ["getProject"],
  });

  const handleDeleteTask = () => {
    console.log("deleteTask");
    deleteTask({ variables: { _id: task._id } });
  };

  return (
    <div className="bg-zinc-900 px-5 py-3 mb-2 flex justify-between ">
      <h3>Tarea: {task.title}</h3>
      <button
        onClick={handleDeleteTask}
        className="bg-red-500 px-3  rounded-md"
      >
        <AiOutlineDelete />
      </button>
    </div>
  );
};

TaskCard.propTypes = propTypes;
TaskCard.defaultProps = defaultProps;
// #endregion

export default TaskCard;
