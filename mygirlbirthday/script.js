const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const glow = $('.cursor-glow');
document.addEventListener('mousemove', (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const musicBtn = $('#musicBtn');
musicBtn?.addEventListener('click', () => {
  musicBtn.classList.toggle('playing');
  musicBtn.textContent = musicBtn.classList.contains('playing') ? '♫' : '♪';
});

const birthdayDate = new Date('2027-07-24T00:00:00').getTime();
function updateCountdown() {
  const countdown = $('#countdown');
  if (!countdown) return;

  const difference = Math.max(birthdayDate - Date.now(), 0);
  const days = Math.floor(difference / 86400000);
  const hours = Math.floor((difference % 86400000) / 3600000);
  const minutes = Math.floor((difference % 3600000) / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);

  $('#days').textContent = String(days).padStart(2, '0');
  $('#hours').textContent = String(hours).padStart(2, '0');
  $('#mins').textContent = String(minutes).padStart(2, '0');
  $('#secs').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

const reasons = [
  'Your smile feels like sunshine.',
  '  make the world feel safe.',
  'Your laugh is unforgettable.',
  '  turn simple moments into the most beautiful days of my life',
  '  care as no one else does.',
  'our vibes is magical bec of you .',
  '  are pretty as the stars on a clear night .',
  '  make every memory special .',
  'Your heart is rare.',
  '  are my favorite person to be around.',
  '  glow without trying.',
  '  make everything as beautiful as you are.',
  '  listen like home.',
  '  are effortlessly classy.',
  '  deserve the all the love in the universe.',
  '  are a whole comfort place.',
  'Your presence feels peaceful.',
  '  silence the noise in my head.',
  '  make friendship feel precious.',
  '  understand me without even talking.',
  '  bring calm into chaos.',
  '  encourage me to be better.',
  'Your voice calms me.',
  '  make boring days a day to remember.',
  '  make me feel appreciated.',
  'your presence feels like a blessing.',
  '  never stop surprising me.',
  ' silence beside you feels like a warm hug and never awkward .',
  '  are honest even if you are wrong, but hapopa always right anyway🤭',
  '  make people believe in kindness.',
  'Your sound is my favorite melody.',
  '  accept me as I am.',
  '  challenge me to be better.',
  '  always make me feel like I belong.',
  '  have the most beautiful soul in the world.',
  '  make me laugh at random times.',
  '  always find a way to make me smile even in tough times.',
  '  are my comfort notification.',
  '  make the world less heavy.',
  '  celebrate my small wins.',
  '  make love feel simple.',
  '  support me as if I am your own.',
  '  make any hard conversation feels like a safe zone.',
  '  make every goobye worth the wait for the next hello.',
  '  make me feel like I am enough.',
  'Youcreate our own little world of happiness.',
  '  care even when nobody notices.',
  'we dream the same sweetest dream ever.',
  '  make me belive that we are a perfect match for each other.',
  '  make me trust in you without any doubt.',
  '  make ordinary chats my favorate habbit .',
  '  are a safe world to me.',
  'seeing you being yourself around me is the best feeling.',
  '  are the reason I believe in love.',
  '  make me feel like I am the most special person in the world.',
  'you respect me as a husband and your man not just a boyfriend.',
  '  keep choosing me as your priority.',
  '  make memories worth saving .',
  '  will always me the only love story i will tell our kids about .',
  '  never give up on us.',
  '  make me proud with my little girl',
  '  inspire me hope that we will always be together on day .',
  'i really cant stop thinking about you.',
  'you worth waiting, thinking , dreaming about my life with you.',
  '  always give your best and never let me down.',
  '  are love in human form.',
  'Because our connection is unique..',
  'I will always be grateful for you for many things words can not say.',
  '  make emotions feel safe.',
  '  make the day softer.',
  '  handle me , my thoughts even when I am not making sense.',
  '  make everyone around you happier by your hapopa effect .',
  '  share with me your world and let me be a part of it',
  '  make small surprises feel huge.',
  'i cant wait to hold your hand under the moonlight and tell you how much I love you.',
  'i cant stop mentioning that you are pretty 🫠.',
  'cause when we\'re a part and i am missing you, i close my eyes and all i see is you.',
  'i love dreaming about our future together and how we will be the best team ever.',
  'i miss you , you are the only person i miss this much in my life.',
  'Because we bring out a side of each other that no one else gets to see.',
  '  carry love in your details.',
  'every challenge teaches us how to love each other better..',
  'Because sometimes i feel you have tolerance just for me.',
  '  become my company in lonely moments.',
  ' all love songs become about you ',
  '  care about my feelings and you never make me feel like I am the problem.',
  '  try for us even when it\'s hard as no one else would.',
  '  make every message feel sweet.',
  '  are my secret keeper and my support in the world',
  'the small things you do for me make me feel like the luckiest person in the world.',
  '  make kindness look beautiful.',
  'if you where a book you will be the chapter that i wish it never ends.',
  '  make every page of life prettier.',
  '  are deeply loved.',
  'bec you love meeeeeee 🙈',
  '  are unforgettable.',
  'bec you are you and that\'s a reason a thousand reasons can\'t explain.',
  'you make me fell in love the way you fall asleep: slowly, and then all at once.',
  'bec i love you more than words can say and more than actions can show.',
  '  are more loved than 100 reasons can say.'
];

const reasonGrid = $('#reasonGrid');
if (reasonGrid) {
  const imageFolder = reasonGrid.dataset.imageFolder || 'assets';
  const reasonImages = Array.from({ length: 0 }, (_, index) => `${imageFolder}/${index + 1}.jpg`);

  reasonGrid.innerHTML = reasons
    .map((reason, index) => {
      const image = reasonImages[index % reasonImages.length];
      return `
      <article class="reason-card reveal" tabindex="0">
        <div class="reason-inner">
          <div class="reason-front">
            <h3>${index + 1}</h3>
            <p>tap love note</p>
          </div>
          <div class="reason-back" style="background-image: linear-gradient(to bottom, rgba(62,50,50,.08), rgba(62,50,50,.18) 45%, rgba(62,50,50,.78)), url('${image}');">
            <p>${reason}</p>
          </div>
        </div>
      </article>`;
    })
    .join('');
}

$('#randomReasonBtn')?.addEventListener('click', () => {
  $('#randomReason').textContent = reasons[Math.floor(Math.random() * reasons.length)];
});

const envelope = $('#envelope');
const letterText = ` from the person who loved you the most in the world 🌍❤️
happy birthday to the girl who have my heart you groooow a year and this gives me a new year to love you more and more😍
 I hope this year brings you endless joy, laughter, and all the love you deserve, i created this place to hold all our memories today it holds your birthday one day it will hold our wedding memories ,photos of us with our kids and some random moments ✨
 
 From the first day I saw you, I knew that I was going to fall in love with you, but I never knew that this dream of a 15-year-old boy would come true and I would see love for me in your beautiful eyes🫠❤️❤️
 One day, your birthday will be my responsibility to make it the most special day of your life you will return home and find a loving husband that prepared everything possible to make this day special and you will never find my surprises even when we become in the same home🤭

may be we are not together this year but i promise that i am doing whatever it takes to be with you for thee rest of our lives , and bileve me it is sooner than you think i feel it this time and that you will be my rasmy partner in a few years ✨❤️
your trust and support is the only thing that reassures me that you want this as much as i do and i will never let you down sweety trust me..🫂❤️

On your birthday, I just want you to know how deeply you are loved, not just today, but every single day. you deserve happiness that feels real, dreams that slowly turn into reality, and moments so beautiful that your heart wants to keep them forever.
I hope this year gives you soft mornings, peaceful nights, unexpected smiles, and every little thing your soul has been waiting for.🥹❤️
Happy Birthday totyyyyyy🐣❤️
you are special in ways you may never fully realize, and you deserve love that cant fit in the world  and endless happiness in every chapter of your life. I Love you ✨❤️`;
let hasTypedLetter = false;

envelope?.addEventListener('click', () => {
  envelope.classList.add('open');
  if (hasTypedLetter) return;

  hasTypedLetter = true;
  let index = 0;
  const typedLetter = $('#typedLetter');
  const typing = setInterval(() => {
    typedLetter.textContent += letterText[index] || '';
    index += 1;
    if (index > letterText.length) clearInterval(typing);
  }, 35);
});

const cake = $('#birthdayCake') || $('.cake');
const cutCakeBtn = $('.cut-cake-btn');
const cakeStageText = $('#cakeStageText');
let cakeAnimationStarted = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

cutCakeBtn?.addEventListener('click', async () => {
  if (!cake || cakeAnimationStarted) return;

  cakeAnimationStarted = true;
  cutCakeBtn.disabled = true;

  cakeStageText.textContent = 'blowing the candles... 🌬️';
  cutCakeBtn.textContent = 'Blowing Candles...';
  cake.classList.add('blow');
  await wait(1500);

  cakeStageText.textContent = ' cake is cutting 🔪';
  cutCakeBtn.textContent = '';
  cake.classList.add('knife-in');
  await wait(1200);

  cakeStageText.textContent = ' into a slice... 🍰';
  cutCakeBtn.textContent = 'Cutting Slice...';
  cake.classList.add('sliced');
  await wait(900);

  cakeStageText.textContent = 'first slice for my totyyyyy🐣❤️';
  cutCakeBtn.textContent = 'Cake Cut 🎉';

  if (typeof confetti === 'function') {
    confetti({ particleCount: 280, spread: 115, origin: { y: 0.62 } });
  }
});
