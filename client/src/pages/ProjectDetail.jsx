import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { GET_PROJECT } from "../graphql/projects";
import TaskList from "../components/tasks/TaskList";
import TaskForm from "../components/tasks/TaskForm";

// #region constants

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
const ProjectDetail = () => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: { _id: params.id },
  });
  const handleDelete = () => {
    console.log("handleDelete");
  };
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="">
      <div className="bg-zinc-900 px-5 py-3 flex justify-between mb-2">
        <div>
          <div>
            <h1 className="text-2xl">Projecto: {data.project.name}</h1>
            <h2>Descripción: {data.project.description}</h2>
            <h3>id: {data.project._id}</h3>
          </div>
          <button
            onClick={handleDelete}
            className="bg-red-500 px-3 py-2 rounded-lg"
          >
            Delete project
          </button>
        </div>
      </div>

      <TaskForm />

      <TaskList tasks={data.project.tasks} />
    </div>
  );
};

ProjectDetail.propTypes = propTypes;
ProjectDetail.defaultProps = defaultProps;
// #endregion

export default ProjectDetail;
