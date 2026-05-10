const stats = [
  { value: "365", label: "함께한 기간" },
  { value: "152", label: "함께한 엄마" },
  { value: "7", label: "만든 육아 자료" },
  { value: "7", label: "개최한 모임" },
];

const resources = [
  {
    title: "옥수금호 소아과 추천리뷰",
    date: "25.08.11.",
    tag: "소아과",
    desc: "동네 엄마들의 실제 경험을 모아 아이가 아플 때 빠르게 참고할 수 있는 소아과 추천 리뷰입니다.",
    image: "assets/resource-pediatrics.png",
    file: "자료/(20250811) 옥수금호_소아과_추천리뷰.pdf",
  },
  {
    title: "옥수금호 인근 키즈카페 정리",
    date: "25.09.01.",
    tag: "키즈카페",
    desc: "옥수금호 근처 키즈카페의 위치와 특징을 한눈에 비교해 외출 고민을 줄여주는 자료입니다.",
    image: "assets/resource-kidscafe.png",
    file: "자료/(20250901) 옥수금호 인근 키즈카페 정리.pdf",
  },
  {
    title: "우리방 통계 이모저모 1",
    date: "25.10.23.",
    tag: "통계",
    desc: "성별, 월별, 이름, 출산나이, 거주지까지 옥금방 100명의 특징을 재미있게 풀어낸 통계 자료입니다.",
    image: "assets/resource-community-stats.png",
    file: "자료/(20251023) 우리방이모저모(성별,월별,이름,출산나이,거주지_100명기준).jpg",
  },
  {
    title: "우리방 통계 이모저모 2",
    date: "25.11.06.",
    tag: "통계",
    desc: "부모 출산나이, 부부 나이차이, 둘째 계획을 통해 우리 방의 육아 흐름을 살펴본 통계 기록입니다.",
    image: "assets/resource-family-stats.png",
    file: "자료/(20251106) 우리방이모저모(부모출산나이,부부나이차이,둘째계획).jpg",
  },
  {
    title: "25년 옥금방 육아생활백서",
    date: "25.12.31.",
    tag: "육아백서",
    desc: "2025년 옥금방에서 나눈 육아 정보와 생활 팁을 한 권처럼 엮어둔 연말 결산 백서입니다.",
    image: "assets/resource-handbook.png",
    file: "자료/(20251231) 25년_옥금방_육아생활백서_v2.pdf",
  },
  {
    title: "우리방 MBTI 궁합표",
    date: "26.01.18.",
    tag: "MBTI",
    desc: "옥금방 엄마들의 MBTI 조합을 가볍고 유쾌하게 살펴보는 관계 궁합표입니다.",
    image: "assets/resource-mbti.png",
    file: "자료/(20260118) 우리방 MBTI궁합표.jpg",
  },
  {
    title: "우리방 통계 이모저모 3",
    date: "26.02.27.",
    tag: "통계",
    desc: "영유 입학, 사립초 지원, 교육 고민까지 옥금방 엄마들의 현실적인 생각을 유쾌하게 정리한 통계 자료입니다.",
    image: "assets/resource-education-stats.png",
    file: "자료/(20260227) 영유 뇌구조.jpg",
  },
];

const parties = [
  {
    date: "25.08.15.(금) 오후 3시",
    title: "육아 광복절",
    desc: "처음으로 육아에서 잠깐 해방되어 치킨 앞에 모였던 옥금방의 기념비적인 첫 모임.",
    people: "13명 참석",
    place: "금호역 BHC",
    image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "25.10.03.(금) 오후 5시",
    title: "고기 파티",
    desc: "고기 굽는 소리와 수다가 같이 익어가던, 든든하고 배부른 저녁 모임.",
    people: "8명 참석",
    place: "금호동 소담갈비",
    image: "assets/party-galbi.png",
  },
  {
    date: "25.12.06.(토) 오후 12시",
    title: "각잡고 송년회",
    desc: "한 해 동안 쌓인 육아 이야기를 피자와 함께 나누며 제대로 마무리한 송년회.",
    people: "29명 참석",
    place: "옥수동 펠즈피자",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "26.01.23.(금) 오후 8시",
    title: "26년 첫번째 정모",
    desc: "새해 첫 정모답게 반가운 얼굴과 새 다짐이 함께 모였던 밤.",
    people: "34명 참석",
    place: "금남사거리 만족오향족발",
    image: "assets/party-jokbal.png",
  },
  {
    date: "26.02.22.(일) 오후 6시",
    title: "26년 두번째 정모",
    desc: "주말 저녁, 고기와 근황 토크로 에너지를 충전했던 두 번째 정모.",
    people: "37명 참석",
    place: "신금호 금호돼지집",
    image: "assets/party-samgyeopsal.png",
  },
  {
    date: "26.03.20.(금) 오후 8시",
    title: "26년 세번째 정모",
    desc: "숯불닭갈비 앞에서 육아 고민도 웃음도 적당히 매콤하게 풀렸던 모임.",
    people: "24명 참석",
    place: "금남시장 강너머남촌 숯불닭갈비",
    image: "assets/party-dakgalbi.png",
  },
  {
    date: "26.04.18.(토) 오후 6시",
    title: "26년 네번째 정모",
    desc: "작지만 밀도 있게, 서로의 봄 근황을 나누며 다음 만남을 기약한 네 번째 정모.",
    people: "10명 참석",
    place: "금호동 비기",
    image: "assets/party-pho.png",
  },
];

const photoAlbums = [
  {
    title: "각잡고 송년회",
    desc: "식순, 포스터, 게임, 럭키박스까지 제대로 준비했던 옥금방 연말 행사.",
    photos: [
      { title: "송년회 식순 배너", src: "자료/00_배너_식순.png" },
      { title: "송년회 포스터", src: "자료/송년회_포스터.jpg" },
      { title: "송년회 게임", src: "자료/송년회_게임.jpg" },
      { title: "송년회 럭키박스", src: "자료/송년회_럭키박스.jpg" },
    ],
  },
  {
    title: "26년 첫번째 정모",
    desc: "새해 첫 모임의 반가운 얼굴들과 단체 기록.",
    photos: [
      { title: "1월 정모 1", src: "자료/2026.01월_1.jpg" },
      { title: "1월 전체 사진", src: "자료/1월_전체.jpg" },
    ],
  },
  {
    title: "26년 두번째 정모",
    desc: "두 번째 정모의 분위기와 함께 남은 장면들.",
    photos: [
      { title: "2월 정모 1", src: "자료/2026.02월_1.jpg" },
      { title: "2월 정모", src: "자료/2월.jpg" },
    ],
  },
  {
    title: "26년 세번째 정모",
    desc: "닭갈비, 게임, 제비뽑기까지 알차게 남은 세 번째 정모.",
    photos: [
      { title: "3월 정모", src: "자료/2026.03월.png" },
      { title: "3월 닭갈비", src: "자료/3월 닭갈비.jpg" },
    ],
  },
];

const awards = [
  {
    icon: "🏆",
    title: "옥금방 정보왕",
    desc: "궁금한 게 올라오면 경험담, 링크, 현실 조언까지 야무지게 얹어 옥금방의 검색 시간을 줄여준 든든한 정보력.",
    winner: "2월생 재준맘 · 3월생 선우맘 공동수상",
  },
  {
    icon: "💬",
    title: "옥금방 수다왕",
    desc: "조용한 단톡방도 슬쩍 깨우고, 사소한 이야기까지 편하게 이어지게 만든 옥금방의 대화 엔진.",
    winner: "9월생 가을맘",
  },
  {
    icon: "☕",
    title: "옥금방 참여왕",
    desc: "공지 확인부터 참석까지, 모임의 온도를 높여준 고마운 발걸음들. 덕분에 정모가 진짜 모임이 됐습니다.",
    winner: "5회 참석 4월생 하린맘 · 4월생 로건맘 · 6월생 지한맘 · 9월생 우주맘(운영진 제외)",
  },
  {
    icon: "✨",
    title: "옥금방 함께한상",
    desc: "질문하고 답하고 웃고 모이며 첫 1년을 함께 채워준 모두에게 드리는 가장 큰 상.",
    winner: "옥금방 모든 엄마들",
  },
];

const statGrid = document.querySelector("#statGrid");
const resourceGrid = document.querySelector("#resourceGrid");
const timeline = document.querySelector("#timeline");
const photoAlbum = document.querySelector("#photoAlbum");
const awardGrid = document.querySelector("#awardGrid");
const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightboxImage");
const lightboxCaption = document.querySelector("#lightboxCaption");
const lightboxClose = document.querySelector("#lightboxClose");

statGrid.innerHTML = stats
  .map((item) => `<article class="stat-card"><strong>${item.value}</strong><span>${item.label}</span></article>`)
  .join("");

resourceGrid.innerHTML = resources
  .map(
    (item) => `
      <article class="resource-card">
        <a href="${item.file}" target="_blank" rel="noopener" aria-label="${item.title} 파일 열기">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
        </a>
        <div class="resource-body">
          <span class="tag">${item.tag} · ${item.date}</span>
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <a class="resource-link" href="${item.file}" target="_blank" rel="noopener" aria-label="${item.title} 파일 열기">자료 열기</a>
        </div>
      </article>
    `
  )
  .join("");

timeline.innerHTML = parties
  .map(
    (item) => `
      <article class="party-card">
        <div class="party-image">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
        </div>
        <div class="party-body">
          <p class="date">${item.date} · ${item.people}</p>
          <h3>${item.title}</h3>
          <p class="place">${item.place}</p>
          <p>${item.desc}</p>
        </div>
      </article>
    `
  )
  .join("");

photoAlbum.innerHTML = photoAlbums
  .map(
    (album) => `
      <section class="album-section">
        <div class="album-heading">
          <h3>${album.title}</h3>
          <p>${album.desc}</p>
        </div>
        <div class="album-grid">
          ${album.photos
            .map(
              (photo) => `
                <button class="album-photo" type="button" data-image="${photo.src}" data-title="${album.title} · ${photo.title}">
                  <img src="${photo.src}" alt="${photo.title}" loading="lazy" />
                  <span>${photo.title}</span>
                </button>
              `
            )
            .join("")}
        </div>
      </section>
    `
  )
  .join("");

photoAlbum.addEventListener("click", (event) => {
  const photo = event.target.closest(".album-photo");
  if (!photo) return;

  lightboxImage.src = photo.dataset.image;
  lightboxImage.alt = photo.dataset.title;
  lightboxCaption.textContent = photo.dataset.title;
  lightbox.hidden = false;
});

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});

awardGrid.innerHTML = awards
  .map(
    (item) => `
      <article class="award-card">
        <div class="award-icon" aria-hidden="true">${item.icon}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <strong class="award-winner">${item.winner}</strong>
      </article>
    `
  )
  .join("");
