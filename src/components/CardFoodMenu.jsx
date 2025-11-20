import React from 'react';

function CardFoodMenu({ product }) {
    if (!product) return null;

    const hasDiscount = product.old_price && product.discount_percent;

    return (
        <div className='food__card'>
            <img
                src={``}
                alt={product.name}
                className="food-image"
            />
            <div className='food__info'>
                <div className='wrapper__food--top'>
                    <h6 className='food__card-title'>{product.name}</h6>
                </div>

                <div className='wrapper__food--main'>
                    <p className="Food__raw__materials">{product.ingredients}</p>

                    <div className="wrapper__food__main--price">
                        {hasDiscount ? (
                            <div className="food__offer">
                                <p className="old__price"><s>{product.old_price.toLocaleString()}</s></p>
                                <div className="price__offer">
                                    <p className="alert__offer">%</p>
                                    <p className="num__offer">{product.discount_percent}</p>
                                </div>
                            </div>
                        ) : null}

                        <div className="price__bottom">
                            <p className="new__price">{product.new_price.toLocaleString()}</p>
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