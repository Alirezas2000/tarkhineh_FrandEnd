import React from 'react';

function CardFoodMenu({ card }) {
  if (!card) return null;

  const hasDiscount = card.discount > 0;


  const finalPrice = hasDiscount
    ? Math.round(card.price * (100 - card.discount) / 100)
    : card.price;

  return (
    <div className="food__card">
      <img
        src={card.image}
        alt={card.name}               
        className="food-image"
      />

      <div className="food__info">
        <div className="wrapper__food--top">
          <h6 className="food__card-title">{card.name}</h6>  
        </div>

        <div className="wrapper__food--main">
          <p className="Food__raw__materials">
            {card.description || "بدون توضیحات"}
          </p>

          <div className="wrapper__food__main--price">
            {hasDiscount && (
              <div className="food__offer">
                <p className="old__price">
                  <s>{card.price.toLocaleString("fa-IR")}</s>
                </p>
                <div className="price__offer">
                  <p className="alert__offer">%</p>
                  <p className="num__offer">{card.discount}</p> 
                </div>
              </div>
            )}

            <div className="price__bottom">
              <p className="new__price">
                {finalPrice.toLocaleString("fa-IR")}  
              </p>
              <p className="toman__price">تومان</p>
            </div>
          </div>
        </div>

        <div className="wrapper__food--botten">
          <button type="button" className="add__to__cart send">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardFoodMenu;