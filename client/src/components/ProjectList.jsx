import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "../graphql/projects.js";
import ProjectCard from "../components/ProjectCard";
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
const ProjectList = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="overflow-y-auto h-64 w-full px-5">
      {data.projects.map((project) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  );
};

// #endregion

export default ProjectList;
