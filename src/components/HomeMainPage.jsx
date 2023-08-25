import { useEffect, useState } from "react";

const HomeMainPage = () => {
  const [fontSize, setFontSize] = useState('3rem');

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth <= 600) { //브라우저 화면 넓이가 600보자 작을때 1rem 폰트 사이즈
        setFontSize('1rem'); 
      } else {
        setFontSize('2rem'); // 아닐시 2rem 크기
      }
    };

    handleResize(); //handleResize 실행
    window.addEventListener('resize', handleResize); // 초기 로드 및 화면 크기 변경 시 이벤트 리스너 등록
      
    // 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section>
      <style>
        {`
          @font-face {
            font-family: 'KyoboHandwriting2022khn';
            src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KyoboHandwriting2022khn.woff2') format('woff2');
            font-weight: normal;
            font-style: normal;
          }
        `}
      </style>
      <div className="flex flex-col justify-center items-center text-center">
        <span className="mb-4 md:mb-8" style={{ fontFamily: 'KyoboHandwriting2022khn', fontSize}}>
          환영합니다.
        </span>
        <span className="mb-4 md:mb-8" style={{ fontFamily: 'KyoboHandwriting2022khn', fontSize}}>
          구매한 책을 볼 수 있는
        </span>
        <span className="mb-4 md:mb-8" style={{ fontFamily: 'KyoboHandwriting2022khn', fontSize}}>
          Book U Luv reader
        </span>
        <span className="mb-4 md:mb-8" style={{ fontFamily: 'KyoboHandwriting2022khn', fontSize}}>
          책 읽기 여행으로 떠나 보시죠!!
        </span>
      </div>
    </section>
  );
};

export default HomeMainPage;