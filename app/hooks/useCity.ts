const koreaCities = [
  {
    label: "포천시",
    value: "pocheon",
    region: "경기도",
  },
  {
    label: "가평군",
    value: "hwaseong",
    region: "경기도",
  },
  {
    label: "연천군",
    value: "yeoncheon",
    region: "경기도",
  },
  {
    label: "용인시",
    value: "yongin",
    region: "경기도",
  },
  {
    label: "파주시",
    value: "paju",
    region: "경기도",
  },
  {
    label: "양평군",
    value: "yangpyeong",
    region: "경기도",
  },
  {
    label: "동두천시",
    value: "dongducheon",
    region: "경기도",
  },
  {
    label: "양주시",
    value: "yangju",
    region: "경기도",
  },
  {
    label: "남양주시",
    value: "namyangju",
    region: "경기도",
  },
  {
    label: "화성시",
    value: "hwaseong",
    region: "경기도",
  },
  {
    label: "안성시",
    value: "anseong",
    region: "경기도",
  },
  {
    label: "여주시",
    value: "yeoju",
    region: "경기도",
  },
  {
    label: "평택시",
    value: "pyeongtaek",
    region: "경기도",
  },
  {
    label: "하남시",
    value: "hanam",
    region: "경기도",
  },
  {
    label: "광주시",
    value: "gwangju",
    region: "경기도",
  },
  {
    label: "안산시",
    value: "ansan",
    region: "경기도",
  },
  {
    label: "성남시",
    value: "seongnam",
    region: "경기도",
  },
  {
    label: "강화군",
    value: "ganghwa",
    region: "인천시",
  },
  {
    label: "영월군",
    value: "yeongwol",
    region: "강원도",
  },
  {
    label: "평창군",
    value: "pyeongchang",
    region: "강원도",
  },
  {
    label: "홍천군",
    value: "hongcheon",
    region: "강원도",
  },
  {
    label: "원주시",
    value: "wonju",
    region: "강원도",
  },
  {
    label: "횡성군",
    value: "hoengseong",
    region: "강원도",
  },
  {
    label: "춘천시",
    value: "chuncheon",
    region: "강원도",
  },
  {
    label: "인제군",
    value: "inje",
    region: "강원도",
  },
  {
    label: "화천군",
    value: "hwacheon",
    region: "강원도",
  },
  {
    label: "양양군",
    value: "yangyang",
    region: "강원도",
  },
  {
    label: "철원군",
    value: "cheorwon",
    region: "강원도",
  },
  {
    label: "고성군",
    value: "goseong-gangwon",
    region: "강원도",
  },
  {
    label: "강릉시",
    value: "gangneung",
    region: "강원도",
  },
  {
    label: "양구군",
    value: "yanggu",
    region: "강원도",
  },
  {
    label: "정선군",
    value: "jeongseon",
    region: "강원도",
  },
  {
    label: "동구",
    value: "donggu-daejeon",
    region: "대전광역시",
  },
  {
    label: "연서면",
    value: "yeonseo",
    region: "세종특별자치시",
  },
  {
    label: "제천시",
    value: "jecheon",
    region: "충청북도",
  },
  {
    label: "충주시",
    value: "chungju",
    region: "충청북도",
  },
  {
    label: "괴산군",
    value: "goesan",
    region: "충청북도",
  },
  {
    label: "진천군",
    value: "jincheon",
    region: "충청북도",
  },
  {
    label: "보은군",
    value: "boeun",
    region: "충청북도",
  },
  {
    label: "단양군",
    value: "danyang",
    region: "충청북도",
  },
  {
    label: "청주시",
    value: "cheongju",
    region: "충청북도",
  },
  {
    label: "음성군",
    value: "eumseong",
    region: "충청북도",
  },
  {
    label: "태안군",
    value: "taean",
    region: "충청남도",
  },
  {
    label: "공주시",
    value: "gongju",
    region: "충청남도",
  },
  {
    label: "예산군",
    value: "yesan",
    region: "충청남도",
  },
  {
    label: "천안시",
    value: "cheonan",
    region: "충청남도",
  },
  {
    label: "홍성군",
    value: "hongseong",
    region: "충청남도",
  },
  {
    label: "아산시",
    value: "asan",
    region: "충청남도",
  },
  {
    label: "논산시",
    value: "nonsan",
    region: "충청남도",
  },
  {
    label: "금산군",
    value: "geumsan",
    region: "충청남도",
  },
  {
    label: "보령시",
    value: "boryeong",
    region: "충청남도",
  },
  {
    label: "서천군",
    value: "seocheon",
    region: "충청남도",
  },
  {
    label: "서산시",
    value: "seosan",
    region: "충청남도",
  },
  {
    label: "청양군",
    value: "cheongyang",
    region: "충청남도",
  },
  {
    label: "청도군",
    value: "cheongdo",
    region: "경상북도",
  },
  {
    label: "경주시",
    value: "gyeongju",
    region: "경상북도",
  },
  {
    label: "고령군",
    value: "goryeong",
    region: "경상북도",
  },
  {
    label: "문경시",
    value: "mungyeong",
    region: "경상북도",
  },
  {
    label: "김천시",
    value: "gimcheon",
    region: "경상북도",
  },
  {
    label: "칠곡군",
    value: "chilgok",
    region: "경상북도",
  },
  {
    label: "영천시",
    value: "yeongcheon",
    region: "경상북도",
  },
  {
    label: "영주시",
    value: "yeongju",
    region: "경상북도",
  },
  {
    label: "봉화군",
    value: "bonghwa",
    region: "경상북도",
  },
  {
    label: "성주군",
    value: "seongju",
    region: "경상북도",
  },
  {
    label: "군위군",
    value: "gunwi",
    region: "경상북도",
  },
  {
    label: "의성군",
    value: "uiseong",
    region: "경상북도",
  },
  {
    label: "포항시",
    value: "pohang",
    region: "경상북도",
  },
  {
    label: "구미시",
    value: "gumi",
    region: "경상북도",
  },
  {
    label: "경산시",
    value: "gyeongsan",
    region: "경상북도",
  },
  {
    label: "예천군",
    value: "yecheon",
    region: "경상북도",
  },
  {
    label: "밀양시",
    value: "miryang",
    region: "경상남도",
  },
  {
    label: "산청군",
    value: "sancheong",
    region: "경상남도",
  },
  {
    label: "거창군",
    value: "geochang",
    region: "경상남도",
  },
  {
    label: "합천군",
    value: "hapcheon",
    region: "경상남도",
  },
  {
    label: "창녕군",
    value: "changnyeong",
    region: "경상남도",
  },
  {
    label: "거제시",
    value: "geoje",
    region: "경상남도",
  },
  {
    label: "남해군",
    value: "namhae",
    region: "경상남도",
  },
  {
    label: "고성군",
    value: "goseong-gyeongnam",
    region: "경상남도",
  },
  {
    label: "진주시",
    value: "jinju",
    region: "경상남도",
  },
  {
    label: "함안군",
    value: "haman",
    region: "경상남도",
  },
  {
    label: "사천시",
    value: "sacheon",
    region: "경상남도",
  },
  {
    label: "통영시",
    value: "tongyeong",
    region: "경상남도",
  },
  {
    label: "의령군",
    value: "uiryeong",
    region: "경상남도",
  },
  {
    label: "양산시",
    value: "yangsan",
    region: "경상남도",
  },
  {
    label: "하동군",
    value: "hadong",
    region: "경상남도",
  },
  {
    label: "함양군",
    value: "hamyang",
    region: "경상남도",
  },
  {
    label: "창원시",
    value: "changwon",
    region: "경상남도",
  },
  {
    label: "진안군",
    value: "jinan",
    region: "전라북도",
  },
  {
    label: "부안군",
    value: "buan",
    region: "전라북도",
  },
  {
    label: "정읍시",
    value: "jeongeup",
    region: "전라북도",
  },
  {
    label: "완주군",
    value: "wanju",
    region: "전라북도",
  },
  {
    label: "익산시",
    value: "iksan",
    region: "전라북도",
  },
  {
    label: "남원시",
    value: "namwon",
    region: "전라북도",
  },
  {
    label: "고창군",
    value: "gochang",
    region: "전라북도",
  },
  {
    label: "무주군",
    value: "muju",
    region: "전라북도",
  },
  {
    label: "김제시",
    value: "gimje",
    region: "전라북도",
  },
  {
    label: "장수군",
    value: "jangsu",
    region: "전라북도",
  },
  {
    label: "곡성군",
    value: "gokseong",
    region: "전라남도",
  },
  {
    label: "신안군",
    value: "sinan",
    region: "전라남도",
  },
  {
    label: "장성군",
    value: "jangseong",
    region: "전라남도",
  },
  {
    label: "장흥군",
    value: "jangheung",
    region: "전라남도",
  },
  {
    label: "보성군",
    value: "boseong",
    region: "전라남도",
  },
  {
    label: "광양시",
    value: "gwangyang",
    region: "전라남도",
  },
  {
    label: "순천시",
    value: "suncheon",
    region: "전라남도",
  },
  {
    label: "완도군",
    value: "wando",
    region: "전라남도",
  },
  {
    label: "여수시",
    value: "yeosu",
    region: "전라남도",
  },
  {
    label: "함평군",
    value: "hampyeong",
    region: "전라남도",
  },
  {
    label: "화순군",
    value: "hwasun",
    region: "전라남도",
  },
  {
    label: "담양군",
    value: "damyang",
    region: "전라남도",
  },
  {
    label: "강진군",
    value: "gangjin",
    region: "전라남도",
  },
  {
    label: "구례군",
    value: "gurye",
    region: "전라남도",
  },
  {
    label: "고흥군",
    value: "goheung",
    region: "전라남도",
  },
  {
    label: "영광군",
    value: "yeonggwang",
    region: "전라남도",
  },
  {
    label: "무안군",
    value: "muan",
    region: "전라남도",
  },
  {
    label: "나주시",
    value: "naju",
    region: "전라남도",
  },
  {
    label: "제주시",
    value: "jeju",
    region: "제주특별자치도",
    ratLng: "33.458554/126.526306",
  },
  {
    label: "서귀포시",
    value: "seogwipo",
    region: "제주특별자치도",
    ratLng: "33.29709/126.554666",
  },
];

const useCities = () => {
  const getAll = () => koreaCities;

  const getByValue = (value: string) => {
    return koreaCities.find((item) => item.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};

export default useCities;
