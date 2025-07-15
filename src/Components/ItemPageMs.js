import { useEffect } from "react";
import Itemsinfo from "./Itemsinfo";

const ItemPageMs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ image1.webp ~ image11.webp 배열 자동 생성
  const imageList = Array.from({ length: 11 }, (_, i) => `image${i + 1}.webp`);

  return (
    <>
      <Itemsinfo />
      <div className="ms">
        {imageList.map((img, idx) => (
          <img
            key={idx}
            src={`${process.env.PUBLIC_URL}/images/item-MS/${img}`}
            alt={`상세 이미지 ${idx + 1}`}
            className="ms-image"
            loading="lazy"
          />
        ))}
      </div>
    </>
  );
};

export default ItemPageMs;
