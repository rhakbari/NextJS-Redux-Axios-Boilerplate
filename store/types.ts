// Define action types as constants
export const GET_POSTS = "GET_POSTS";
export const POSTS_ERROR = "POSTS_ERROR";

// Define action interfaces
export interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: any; // Define the type of the payload
}

export interface PostsErrorAction {
  type: typeof POSTS_ERROR;
  payload: any; // Define the type of the payload
}

// Export action types
export type ActionTypes = GetPostsAction | PostsErrorAction;
// Define the RootState type to represent the overall shape of your Redux state
export type RootState = {
    // Define properties for each slice of your Redux state
    postList: {
      posts: any[];
      loading: boolean;
      error?: any;
    };
    // Add more slices if needed
  };
  