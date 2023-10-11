import gql from "graphql-tag";

export const CREATE_TASK = gql`
  mutation ($title: String, $projectId: ID) {
    createTask(title: $title, projectId: $projectId) {
      title
      project {
        _id
      }
    }
  }
`;

export const DELETE_TASK = gql`
  mutation ($_id: ID!) {
    deleteTask(_id: $_id) {
      _id
      title
    }
  }
`;
