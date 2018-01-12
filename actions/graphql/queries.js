import gql from 'graphql-tag';

export const getRetailer = gql `
  query Retailer($licensenumber:String!) {
    Retailer(licensenumber : $licensenumber) {
      licensenumber
      name
    }
  }`
