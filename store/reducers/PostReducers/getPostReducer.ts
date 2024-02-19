import { GET_POSTS, POSTS_ERROR } from "@/store/types";

interface InitialStateType {
  posts: any[];
  loading: boolean;
  error?: any; // Optional error property
}

const initialState: InitialStateType = {
  posts: [],
  loading: true,
};

export default function postListReducer(
  state: InitialStateType = initialState,
  action: any // Replace 'any' with the actual type of your actions
): InitialStateType {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
    case POSTS_ERROR:
      return {
        ...state, // Spread the existing state to preserve other properties
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
