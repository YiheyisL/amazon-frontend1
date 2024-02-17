import React from "react";
import { categoryInfo } from "./categoryFullInfo";
import CategoryCard from "./CategoryCard";
import classes from "./catagory.module.css";
function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfo.map((infos) => (
        <CategoryCard data={infos} />
      ))}
    </section>
  );
}

export default Category;
