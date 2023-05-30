import { useState } from "react";
import { Button } from "../button/Button";
import "./SearchInput.css";

export interface SearchInputProps {
  onSearch?: (searchKey: string) => Promise<any>;
}

export const SearchInput = (props: SearchInputProps) => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (keyword: string) => {
    setLoading(true);
    props.onSearch && props.onSearch(keyword).finally(() => setLoading(false));
  };

  return (
    <div className="search-input">
      <input
        className="input"
        placeholder="Search for a name..."
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value.trim());
        }}
      />
      <Button
        label="search"
        onClick={() => handleSearch(searchKey)}
        loading={loading}
      />
      <Button
        label="clear"
        onClick={() => {
          setSearchKey("");
          handleSearch("");
        }}
        loading={loading}
      />
    </div>
  );
};
