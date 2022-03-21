/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateWishlistt
// ====================================================

export interface MutationUpdateWishlistt_updateWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface MutationUpdateWishlistt_updateWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface MutationUpdateWishlistt_updateWishlist_wishlist_games {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  price: number;
  developers: MutationUpdateWishlistt_updateWishlist_wishlist_games_developers[];
  cover: MutationUpdateWishlistt_updateWishlist_wishlist_games_cover | null;
}

export interface MutationUpdateWishlistt_updateWishlist_wishlist {
  __typename: "Wishlist";
  id: string;
  games: MutationUpdateWishlistt_updateWishlist_wishlist_games[];
}

export interface MutationUpdateWishlistt_updateWishlist {
  __typename: "updateWishlistPayload";
  wishlist: MutationUpdateWishlistt_updateWishlist_wishlist | null;
}

export interface MutationUpdateWishlistt {
  updateWishlist: MutationUpdateWishlistt_updateWishlist | null;
}

export interface MutationUpdateWishlisttVariables {
  input: updateWishlistInput;
}
