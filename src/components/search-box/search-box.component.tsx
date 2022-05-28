import React from "react";
import { ChangeEventHandler } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({className, placeholder, onChangeHandler}: SearchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
      autoFocus
    />
  );
};

export default SearchBox;