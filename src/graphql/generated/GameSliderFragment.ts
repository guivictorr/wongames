/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: GameSliderFragment
// ====================================================

export interface GameSliderFragment_developers {
  __typename: "Developer";
  name: string;
}

export interface GameSliderFragment_cover {
  __typename: "UploadFile";
  url: string;
}

export interface GameSliderFragment {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  price: number;
  developers: GameSliderFragment_developers[];
  cover: GameSliderFragment_cover | null;
}
