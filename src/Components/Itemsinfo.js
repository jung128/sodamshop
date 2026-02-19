import product from "../assets/product.json";
import { GoDownload } from "react-icons/go";
import { FaHeart } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

const Itemsinfo = () => {
  return (
    <div className="page-container">
      {/* ☆★☆★☆★ 경로 입력 ☆★☆★☆★ */}
      <p className="path">가구 〉 소파 〉 코지 소파</p>
      <div className="itempage-container">
        {/* 좌측: 이미지 */}
        <div className="image-container">
          <div className="itempage-image">
            {/* ☆★☆★☆★ 메인 이미지 경로 입력 ☆★☆★☆★ */}
            <img
              src={`${process.env.PUBLIC_URL}/images/item-MS/image1.webp`}
              alt="main image"
              className="main-image"
            />
            
          </div>
          {/* 작은 이미지들 */}
          <div className="color-images">
            {product.map((item) => (
              <div
                key={item}
                className="color-image-box"
              >
                {/* ☆★☆★☆★ 작은 이미지 경로 입력 ☆★☆★☆★ */}
                <img
                  src={`${process.env.PUBLIC_URL}/images/item-MS/image1.webp`}
                  alt="small images"
                  className="color-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 상세 정보 */}
        <div className="itempage-info">
          <p className="brand">Sodam</p>
          {/* ☆★☆★☆★ 제품 이름 입력 ☆★☆★☆★ */}
          <div className="pro-name">
            <h2>모디프 패브릭 스윙소파 3.5인</h2>
            <p><FaHeart /></p>
          </div>
          {/* ☆★☆★☆★ 평점 및 리뷰수 입력 ☆★☆★☆★ */}
          <div className="rating">
            <p><FaStar /> 4.5</p>
            <span style={{ textDecoration: 'underline' }}>15개 리뷰</span>
          </div>
          {/* ☆★☆★☆★ 할인 퍼센티지 및 가격 입력 ☆★☆★☆★ */}
          <p className="price-original">17% <span style={{ textDecoration: 'line-through' }}>994,000원</span></p>
          {/* ☆★☆★☆★ 가격 입력 ☆★☆★☆★ */}
          <div className="price-cou">
            <p>829,000원</p>
            <div className="coupon">
              <p>쿠폰받기</p>
              <GoDownload />
            </div>
          </div>
          <div className="benefits">
            <p>적립: 최대 12개월 무이자 할부</p>
            <p>배송: 혜택 5,000원 (상세보기)</p>
          </div>
          <div className="co-select">
            <button className="select-btn">색상 선택</button>
            <p>▼</p>
          </div>
          <div className="totalPay">
            <button className="cartPay">장바구니 담기</button>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};


export default Itemsinfo;