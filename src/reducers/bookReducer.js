import { v4 as uuidv4 } from "uuid";
import { BookActions } from "../actions/bookActions";

const bookReducer = (state, action) => {
  switch (action.type) {
    case BookActions.CREATE_BOOK:
      let newState = [
        ...state,
        { title: action.book.title, author: action.book.author, id: uuidv4() },
      ];

      return newState;

    case BookActions.REMOVE_BOOK:
      return state.filter((x) => x.id !== action.id);

    default:
      return state;
  }
};

export default bookReducer;
