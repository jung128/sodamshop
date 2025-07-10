
import React from 'react';
import '../styles/instagram.scss'

const Instagram = ({ products }) => {
  return (
    <section className="instagram">
      <h2 className="instagram__title">Instagram</h2>
      <div className="instagram__grid">
        {products.map((item) => (
          <div className="instagram__item" key={item.product_id}>
            {/* <img src={item.main_image_url} alt={item.product_name} /> */}
            <img
              src={`${process.env.PUBLIC_URL}${item.main_image_url}`}
              alt={item.product_name}
            />
            <p className="instagram__caption">@insta-id</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instagram;

