var storySteps = [
  "ຫັ່ນແນ່ ສົງໄສຫຍັງນໍ້ຄົນສວຍຍຍ",
  "ອະໆ ບອກກະໄດ້ ແຕ່ຫ້າມມໃຫ້ໃຜອ່ານນຳເດີ້ ສັນຍາເດີ້",
  "ບໍ່ໃຫ້ໃຜອ່ານນຳແທ້ໆ ແລ້ວແມ່ນບໍ່",
  "ຈະເວົ້າແນວໃດດີ... 💌",
];
var storyLetterParagraphs = [
  "ຈະເວົ້າແນວໃດດີ... ກ່ອນອື່ນເລີຍ ເຂົາດີໃຈຫຼາຍແທ້ໆ ທີ່ໄດ້ຮູ້ຈັກຈອມຂວັນ ບໍ່ເຄີຍຄິດມາກ່ອນເລີຍວ່າມື້ໜຶ່ງຈະໄດ້ມານັ່ງຂຽນຂໍ້ຄວາມແບບນີ້ເຖິງຈອມຂວັນ 555 ຂໍໃຫ້ອ່ານໄປຊ້າໆເດີ ເພາະເຂົາຢາກເລົ່າທຸກຢ່າງໃຫ້ຟັງ",
  'ຕັ້ງແຕ່ຕອນທີ່ຮຽນຢູ່ຫອມມະໂນໃໝ່ໆ ເຫັນຈອມຂວັນຄັ້ງແລກເຂົາກໍຮູ້ສຶກແລ້ວວ່າ "ຄົນນີ້ໜ້າຮັກດີແທ້" ແຕ່ຍິ່ງໄດ້ຮຽນນຳກັນເລື້ອຍໆ ກໍຍິ່ງບໍ່ກ້າເຂົ້າໄປທັກ ເພາະປົກກະຕິເຂົາກໍເປັນຄົນທີ່ບໍ່ຄ່ອຍທັກໃຜກ່ອນຢູ່ແລ້ວ 🤣(ຂີ້ອາຍແນ່ແລະ 555) ແລ້ວກໍໄດ້ແຕ່ຄິດໃນໃຈວ່າ ຄົນໜ້າຮັກແບບນີ້ ຄົງມີແຟນແລ້ວແຫຼະ. ແຕ່ເວລາຜ່ານໄປ ເຂົາກໍໄດ້ຮູ້ຈັກຈອມຂວັນຫຼາຍຂຶ້ນໆ ຮູ້ວ່າຈອມຂວັນມັກຫຍັງ ຮັກການຮຽນ ຮຽນເກັ່ງ ແຖມຍັງໜ້າຮັກອີກ 🤭🤭 ທຸກຢ່າງທີ່ໄດ້ຮູ້ ມັນຄ່ອຍໆເຮັດໃຫ້ເຂົາຊື່ນຊົມຈອມຂວັນຫຼາຍຂຶ້ນທຸກມື້ ໂດຍທີ່ເຂົາເອງກໍບໍ່ທັນຮູ້ໂຕ.',
  'ແຕ່ຈຸດທີ່ຄວາມຮູ້ສຶກມັນ "ຫຼົງ/ບູມ" ແທ້ໆ ແມ່ນຕອນທີ່ຈອມຂວັນເອົາປຶ້ມມາໃຫ້ເຂົາຢືມອ່ານນັ້ນແຫຼະ. ຕອນທຳອິດເຂົາຄິດວ່າຈອມຂວັນເວົ້າຫຼິ້ນໆ ຄົງຈະລືມ ແລະ ຄົງບໍ່ໄດ້ເກັບເອົາໄປໃສ່ໃຈ ແຕ່ຈອມຂວັນກໍເອົາມາໃຫ້ແທ້ໆ. ເຊື່ອບໍ່ວ່າ ມື້ນັ້ນເປັນມື້ທີ່ສຳຄັນຫຼາຍສຳລັບເຂົາ ເປັນໜຶ່ງໃນຈຸດທີ່ເຮັດໃຫ້ເຂົາມີຄວາມຮູ້ສຶກ.....ແບບນີ້ຕໍ່ຈອມຂວັນ. ມັນເປັນຄັ້ງທຳອິດທີ່ເຂົາຕັ້ງໃຈອ່ານໜັງສືແທ້ໆ ແລະຫຼັງຈາກນັ້ນເຂົາກໍຕິດການອ່ານເລີຍ ຈົນຮອດທຸກມື້ນີ້. ເລື່ອງນ້ອຍໆຂອງຈອມຂວັນ ກາຍເປັນສິ່ງທີ່ປ່ຽນນິໄສຂອງເຂົາໄດ້ແທ້ໆ.',
  "ແລ້ວກໍມີຕອນກິນລ້ຽງປີໃໝ່ທີ່ຫອມມະໂນ ທີ່ເຮົາໄດ້ຖ່າຍຮູບຄູ່ກັນເປັນຄັ້ງທຳອິດ. ຕອນນັ້ນເຮັດໃຫ້ເຂົາຮູ້ສຶກຫຼາຍກວ່າເກົ່າອີກ ຮູບນັ້ນເຂົາຍັງເກັບໄວ້ ບໍ່ເຄີຍລົບເລີຍ ເປັນຄວາມຊົງຈຳດີໆທີ່ຢູ່ກັບເຂົາມາຕະຫຼອດ. ຮູບໃບດຽວ ແຕ່ມີຄວາມໝາຍກັບເຂົາຫຼາຍກວ່າທີ່ຄິດ.",
  "ມີອີກເລື່ອງໜຶ່ງທີ່ເຂົາເສຍດາຍມາຕະຫຼອດ ຄືຕອນຮຽນຈົບຮັບໃບປະກາດພາສາອັງກິດ ເຂົາບໍ່ກ້າພໍທີ່ຈະເຂົ້າໄປຂໍຖ່າຍຮູບນຳຈອມຂວັນ ເລີຍບໍ່ໄດ້ເກັບຄວາມຊົງຈຳຂອງມື້ນັ້ນໄວ້ເລີຍ ໜ້າເສຍດາຍແທ້ໆ. ແຕ່ພໍມາຮອດມື້ຮັບໃບປະກາດຈົບ ມຊ ຈອມຂວັນເປັນຄົນຊວນເຂົາໄປຖ່າຍຮູບນຳເອງ ເຂົາບໍ່ເຄີຍຄິດເລີຍວ່າຈະມີມື້ແບບນັ້ນ ຮູ້ບໍ່ວ່າເຂົາດີໃຈຫຼາຍຈົນບອກບໍ່ຖືກ ຄືໄດ້ມື້ນັ້ນຄືນມາແທນມື້ທີ່ພາດໄປ.",
  "ເວົ້າຕົງໆເລີຍເນີ້ ຕັ້ງແຕ່ມື້ທີ່ໄດ້ຮູ້ຈັກຈົນຮອດມື້ນີ້ ເຂົາກໍຍັງມັກຈອມຂວັນຢູ່ຄືເກົ່າ. ໂດຍສະເພາະຊ່ວງຮັບໃບປະກາດຈົບ ມຊ ນີ້ ເຂົາຍິ່ງຫຼົງຈອມຂວັນໜັກກວ່າເກົ່າອີກ 555",
  "ຈອມຂວັນອາດຈະສົງໄສຕອນອ່ານມາຮອດບ່ອນນີ້ວ່າ ເຂົານອກໃຈແຟນບໍ? ເຂົານິໄສເປັນແບບນີ້ບໍ? ມີແຟນຢູ່ແລ້ວ ແຕ່ຍັງໄປຮູ້ສຶກກັບຄົນອື່ນ. ຢາກໃຫ້ຈອມຂວັນຮູ້ໄວ້ວ່າ ທຸກສິ່ງທີ່ເກີດຂຶ້ນນີ້ ເຂົາຮັບຮູ້ຕະຫຼອດ ເຂົາຮູ້ດີວ່າມັນບໍ່ຖືກຕໍ່ຊີວິດຄູ່ຂອງເຂົາ ແລະເຂົາກໍບໍ່ໄດ້ຢາກຮູ້ສຶກແບບນີ້ໄປເລື້ອຍໆ. ເຂົາຮູ້ໂຕເອງດີວ່າຜິດ ແຕ່ກໍຢາກບອກໄວ້ ເພື່ອໃຫ້ທຸກເລື່ອງມັນໄດ້ຈົບລົງຢ່າງຈິງໃຈ. ຫວັງວ່າຈອມຂວັນຈະບໍ່ເຂົ້າໃຈຜິດເດີ 😊",
  "ປົກກະຕິເຂົາເປັນຄົນທີ່ບໍ່ເຄີຍບອກໃຜຕົງໆວ່າມັກ ແລະກໍເສຍດາຍທີ່ບໍ່ໄດ້ບອກຈອມຂວັນໄວກວ່ານີ້ ເພາະບໍ່ໄດ້ມີຄວາມຮູ້ສືກ Fall in Love ນີ້ມາດົນນ. ນີ້ເປັນຄັ້ງທຳອິດເລີຍກໍວ່າໄດ້.",
  "ແຕ່ຫຼັງຈາກນີ້ ເຖິງເຂົາຈະຍັງມັກຈອມຂວັນຢູ່ ເຂົາກໍຈະບໍ່ໄປລົບກວນ ແລະບໍ່ຕ້ອງການຫຍັງຈາກຈອມຂວັນເລີຍ. ເຂົາຍັງຈະກົດໃຈໃຫ້ຢູ່ໄອຈີຄືເກົ່າ 🤣😂 ຄອຍເປັນກຳລັງໃຈຢູ່ຫ່າງໆ ແລ້ວກໍຈະກັບໄປປັບປຸງຊີວິດຄູ່ຂອງເຂົາໃຫ້ດີຂຶ້ນກວ່າເກົ່າ. ເວົ້າງ່າຍໆກໍຄື ຈອມຂວັນຈະຍັງເປັນໄອດອນຂອງເຂົາ ທີ່ເຂົາຈະຄອຍຊື່ນຊົມຜົນງານຂອງຈອມຂວັນໃນທຸກໆຢ່າງ ບໍ່ວ່າຈະເປັນຫຍັງໃນອະນາຄົດ.",
  "ຍິ້ມຫຼາຍໆເດີ ຍິ້ມນ້ອຍໆຂອງຈອມຂວັນເໝາະກັບຈອມຂວັນທີ່ສຸດແລ້ວ. ຊ່ວງທີ່ຜ່ານມາ ເຂົາມີຄວາມສຸກຫຼາຍແທ້ໆ ຂອບໃຈຈອມຂວັນຫຼາຍໆ ທີ່ເຂົ້າມາເປັນຄວາມຊົງຈຳທີ່ດີໃນຊີວິດຂອງເຂົາ. ເຂົາມັກ/ຮັກຈອມຂວັນແທ້ໆ ບໍ່ໄດ້ຕົວະເລີຍ ແຕ່ຈະບໍ່ໃຫ້ມັນກະທົບຊີວິດຄູ່ຂອງເຂົາ ແລະຈະບໍ່ໄປກວນຊີວິດຂອງຈອມຂວັນ.",
  "ສຸດທ້າຍນີ້ ເຂົາກະບໍ່ແນ່ໃຈວ່າຈອມຂວັນຈະເຂົ້າມາອ່ານຂໍ້ຄວາມນີ້ບໍ່ ແຕ່ເຂົາກະຊິພີມໄວ້ນີ້ ເພື່ອບອກໂຕເອງວ່າເຄີຍເຮັດແບບນີ້ 5555",
  "ສຸດທ້າຍນີ້ແທ້ໆ ເຂົາອາດຈະບໍ່ໄດ້ຢູ່ໃນສາຍຕາຂອງຈອມຂວັນເລີຍກໍໄດ້ ແຕ່ບໍ່ຕ້ອງຕອບຫຍັງເລີຍເດີ ເຂົາແຄ່ຢາກໃຫ້ຈອມຂວັນຮູ້ເທົ່ານັ້ນ. ຂໍໃຫ້ຈອມຂວັນມີແຕ່ຄວາມສຸກ ແລະໄດ້ເຈິແຕ່ສິ່ງດີໆທຸກວັນ. ຍິ້ມຫຼາຍໆເດີ ຄົນທີ່ໜ້າຮັກທີ່ສຸດໃນໃຈຂ້ອຍ 🫶🏻🩷",
];
var storyChoices = [
  [
    {
      label: "ຢາກຮູ້ຢູ່ 🤭",
      reply: "ຫູຍ ຢາກຮູ້ຫຼາຍເນາະ ຊັ້ນອ່ານຕໍ່ເລີຍເດີ້ 💌",
    },
    {
      label: "ບໍ່ບອກດອກ 🙈",
      reply: "ອ້າວວ ບໍ່ຢາກຮູ້ກໍບໍ່ເປັນຫຍັງ… ແຕ່ຢູ່ອ່ານນຳກັນກ່ອນເດີ້ 🥺",
    },
  ],
  [
    {
      label: "ສັນຍາແລ້ວ 🤞",
      reply: "ເກັ່ງຫຼາຍ ຄົນຮູ້ໃຈແບບນີ້ຕ້ອງໄດ້ລາງວັນແລ້ວ 💗",
    },
    {
      label: "ຂໍບອກຕໍ່ແນ່ 🤫",
      reply: "ບໍ່ໄດ້ເດີ້ ນີ້ຄວາມລັບຂອງເຮົາສອງຄົນ ສັນຍາກ່ອນເນາະ 🙈",
    },
  ],
  [
    {
      label: "ແມ່ນແລ້ວ 🤭",
      reply: "ໂອເຄ ເຊື່ອກໍໄດ້… ແຕ່ຍິ້ມຫວານໆໃຫ້ກັນກ່ອນເດີ້ 😊",
    },
    {
      label: "ກໍອາດຈະມີນ້ອຍ 😝",
      reply: "ຈັບໄດ້ແລ້ວ! ຮູ້ຢູ່ວ່າຕ້ອງມີຄົນແອບອ່ານ 😆💕",
    },
  ],
];
var storyCard = document.querySelector(".story-card");
var storyOpen = document.querySelector("#homeStoryOpen, #storyOpen");
var storyText = storyCard.querySelector(".story-card-text");
var storyLetter = storyCard.querySelector(".story-letter");
var storyLetterBody = storyCard.querySelector(".story-letter-body");
var storyReactionReply = storyCard.querySelector(".story-reaction-reply");
var storyActions = storyCard.querySelector(".story-actions");
var storyProgress = storyCard.querySelectorAll(".story-progress span");
var storyStep = 0;
var answerSelected = false;
var finalReaction = null;
var storyAnimationTimer;

function buildLetterContent() {
  storyLetterBody.replaceChildren();

  // 1. Stationery Vintage Air Mail Header
  var letterHead = document.createElement("div");
  letterHead.className = "letter-stationery-header";
  letterHead.innerHTML = `
    <div class="letter-stamp-box">
      <div class="letter-postmark">AIR MAIL · CONFIDENTIAL</div>
      <div class="letter-stamp">🌸</div>
    </div>
    <div class="letter-to-badge">
      <span class="to-label">TO:</span>
      <span class="to-name">ຈອມຂວັນ [CK] 🌷</span>
    </div>
  `;
  storyLetterBody.appendChild(letterHead);

  // 2. Tender Intro Greeting
  var introCard = document.createElement("div");
  introCard.className = "letter-intro-card";
  introCard.innerHTML = `
    <div class="intro-quote-badge">💌 ຄວາມໃນໃຈທີ່ຢາກເລົ່າໃຫ້ຟັງ</div>
    <p>${storyLetterParagraphs[0]}</p>
  `;
  storyLetterBody.appendChild(introCard);

  // 3. Mini-Polaroids 3-Photo Gallery Strip
  var galleryEl = document.createElement("div");
  galleryEl.className = "story-letter-gallery";
  galleryEl.innerHTML = `
    <figure class="story-letter-photo polaroid-1">
      <img src="assets/images/photo-01.jpg" alt="ມື້ຮັບໃບປະກາດ 🎓">
      <figcaption>ມື້ຮັບໃບປະກາດ 🎓</figcaption>
    </figure>
    <figure class="story-letter-photo polaroid-2">
      <img src="assets/images/photo-02.jpg" alt="ຍິ້ມໜ້າຮັກ 🌸">
      <figcaption>ຍິ້ມໜ້າຮັກ 🌸</figcaption>
    </figure>
    <figure class="story-letter-photo polaroid-3">
      <img src="assets/images/photo-03.jpg" alt="ຄວາມຊົງຈຳດີໆ 🤍">
      <figcaption>ຄວາມຊົງຈຳດີໆ 🤍</figcaption>
    </figure>
  `;
  storyLetterBody.appendChild(galleryEl);

  // 4. Chapter 1: ຕອນຮຽນຫອມມະໂນ & ຕອນຢືມປຶ້ມ
  var memorySection = document.createElement("div");
  memorySection.className = "letter-memory-card";
  memorySection.innerHTML = `
    <div class="memory-tag"><span>🏫</span> ຄວາມຊົງຈຳຕອນຢູ່ຫອມມະໂນ</div>
    <p class="memory-p">${storyLetterParagraphs[1]}</p>
    <div class="memory-highlight-book">
      <div class="highlight-book-title">📖 ຈຸດເລີ່ມຕົ້ນທີ່ເຮັດໃຫ້ຄວາມຮູ້ສຶກ "ບູມ" ແທ້ໆ</div>
      <p>${storyLetterParagraphs[2]}</p>
    </div>
  `;
  storyLetterBody.appendChild(memorySection);

  // 4. Chapter 2: ຮູບຄູ່ & ມື້ຮັບໃບປະກາດ
  var photoMemorySection = document.createElement("div");
  photoMemorySection.className = "letter-memory-card";
  photoMemorySection.innerHTML = `
    <div class="memory-tag"><span>📸</span> ຮູບຄູ່ທຳອິດ & ມື້ຮັບໃບປະກາດ</div>
    <p class="memory-p">${storyLetterParagraphs[3]}</p>
    <div class="memory-highlight-grad">
      <div class="highlight-grad-title">🎓 ມື້ຮັບໃບປະກາດຈົບ ມຊ ທີ່ບໍ່ມີວັນລືມ</div>
      <p>${storyLetterParagraphs[4]}</p>
    </div>
  `;
  storyLetterBody.appendChild(photoMemorySection);

  // 5. Chapter 3: ຄວາມຈິງໃຈ & ການເດີນທາງຕໍ່ໄປ
  var feelingSection = document.createElement("div");
  feelingSection.className = "letter-memory-card sincere-card";
  feelingSection.innerHTML = `
    <div class="memory-tag"><span>🤍</span> ຄວາມຈິງໃຈຈາກໃຈຈິງ</div>
    <p class="memory-p font-medium text-pink-900">${storyLetterParagraphs[5]}</p>
    <div class="sincere-confession-box">
      <p>${storyLetterParagraphs[6]}</p>
    </div>
    <p class="memory-p">${storyLetterParagraphs[7]}</p>
    <div class="support-distant-box">
      <p>${storyLetterParagraphs[8]}</p>
    </div>
  `;
  storyLetterBody.appendChild(feelingSection);

  // 6. Chapter 4: ຄຳອວຍພອນສຸດທ້າຍ & ຮອຍຍິ້ມທີ່ງົດງາມ
  var wishSection = document.createElement("div");
  wishSection.className = "letter-final-wish-card";
  wishSection.innerHTML = `
    <div class="wish-sparkle-pill">✨ ຮອຍຍິ້ມຂອງຈອມຂວັນ ✨</div>
    <p class="wish-lead">${storyLetterParagraphs[9]}</p>
    <div class="wish-floral-divider">🌸 · ✧ · 🌷 · ✧ · 🌸</div>
    <p class="wish-end">${storyLetterParagraphs[10]}</p>
    <p class="wish-end">${storyLetterParagraphs[11]}</p>
    <div class="letter-signature-box">
      <span class="sig-seal">🤍</span>
      <span class="sig-from">— ຈາກ... ຄົນທີ່ອວຍພອນບໍ່ເກັ່ງ ແຕ່ຕັ້ງໃຈທີ່ສຸດ</span>
    </div>
  `;
  storyLetterBody.appendChild(wishSection);
}

buildLetterContent();

function animateStoryChange() {
  storyCard.classList.remove("is-changing");
  void storyCard.offsetWidth;
  storyCard.classList.add("is-changing");
  clearTimeout(storyAnimationTimer);
  storyAnimationTimer = setTimeout(function () {
    storyCard.classList.remove("is-changing");
  }, 500);
}

function setStoryText(message) {
  storyText.textContent = message;
  animateStoryChange();
}

function createStoryButton(label, className, onClick) {
  var button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.addEventListener("click", onClick);
  storyActions.appendChild(button);
}

function confettiParty() {
  var emojis = ["🌸", "✨", "💗", "🎉", "🎀", "🌷", "⭐", "💕"];
  for (var i = 0; i < 35; i++) {
    var s = document.createElement("span");
    s.className = "c";
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.left = Math.random() * 100 + "vw";
    s.style.animationDuration = 1.8 + Math.random() * 2 + "s";
    s.style.animationDelay = Math.random() * 0.4 + "s";
    document.body.appendChild(s);
    setTimeout(function (el) { el.remove(); }, 4500, s);
  }
}

function renderStoryActions() {
  storyActions.replaceChildren();

  if (storyStep < storyChoices.length && !answerSelected) {
    storyActions.className = "story-actions story-choices-grid";
    storyChoices[storyStep].forEach(function (choice) {
      createStoryButton(choice.label, "story-choice", function () {
        answerSelected = true;
        setStoryText(choice.reply);
        renderStoryActions();
        var nextBtn = storyActions.querySelector("button");
        if (nextBtn) nextBtn.focus();
      });
    });
    return;
  }

  if (storyStep === storySteps.length - 1 && finalReaction === null) {
    storyActions.className = "story-actions story-reactions-wrap";

    var promptText = document.createElement("p");
    promptText.className = "story-reaction-prompt";
    promptText.innerHTML = "💌 <span>ກົດບອກຄວາມຮູ້ສຶກໃຫ້ເຂົາຮູ້ແນ່ເດີ</span> 💌";
    storyActions.appendChild(promptText);

    var btnsContainer = document.createElement("div");
    btnsContainer.className = "story-reactions-btns";

    function addReaction(emoji, label, message) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "story-reaction-card";
      btn.innerHTML = `<span class="reaction-emoji">${emoji}</span><span class="reaction-label">${label}</span>`;
      btn.setAttribute("aria-label", label);
      btn.addEventListener("click", function () {
        chooseFinalReaction(message);
        confettiParty();
      });
      btnsContainer.appendChild(btn);
    }

    addReaction("💗", "ຍິ້ມແລ້ວເດີ", "ເຫັນຫົວໃຈແລ້ວ ຮູ້ເລີຍວ່າຍິ້ມຢູ່ 💗");
    addReaction("😂", "ຫົວເລີຍ", "ຫົວແລ້ວແມ່ນບໍ່ ຢ່າລືມຍິ້ມໃຫ້ເຂົານຳເດີ້ 😂");
    addReaction("🥺", "ຊາບຊຶ້ງຫຼາຍ", "ໂອ໋ ຢ່າເຮັດໜ້າອ້ອນແບບນັ້ນ 🥺💕");

    storyActions.appendChild(btnsContainer);
    return;
  }

  storyActions.className = "story-actions story-next-grid";
  createStoryButton(
    storyStep === storySteps.length - 1 ? "ປິດກາດ 💗" : "ໄປຕໍ່ 💗",
    "story-next",
    function () {
      if (storyStep === storySteps.length - 1) {
        storyCard.close();
        return;
      }
      storyStep++;
      answerSelected = false;
      renderStoryStep();
    },
  );
}

function chooseFinalReaction(message) {
  finalReaction = message;
  storyReactionReply.textContent = message;
  storyReactionReply.hidden = false;
  renderStoryActions();
  storyActions.querySelector("button").focus();
  storyCard.scrollTop = storyCard.scrollHeight;
}

function renderStoryStep() {
  var isLetterPage = storyStep === storySteps.length - 1;
  storyCard.classList.toggle("has-letter", isLetterPage);
  storyText.hidden = isLetterPage;
  storyLetter.hidden = !isLetterPage;
  storyCard.querySelector(".story-sticker").hidden = isLetterPage;
  storyReactionReply.hidden = true;
  storyReactionReply.textContent = "";
  if (!isLetterPage) storyText.textContent = storySteps[storyStep];
  storyProgress.forEach(function (dot, index) {
    dot.classList.toggle("active", index === storyStep);
  });
  renderStoryActions();
  animateStoryChange();
  if (isLetterPage) {
    storyCard.scrollTop = 0;
    setTimeout(function () {
      storyCard.scrollTop = 0;
    }, 10);
    setTimeout(function () {
      storyCard.scrollTop = 0;
    }, 60);
  } else {
    storyCard.scrollTop = 0;
    if (storyCard.open) {
      var btn = storyActions.querySelector("button");
      if (btn) btn.focus();
    }
  }
}

storyOpen.addEventListener("click", function () {
  storyStep = 0;
  answerSelected = false;
  finalReaction = null;
  storyCard.classList.remove("has-letter");
  storyText.hidden = false;
  storyLetter.hidden = true;
  storyReactionReply.hidden = true;
  renderStoryStep();
  storyCard.showModal();
  if (storyOpen.hasAttribute("aria-expanded")) {
    storyOpen.setAttribute("aria-expanded", "true");
  }
  storyActions.querySelector("button").focus();
});

storyCard.querySelector(".story-close").addEventListener("click", function () {
  storyCard.close();
});

storyCard.addEventListener("click", function (event) {
  if (event.target === storyCard) storyCard.close();
});

storyCard.addEventListener("close", function () {
  if (storyOpen.hasAttribute("aria-expanded")) {
    storyOpen.setAttribute("aria-expanded", "false");
  }
  storyOpen.focus();
});
