/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishlist
// ====================================================

export interface QueryWishlist_wishlists_games {
  __typename: "Game";
  id: string;
  name: string;
}

export interface QueryWishlist_wishlists {
  __typename: "Wishlist";
  id: string;
  games: QueryWishlist_wishlists_games[];
}

export interface QueryWishlist {
  wishlists: QueryWishlist_wishlists[];
}

export interface QueryWishlistVariables {
  identifier: string;
}
