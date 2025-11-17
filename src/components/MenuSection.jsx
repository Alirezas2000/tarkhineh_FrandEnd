import React from "react";
import CardFoodMenu from "./CardFoodMenu";
import { useUserContext } from "../userContext/UserContext";

function MenuSection() {
  const { data, isloading, error } = useUserContext();

  

  const products = data?.products || [];

  return (
    <section className="menu__foods">
      <div className="menus__wrapper">
        <p className="title__menus">غذا های ایرانی</p>

        <div className="menu__list">
          <div className="menu__list--left">
            {products
              .filter((_, i) => i % 2 === 0)
              .map((product) => (
                <CardFoodMenu key={product.id} product={product} />
              ))}
          </div>

          <div className="menu__list--right">
            {products
              .filter((_, i) => i % 2 === 1)
              .map((product) => (
                <CardFoodMenu key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;
