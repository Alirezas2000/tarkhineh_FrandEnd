import React from 'react';

function Branches() {
  return (
    <section id="branches__main" className="branches">
      <h3 className="branches__title">ترخینه گردی</h3>
      <div className="branches__container">
        <div className="branches__cart">
          <img className="baranches__cart--image" src="/images/PNG/makan.png" alt="ونک" />
          <div className="bs__cart--info">
            <div className="bs__cart--title">شعبه ونک</div>
            <div className="bs__cart--description">میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶</div>
          </div>
          <a className="branches__cart--link">
            <button className="branches__cart--btn_more">صفحه شعبه</button>
          </a>
        </div>
        <div className="branches__cart">
          <img className="baranches__cart--image" src="/images/PNG/makan.png" alt="اقدسیه" />
          <div className="bs__cart--info">
            <div className="bs__cart--title">شعبه اقدسیه</div>
            <div className="bs__cart--description">خیابان اقدسیه، نرسیده به میدان خیام، پلاک ۸</div>
          </div>
          <a href="#" className="branches__cart--link">
            <button className="branches__cart--btn_more">صفحه شعبه</button>
          </a>
        </div>
        <div className="branches__cart">
          <img className="baranches__cart--image" src="/images/PNG/makan.png" alt="چالوس" />
          <div className="bs__cart--info">
            <div className="bs__cart--title">شعبه چالوس</div>
            <div className="bs__cart--description">چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی</div>
          </div>
          <a href="#" className="branches__cart--link">
            <button className="branches__cart--btn_more">صفحه شعبه</button>
          </a>
        </div>
        <div className="branches__cart">
          <img className="baranches__cart--image" src="/images/PNG/makan.png" alt="اکباتان" />
          <div className="bs__cart--info">
            <div className="bs__cart--title">شعبه اکباتان</div>
            <div className="bs__cart--description">شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم</div>
          </div>
          <a className="branches__cart--link">
            <button className="branches__cart--btn_more">صفحه شعبه</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Branches;