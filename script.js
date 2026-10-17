const menuData = {
  coffee: [
    { name: "اسپرسو", description: "قهوه‌ای غلیظ با کرمای خوش‌عطر", price: "۸۵ هزار تومان" },
    { name: "آمریکانو", description: "اسپرسو و آب داغ؛ ساده و متعادل", price: "۹۵ هزار تومان" },
    { name: "کاپوچینو", description: "اسپرسو، شیر بخارداده و فوم لطیف", price: "۱۲۵ هزار تومان" },
    { name: "لاته", description: "ترکیب نرم اسپرسو و شیر گرم", price: "۱۳۰ هزار تومان" },
    { name: "فلت وایت", description: "اسپرسوی دوبل با شیر مخملی", price: "۱۳۵ هزار تومان" },
    { name: "موکا", description: "قهوه، شکلات و شیر بخارداده", price: "۱۴۵ هزار تومان" },
    { name: "کارامل ماکیاتو", description: "اسپرسو، شیر و سس کارامل", price: "۱۵۰ هزار تومان" },
    { name: "قهوه دمی روز", description: "قهوه تخصصی دم‌آوری‌شده با V60", price: "۱۴۰ هزار تومان" },
    { name: "هات چاکلت", description: "شکلات گرم و غلیظ با فوم شیر", price: "۱۳۰ هزار تومان" }
  ],
  cold: [
    { name: "آیس آمریکانو", description: "اسپرسو و آب خنک با یخ", price: "۱۱۰ هزار تومان" },
    { name: "آیس لاته", description: "اسپرسو و شیر سرد روی یخ", price: "۱۴۰ هزار تومان" },
    { name: "آیس موکا", description: "شکلات، اسپرسو و شیر خنک", price: "۱۵۰ هزار تومان" },
    { name: "آیس کارامل ماکیاتو", description: "شیر، اسپرسو و کارامل سرد", price: "۱۵۵ هزار تومان" },
    { name: "لیموناد پیانو", description: "لیمو تازه، نعناع و آب گازدار", price: "۱۲۵ هزار تومان" },
    { name: "موهیتو", description: "نعناع تازه، لیمو و یخ", price: "۱۳۵ هزار تومان" },
    { name: "شیک شکلات", description: "بستنی، شیر و شکلات", price: "۱۶۵ هزار تومان" },
    { name: "شیک وانیل", description: "بستنی وانیلی و شیر خنک", price: "۱۵۵ هزار تومان" },
    { name: "چای سرد هلو", description: "چای دم‌کرده با طعم هلو", price: "۱۲۰ هزار تومان" }
  ],
  tea: [
    { name: "چای ایرانی", description: "چای خوش‌رنگ و تازه‌دم", price: "۷۵ هزار تومان" },
    { name: "چای ارل‌گری", description: "چای سیاه با عطر برگاموت", price: "۹۰ هزار تومان" },
    { name: "چای ماسالا", description: "چای هندی با ادویه و شیر", price: "۱۲۵ هزار تومان" },
    { name: "چای سبز", description: "چای سبز سبک و آرامش‌بخش", price: "۹۰ هزار تومان" },
    { name: "دمنوش آرامش", description: "ترکیب بابونه، به‌لیمو و گل‌گاوزبان", price: "۱۱۰ هزار تومان" },
    { name: "دمنوش نعناع", description: "نعناع خوش‌عطر و تازه‌دم", price: "۹۵ هزار تومان" },
    { name: "دمنوش بهارنارنج", description: "عطری دلنشین برای یک عصر آرام", price: "۱۱۰ هزار تومان" },
    { name: "چای دارچین", description: "چای سیاه همراه چوب دارچین", price: "۹۵ هزار تومان" },
    { name: "شیر عسل", description: "شیر گرم، عسل طبیعی و دارچین", price: "۱۰۰ هزار تومان" }
  ],
  cake: [
    { name: "چیزکیک نیویورکی", description: "چیزکیک لطیف با سس میوه", price: "۱۶۵ هزار تومان" },
    { name: "کیک شکلاتی", description: "کیک مرطوب شکلاتی با گاناش", price: "۱۵۰ هزار تومان" },
    { name: "کیک هویج", description: "کیک خانگی هویج و گردو", price: "۱۴۰ هزار تومان" },
    { name: "براونی", description: "براونی گرم با شکلات تلخ", price: "۱۳۵ هزار تومان" },
    { name: "تیرامیسو", description: "دسر ایتالیایی با قهوه و ماسکارپونه", price: "۱۶۰ هزار تومان" },
    { name: "کروسان شکلاتی", description: "کروسان تازه با مغز شکلات", price: "۱۳۰ هزار تومان" },
    { name: "کوکی شکلاتی", description: "کوکی تازه با تکه‌های شکلات", price: "۸۵ هزار تومان" },
    { name: "وافل میوه‌ای", description: "وافل گرم با میوه فصل و عسل", price: "۱۷۰ هزار تومان" },
    { name: "دسر روز", description: "پیشنهاد تازه قناد کافه", price: "۱۵۰ هزار تومان" }
  ],
  food: [
    { name: "صبحانه ایرانی", description: "پنیر، گردو، مربا، کره و نان تازه", price: "۲۱۰ هزار تومان" },
    { name: "املت گوجه", description: "املت گوجه تازه با نان داغ", price: "۱۷۵ هزار تومان" },
    { name: "تخم‌مرغ و آووکادو", description: "نان تست، آووکادو و تخم‌مرغ", price: "۲۳۰ هزار تومان" },
    { name: "پنینی مرغ", description: "مرغ، پنیر و سبزیجات گریل‌شده", price: "۲۴۰ هزار تومان" },
    { name: "ساندویچ بوقلمون", description: "بوقلمون، پنیر و سس مخصوص", price: "۲۵۰ هزار تومان" },
    { name: "سالاد سزار", description: "کاهو، مرغ گریل و سس سزار", price: "۲۴۵ هزار تومان" },
    { name: "تست پنیر", description: "نان تست برشته با پنیر کش‌دار", price: "۱۷۰ هزار تومان" },
    { name: "گرانولا و ماست", description: "گرانولا، ماست و میوه فصل", price: "۱۸۵ هزار تومان" },
    { name: "سیب‌زمینی تنوری", description: "سیب‌زمینی با ادویه و سس خانگی", price: "۱۵۰ هزار تومان" }
  ]
};

const menuGrid = document.getElementById("menuGrid");
const tabs = document.querySelectorAll(".tab");

function renderMenu(category) {
  menuGrid.innerHTML = menuData[category].map(item => `
    <article class="menu-item">
      <div class="item-top">
        <h3>${item.name}</h3>
        <strong>${item.price}</strong>
      </div>
      <p>${item.description}</p>
    </article>
  `).join("");
}

renderMenu("coffee");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(item => item.classList.remove("active"));
    tab.classList.add("active");
    renderMenu(tab.dataset.category);
  });
});

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 30);
});

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

/* پیانوی مجازی با صدای ترکیبی Web Audio */
const keyboard = document.getElementById("keyboard");
const soundStatus = document.getElementById("soundStatus");
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const notes = [
  { name: "دو", frequency: 261.63, black: false },
  { name: "دو♯", frequency: 277.18, black: true },
  { name: "ر", frequency: 293.66, black: false },
  { name: "ر♯", frequency: 311.13, black: true },
  { name: "می", frequency: 329.63, black: false },
  { name: "فا", frequency: 349.23, black: false },
  { name: "فا♯", frequency: 369.99, black: true },
  { name: "سل", frequency: 392.00, black: false },
  { name: "سل♯", frequency: 415.30, black: true },
  { name: "لا", frequency: 440.00, black: false },
  { name: "لا♯", frequency: 466.16, black: true },
  { name: "سی", frequency: 493.88, black: false },
  { name: "دو", frequency: 523.25, black: false }
];

notes.forEach((note, index) => {
  const key = document.createElement("button");
  key.type = "button";
  key.className = `key${note.black ? " black" : ""}`;
  key.dataset.note = note.name;
  key.setAttribute("aria-label", `نواختن نت ${note.name}`);
  key.addEventListener("pointerdown", () => playNote(note.frequency, key));
  keyboard.appendChild(key);
});

function playNote(frequency, key) {
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  soundStatus.textContent = "در حال نواختن…";
  key.classList.add("active");

  const now = audioContext.currentTime;
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();

  filter.type = "lowpass";
  filter.frequency.setValueAtTime(4200, now);
  filter.frequency.exponentialRampToValueAtTime(900, now + 1.5);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.24, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

  filter.connect(gain);
  gain.connect(audioContext.destination);

  // چند هارمونیک برای نزدیک‌تر شدن رنگ صدا به پیانو
  [1, 2, 3, 4].forEach((partial, index) => {
    const oscillator = audioContext.createOscillator();
    const partialGain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.value = frequency * partial;
    partialGain.gain.value = [1, 0.35, 0.16, 0.07][index];

    oscillator.connect(partialGain);
    partialGain.connect(filter);

    oscillator.start(now);
    oscillator.stop(now + 1.85);
  });

  window.setTimeout(() => key.classList.remove("active"), 180);
  window.setTimeout(() => {
    soundStatus.textContent = "برای نواختن، یک کلاویه را لمس کن";
  }, 1000);
}
