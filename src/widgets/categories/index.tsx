import { useCategories } from "@/entities/categories/api/queries";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./categories.module.scss";
import classNames from "classnames";

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { categories } = useCategories();

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (selectedCategory) {
      searchParams.set("category", selectedCategory);
    } else {
      searchParams.delete("category");
    }

    setSearchParams(searchParams);
  }, [selectedCategory, searchParams, setSearchParams]);

  return (
    <div className={styles["categories"]}>
      <div
        className={classNames(
          styles["category-item"],
          selectedCategory === null ? styles["active"] : ""
        )}
        onClick={() => setSelectedCategory(null)}
      >
        Все
      </div>
      {categories?.map((category) => (
        <div
          key={category.id}
          className={classNames(
            styles["category-item"],
            selectedCategory === category.name ? styles["active"] : ""
          )}
          onClick={() => handleSelect(category.name)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
}
