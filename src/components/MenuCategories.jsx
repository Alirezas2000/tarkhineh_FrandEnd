import React from 'react';

function MenuCategories() {
  return (
    <section id="menu__top" className="menu__wrapper">
      <div className="menu__title">
        <h3>منو رستوران</h3>
      </div>
      <div className="Products__category">
        <div className="cart">
          <a className="cart--link" href="#">
            <div className="cart--image"><img src="/images/PNG/livan.png" alt="نوشیدنی" /></div>
            <div className="cart--title"><h4>نوشیدنی</h4></div>
          </a>
        </div>
        <div className="cart">
          <a className="cart--link" href="#">
            <div className="cart--image food"><img src="/images/PNG/deser.png" alt="دسر" /></div>
            <div className="cart--title"><h4>دسر</h4></div>
          </a>
        </div>
        <div className="cart">
          <a className="cart--link" href="#">
            <div className="cart--image food"><img src="/images/PNG/pish ghaza.png" alt="پیش غذا" /></div>
            <div className="cart--title"><h4>پیش غذا</h4></div>
          </a>
        </div>
        <div className="cart">
          <a className="cart--link" href="#">
            <div className="cart--image food"><img src="/images/PNG/deser.png" alt="غذای اصلی" /></div>
            <div className="cart--title"><h4>غذای اصلی</h4></div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MenuCategories;