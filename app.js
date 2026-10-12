// ==========================================================================
// TALABA BOT - WEB APP CLIENT APPLICATION (app.js)
// Telegram WebApp SDK, Dinamik Hujjat Moslashuvi, Real-Time WebSocket
// ==========================================================================

// 1. TELEGRAM SDK INITIALIZATION
const tg = window.Telegram?.WebApp;
if (tg) {
    tg.ready();
    tg.expand();
    try {
        tg.enableClosingConfirmation();
    } catch (e) {}
}

// 2. 5 TILLARDA PROFESSIONAL LUG'AT (GEMINI YOZUVLARIDAN TOZALANGAN)
const I18N = {
    uz: {
        heroTitle: "Talaba Akademik Portali",
        heroDesc: "Referat, Kurs ishi va Slaydlarni professional tarzda yarating",
        langTitle: "Til / Language",
        docTypeTitle: "Hujjat Turini Tanlang",
        tReferat: "Referat",
        sReferat: "10-20 bet Word",
        tSlayd: "Slayd",
        sSlayd: "5-20 ta PPTX",
        tKurs: "Kurs ishi",
        sKurs: "30-60 bet Word",
        adminLink: "Savollar bo'yicha adminga bog'lanish",
        tierTitle: "Sifat Darajasi (Tier)",
        tierSimple: "Oddiy",
        tierStandard: "Standart",
        tierPremium: "Premium 💎",
        styleTitle: "Kontent Uslubi (Slayd)",
        styleText: "1. Matn ko'proq, rasmlar kamroq",
        styleBalanced: "2. Balanslangan (matn va rasm)",
        styleVisual: "3. Rasmlar ko'p, matn qisqa va lo'nda",
        inputsTitle: "Mavzu va Fan",
        lblSubject: "Fan nomi",
        pSubject: "Masalan: Iqtisodiyot, Tarix, Informatika, Huquq...",
        lblTopic: "Mavzu nomi",
        pTopic: "Masalan: Raqamli iqtisodiyotning rivojlanish istiqbollari...",
        lblVolume: "Sahifalar soni (10-20 bet)",
        lblVolumeSlides: "Slaydlar soni (5-20 ta)",
        lblVolumeKurs: "Sahifalar soni (30-60 bet)",
        lblExactCount: "Aniq miqdorni belgilash:",
        designTitle: "Dizayn Shablonlari",
        dMin: "Minimalist ✨",
        dStand: "Oltin Standart 🟡",
        dCorp: "Korporativ 💼",
        dCreat: "Kreativ Neo 🎨",
        dDark: "Cyber Dark 🌙",
        dEmerald: "Zumrad 🌿",
        btnGenerate: "Generatsiya Qilish",
        modalHead: "Hujjat Yaratilmoqda",
        st1: "Status 1: Ma'lumot izlanmoqda va Reja tuzilmoqda...",
        st2: "Status 2: Matn va mavzuga mos rasmlar yig'ilmoqda...",
        st3: "Status 3: Dizayn va fayl shakllantirilmoqda...",
        st4: "Status 4: Yakuniy fayl Telegramga yuklanmoqda...",
        errSubject: "Fan nomini kiriting!",
        errTopic: "Mavzu nomini kiriting!"
    },
    uz_cyrl: {
        heroTitle: "Талаба Академик Портали",
        heroDesc: "Реферат, Курс иши ва Слайдларни профессионал тарзда яратинг",
        langTitle: "Тил / Language",
        docTypeTitle: "Ҳужжат Турини Танланг",
        tReferat: "Реферат",
        sReferat: "10-20 бет Word",
        tSlayd: "Слайд",
        sSlayd: "5-20 та PPTX",
        tKurs: "Курс иши",
        sKurs: "30-60 бет Word",
        adminLink: "Саволлар бўйича админга боғланиш",
        tierTitle: "Сифат Даражаси (Tier)",
        tierSimple: "Оддий",
        tierStandard: "Стандарт",
        tierPremium: "Premium 💎",
        styleTitle: "Контент Услуби (Слайд)",
        styleText: "1. Матн кўпроқ, расмлар камроқ",
        styleBalanced: "2. Балансланган (матн ва расм)",
        styleVisual: "3. Расмлар кўп, матн қисқа ва лўнда",
        inputsTitle: "Мавзу ва Фан",
        lblSubject: "Фан номи",
        pSubject: "Масалан: Иқтисодиёт, Тарих, Информатика, Ҳуқуқ...",
        lblTopic: "Мавзу номи",
        pTopic: "Масалан: Рақамли иқтисодиётнинг ривожланиш истиқболлари...",
        lblVolume: "Саҳифалар сони (10-20 бет)",
        lblVolumeSlides: "Слайдлар сони (5-20 та)",
        lblVolumeKurs: "Саҳифалар сони (30-60 бет)",
        lblExactCount: "Аниқ миқдорни белгилаш:",
        designTitle: "Дизайн Шаблонлари",
        dMin: "Минималист ✨",
        dStand: "Олтин Стандарт 🟡",
        dCorp: "Корпоратив 💼",
        dCreat: "Креатив Нео 🎨",
        dDark: "Cyber Dark 🌙",
        dEmerald: "Зумрад 🌿",
        btnGenerate: "Генерация Қилиш",
        modalHead: "Ҳужжат Яратилмоқда",
        st1: "Status 1: Маълумот изланмоқда ва Режа тузилмоқда...",
        st2: "Status 2: Матн ва мавзуга мос расмлар йиғилмоқда...",
        st3: "Status 3: Дизайн ва файл шакллантирилмоқда...",
        st4: "Status 4: Якуний файл Telegramга юкланмоқда...",
        errSubject: "Фан номини киритинг!",
        errTopic: "Мавзу номини киритинг!"
    },
    ru: {
        heroTitle: "Студенческий Академический Портал",
        heroDesc: "Создавайте рефераты, курсовые и презентации профессионально",
        langTitle: "Язык / Language",
        docTypeTitle: "Выберите Тип Документа",
        tReferat: "Реферат",
        sReferat: "10-20 стр. Word",
        tSlayd: "Слайды",
        sSlayd: "5-20 слайдов PPTX",
        tKurs: "Курсовая",
        sKurs: "30-60 стр. Word",
        adminLink: "Связаться с администратором",
        tierTitle: "Уровень качества (Tier)",
        tierSimple: "Простой",
        tierStandard: "Стандарт",
        tierPremium: "Премиум 💎",
        styleTitle: "Стиль контента (Слайды)",
        styleText: "1. Больше текста, меньше картинок",
        styleBalanced: "2. Сбалансированный (текст + фото)",
        styleVisual: "3. Много фото, краткий текст",
        inputsTitle: "Тема и Предмет",
        lblSubject: "Название предмета",
        pSubject: "Например: Экономика, История, Право...",
        lblTopic: "Название темы",
        pTopic: "Например: Перспективы развития цифровой экономики...",
        lblVolume: "Количество страниц (10-20)",
        lblVolumeSlides: "Количество слайдов (5-20)",
        lblVolumeKurs: "Количество страниц (30-60)",
        lblExactCount: "Точное количество:",
        designTitle: "Дизайн Презентации",
        dMin: "Минималист ✨",
        dStand: "Золотой Стандарт 🟡",
        dCorp: "Корпоративный 💼",
        dCreat: "Креатив Нео 🎨",
        dDark: "Cyber Dark 🌙",
        dEmerald: "Изумруд 🌿",
        btnGenerate: "Сгенерировать",
        modalHead: "Создание документа",
        st1: "Status 1: Поиск информации и составление плана...",
        st2: "Status 2: Сбор текста и иллюстраций по теме...",
        st3: "Status 3: Оформление дизайна и генерация файла...",
        st4: "Status 4: Финальная загрузка в Telegram...",
        errSubject: "Введите название предмета!",
        errTopic: "Введите название темы!"
    },
    kaa: {
        heroTitle: "Student Akademiyalıq Portalı",
        heroDesc: "Referat, Kurs jumısı hám Slaydlardı professional túrde jaratıń",
        langTitle: "Til / Language",
        docTypeTitle: "Hújjet Túrin Saylań",
        tReferat: "Referat",
        sReferat: "10-20 bet Word",
        tSlayd: "Slayd",
        sSlayd: "5-20 bet PPTX",
        tKurs: "Kurs jumısı",
        sKurs: "30-60 bet Word",
        adminLink: "Sorawlar boyınsha adminge baylanısıw",
        tierTitle: "Sapa Dárejesi (Tier)",
        tierSimple: "Ápiwayı",
        tierStandard: "Standart",
        tierPremium: "Premium 💎",
        styleTitle: "Kontent Uslubı (Slayd)",
        styleText: "1. Tekst kóbirek, súwretler az",
        styleBalanced: "2. Balanslanǵan (tekst hám súwret)",
        styleVisual: "3. Súwretler kóp, tekst qısqa",
        inputsTitle: "Tema hám Pán",
        lblSubject: "Pán atı",
        pSubject: "Máselen: Ekonomika, Tariyx, Huqıq...",
        lblTopic: "Tema atı",
        pTopic: "Máselen: Sanlı ekonomikanıń rawajlanıw keleshegi...",
        lblVolume: "Betler sanı (10-20 bet)",
        lblVolumeSlides: "Slaydlar sanı (5-20 ta)",
        lblVolumeKurs: "Betler sanı (30-60 bet)",
        lblExactCount: "Anıq muǵdardı belgilew:",
        designTitle: "Dizayn Shablonları",
        dMin: "Minimalist ✨",
        dStand: "Altın Standart 🟡",
        dCorp: "Korporativ 💼",
        dCreat: "Kreativ Neo 🎨",
        dDark: "Cyber Dark 🌙",
        dEmerald: "Zúmrad 🌿",
        btnGenerate: "Jaratıw",
        modalHead: "Hújjet Jaratılmaqta",
        st1: "Status 1: Maǵlıwmat izlew hám Reje dúziw...",
        st2: "Status 2: Tekst hám temaǵa say súwretler...",
        st3: "Status 3: Dizayn hám fayl dúziw...",
        st4: "Status 4: Juwmaqlawshı fayldı Telegramǵa júklew...",
        errSubject: "Pán atın kiritiń!",
        errTopic: "Tema atın kiritiń!"
    },
    en: {
        heroTitle: "Academic Student Portal",
        heroDesc: "Generate essays, coursework and slides professionally with AI",
        langTitle: "Language",
        docTypeTitle: "Select Document Type",
        tReferat: "Essay / Report",
        sReferat: "10-20 p. Word",
        tSlayd: "Slides",
        sSlayd: "5-20 slides PPTX",
        tKurs: "Coursework",
        sKurs: "30-60 p. Word",
        adminLink: "Contact Administrator",
        tierTitle: "Quality Tier",
        tierSimple: "Simple",
        tierStandard: "Standard",
        tierPremium: "Premium 💎",
        styleTitle: "Content Style (Slides)",
        styleText: "1. More text, fewer images",
        styleBalanced: "2. Balanced (text & images)",
        styleVisual: "3. Rich images, concise text",
        inputsTitle: "Topic & Subject",
        lblSubject: "Subject Name",
        pSubject: "e.g.: Economics, History, Computer Science...",
        lblTopic: "Topic Name",
        pTopic: "e.g.: Prospects of Digital Economy Development...",
        lblVolume: "Page Count (10-20 p.)",
        lblVolumeSlides: "Slide Count (5-20 slides)",
        lblVolumeKurs: "Page Count (30-60 p.)",
        lblExactCount: "Set Exact Count:",
        designTitle: "Presentation Design",
        dMin: "Minimalist ✨",
        dStand: "Gold Standard 🟡",
        dCorp: "Corporate 💼",
        dCreat: "Creative Neo 🎨",
        dDark: "Cyber Dark 🌙",
        dEmerald: "Emerald 🌿",
        btnGenerate: "Generate Document",
        modalHead: "Generating Document",
        st1: "Status 1: Researching & structuring outline...",
        st2: "Status 2: Drafting text & matching topic visuals...",
        st3: "Status 3: Applying design & building document...",
        st4: "Status 4: Uploading final document to Telegram...",
        errSubject: "Please enter subject name!",
        errTopic: "Please enter topic name!"
    }
};

// 3. ILOVA HOLATI (STATE)
const state = {
    lang: 'uz',
    docType: 'slayd',  // Standart bo'yicha Slayd
    tier: 'premium',
    contentStyle: 'balanced',
    subject: '',
    topic: '',
    volume: 10,
    design: 'minimalist',
    clientId: 'client_' + Math.random().toString(36).substring(2, 9)
};

// Dinamik hajm diapazonlari
const DOC_CONFIGS = {
    slayd: {
        pills: [5, 8, 10, 12, 15, 20],
        min: 5,
        max: 20,
        defaultVal: 10,
        unit: "slayd",
        formatBadge: "PowerPoint (.pptx)",
        tierSubs: {
            simple: "Oq fon, matn",
            standard: "Oltin hoshiya",
            premium: "Mavzuga mos tasvirli"
        }
    },
    referat: {
        pills: [10, 12, 14, 15, 18, 20],
        min: 10,
        max: 25,
        defaultVal: 15,
        unit: "bet",
        formatBadge: "Word (.docx)",
        tierSubs: {
            simple: "Klassik referat",
            standard: "OTM standarti",
            premium: "Ilmiy rasmli"
        }
    },
    kurs_ishi: {
        pills: [30, 35, 40, 45, 50, 60],
        min: 30,
        max: 60,
        defaultVal: 40,
        unit: "bet",
        formatBadge: "Word (.docx)",
        tierSubs: {
            simple: "3 bobli matn",
            standard: "To'liq OTM standarti",
            premium: "Grafik va rasmli"
        }
    }
};

// DOM ELEMENTLARI
const dom = {
    langPills: document.getElementById('langPills'),
    typeGrid: document.getElementById('typeGrid'),
    formatBadge: document.getElementById('formatBadge'),
    tierGrid: document.getElementById('tierGrid'),
    tierBadge: document.getElementById('tierBadge'),
    subSimple: document.getElementById('subSimple'),
    subStandard: document.getElementById('subStandard'),
    subPremium: document.getElementById('subPremium'),
    styleSection: document.getElementById('styleSection'),
    styleGrid: document.getElementById('styleGrid'),
    subjectInput: document.getElementById('subjectInput'),
    topicInput: document.getElementById('topicInput'),
    volumeTitle: document.getElementById('volumeTitle'),
    volumeBadge: document.getElementById('volumeBadge'),
    pillsBar: document.getElementById('pillsBar'),
    exactNumberInput: document.getElementById('exactNumberInput'),
    btnMinus: document.getElementById('btnMinus'),
    btnPlus: document.getElementById('btnPlus'),
    designSection: document.getElementById('designSection'),
    palettesGrid: document.getElementById('palettesGrid'),
    submitBtn: document.getElementById('submitBtn'),
    realtimeModal: document.getElementById('realtimeModal'),
    modalSub: document.getElementById('modalSub'),
    progressFill: document.getElementById('progressFill'),
    st2Label: document.getElementById('st2Label'),
    toastMsg: document.getElementById('toastMsg')
};

// Haptika va ovoz
function haptic(type = 'light') {
    try {
        if (tg?.HapticFeedback) {
            if (type === 'medium') tg.HapticFeedback.impactOccurred('medium');
            else if (type === 'success') tg.HapticFeedback.notificationOccurred('success');
            else if (type === 'error') tg.HapticFeedback.notificationOccurred('error');
            else tg.HapticFeedback.impactOccurred('light');
        }
    } catch (e) {}
}

function showToast(msg) {
    dom.toastMsg.textContent = msg;
    dom.toastMsg.style.display = 'block';
    haptic('error');
    setTimeout(() => { dom.toastMsg.style.display = 'none'; }, 3000);
}

// ==========================================================================
// 4. DINAMIK HUJJAT SHAKLI VA MAYDONLAR MOSLASHUVI
// ==========================================================================
function updateDocumentView() {
    const cfg = DOC_CONFIGS[state.docType] || DOC_CONFIGS.slayd;
    const t = I18N[state.lang];
    const isSlide = state.docType === 'slayd';

    // Format badge
    dom.formatBadge.textContent = cfg.formatBadge;

    // Slayd xususiyatlari (Uslub va Shablonlar) faqat slayd tanlanganda ko'rinadi
    dom.styleSection.style.display = isSlide ? 'block' : 'none';
    dom.designSection.style.display = isSlide ? 'block' : 'none';

    // Volume title
    if (state.docType === 'slayd') {
        dom.volumeTitle.textContent = t.lblVolumeSlides;
    } else if (state.docType === 'referat') {
        dom.volumeTitle.textContent = t.lblVolume;
    } else {
        dom.volumeTitle.textContent = t.lblVolumeKurs;
    }

    // Tier taglavhalari
    dom.subSimple.textContent = cfg.tierSubs.simple;
    dom.subStandard.textContent = cfg.tierSubs.standard;
    dom.subPremium.textContent = cfg.tierSubs.premium;

    // Volume tekshiruvi va cheklovi
    if (state.volume < cfg.min || state.volume > cfg.max) {
        state.volume = cfg.defaultVal;
    }

    // Stepper sozlamalari
    dom.exactNumberInput.min = cfg.min;
    dom.exactNumberInput.max = cfg.max;
    dom.exactNumberInput.value = state.volume;

    dom.volumeBadge.textContent = `${state.volume} ${cfg.unit}`;

    // Pills bar yaratish
    dom.pillsBar.innerHTML = '';
    cfg.pills.forEach(v => {
        const b = document.createElement('div');
        b.className = 'num-pill' + (v === state.volume ? ' active' : '');
        b.textContent = v;
        b.onclick = () => {
            setVolumeValue(v);
            haptic('light');
        };
        dom.pillsBar.appendChild(b);
    });
}

function setVolumeValue(val) {
    const cfg = DOC_CONFIGS[state.docType] || DOC_CONFIGS.slayd;
    let n = parseInt(val, 10);
    if (isNaN(n)) n = cfg.defaultVal;
    n = Math.max(cfg.min, Math.min(cfg.max, n));

    state.volume = n;
    dom.exactNumberInput.value = n;
    dom.volumeBadge.textContent = `${n} ${cfg.unit}`;

    // Pills faolligini yangilash
    dom.pillsBar.querySelectorAll('.num-pill').forEach(el => {
        el.classList.toggle('active', parseInt(el.textContent, 10) === n);
    });
}

// Stepper tugmalari
dom.btnMinus.addEventListener('click', () => {
    setVolumeValue(state.volume - 1);
    haptic('light');
});

dom.btnPlus.addEventListener('click', () => {
    setVolumeValue(state.volume + 1);
    haptic('light');
});

dom.exactNumberInput.addEventListener('change', (e) => {
    setVolumeValue(e.target.value);
});

// Tilni almashtirish
function applyLanguage(lang) {
    state.lang = lang;
    const t = I18N[lang];
    if (!t) return;

    dom.langPills.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });

    document.querySelectorAll('[data-i18n]').forEach(node => {
        const k = node.dataset.i18n;
        if (t[k]) node.textContent = t[k];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(node => {
        const k = node.dataset['i18nPlaceholder'];
        if (t[k]) node.placeholder = t[k];
    });

    updateDocumentView();
    haptic('light');
}

// ==========================================================================
// 5. REAL-TIME WEBSOCKET PROGRESS BOSHQARUVI
// ==========================================================================
function updateProgressUI(step, isCompleted = false) {
    for (let i = 1; i <= 4; i++) {
        const row = document.getElementById(`row${i}`);
        const spin = document.getElementById(`spin${i}`);

        if (i < step || isCompleted) {
            row.className = 'status-row completed';
            spin.textContent = '✅';
        } else if (i === step) {
            row.className = 'status-row active';
            spin.textContent = '🔄';
        } else {
            row.className = 'status-row pending';
            spin.textContent = '🔄';
        }
    }
    dom.progressFill.style.width = isCompleted ? '100%' : `${step * 25}%`;
    haptic(isCompleted ? 'success' : 'light');
}

async function startRealtimeProcess(payload) {
    dom.realtimeModal.style.display = 'flex';
    const t = I18N[state.lang];

    const docNames = { referat: t.tReferat, slayd: t.tSlayd, kurs_ishi: t.tKurs };
    const name = docNames[state.docType] || state.docType;
    const cfg = DOC_CONFIGS[state.docType] || DOC_CONFIGS.slayd;
    dom.modalSub.textContent = `${name}: ${state.volume} ${cfg.unit} • Yuqori sifatli tahlil`;

    updateProgressUI(1);

    // 1. Telegram native data bridge (agar bot klaviaturasidan ochilgan bo'lsa)
    try {
        if (tg?.sendData) {
            tg.sendData(JSON.stringify(payload));
        }
    } catch (e) {}

    // 2. WebSocket orqali real-time jarayon
    let wsConnected = false;
    try {
        const host = window.location.host || "localhost:8000";
        const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
        const ws = new WebSocket(`${protocol}//${host}/ws/${state.clientId}`);

        ws.onopen = () => {
            wsConnected = true;
            payload.user_id = tg?.initDataUnsafe?.user?.id;
            ws.send(JSON.stringify(payload));
        };

        ws.onmessage = (event) => {
            try {
                const msg = JSON.parse(event.data);
                if (msg.step) {
                    updateProgressUI(msg.step, msg.done || false);
                }
                if (msg.done) {
                    setTimeout(() => {
                        try { tg?.close(); } catch (e) {}
                    }, 1400);
                }
            } catch (e) {}
        };

        ws.onerror = () => {
            if (!wsConnected) fallbackVisualProgression();
        };
    } catch (e) {
        fallbackVisualProgression();
    }

    setTimeout(() => {
        if (!wsConnected) fallbackVisualProgression();
    }, 2500);
}

async function fallbackVisualProgression() {
    const wait = ms => new Promise(r => setTimeout(r, ms));
    updateProgressUI(1);
    await wait(1800);
    updateProgressUI(2);
    await wait(2200);
    updateProgressUI(3);
    await wait(1800);
    updateProgressUI(4, true);
    await wait(1000);
    try { tg?.close(); } catch (e) {}
}

// ==========================================================================
// 6. YUBORISH VA VALIDATSIYA (SUBMIT)
// ==========================================================================
function onSubmit() {
    const t = I18N[state.lang];
    state.subject = dom.subjectInput.value.trim();
    state.topic = dom.topicInput.value.trim();

    if (!state.subject) {
        showToast(t.errSubject);
        dom.subjectInput.focus();
        return;
    }

    if (!state.topic) {
        showToast(t.errTopic);
        dom.topicInput.focus();
        return;
    }

    const langNames = {
        uz: "O'zbek tilida",
        uz_cyrl: "Ўзбек тилида (кирил)",
        ru: "На русском языке",
        kaa: "Qaraqalpaq tilinde",
        en: "In English"
    };

    const payload = {
        action: "generate",
        doc_type: state.docType,
        tier: state.tier,
        content_style: state.contentStyle,
        language: state.lang,
        language_name: langNames[state.lang] || "O'zbek tilida",
        subject: state.subject,
        topic: state.topic,
        page_count: state.volume,
        slide_count: state.volume,
        design: state.design
    };

    haptic('medium');
    startRealtimeProcess(payload);
}

// ==========================================================================
// 7. EVENT TINGLOVCHILARI (EVENT LISTENERS)
// ==========================================================================
dom.langPills.addEventListener('click', e => {
    const b = e.target.closest('.lang-btn');
    if (b) applyLanguage(b.dataset.lang);
});

dom.typeGrid.addEventListener('click', e => {
    const t = e.target.closest('.type-tab');
    if (!t) return;
    dom.typeGrid.querySelectorAll('.type-tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    state.docType = t.dataset.type;
    updateDocumentView();
    haptic('light');
});

dom.tierGrid.addEventListener('click', e => {
    const t = e.target.closest('.tier-pill');
    if (!t) return;
    dom.tierGrid.querySelectorAll('.tier-pill').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
    state.tier = t.dataset.tier;
    dom.tierBadge.textContent = t.querySelector('.tier-name').textContent;
    haptic('light');
});

dom.styleGrid.addEventListener('click', e => {
    const s = e.target.closest('.style-option');
    if (!s) return;
    dom.styleGrid.querySelectorAll('.style-option').forEach(x => x.classList.remove('active'));
    s.classList.add('active');
    state.contentStyle = s.dataset.style;
    haptic('light');
});

dom.palettesGrid.addEventListener('click', e => {
    const p = e.target.closest('.palette-card');
    if (!p) return;
    dom.palettesGrid.querySelectorAll('.palette-card').forEach(x => x.classList.remove('active'));
    p.classList.add('active');
    state.design = p.dataset.design;
    haptic('light');
});

dom.submitBtn.addEventListener('click', onSubmit);

// Boshlang'ich initsializatsiya
applyLanguage('uz');
updateDocumentView();
