import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "./CollectionItem";

import data from "../assets/data/data.json";
import styles from "./Collections.module.css";
import closeIcon from "../assets/images/icon-close.svg";
import React from "react";
import { Product } from "../utils/models/Product.model";

export default function Collections() {
  const [collections, setCollection] = useState<Product[]>([]);
  const [filteredCollections, setFilteredCollection] = useState<Product[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCollection(() => data.data as Product[]);
    const tags = new Set(data.data.map((item: Product) => item.tags).flat());
    setTags(Array.from(tags) as string[]);
  }, []);

  useEffect(() => {
    setFilteredCollection(() => {
      if (!selectedTags.length) {
        return [...collections];
      }
      return collections.filter((collection) =>
        collection.tags.find((itemTag) => selectedTags.includes(itemTag))
      );
    });
  }, [selectedTags, collections]);

  const handleNavigate = (id: string) => {
    navigate(`/${id}`);
  };

  const addTagHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tag = event.target.value;
    if (!selectedTags.includes(tag) && tags.includes(tag)) {
      setSelectedTags((tags) => [...tags, tag]);
    }
  };

  const removeTagHandler = (tag: string) => {
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
