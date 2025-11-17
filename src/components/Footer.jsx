// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__image">
        <section className="section__footer">
          <div className="left__footer">
            <h4 className="left__footer--title">پیام به ترخینه</h4>
            <div className="into__info">
              <div className="into__info--right">
                <input type="text" placeholder="نام خود را وارد کنید" className="info__right" />
                <input type="text" placeholder="نام خانوادگی خود را وارد کنید" className="info__right family" />
                <input type="text" placeholder="ایمیل خود را وارد کنید (اختیاری)" className="info__right" />
              </div>
              <div className="into__info--left">
                <textarea placeholder="پیام شما" className="info__left"></textarea>
              </div>
            </div>
            <button type="submit" className="footer__submit">ارسال پیام</button>
          </div>
          <div className="right__footer">
            <div className="easy__access">
              <p className="easy__access--title">دسترسی آسان</p>
              <div className="easy__access--links">
                <a href="#" className="easy__access--link"><p>پرسش‌های متداول</p></a>
                <a href="#" className="easy__access--link"><p>قوانین ترخینه</p></a>
                <a href="#" className="easy__access--link"><p>حریم خصوصی</p></a>
              </div>
              <div className="easy__access--icons">
                <a className="easy__access__icon"><img src="/images/PNG/icon_insta.png" alt="اینستاگرام" /></a>
                <a className="easy__access__icon"><img src="/images/PNG/icon_tel.png" alt="تلگرام" /></a>
                <a className="easy__access__icon"><img src="/images/PNG/icon_x.png" alt="ایکس" /></a>
              </div>
            </div>
            <div className="branches__footer">
              <h3 className="branches__footer--title">شعبه‌های ترخینه</h3>
              <div className="easy__access--links">
                <a href="#" className="branches__footer--link"><p>شعبه اکباتان</p></a>
                <a href="#" className="branches__footer--link"><p>شعبه چالوس</p></a>
                <a href="#" className="branches__footer--link"><p>شعبه اقدسیه</p></a>
                <a href="#" className="branches__footer--link"><p>شعبه ونک</p></a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;