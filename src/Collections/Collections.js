import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "./CollectionItem";

import data from "../assets/data/data.json";
import styles from "./Collections.module.css";
import closeIcon from "../assets/images/icon-close.svg";

export default function Collections() {
  const [collections, setCollection] = useState([]);
  const [filteredCollections, setFilteredCollection] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCollection(data.data);
    const tags = new Set(data.data.map((item) => item.tags).flat());
    setTags(Array.from(tags));
  }, []);

  useEffect(() => {
    setFilteredCollection(() => {
      if (!selectedTags.length) {
        return [...collections];
      }
      return collections.filter(
        (collection) =>
          !!collection.tags.find((itemTag) => selectedTags.includes(itemTag))
      );
    });
  }, [selectedTags, collections]);

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  const addTagHandler = (event) => {
    const tag = event.target.value;
    if (!selectedTags.includes(tag) && tags.includes(tag)) {
      setSelectedTags((tags) => [...tags, tag]);
    }
  };

  const removeTagHandler = (tag) => {
    setSelectedTags((tags) => tags.filter((item) => item !== tag));
  };

  return (
    <main className={styles["collections"]}>
      <select
        className={styles["collections__filter-options"]}
        onChange={addTagHandler}
      >
        <option
          className={styles["collections__filter-options__value"]}
          value=""
        >
          No tag selected
        </option>
        {tags.map((tag) => (
          <option
            className={styles["collections__filter-options__value"]}
            key={tag}
            value={tag}
          >
            {tag}
          </option>
        ))}
      </select>
      <div className={styles["selected-tag--container"]}>
        {selectedTags.map((tag) => (
          <div key={tag} className={styles["selected-tag"]}>
            <div>{tag}</div>
            <button onClick={() => removeTagHandler(tag)}>
              <img src={closeIcon} alt={tag} />
            </button>
          </div>
        ))}
      </div>
      {filteredCollections.map((collection) => (
        <CollectionItem
          onClick={handleNavigate}
          key={collection.id}
          item={collection}
        />
      ))}
    </main>
  );
}
