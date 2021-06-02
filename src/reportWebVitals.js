const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry); //cumulative layout shift 광고가 많거나, 컨텐츠 위치가 왔다갔다... 등 측정하는 지표(클릭 미스율)
      getFID(onPerfEntry); // first input delay 웹페이지의 반응성 이벤트가 시작되는데 얼마나 걸려?
      getFCP(onPerfEntry); // first contentful paint 브라우저가 화면에 그려지기 시작한 시간측정 지표
      getLCP(onPerfEntry); // largets contentful paint 웹페이지에서 가장 큰 덩어리를 그리는데 걸리는 시간
      getTTFB(onPerfEntry); //time to first byte 서버사이드렌더링,프리렌더링떄 반드시 체크
    });
  }
};

export default reportWebVitals;
