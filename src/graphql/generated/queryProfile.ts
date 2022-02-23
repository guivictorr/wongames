/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryProfile
// ====================================================

export interface queryProfile_me {
  __typename: "UsersPermissionsMe";
  username: string;
  email: string;
}

export interface queryProfile {
  me: queryProfile_me | null;
}
