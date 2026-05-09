const stats = [
  { value: "365", label: "함께한 기간" },
  { value: "6", label: "만든 육아 자료" },
  { value: "7", label: "개최한 모임" },
  { value: "67", label: "참여한 엄마" },
];

const resources = [
  {
    title: "옥수금호 소아과 추천리뷰",
    date: "25.08.11.",
    tag: "소아과",
    desc: "동네 엄마들의 실제 경험을 모아 아이가 아플 때 빠르게 참고할 수 있는 소아과 추천 리뷰입니다.",
    image: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=80",
    file: "자료/(20250811) 옥수금호_소아과_추천리뷰.pdf",
  },
  {
    title: "옥수금호 인근 키즈카페 정리",
    date: "25.09.01.",
    tag: "키즈카페",
    desc: "옥수금호 근처 키즈카페의 위치와 특징을 한눈에 비교해 외출 고민을 줄여주는 자료입니다.",
    image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=80",
    file: "자료/(20250901) 옥수금호 인근 키즈카페 정리.pdf",
  },
  {
    title: "우리방 통계 이모저모 1",
    date: "25.10.23.",
    tag: "통계",
    desc: "성별, 월별, 이름, 출산나이, 거주지까지 옥금방 100명의 특징을 재미있게 풀어낸 통계 자료입니다.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    file: "자료/(20251023) 우리방이모저모(성별,월별,이름,출산나이,거주지_100명기준).jpg",
  },
  {
    title: "우리방 통계 이모저모 2",
    date: "25.11.06.",
    tag: "통계",
    desc: "부모 출산나이, 부부 나이차이, 둘째 계획을 통해 우리 방의 육아 흐름을 살펴본 통계 기록입니다.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    file: "자료/(20251106) 우리방이모저모(부모출산나이,부부나이차이,둘째계획).jpg",
  },
  {
    title: "25년 옥금방 육아생활백서",
    date: "25.12.31.",
    tag: "육아백서",
    desc: "2025년 옥금방에서 나눈 육아 정보와 생활 팁을 한 권처럼 엮어둔 연말 결산 백서입니다.",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=900&q=80",
    file: "자료/(20251231) 25년_옥금방_육아생활백서_v2.pdf",
  },
  {
    title: "우리방 MBTI 궁합표",
    date: "26.01.18.",
    tag: "MBTI",
    desc: "옥금방 엄마들의 MBTI 조합을 가볍고 유쾌하게 살펴보는 관계 궁합표입니다.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    file: "자료/(20260118) 우리방 MBTI궁합표.jpg",
  },
];

const parties = [
  {
    date: "25.08.15.(금) 오후 3시",
    title: "육아 광복절",
    desc: "처음으로 육아에서 잠깐 해방되어 치킨 앞에 모였던 옥금방의 기념비적인 첫 모임.",
    people: "13명 참석",
    place: "금호역 BHC",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "25.10.03.(금) 오후 5시",
    title: "고기 파티",
    desc: "고기 굽는 소리와 수다가 같이 익어가던, 든든하고 배부른 저녁 모임.",
    people: "8명 참석",
    place: "금호동 소담갈비",
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80",
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
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "26.02.22.(일) 오후 6시",
    title: "26년 두번째 정모",
    desc: "주말 저녁, 고기와 근황 토크로 에너지를 충전했던 두 번째 정모.",
    people: "37명 참석",
    place: "신금호 금호돼지집",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "26.03.20.(금) 오후 8시",
    title: "26년 세번째 정모",
    desc: "숯불닭갈비 앞에서 육아 고민도 웃음도 적당히 매콤하게 풀렸던 모임.",
    people: "24명 참석",
    place: "금남시장 강너머남촌 숯불닭갈비",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
  },
  {
    date: "26.04.18.(토) 오후 6시",
    title: "26년 네번째 정모",
    desc: "작지만 밀도 있게, 서로의 봄 근황을 나누며 다음 만남을 기약한 네 번째 정모.",
    people: "10명 참석",
    place: "금호동 비기",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
  },
];

const gallery = parties.map((party) => ({
  category: party.title,
  title: `${party.title} · ${party.place}`,
  image: party.image,
}));

const awards = [
  { icon: "🏆", title: "올해의 자료왕", desc: "호기심을 그냥 넘기지 않고 모두가 볼 수 있는 자료로 남긴 옥금방의 기록 정신." },
  { icon: "💬", title: "올해의 수다력", desc: "짧은 질문도 긴 위로도 자연스럽게 오가게 만든 옥금방의 따뜻한 대화력." },
  { icon: "☕", title: "올해의 정모력", desc: "한 번 모이기 시작하니 7번이나 만난, 생각보다 실행력 있는 엄마들의 힘." },
  { icon: "✨", title: "올해의 생존력", desc: "울고 웃고 검색하고 공유하며 결국 1년을 함께 건너온 우리 모두에게 주는 상." },
];

const statGrid = document.querySelector("#statGrid");
const resourceGrid = document.querySelector("#resourceGrid");
const timeline = document.querySelector("#timeline");
const filterBar = document.querySelector("#filterBar");
const galleryGrid = document.querySelector("#galleryGrid");
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
      <article class="timeline-item">
        <div class="timeline-card">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <div>
            <p class="date">${item.date} · ${item.people}</p>
            <h3>${item.title}</h3>
            <p>${item.place}</p>
            <p>${item.desc}</p>
          </div>
        </div>
      </article>
    `
  )
  .join("");

const categories = ["전체", ...new Set(gallery.map((item) => item.category))];

filterBar.innerHTML = categories
  .map(
    (category, index) =>
      `<button class="filter-button ${index === 0 ? "is-active" : ""}" type="button" data-category="${category}">${category}</button>`
  )
  .join("");

function renderGallery(category = "전체") {
  const selected = category === "전체" ? gallery : gallery.filter((item) => item.category === category);
  galleryGrid.innerHTML = selected
    .map(
      (item) => `
        <button class="gallery-card" type="button" data-image="${item.image}" data-title="${item.title}">
          <img src="${item.image}" alt="${item.title}" loading="lazy" />
          <span>${item.title}</span>
        </button>
      `
    )
    .join("");
}

renderGallery();

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-button");
  if (!button) return;

  document.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
  button.classList.add("is-active");
  renderGallery(button.dataset.category);
});

galleryGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".gallery-card");
  if (!card) return;

  lightboxImage.src = card.dataset.image;
  lightboxImage.alt = card.dataset.title;
  lightboxCaption.textContent = card.dataset.title;
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
      </article>
    `
  )
  .join("");
