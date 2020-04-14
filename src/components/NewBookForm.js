import React, { useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { BookActions } from "../actions/bookActions";

export const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: BookActions.CREATE_BOOK,
          book: { title: title, author: author },
        });
        setTitle("");
        setAuthor("");
      }}
    >
      <input
        type="text"
        value={title}
        required
        placeholder="Book title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        value={author}
        required
        placeholder="Book author"
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input type="submit" value="Add book" />
    </form>
  );
};
