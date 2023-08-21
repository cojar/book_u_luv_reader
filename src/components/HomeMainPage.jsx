const HomeMainPage = () => {
  const fontFaceStyle = `
    @font-face {
      font-family: 'KyoboHandwriting2022khn';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/KyoboHandwriting2022khn.woff2') format('woff2');
      font-weight: normal;
      font-style: normal;
    }
  `;

  return (
    <section>
      <style>{fontFaceStyle}</style>
      <div className="flex flex-col justify-center items-center">
        <span className="mb-8" style={{ fontFamily: 'KyoboHandwriting2022khn', fontSize: '3rem' }}>
          환영합니다.
        </span>
        <span className="mb-8" style={{ fontFamily: 'KyoboHandwriting2022khn', fontSize: '3rem' }}>
          구매한 책을 볼 수 있는
        </span>
        <span className="mb-8" style={{ fontFamily: 'KyoboHandwriting2022khn', fontSize: '3rem' }}>
          Book U Luv reader
        </span>
        <span className="mb-8" style={{ fontFamily: 'KyoboHandwriting2022khn', fontSize: '3rem' }}>
          책 읽기 여행으로 떠나 보시죠!!
        </span>
      </div>
    </section>
  );
};

export default HomeMainPage;