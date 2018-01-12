import gql from 'graphql-tag';

const createRetailer = gql `
mutation createRetailer($licensenumber: String!, $name: String!) {
  createRetailer(licensenumber: $licensenumber,name: $name) {
    licensenumber
    name
  }
}`
