// 60-second trap-word quiz. Tap only, no sign-up, nothing is stored or sent.
// Fills every <div class="quiz" data-quiz="fa|de|en"> on the page. Must load before lang.js,
// so lang.js can add the ?ref code to the sign-up link inside the result box.
(function () {
  const FORM = 'https://tally.so/r/2jKKQb';
  const T = {
    fa: {
      title: 'تست تله در ۶۰ ثانیه',
      intro: 'چهار جملهٔ کوتاه آلمانی. فقط بزنید، ثبت‌نام لازم نیست.',
      of: (i, n) => `سؤال ${toFa(i)} از ${toFa(n)}`,
      right: 'درست!', wrong: 'تله!', next: 'بعدی', done: 'نتیجه',
      score: (s, n) => `${toFa(s)} از ${toFa(n)}`,
      verdict: [
        'خیلی‌ها همین‌جا اشتباه می‌کنند. خبر خوب: این تله‌ها قابل یاد گرفتن‌اند.',
        'خیلی‌ها همین‌جا اشتباه می‌کنند. خبر خوب: این تله‌ها قابل یاد گرفتن‌اند.',
        'بد نیست! ولی در آزمون واقعی تله‌های بیشتری هست.',
        'خوب است! ولی در آزمون واقعی تله‌های بیشتری هست.',
        'عالی! ولی در آزمون واقعی تله‌های بیشتری هست.'
      ],
      cta: 'ثبت‌نام رایگان در فهرست انتظار', again: 'دوباره',
      items: [
        { q: 'Wo dürfen Sie <mark>nicht</mark> überholen?', ask: 'این سؤال دنبال چیست؟',
          o: ['جاهایی که سبقت مجاز است', 'جاهایی که سبقت ممنوع است'], a: 1,
          why: '«nicht» یعنی «نه». معنی سؤال را برعکس می‌کند.' },
        { q: 'Was ist <mark>falsch</mark>?', ask: 'کدام جمله را باید بزنید؟',
          o: ['جملهٔ درست', 'جملهٔ غلط'], a: 1,
          why: '«falsch» یعنی «غلط». اینجا دنبال جملهٔ غلط هستند.' },
        { q: 'Womit müssen Sie <mark>auch</mark> rechnen?', ask: 'چند جواب ممکن است درست باشد؟',
          o: ['فقط یکی', 'ممکن است چند جواب درست باشد'], a: 1,
          why: 'در آزمون تئوری آلمان یک سؤال می‌تواند چند جواب درست داشته باشد. «auch» یعنی «هم».' },
        { q: 'Wo dürfen Sie <mark>nur</mark> mit Schrittgeschwindigkeit fahren?', ask: '«nur» یعنی چه؟',
          o: ['هرگز', 'فقط', 'همیشه'], a: 1,
          why: '«nur» یعنی «فقط». با «nicht» فرق دارد.' }
      ]
    },
    de: {
      title: 'Fallen-Test in 60 Sekunden',
      intro: 'Vier kurze deutsche Sätze. Nur antippen, keine Anmeldung.',
      of: (i, n) => `Frage ${i} von ${n}`,
      right: 'Richtig!', wrong: 'Falle!', next: 'Weiter', done: 'Ergebnis',
      score: (s, n) => `${s} von ${n}`,
      verdict: [
        'Hier stolpern viele. Die gute Nachricht: Diese Fallen kann man lernen.',
        'Hier stolpern viele. Die gute Nachricht: Diese Fallen kann man lernen.',
        'Nicht schlecht! In der echten Prüfung gibt es aber noch mehr Fallen.',
        'Gut! In der echten Prüfung gibt es aber noch mehr Fallen.',
        'Sehr gut! In der echten Prüfung gibt es aber noch mehr Fallen.'
      ],
      cta: 'Kostenlos auf die Warteliste', again: 'Nochmal',
      items: [
        { q: 'Wo dürfen Sie <mark>nicht</mark> überholen?', ask: 'Wonach fragt diese Frage?',
          o: ['Wo Überholen erlaubt ist', 'Wo Überholen verboten ist'], a: 1,
          why: '„nicht“ dreht die Frage um.' },
        { q: 'Was ist <mark>falsch</mark>?', ask: 'Welche Aussage kreuzen Sie an?',
          o: ['Die richtige', 'Die falsche'], a: 1,
          why: 'Gesucht ist hier die falsche Aussage.' },
        { q: 'Womit müssen Sie <mark>auch</mark> rechnen?', ask: 'Wie viele Antworten können richtig sein?',
          o: ['Nur eine', 'Mehrere'], a: 1,
          why: 'In der Theorieprüfung können mehrere Antworten richtig sein.' },
        { q: 'Wo dürfen Sie <mark>nur</mark> mit Schrittgeschwindigkeit fahren?', ask: 'Was bedeutet „nur“?',
          o: ['nie', 'ausschließlich', 'immer'], a: 1,
          why: '„nur“ heißt „ausschließlich“, nicht „nicht“.' }
      ]
    },
    en: {
      title: 'Trap test in 60 seconds',
      intro: 'Four short German sentences. Just tap, no sign-up.',
      of: (i, n) => `Question ${i} of ${n}`,
      right: 'Right!', wrong: 'Trap!', next: 'Next', done: 'Result',
      score: (s, n) => `${s} of ${n}`,
      verdict: [
        'Many people trip here. Good news: these traps can be learned.',
        'Many people trip here. Good news: these traps can be learned.',
        'Not bad! The real exam has more traps, though.',
        'Good! The real exam has more traps, though.',
        'Great! The real exam has more traps, though.'
      ],
      cta: 'Join the waiting list for free', again: 'Again',
      items: [
        { q: 'Wo dürfen Sie <mark>nicht</mark> überholen?', ask: 'What is this question asking for?',
          o: ['Where overtaking is allowed', 'Where overtaking is forbidden'], a: 1,
          why: '"nicht" means "not" and flips the question.' },
        { q: 'Was ist <mark>falsch</mark>?', ask: 'Which statement do you tick?',
          o: ['The true one', 'The false one'], a: 1,
          why: '"falsch" means "wrong": they want the false statement.' },
        { q: 'Womit müssen Sie <mark>auch</mark> rechnen?', ask: 'How many answers can be right?',
          o: ['Only one', 'Several'], a: 1,
          why: 'In the German theory test, several answers can be right. "auch" means "also".' },
        { q: 'Wo dürfen Sie <mark>nur</mark> mit Schrittgeschwindigkeit fahren?', ask: 'What does "nur" mean?',
          o: ['never', 'only', 'always'], a: 1,
          why: '"nur" means "only", not "not".' }
      ]
    }
  };
  function toFa(n) { return String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]); }
  function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }

  document.querySelectorAll('.quiz[data-quiz]').forEach(box => {
    const lang = box.dataset.quiz, t = T[lang];
    if (!t) return;
    box.appendChild(el('div', 'label', t.title));
    box.appendChild(el('p', 'qi', t.intro));
    const stage = el('div', 'stage'); stage.setAttribute('aria-live', 'polite');
    box.appendChild(stage);
    // Result box is built once, so lang.js can add the ref code to its link.
    const result = el('div', 'result'); result.hidden = true;
    const scoreEl = el('p', 'score'), verdictEl = el('p', 'verdict');
    const cta = el('a', 'cta', t.cta); cta.href = `${FORM}?lang=${lang}&src=quiz`;
    const again = el('button', 'again', t.again); again.type = 'button';
    result.append(scoreEl, verdictEl, cta, again);
    box.appendChild(result);

    let i = 0, score = 0;
    function show() {
      stage.innerHTML = '';
      const it = t.items[i];
      stage.appendChild(el('div', 'count', t.of(lang === 'fa' ? i + 1 : i + 1, t.items.length)));
      stage.appendChild(el('p', 'q', it.q)).setAttribute('lang', 'de');
      stage.lastChild.setAttribute('dir', 'ltr');
      stage.appendChild(el('p', 'ask', it.ask));
      const opts = el('div', 'opts');
      it.o.forEach((txt, k) => {
        const b = el('button', 'opt', txt); b.type = 'button';
        if (lang !== 'fa') b.lang = lang === 'de' ? 'de' : 'en';
        b.addEventListener('click', () => answer(k, b, opts));
        opts.appendChild(b);
      });
      stage.appendChild(opts);
    }
    function answer(k, btn, opts) {
      const it = t.items[i], ok = k === it.a;
      if (ok) score++;
      [...opts.children].forEach((b, n) => { b.disabled = true; if (n === it.a) b.classList.add('ok'); });
      if (!ok) btn.classList.add('no');
      const fb = el('p', 'fb ' + (ok ? 'ok' : 'no'), `<b>${ok ? t.right : t.wrong}</b> ${it.why}`);
      stage.appendChild(fb);
      const last = i === t.items.length - 1;
      const nx = el('button', 'next', last ? t.done : t.next); nx.type = 'button';
      nx.addEventListener('click', () => { if (last) finish(); else { i++; show(); } });
      stage.appendChild(nx);
      nx.focus();
    }
    function finish() {
      stage.innerHTML = '';
      scoreEl.textContent = t.score(score, t.items.length);
      verdictEl.textContent = t.verdict[score];
      result.hidden = false;
      cta.focus();
    }
    again.addEventListener('click', () => { i = 0; score = 0; result.hidden = true; show(); });
    show();
  });
})();
