import { useNavigate } from "react-router-dom";
// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component

/**
 *
 */
const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/project/${project?._id}`)}
      className="bg-zinc-800 w-full rounded-lg shadow-lg shadow-black p-4 mb-2 hover:bg-bg-zinc-700 hover:cursor-pointer"
    >
      <h1>{project?.name}</h1>
      <p>{project?.description}</p>
    </div>
  );
};

// #endregion

export default ProjectCard;
