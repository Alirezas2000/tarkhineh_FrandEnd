import React from 'react';

function About() {
  return (
    <section id="about__container" className="about__container">
      <div className="about__image">
        <div className="about__wrapper">
          <div className="about__icons">
            <div className="about__icons--top">
              <div className="left__icon--top">
                <img className="img__icon" src="/images/PNG/diagram.png" alt="کیفیت" />
                <p className="txt__icon">کیفیت بالای غذاها</p>
              </div>
              <div className="right__icon--down">
                <img src="/images/PNG/user__B.png" alt="پرسنل" />
                <p className="txt__icon">پرسنلی مجرب و حرفه‌ای</p>
              </div>
            </div>
            <div className="about__icons--down">
              <div className="left__icon--down">
                <img className="img__icon" src="/images/PNG/menu-board.png" alt="منو" />
                <p className="txt__icon">منوی متنوع</p>
              </div>
              <div className="right__icon--down">
                <img className="img__icon" src="/images/PNG/home-wifi.png" alt="محیط" />
                <p className="txt__icon">محیطی دلنشین و آرام</p>
              </div>
            </div>
          </div>
          <div className="about__den">
            <h3 className="about__den--title">رستوران‌های زنجیره‌ای ترخینه</h3>
            <p className="about__den--tozih">
              مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور شان شما عزیزان ارائه دهیم.
            </p>
            <a href="#"><button className="about__den--btn">&lt; اطلاعات بیشتر</button></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;