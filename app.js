// ==========================================================================
// TALABA BOT - WEB APP CLIENT APPLICATION (app.js)
// Telegram WebApp SDK, 5 Tildagi Lug'at, Real-Time WebSocket va UI boshqaruvi
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

// 2. 5 TILLARDA PROFESSIONAL LUG'AT
const I18N = {
    uz: {
        heroTitle: "Talaba Akademik Portali",
        heroDesc: "Referat, Kurs ishi va Slaydlarni professional tarzda yarating",
        langTitle: "Til / Language",
        docTypeTitle: "Hujjat Turini Tanlang",
        tReferat: "Referat",
        sReferat: "10-15 bet Word",
        tSlayd: "Slayd",
        sSlayd: "5-30 ta PPTX",
        tKurs: "Kurs ishi",
        sKurs: "40-60 bet Word",
        adminLink: "Savollar bo'yicha adminga bog'lanish",
        tierTitle: "Sifat Darajasi (Tier)",
        tierSimple: "Oddiy",
        subSimple: "Oq fon, matn",
        tierStandard: "Standart",
        subStandard: "Oltin hoshiya",
        tierPremium: "Premium 💎",
        subPremium: "Unsplash rasmli",
        styleTitle: "Kontent Uslubi (Slayd)",
        styleText: "1. Matn ko'proq, rasmlar kamroq",
        styleBalanced: "2. Balanslangan (matn va rasm)",
        styleVisual: "3. Rasmlar ko'p, matn qisqa va lo'nda",
        inputsTitle: "Mavzu va Fan",
        lblSubject: "Fan nomi",
        pSubject: "Masalan: Iqtisodiyot, Tarix, Informatika, Huquq...",
        lblTopic: "Mavzu nomi",
        pTopic: "Masalan: Raqamli iqtisodiyotning rivojlanish istiqbollari...",
        lblVolume: "Sahifalar soni",
        lblVolumeSlides: "Slaydlar soni",
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
        st2: "Status 2: Matn va rasmlar yig'ilmoqda...",
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
        sReferat: "10-15 бет Word",
        tSlayd: "Слайд",
        sSlayd: "5-30 та PPTX",
        tKurs: "Курс иши",
        sKurs: "40-60 бет Word",
        adminLink: "Саволлар бўйича админга боғланиш",
        tierTitle: "Сифат Даражаси (Tier)",
        tierSimple: "Оддий",
        subSimple: "Оқ фон, матн",
        tierStandard: "Стандарт",
        subStandard: "Олтин ҳошия",
        tierPremium: "Premium 💎",
        subPremium: "Unsplash расмли",
        styleTitle: "Контент Услуби (Слайд)",
        styleText: "1. Матн кўпроқ, расмлар камроқ",
        styleBalanced: "2. Балансланган (матн ва расм)",
        styleVisual: "3. Расмлар кўп, матн қисқа ва лўнда",
        inputsTitle: "Мавзу ва Фан",
        lblSubject: "Фан номи",
        pSubject: "Масалан: Иқтисодиёт, Тарих, Информатика, Ҳуқуқ...",
        lblTopic: "Мавзу номи",
        pTopic: "Масалан: Рақамли иқтисодиётнинг ривожланиш истиқболлари...",
        lblVolume: "Саҳифалар сони",
        lblVolumeSlides: "Слайдлар сони",
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
        st2: "Status 2: Матн ва расмлар йиғилмоқда...",
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
        sReferat: "10-15 стр. Word",
        tSlayd: "Слайды",
        sSlayd: "5-30 слайдов PPTX",
        tKurs: "Курсовая",
        sKurs: "40-60 стр. Word",
        adminLink: "Связаться с администратором",
        tierTitle: "Уровень качества (Tier)",
        tierSimple: "Простой",
        subSimple: "Белый фон, текст",
        tierStandard: "Стандарт",
        subStandard: "Золотая рамка",
        tierPremium: "Премиум 💎",
        subPremium: "Фото Unsplash",
        styleTitle: "Стиль контента (Слайды)",
        styleText: "1. Больше текста, меньше картинок",
        styleBalanced: "2. Сбалансированный (текст + фото)",
        styleVisual: "3. Много фото, краткий текст",
        inputsTitle: "Тема и Предмет",
        lblSubject: "Название предмета",
        pSubject: "Например: Экономика, История, Право...",
        lblTopic: "Название темы",
        pTopic: "Например: Перспективы развития цифровой экономики...",
        lblVolume: "Количество страниц",
        lblVolumeSlides: "Количество слайдов",
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
        st2: "Status 2: Сбор текста и фото Unsplash...",
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
        sReferat: "10-15 bet Word",
        tSlayd: "Slayd",
        sSlayd: "5-30 bet PPTX",
        tKurs: "Kurs jumısı",
        sKurs: "40-60 bet Word",
        adminLink: "Sorawlar boyınsha adminge baylanısıw",
        tierTitle: "Sapa Dárejesi (Tier)",
        tierSimple: "Ápiwayı",
        subSimple: "Aq fon, tekst",
        tierStandard: "Standart",
        subStandard: "Altın hoshiya",
        tierPremium: "Premium 💎",
        subPremium: "Unsplash súwretli",
        styleTitle: "Kontent Uslubı (Slayd)",
        styleText: "1. Tekst kóbirek, súwretler az",
        styleBalanced: "2. Balanslanǵan (tekst hám súwret)",
        styleVisual: "3. Súwretler kóp, tekst qısqa",
        inputsTitle: "Tema hám Pán",
        lblSubject: "Pán atı",
        pSubject: "Máselen: Ekonomika, Tariyx, Huqıq...",
        lblTopic: "Tema atı",
        pTopic: "Máselen: Sanlı ekonomikanıń rawajlanıw keleshegi...",
        lblVolume: "Betler sanı",
        lblVolumeSlides: "Slaydlar sanı",
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
        st2: "Status 2: Tekst hám súwretler jıynaw...",
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
        sReferat: "10-15 p. Word",
        tSlayd: "Slides",
        sSlayd: "5-30 slides PPTX",
        tKurs: "Coursework",
        sKurs: "40-60 p. Word",
        adminLink: "Contact Administrator",
        tierTitle: "Quality Tier",
        tierSimple: "Simple",
        subSimple: "White bg, text",
        tierStandard: "Standard",
        subStandard: "Gold border",
        tierPremium: "Premium 💎",
        subPremium: "Unsplash photos",
        styleTitle: "Content Style (Slides)",
        styleText: "1. More text, fewer images",
        styleBalanced: "2. Balanced (text & images)",
        styleVisual: "3. Rich images, concise text",
        inputsTitle: "Topic & Subject",
        lblSubject: "Subject Name",
        pSubject: "e.g.: Economics, History, Computer Science...",
        lblTopic: "Topic Name",
        pTopic: "e.g.: Prospects of Digital Economy Development...",
        lblVolume: "Page Count",
        lblVolumeSlides: "Slide Count",
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
        st2: "Status 2: Drafting text & fetching Unsplash photos...",
        st3: "Status 3: Applying design & building document...",
        st4: "Status 4: Uploading final document to Telegram...",
        errSubject: "Please enter subject name!",
        errTopic: "Please enter topic name!"
    }
};

// 3. ILOVA HOLATI (STATE)
const state = {
    lang: 'uz',
    docType: 'referat',
    tier: 'premium',
    contentStyle: 'balanced',
    subject: '',
    topic: '',
    volume: 15,
    design: 'minimalist',
    clientId: 'client_' + Math.random().toString(36).substring(2, 9)
};

const VOLUMES = {
    referat: [10, 11, 12, 13, 14, 15],
    slayd: [5, 10, 15, 20, 30],
    kurs_ishi: [40, 45, 50, 55, 60]
};

// DOM ELEMENTLARI
const dom = {
    langPills: document.getElementById('langPills'),
    typeGrid: document.getElementById('typeGrid'),
    formatBadge: document.getElementById('formatBadge'),
    tierGrid: document.getElementById('tierGrid'),
    tierBadge: document.getElementById('tierBadge'),
    styleSection: document.getElementById('styleSection'),
    styleGrid: document.getElementById('styleGrid'),
    subjectInput: document.getElementById('subjectInput'),
    topicInput: document.getElementById('topicInput'),
    volumeTitle: document.getElementById('volumeTitle'),
    volumeBadge: document.getElementById('volumeBadge'),
    pillsBar: document.getElementById('pillsBar'),
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

// Hajm va sahifalar sonini yangilash
function updateVolumeOptions() {
    const list = VOLUMES[state.docType] || [10];
    dom.pillsBar.innerHTML = '';

    if (!list.includes(state.volume)) {
        state.volume = list[list.length - 1];
    }

    const t = I18N[state.lang];
    const isSlide = state.docType === 'slayd';
    dom.volumeTitle.textContent = isSlide ? t.lblVolumeSlides : t.lblVolume;
    dom.volumeBadge.textContent = `${state.volume} ${isSlide ? 'slayd' : 'bet'}`;
    dom.formatBadge.textContent = isSlide ? 'PowerPoint (.pptx)' : 'Word (.docx)';

    // Slayd xususiyatlari faqat slayd tanlanganda ko'rinadi
    dom.styleSection.style.display = isSlide ? 'block' : 'none';
    dom.designSection.style.display = isSlide ? 'block' : 'none';

    list.forEach(v => {
        const b = document.createElement('div');
        b.className = 'num-pill' + (v === state.volume ? ' active' : '');
        b.textContent = v;
        b.onclick = () => {
            dom.pillsBar.querySelectorAll('.num-pill').forEach(x => x.classList.remove('active'));
            b.classList.add('active');
            state.volume = v;
            dom.volumeBadge.textContent = `${v} ${isSlide ? 'slayd' : 'bet'}`;
            haptic('light');
        };
        dom.pillsBar.appendChild(b);
    });
}

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

    updateVolumeOptions();
    haptic('light');
}

// ==========================================================================
// 4. REAL-TIME WEBSOCKET PROGRESS BOSHQARUVI
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
    dom.modalSub.textContent = `${name}: ${state.volume} ${state.docType === 'slayd' ? 'slayd' : 'bet'} • Gemini + Unsplash`;

    updateProgressUI(1);

    // 1. Telegram Bridge orqali to'g'ridan-to'g'ri jo'natish (agar bot klaviaturasidan ochilgan bo'lsa)
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

    // Zaxira animatsiya agar WebSocket server mavjud bo'lmasa
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
// 5. YUBORISH VA VALIDATSIYA (SUBMIT)
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
// 6. EVENT TINGLOVCHILARI (EVENT LISTENERS)
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
    updateVolumeOptions();
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
