import React, { useState, useEffect } from 'react';
import axios from "axios";
import CardFoodMenu from "./CardFoodMenu"; 

function MenuSection() {
  const [products, setProducts] = useState([]);

useEffect(() => {
  async function fetchData() {
    try {
      const { data } = await axios.get("http://127.0.0.1:8000/api/v1/product");
      console.log("دیتای خام از سرور:", data);

  
      const rawArray = Array.isArray(data?.data) ? data.data : [];

      if (!Array.isArray(rawArray)) {
        console.error("داده دریافتی آرایه نیست!", rawArray);
        setProducts([]);
        return;
      }

      const allData = rawArray.map((card) => ({
        id: card.id,
        name: card.name_food || "بدون نام",
        description: card.description_food || "بدون توضیحات",
        price: Number(card.price_food || 0),
        discount: Number(card.discount_food || 0),
        rank: card.rank_food || 0,
        image: card.img_food 
          ? `http://127.0.0.1:8000/storage/${card.img_food}` 
          : "https://via.placeholder.com/300x200.png?text=No+Image",
      }));

      console.log("محصولات آماده برای نمایش:", allData);
      setProducts(allData);

    } catch (error) {
      console.error("خطا در دریافت داده‌ها:", error.message);
      setProducts([]);
    }
  }
  fetchData();
}, []);


  return (
    <section className="menu__foods">
      <div className="menus__wrapper">
        <p className="title__menus">غذاهای ایرانی</p>

        <div className="menu__list">
          <div className="menu__list--left">
            {products.map((card) => (
              <CardFoodMenu key={card.id} card={card} />
            ))}
          </div>

          <div className="menu__list--right">
            {products.map((card) => (   
              <CardFoodMenu key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuSection;