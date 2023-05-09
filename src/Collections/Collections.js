import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "./CollectionItem";

import data from "../assets/data/data.json";
import styles from "./Collections.module.css";

export default function Collections() {
  const [collections, setCollection] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setCollection(data.data);
  }, []);

  const handleNavigate = (id) => {
    navigate(`/${id}`);
  };

  return (
    <main className={styles["collections"]}>
      {collections.map((collection) => (
        <CollectionItem
          onClick={handleNavigate}
          key={collection.id}
          item={collection}
        />
      ))}
    </main>
  );
}
