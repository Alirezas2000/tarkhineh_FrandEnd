
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const products = [
  {
    id: 1,
    title: "پیتزا سبزیجات",
    image: "/images/PNG/about.png",
    oldPrice: 100000,
    discount: 10,
    rating: 3,
    reviews: 20
  },
  {
    id: 2,
    title: "کوفته برنجی",
    image: "/images/PNG/Food_Picture1.png",
    oldPrice: 120000,
    discount: 15,
    rating: 4,
    reviews: 35
  }
];

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term === '') {
      setFilteredProducts([]);
      return;
    }

    const results = products.filter(p =>
      p.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(results);
  };

  const getNewPrice = (oldPrice, discount) => {
    return oldPrice - (oldPrice * discount / 100);
  };

  return (
    <>
      <Header />
      <section className="container__search__bax" style={{ display: 'block' }}>
        <div className="wrapper__search__bax">
          <div className="Search__result">
            <h5 className="Search__result--text">
              {filteredProducts.length === 0 && searchTerm ? '!موردی با این مشخصات پیدا نکردیم' : ''}
            </h5>
          </div>

          <div className="search__box">
            <button className="search__box--btn">
              <img className="search__box--icon" src="/images/PNG/search-normal.png" alt="Search" />
            </button>
            <input
              type="text"
              placeholder="جستجو"
              className="input__text"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <div className="image__search__bax">
            <img src="/images/PNG/Group.png" alt="Search" />
          </div>

          <div className="Search__products" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            {filteredProducts.map(product => (
              <div key={product.id} className="Search__products__cart">
                <div className="Search__products__cart--images">
                  <img className="Search__products__cart--image" src={product.image} alt={product.title} />
                </div>
                <div className="Search__products__cart--title">{product.title}</div>

                <div className="sp__wrapper">
                  <div className="sp__w-left">
                    <div className="price__top">
                      <div className="price__offer">
                        <p className="alert__offer">%</p>
                        <p className="num__offer">{product.discount}</p>
                      </div>
                      <p className="old__price"><s>{product.oldPrice.toLocaleString()}</s></p>
                    </div>
                    <div className="price__bottom">
                      <p className="toman__price">تومان</p>
                      <p className="new__price">
                        {getNewPrice(product.oldPrice, product.discount).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="sp__w-right">
                    <div className="favorite">
                      <svg className="heart-icon" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      <p className="favorite-text">افزودن به علاقه مندی ها</p>
                    </div>
                    <div className="rank">
                      <div className="rank__wrapper">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`star-icon ${i < product.rating ? 'filled' : ''}`} viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                        <h6 className="rank__numd">{product.rating}</h6>
                        <div className="num-rank">
                          <h6>({product.reviews} امتیاز)</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="send">افزودن به سبد خرید</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SearchPage;