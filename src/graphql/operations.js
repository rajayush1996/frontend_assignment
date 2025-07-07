import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      role
      username
    }
  }
`;

export const GET_EMPLOYEES_QUERY = gql`
  query Employees(
    $page: Int
    $limit: Int
    $sort: EmployeeSortInput
    $filter: String
  ) {
    employees(page: $page, limit: $limit, sort: $sort, filter: $filter) {
      items {
        id
        name
        age
        class
        subjects
        attendance
      }
      pageInfo {
        page
        limit
        totalItems
        totalPages
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

export const GET_EMPLOYEE_QUERY = gql`
  query Employee($id: ID!) {
    employee(id: $id) {
      id
      name
      age
      class
      subjects
      attendance
    }
  }
`;

export const UPDATE_EMPLOYEE_MUTATION = gql`
 mutation UpdateEmployee($id: ID!, $input: UpdateEmployeeInput!) {
    updateEmployee(id: $id, input: $input) {
      id
      name
      age
      class
      subjects
      attendance
    }
  }
`;

export const ADD_EMPLOYEE_MUTATION = gql`
  mutation AddEmployee($input: NewEmployeeInput!) {
    addEmployee(input: $input) {
      id
      name
      age
      class
      subjects
      attendance
    }
  }
`;

export const DELETE_EMPLOYEE_MUTATION = gql`
  mutation DeleteEmployee($id: ID!) {
    deleteEmployee(id: $id)
  }
`;
