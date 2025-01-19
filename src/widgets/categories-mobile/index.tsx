import { useCategories } from "@/entities/categories/api/queries";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import styles from "./categories-mobile.module.scss";
import classNames from "classnames";
import Drawer from "@/shared/ui/drawer";

export default function CategoriesMobile() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <button
        className={styles["button"]}
        onClick={() => setIsDrawerOpen(true)}
      >
        Категории
      </button>

      <Drawer
        title="Категории"
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
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
      </Drawer>
    </div>
  );
}
