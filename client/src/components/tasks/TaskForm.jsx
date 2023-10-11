// #region constants

import { useMutation } from "@apollo/client";
import { CREATE_TASK } from "../../graphql/tasks";
import { useParams } from "react-router-dom";

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
const TaskForm = () => {
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ["getProject"],
  });
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask({
      variables: { title: e.target.title.value, projectId: params.id },
    });
    e.target.title.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <input
        type="text"
        name="title"
        placeholder="Add new task"
        className="bg-zinc-800 text-white rounded-lg shadow-lg p-2 w-full mb-3"
      />
      <button className="bg-sky-900 text-white w-full p-2 rounded-lg">
        Add
      </button>
    </form>
  );
};

TaskForm.propTypes = propTypes;
TaskForm.defaultProps = defaultProps;
// #endregion

export default TaskForm;
