import {
  FETCH_QUOTE_START,
  FETCH_QUOTE_SUCCESS,
  FETCH_QUOTE_FAILURE,
} from "../actions";

const initialState = {
  isLoading: false,
  quoteData: [],
  error: "",
  click: 0
};

export const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUOTE_START:
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        case FETCH_QUOTE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                quoteData: action.payload
            }
        case FETCH_QUOTE_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
