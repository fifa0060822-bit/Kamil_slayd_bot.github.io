/**
 * Telegram Web App - Prezentatsiya Yaratish
 * JavaScript logika va tillarni boshqarish
 */

// ==========================================
// TELEGRAM WEB APP INIT
// ==========================================
const tg = window.Telegram?.WebApp;

if (tg) {
    tg.ready();
    tg.expand();
    tg.enableClosingConfirmation();
}

// ==========================================
// i18n - TILLAR LUG'ATI
// ==========================================
const translations = {
    uz: {
        appTitle: "Prezentatsiya Yaratish",
        appSubtitle: "AI yordamida professional taqdimotlar",
        langLabel: "Til / Язык",
        subjectLabel: "Fan nomi",
        subjectPlaceholder: "Masalan: Tarix, Informatika...",
        topicLabel: "Mavzu nomi",
        topicPlaceholder: "Masalan: Sun'iy intellektning kelajagi...",
        slidesLabel: "Slaydlar soni",
        designLabel: "Dizayn turi",
        designMinimalist: "Minimalist",
        designCorporate: "Korporativ",
        designCreative: "Kreativ",
        designDark: "Qorong'u",
        generateBtn: "Yaratish",
        generating: "Yaratilmoqda...",
        errorEmpty: "Iltimos, barcha maydonlarni to'ldiring!",
        errorSubject: "Fan nomini kiriting!",
        errorTopic: "Mavzu nomini kiriting!",
        successSent: "Ma'lumotlar yuborildi! Bot sizga tez orada prezentatsiya yuboradi.",
        errorSend: "Xatolik yuz berdi. Qayta urinib ko'ring.",
        errorNoTg: "Iltimos, bu ilovani Telegram orqali oching."
    },
    uz_cyrl: {
        appTitle: "Презентация Яратиш",
        appSubtitle: "AI ёрдамида профессионал тақдимотлар",
        langLabel: "Тил / Язык",
        subjectLabel: "Фан номи",
        subjectPlaceholder: "Масалан: Тарих, Информатика...",
        topicLabel: "Мавзу номи",
        topicPlaceholder: "Масалан: Сунъий интеллектнинг келажаги...",
        slidesLabel: "Слайдлар сони",
        designLabel: "Дизайн тури",
        designMinimalist: "Минималист",
        designCorporate: "Корпоратив",
        designCreative: "Креатив",
        designDark: "Қоронғу",
        generateBtn: "Яратиш",
        generating: "Яратилмоқда...",
        errorEmpty: "Илтимос, барча майдонларни тўлдиринг!",
        errorSubject: "Фан номини киритинг!",
        errorTopic: "Мавзу номини киритинг!",
        successSent: "Маълумотлар юборилди! Бот сизга тез орада презентация юборади.",
        errorSend: "Хатолик юз берди. Қайта уриниб кўринг.",
        errorNoTg: "Илтимос, бу иловани Telegram орқали очинг."
    },
    ru: {
        appTitle: "Создание Презентации",
        appSubtitle: "Профессиональные презентации с помощью ИИ",
        langLabel: "Язык / Til",
        subjectLabel: "Название предмета",
        subjectPlaceholder: "Например: История, Информатика...",
        topicLabel: "Название темы",
        topicPlaceholder: "Например: Будущее искусственного интеллекта...",
        slidesLabel: "Количество слайдов",
        designLabel: "Тип дизайна",
        designMinimalist: "Минималист",
        designCorporate: "Корпоративный",
        designCreative: "Креативный",
        designDark: "Тёмный",
        generateBtn: "Создать",
        generating: "Создаётся...",
        errorEmpty: "Пожалуйста, заполните все поля!",
        errorSubject: "Введите название предмета!",
        errorTopic: "Введите название темы!",
        successSent: "Данные отправлены! Бот скоро отправит вам презентацию.",
        errorSend: "Произошла ошибка. Попробуйте ещё раз.",
        errorNoTg: "Пожалуйста, откройте это приложение через Telegram."
    },
    kaa: {
        appTitle: "Prezentatsiya Jaratıw",
        appSubtitle: "AI járdeminde professional taqdıymalar",
        langLabel: "Til / Язык",
        subjectLabel: "Pán atı",
        subjectPlaceholder: "Máselen: Tariyxı, Informatika...",
        topicLabel: "Tema atı",
        topicPlaceholder: "Máselen: Sun'ıy intellekttıń keleshegi...",
        slidesLabel: "Slaydlar sanı",
        designLabel: "Dizayn túri",
        designMinimalist: "Minimalist",
        designCorporate: "Korporativ",
        designCreative: "Kreativ",
        designDark: "Qaranǵı",
        generateBtn: "Jaratıw",
        generating: "Jaratılmaqta...",
        errorEmpty: "Ótinish, barlıq maydanlardı toltırıń!",
        errorSubject: "Pán atın kiritiń!",
        errorTopic: "Tema atın kiritiń!",
        successSent: "Maǵlıwmatlar jiberildi! Bot sizge tez arada prezentatsiya jiberedi.",
        errorSend: "Qátelik júz berdi. Qayta urınıp kóriń.",
        errorNoTg: "Ótinish, bul ilovanı Telegram arqalı ashıń."
    },
    en: {
        appTitle: "Create Presentation",
        appSubtitle: "Professional presentations powered by AI",
        langLabel: "Language",
        subjectLabel: "Subject Name",
        subjectPlaceholder: "e.g.: History, Computer Science...",
        topicLabel: "Topic Name",
        topicPlaceholder: "e.g.: The Future of Artificial Intelligence...",
        slidesLabel: "Number of Slides",
        designLabel: "Design Type",
        designMinimalist: "Minimalist",
        designCorporate: "Corporate",
        designCreative: "Creative",
        designDark: "Dark",
        generateBtn: "Generate",
        generating: "Generating...",
        errorEmpty: "Please fill in all fields!",
        errorSubject: "Enter the subject name!",
        errorTopic: "Enter the topic name!",
        successSent: "Data sent! The bot will send you the presentation shortly.",
        errorSend: "An error occurred. Please try again.",
        errorNoTg: "Please open this app through Telegram."
    }
};

// ==========================================
// APP STATE
// ==========================================
const state = {
    language: 'uz',
    subject: '',
    topic: '',
    slideCount: 10,
    design: 'minimalist',
    isLoading: false
};

// ==========================================
// DOM REFERENCES
// ==========================================
const DOM = {
    langButtons: document.getElementById('langButtons'),
    slideButtons: document.getElementById('slideButtons'),
    designGrid: document.getElementById('designGrid'),
    subjectInput: document.getElementById('subjectInput'),
    topicInput: document.getElementById('topicInput'),
    generateBtn: document.getElementById('generateBtn'),
    statusMessage: document.getElementById('statusMessage')
};

// ==========================================
// LANGUAGE MANAGEMENT
// ==========================================
function setLanguage(lang) {
    state.language = lang;

    // Update active lang button
    DOM.langButtons.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key]) {
            // For buttons with inner spans, only update text nodes
            if (el.tagName === 'BUTTON' && el.querySelector('.btn-text')) {
                const textSpan = el.querySelector('.btn-text');
                // Keep the SVG, update text
                const svg = textSpan.querySelector('svg');
                textSpan.textContent = '';
                if (svg) textSpan.appendChild(svg);
                textSpan.append(' ' + t[key]);
            } else if (el.tagName === 'LABEL') {
                // Keep the SVG icon in labels
                const svg = el.querySelector('svg');
                el.textContent = '';
                if (svg) {
                    el.appendChild(svg);
                    el.append(' ');
                }
                el.append(t[key]);
            } else {
                el.textContent = t[key];
            }
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset['i18nPlaceholder'];
        if (t[key]) {
            el.placeholder = t[key];
        }
    });

    // Haptic feedback
    triggerHaptic('light');
}

// ==========================================
// HAPTIC FEEDBACK
// ==========================================
function triggerHaptic(type = 'light') {
    try {
        if (tg?.HapticFeedback) {
            if (type === 'success') {
                tg.HapticFeedback.notificationOccurred('success');
            } else if (type === 'error') {
                tg.HapticFeedback.notificationOccurred('error');
            } else if (type === 'medium') {
                tg.HapticFeedback.impactOccurred('medium');
            } else {
                tg.HapticFeedback.impactOccurred('light');
            }
        }
    } catch (e) {
        // Silently fail if haptic not available
    }
}

// ==========================================
// STATUS MESSAGE
// ==========================================
function showStatus(message, type = 'info') {
    DOM.statusMessage.textContent = message;
    DOM.statusMessage.className = `status-message ${type}`;
    DOM.statusMessage.style.display = 'block';

    // Auto-hide after 5 seconds for non-error messages
    if (type !== 'error') {
        setTimeout(() => {
            DOM.statusMessage.style.display = 'none';
        }, 5000);
    }
}

function hideStatus() {
    DOM.statusMessage.style.display = 'none';
}

// ==========================================
// LOADING STATE
// ==========================================
function setLoading(isLoading) {
    state.isLoading = isLoading;
    const btn = DOM.generateBtn;
    const btnText = btn.querySelector('.btn-text');
    const btnLoading = btn.querySelector('.btn-loading');

    btn.disabled = isLoading;
    btnText.style.display = isLoading ? 'none' : 'inline-flex';
    btnLoading.style.display = isLoading ? 'inline-flex' : 'none';
}

// ==========================================
// FORM VALIDATION
// ==========================================
function validateForm() {
    const t = translations[state.language];

    state.subject = DOM.subjectInput.value.trim();
    state.topic = DOM.topicInput.value.trim();

    if (!state.subject) {
        showStatus(t.errorSubject, 'error');
        DOM.subjectInput.focus();
        triggerHaptic('error');
        return false;
    }

    if (!state.topic) {
        showStatus(t.errorTopic, 'error');
        DOM.topicInput.focus();
        triggerHaptic('error');
        return false;
    }

    return true;
}

// ==========================================
// SEND DATA TO BOT
// ==========================================
function sendDataToBot() {
    const t = translations[state.language];

    if (!validateForm()) return;

    // Language name mapping for Gemini prompt
    const langNames = {
        uz: "O'zbek tilida",
        uz_cyrl: "Ўзбек тилида (кирил)",
        ru: "На русском языке",
        kaa: "Qaraqalpaq tilinde",
        en: "In English"
    };

    const data = {
        language: state.language,
        language_name: langNames[state.language] || "O'zbek tilida",
        subject: state.subject,
        topic: state.topic,
        slide_count: state.slideCount,
        design: state.design
    };

    setLoading(true);
    hideStatus();
    triggerHaptic('medium');

    try {
        if (tg?.sendData) {
            // Send data to the bot via Telegram WebApp bridge
            tg.sendData(JSON.stringify(data));
            showStatus(t.successSent, 'success');
            triggerHaptic('success');
            setTimeout(() => {
                try {
                    tg.close();
                } catch (e) {}
            }, 600);
        } else {
            // Fallback: log to console for testing outside Telegram
            console.log('📊 Presentation Data:', JSON.stringify(data, null, 2));
            showStatus(t.errorNoTg, 'error');
            triggerHaptic('error');
            setLoading(false);
        }
    } catch (error) {
        console.error('Send error:', error);
        showStatus(t.errorSend, 'error');
        triggerHaptic('error');
        setLoading(false);
    }
}

// ==========================================
// EVENT LISTENERS
// ==========================================

// Language buttons
DOM.langButtons.addEventListener('click', (e) => {
    const btn = e.target.closest('.lang-btn');
    if (btn) {
        setLanguage(btn.dataset.lang);
    }
});

// Slide count buttons
DOM.slideButtons.addEventListener('click', (e) => {
    const btn = e.target.closest('.slide-btn');
    if (btn) {
        DOM.slideButtons.querySelectorAll('.slide-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.slideCount = parseInt(btn.dataset.count, 10);
        triggerHaptic('light');
    }
});

// Design cards
DOM.designGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.design-card');
    if (card) {
        DOM.designGrid.querySelectorAll('.design-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        state.design = card.dataset.design;
        triggerHaptic('light');
    }
});

// Generate button
DOM.generateBtn.addEventListener('click', sendDataToBot);

// Input sync
DOM.subjectInput.addEventListener('input', (e) => {
    state.subject = e.target.value;
    hideStatus();
});

DOM.topicInput.addEventListener('input', (e) => {
    state.topic = e.target.value;
    hideStatus();
});

// ==========================================
// INIT
// ==========================================
(function init() {
    setLanguage('uz');
    console.log('✅ Prezentatsiya Web App initialized');
})();
