
// 🚀 React Slick 관련 import 추가
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // slick-carousel 기본 CSS
import "slick-carousel/slick/slick-theme.css"; // slick-carousel 테마 CSS


const Banner = () => {
    
      // 🚀 슬라이더에 사용할 이미지 배열 (네가 원하는 이미지 경로로 바꿔줘!)
    const bannerImages = [
        `${process.env.PUBLIC_URL}/images/banner-01.webp`, // 첫 번째 배너 이미지
        `${process.env.PUBLIC_URL}/images/banner-02.webp`, // 두 번째 배너 이미지
        `${process.env.PUBLIC_URL}/images/banner-03.webp`, // 세 번째 배너 이미지
        `${process.env.PUBLIC_URL}/images/banner-04.webp`, // 네 번째 배너 이미지
    ];
        const sliderSettings = {
        dots: true,           // 슬라이더 아래에 점(dot) 내비게이션 표시
        infinite: true,       // 슬라이드가 끝없이 반복되도록 설정
        speed: 500,           // 슬라이드 전환 속도 (밀리초)
        slidesToShow: 1,      // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1,    // 한 번에 스크롤될 슬라이드 개수
        autoplay: true,       // 자동 재생 활성화
        autoplaySpeed: 3000,  // 각 슬라이드가 보여지는 시간 (3초)
        cssEase: "linear"     // 슬라이드 전환 애니메이션 효과
    };

    return (
        <div>
            <div className="banner-slider"> {/* 슬라이더를 감싸는 div (스타일링 용이) */}
                <Slider {...sliderSettings}>
                    {bannerImages.map((imgSrc, index) => (
                        <div key={index}>
                            <img 
                                src={imgSrc} 
                                alt={`배너 이미지 ${index + 1}`} 
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            {/* <img src={`${process.env.PUBLIC_URL}/images/banner.png`} alt="흰색 커튼에 햇살이 비추는 배너 이미지"/> */}
        </div>
    );
};

export default Banner;