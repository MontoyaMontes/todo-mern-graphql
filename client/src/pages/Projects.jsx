import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";

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
const Projects = () => {
  return (
    <div className="bg-zinc-900 rounded-mb shadow-lg shadow-black p-8 h-4/5 w-3/5">
      <h1 className="text-2xl font-bold py-2 mb-4 ">My projects: </h1>
      <div className="flex justify-between gap-x-1">
        <ProjectForm />
        <ProjectList />
      </div>
    </div>
  );
};

// #endregion

export default Projects;
