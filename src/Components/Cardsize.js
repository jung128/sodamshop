import React, { useState } from 'react';
import '../styles/cardeasy.scss'; // 스타일 파일 경로 확인

const Cardsize = ({ products, onAddToCart }) => {
  const [showMsg, setShowMsg] = useState({});

  const handleAddClick = (product) => {
    onAddToCart(product);
    setShowMsg(prev => ({ ...prev, [product.product_id]: true }));
    
    setTimeout(() => {
      setShowMsg(prev => ({ ...prev, [product.product_id]: false }));
    }, 2000);
  };

  return (
    <section className="cardeasy">
      <h2 className="cardeasy__title">Trendy &gt; size</h2>
      <div className="cardeasy__list">
        {products.map(product => (
          <div className="cardeasy__item" key={product.product_id}>
            <div className="cardeasy__image">
              <img
                src={`${process.env.PUBLIC_URL}${product.main_image_url}`}
                alt={product.product_name}
              />
              <div className="cardeasy__badge">40%</div>
            </div>

            <h3 className="cardeasy__name">{product.product_name}</h3>

            {product.category && (
              <p className="cardeasy__category">{product.category}</p>
            )}

            <p className="cardeasy__price">
              {(typeof product.price === 'number' ? product.price : 0).toLocaleString()}원
            </p>

            {product.material && (
              <p className="cardeasy__material">재질: {product.material}</p>
            )}

            {product.color && (
              <p className="cardeasy__color">색상: {product.color}</p>
            )}

            {showMsg[product.product_id] && (
              <div className="popup-msg">장바구니에 담겼습니다</div>
            )}

            <button 
              className="cardeasy__button"
              onClick={() => handleAddClick(product)}
            >
              + Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cardsize;