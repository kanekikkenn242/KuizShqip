const allQuestions = {
    gramatika: [
        { question: "Kur fjala \"kush\" është përdorur si përemër lidhor?", options: ["Kush u jep këshilla lexuesve të rinj?", "A e ka parë kush këtë film?", "Kush shkruan autobiografi, shkruan librat më të mirë?"], correct: 2 },
        { question: "Në fjalinë \"Doli qiellit hëna e trishtë\" emri qiellit është në:", options: ["Rasën gjinore, trajta e pashquar", "Rasën dhanore, trajta e shquar", "Rasën rrjedhore, trajta e shquar", "Rasën kallëzore, trajta e pashquar"], correct: 2 },
        { question: "Cili përemër është futur gabim sipas llojit?", options: ["Dëshirën e vet", "Mendimet e tyre", "Ditë të tjera", "Zëri i saj"], correct: 2 },
        { question: "“Ju hapa zemrën, se më krijuat besim.” është fjali me nënrenditje:", options: ["Ftilluese", "Kundrinore", "Kryefjalore", "Shkakore"], correct: 3 },
        { question: "Cila fjali është e thjeshtë?", options: ["Ai filloi të fliste.", "E dija ku do të dilje.", "Shkoi që të niste një jetë të re.", "Prisni sa të pushojë shiu"], correct: 0 },
        { question: "Forma e pashtjelluar e foljes \"pa punuar\" është:", options: ["pjesore", "paskajore", "mohore", "përcjellore"], correct: 2 },
        { question: "Folja \"mund\" te grupi i fjalëve \"mund të shprehet\" është folje:", options: ["modale", "gjysmëndihmëse", "ndihmëse", "me kuptim të plotë leksikor"], correct: 0 },
        { question: "Dielli i kuq zjarr, është fjali:", options: ["njëkryegjymtyrëshe emërore", "njëkryegjymtyrëshe", "njëkryegjymtyrëshe foljore", "fjalia foljore e zgjeruar"], correct: 0 },
        { question: "Diku gjëmon, është fjali:", options: ["njëkryegjymtyrëshe foljore", "njëkryegjymtyrëshe emërore", "dykryegjymtyrëshe e pazgjeruar", "fjalia e plotë"], correct: 0 },
        { question: "Në fjalinë \"Asgjë nuk pipëtinte\", gjymtyra kryesore shprehet me:", options: ["përemër i pacaktuar", "përemër pronor", "përemër lidhor", "përemër dëftor"], correct: 0 },
        { question: "Në fjalinë \"Shkronjat qenë shtypur me dy ngjyra të ndryshme\", kallëzuesi është:", options: ["kallëzues emëror", "kallëzues i përbërë", "kallëzues foljor i thjeshtë", "opsion i plotësuar"], correct: 0 },
        { question: "Fusha e djemve të lumtur të fshatit, është:", options: ["emërore përshkruese", "foljore e zgjeruar", "kallëzore", "njëkryegjymtyrëshe"], correct: 0 },
        { question: "S’kishte kënaqësi më të madhe, gjymtyra e dytë është:", options: ["kundrinor", "përcaktor kallëzuesor", "rrethanor", "kryefjalë"], correct: 1 },
        { question: "Në fjalinë \"Ku shkon?\", fjala \"ku\" është:", options: ["Pjesëz", "Lidhëz", "Ndajfolje", "Pasthirrje"], correct: 2 },
        { question: "Në fjalinë \"Mbaroi së lexuari\", shprehja \"së lexuari\" është:", options: ["Folje", "Mbiemër", "Emër prejfoljor asnjanës", "Ndajfolje"], correct: 2 },
        { question: "Në fjalinë \"Pse më shikon me habi?\", çfarë është fjala \"pse\"?", options: ["Kundrinor i drejtë", "Rrethanor", "Kryefjalë", "Kallëzues"], correct: 1 },
        { question: "Sa përemra ka në këtë fjali: \"Ky libër u kujtonte të gjithëve se çdokush mund ta humbiste veten kur ndodhej në situata të tilla\"?", options: ["4", "5", "6", "7"], correct: 1 },
        { question: "Cila fjali është e përbërë?", options: ["Ai po vjen", "Nxënësi lexon", "Ai lexon dhe shkruan", "Libri është interesant"], correct: 2 },
        { question: "Fjala \"të\" në \"dua të lexoj\" është:", options: ["përemër", "parafjalë", "pjesëz", "lidhëz"], correct: 2 },
        { question: "Fjala \"në\" është:", options: ["lidhëz", "parafjalë", "pjesëz", "përemër"], correct: 1 },
        { question: "Cila fjali ka rrethanor vendi?", options: ["Ai lexon librin", "Ai erdhi dje", "Ai shkoi në shkollë", "Ai është nxënës"], correct: 2 },
    ],

    drejtshkrimi: [
        { question: "Cila fjalë është shkruar saktë?", options: ["I herëpas hershëm", "I herë pas hershëm", "I herëpashershēm", "I herë pashershëm"], correct: 2 },
        { question: "Çfarë studion drejtshkrimi?", options: ["Tingujt e gjuhës", "Shkrimin e saktë të fjalëve dhe shenjave", "Kuptimin e fjalëve", "Formimin e fjalive"], correct: 1 },
        { question: "Kur shkruhet shkronja e madhe?", options: ["Në mes të fjalisë", "Te çdo fjalë", "Në fillim të fjalisë", "Pas presjes"], correct: 2 },
        { question: "Cila fjali është shkruar saktë?", options: ["une jetoj ne tirane.", "Une jetoj ne Tiranë.", "Unë jetoj në Tiranë.", "unë Jetoj në Tiranë."], correct: 2 },
        { question: "Thonjëzat përdoren për:", options: ["Emra vetjakë", "Fjalë të huaja", "Fjalë të cituara", "Numra"], correct: 2 },
        { question: "Cili është shkrimi i saktë i fjalës?", options: ["bashkëpuntor", "bashkëpunëtor", "bashkpunëtor", "bashkëpunetor"], correct: 1 },
        { question: "Është shkruar saktë fjala:", options: ["Për së gjalli", "Përsë gjalli", "Për sëgjalli", "Përsëgjalli"], correct: 0 },
        { question: "Cila fjalë është shkruar saktë?", options: ["Gjithësekush", "Gjithë sekush", "Gjith se kush", "Gjithsekush"], correct: 3 },
        { question: "Cila fjalë është shkruar gabim?", options: ["Gjithsecili", "Kurrkund", "Gjithnjë", "Kurrekush"], correct: 3 },
        { question: "Dy pika (:) përdoren për:", options: ["pyetje", "listim", "habi", "mohim"], correct: 1 },
        { question: "Cila është shkruar drejt?", options: ["bashkpunim", "bashkëpunim", "bashkë punim",], correct: 1 }
    ],

    leksiologjia: [
        { question: "Fjala \"i pabesueshëm\" është:", options: ["E thjeshtë", "E përbërë", "E prejardhur", "E përngjitur"], correct: 3 },
        { question: "Dallo fjalën e parme.", options: ["Bregore", "Bregdetar", "Bregdet", "Breg"], correct: 3 },
        { question: "Sinonim i fjalës \"i gëzuar\":", options: ["i mërzitur", "i lumtur", "i lodhur", "i heshtur"], correct: 1 },
        { question: "Antonim i fjalës \"i madh\":", options: ["i gjatë", "i vogël", "i gjerë", "i trashë"], correct: 1 },
        { question: "\"Zemërgur\" ka kuptim:", options: ["të drejtpërdrejtë", "figurativ", "shkencor", "teknik"], correct: 1 },
        { question: "Cila është fjalë e përbërë?", options: ["shtëpi", "nxënës", "kryeqytet", "libër"], correct: 2 },
        { question: "Sinonim i fjalës\"i shpejtë\":", options: ["i ngadaltë", "i vrullshëm", "i vonë", "i lodhur"], correct: 1 },
        { question: "Antonim i fjalës \"i errët\":", options: ["i zi", "i thellë", "i ndritshëm", "i madh"], correct: 2 },
        { question: "Fjala \"kokëfortë\" është:", options: ["fjalë e thjeshtë", "fjalë e përbërë", "sinonim", "antonim"], correct: 1 },
        { question: "Kuptim figurativ ka fjalia:", options: ["Ai hapi derën", "Ai ka zemër të madhe", "Ai pi ujë", "Ai lexon librin"], correct: 1 },
        { question: "Sinonim i  fjalës\"trim\":", options: ["frikacak", "guximtar", "i dobët", "i lodhur"], correct: 1 },
        { question: "Antonim i fjalës \"i pasur\":", options: ["i madh", "i varfër", "i gjerë", "i fortë"], correct: 1 },
        { question: "Fjala \"mendjehapur\" është:", options: ["e thjeshtë", "e përbërë", "e prejardhur", "e përngjitur"], correct: 1 },
        { question: "Sinonim i fjalës\"i bukur\":", options: ["i keq", "i shëmtuar", "i hijshëm", "i errët"], correct: 2 },
        { question: "Antonim i fjalës\"fillim\":", options: ["hap", "nisje", "fund", "rrugë"], correct: 2 },
        { question: "Sinonim i fjalës \"i zgjuar\":", options: ["i trashë", "i mençur", "i lodhur", "i ngadaltë"], correct: 1 },
        { question: "Antonim i fjalës \"i qetë\":", options: ["i zhurmshëm", "i mirë", "i bukur", "i butë"], correct: 0 },
        { question: "Fjala \"shpresë\" ka kuptim:", options: ["konkret", "abstrakt", "i përveçëm", "i përgjithshëm"], correct: 1 },
        { question: "\"Krahëhapur\" përdoret zakonisht në kuptim:", options: ["të drejtpërdrejtë", "figurativ", "shkencor", "teknik"], correct: 1 }
    ],

    letërsia: [
        { question: "Dallo fjalën e urtë.", options: ["E priti hundë e buzë", "S'le dy gurë bashkë", "E gjykon puna, s'e gjykon guna.", "Heq të zitë e ullirit"], correct: 2 },
        { question: "Cila pjesë i përket ciklit të Kreshnikëve?", options: ["Djali i nënës dhe e Bukura e Dheut", "Dielli dhe Hëna", "Muji dhe Halili"], correct: 2 },
        { question: "Soneti përbëhet nga:", options: ["Dy strofa treshe dhe një katërshe", "Dy strofa katërshe dhe dy treshe", "Dy strofa dyshe dhe dy katërshe", "Dy strofa treshe dhe dy katërshe"], correct: 1 },
        { question: "Naim Frashëri në 'Bagëti e Bujqësia' ka përdorur:", options: ["Vargun 12 rrokësh", "Vargun 14 rrokësh", "Vargun 16 rrokësh", "Vargun 8 rrokësh"], correct: 1 },
        { question: "Rretho alternativën e gabuar. Tekstet letrare kanë për qëllim:", options: ["Edukimin artistik të lexuesit", "Edukimin me shijen e së bukurës", "Sjelljen e informacionit", "Të tjerat"], correct: 2 },
        { question: "Cili nga romanet nuk është shkruar nga Dritëro Agolli?", options: ["Prilli i thyer", "Njeriu me top", "Arka e djallit", "Shkëlqimi dhe rënia e shokut Zylo"], correct: 0 },
        { question: "Cili autor është quajtur 'Homeri i letërsisë shqipe'?", options: ["Migjeni", "Lasgush Poradeci", "Gjergj Fishta", "Mitrush Kuteli"], correct: 2 },
        { question: "Kush u zgjodh kryetar te Kongresi i Manastirit?", options: ["Gjergj Fishta", "Parashqevi Qiriazi", "Luigj Gurakuqi", "Mit'hat Frashëri"], correct: 3 },
        { question: "Cila vepër është cilësuar si Iliada shqiptare?", options: ["Bagëti e bujqësi", "Poema e mjerimit", "Lahuta e Malcis", "Martesa e Halilit"], correct: 2 },
        { question: "\"Bagëti e Bujqësi\" është vepër e:", options: ["Migjeni", "Naim Frashëri", " Ismail Kadare", "Gjergj Fishta"], correct: 1 },
        { question: "Migjeni trajton kryesisht:", options: ["dashurinë", "mjerimin shoqëror", "natyrën", "mitologjinë"], correct: 1 },
        { question: "\"Kronikë në gur\" është shkruar nga:", options: ["Naim Frashëri", "Ismail Kadare", "Fan Noli", "Fishta"], correct: 1 },
        { question: "\"Lahuta e Malcis\" është vepër e:", options: ["Migjeni", "Noli", "Gjergj Fishta", "Kadare"], correct: 2 },
        { question: "Poezia lirike shpreh:", options: ["urdhra", "dialog", "ndjenja personale", "rregulla"], correct: 2 },
        { question: "Epika trajton:", options: ["ndjenja", "ngjarje", "urdhra", "përshkrime shkencore"], correct: 1 },
        { question: "Figura letrare në \"koha fluturon\" është:", options: ["krahasim", "metaforë", "epitet", "hiperbolë"], correct: 1 },
        { question: "Fan Noli njihet si:", options: ["poet vetëm", "shkrimtar dhe përkthyes", "dramaturg", "romancier"], correct: 1 },
        { question: "\"Mrizi i Zanave\" është vepër e:", options: ["Naim Frashëri", "Migjeni", "Gjergj Fishta", "Ismail Kadare"], correct: 2 },
        { question: "Personazhi kryesor është:", options: ["më pak i rëndësishmi", "ai që shfaqet pak", "qendra e veprës", "rrëfimtari"], correct: 2 },
        { question: "Ismail Kadare njihet për:", options: ["poezi lirike", "romane", "drama", "përralla"], correct: 1 },
        { question: "Rima përdoret në:", options: ["prozë", "poezi", "lajm", "tekst shkencor"], correct: 1 },
        { question: "Fabula është:", options: ["morali", "ngjarja kryesore", "përshkrimi", "dialogu"], correct: 1 },
        { question: "Tema është:", options: ["personazhi", "ideja kryesore", "vendi", "koha"], correct: 1 },
        { question: "Proza dallon nga poezia sepse:", options: ["ka rimë", "nuk ka vargje", "ka figurë", "ka ndjenja"], correct: 1 },
        { question: "Personazhet dytësore janë:", options: ["kryesorët", "më pak të rëndësishëm", "rrëfimtarë", "autorë"], correct: 1 }
    ]
};

const fjaletEHarruara = [
    { fjala: "Bizë", kuptimi: "Një send me majë të mprehtë që shërben për të qepur" },
    { fjala: "Hosten", kuptimi: "Shkop me majë thumbuese" },
    { fjala: "Kapistër", kuptimi: "Litar që lidhet tek koka e lopës ose kafsheve të tjera" },
    { fjala: "Kandil", kuptimi: "Shërben për të ndriçuar" },
    { fjala: "Kotruve", kuptimi: "Enë prej balte që mban ujë brënda" },
    { fjala: "Gunë", kuptimi: "Veshje e barive" },
    { fjala: "Postiqe", kuptimi: "Lëkura e dashit për tu ulur" },
    { fjala: "Rrogoz", kuptimi: "Shtresë kashtore" },
    { fjala: "Haser", kuptimi: "Sinonim i rrogozit" },
    { fjala: "Shilte", kuptimi: "Ndenjëse për t'u ulur" },
    { fjala: "Bokshe", kuptimi: "Përparse" },
    { fjala: "Bashkë leshi", kuptimi: "Top leshi" },
    { fjala: "Kopan", kuptimi: "Shkop druri" },
    { fjala: "Dume", kuptimi: "Njësi matëse" },
    { fjala: "Kamostër", kuptimi: "Grep për të tërhequr drurin në zjarr" },
    { fjala: "Kërcuri", kuptimi: "Dru" },
    { fjala: "Demiroxhak", kuptimi: "Vend për te mbajtur drurët" },
    { fjala: "Masha", kuptimi: "Kapse për të tërhequr drurin" },
    { fjala: "Finjilla zjarri", kuptimi: "Shpuzë" },
    { fjala: "Shal kali", kuptimi: "Vend për të qëndruar sipër kalit" },
    { fjala: "Hipizëm", kuptimi: "Garë me kuaj" },
    { fjala: "Hebe", kuptimi: "Mbajtëse sendesh" },
    { fjala: "Trasta", kuptimi: "Mbajtëse sendesh të qëndrisura me punë dore" },
    { fjala: "Djep", kuptimi: "Krevat për bebet" },
    { fjala: "Shpërgenj", kuptimi: "Brez për të lidhur fëmijët në djepe" },
    { fjala: "Odat", kuptimi: "Dhomë për miqtë" },
    { fjala: "Postiqe", kuptimi: "Gëzof i deles" },
    { fjala: "Tunci", kuptimi: "Tundëse qumështi" },
    { fjala: "Gyp", kuptimi: "Tub prej druri" },
    { fjala: "Korbulla", kuptimi: "Vend për të ruajtur produktet bulmore" },
    { fjala: "Gajtan", kuptimi: "Fije e trashë" },
    { fjala: "Qylaf", kuptimi: "Kapele" },
    { fjala: "Shtagë", kuptimi: "Shkop druri" },
    { fjala: "Çerep", kuptimi: "Enë balte për pjekje mbi zjarr" },
    { fjala: "Mriz", kuptimi: "Hije ku pushojnë bagëtitë" },
    { fjala: "Havale", kuptimi: "Shqetësim" },
    { fjala: "Grazhd", kuptimi: "Vendi ku hanë bagëtitë" },
    { fjala: "Trinë", kuptimi: "Tryezë e vogël" },
    { fjala: "Shilte", kuptimi: "Dyshek i hollë" },
    { fjala: "Shuk", kuptimi: "Grumbull" },
    { fjala: "Rragë", kuptimi: "Rrobë e vjetër" },
    { fjala: "Kullostër", kuptimi: "Qumështi i parë pasi lindin bagëtitë" },
    { fjala: "Axha", kuptimi: "Xhaxhai" },
    { fjala: "Leth", kuptimi: "Baltë" },
    { fjala: "Zall", kuptimi: "Rërë" },
    { fjala: "Korit", kuptimi: "Turpëroj" },
    { fjala: "Gjol", kuptimi: "Liqen" },
    { fjala: "Rruguz", kuptimi: "Tapet" },
    { fjala: "Xhoke", kuptimi: "Xhaketë" },
    { fjala: "Gjegj", kuptimi: "Dëgjoj" },
    { fjala: "Sojë", kuptimi: "Fis, prejardhje" },
    { fjala: "Bavë", kuptimi: "Sëmundje" },
    { fjala: "Andë", kuptimi: "Brenda" },
    { fjala: "Vobekti", kuptimi: "Varfëri" },
    { fjala: "Kusi", kuptimi: "Enë balte për gatim mbi zjarr" },
    { fjala: "Kallaballëk", kuptimi: "Shumë njerëz, grumbull" },
    { fjala: "Trog", kuptimi: "Enë druri ku hanë bagëtitë" },
    { fjala: "Vrragë", kuptimi: "Plagë e vjetër" },
    { fjala: "Kacek", kuptimi: "Copë bukë e fortë" },
    { fjala: "Sahan", kuptimi: "Pjatë metalike" }
];

const shprehjeFrazelogjike = [
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    { shprehja: "", kuptimi: "" },
    
];

let activeQuestions = [];
let currentQuestion = 0;
let score = 0;
let isAnswering = false;

function sanitizeQuestion(q) {
    const fixed = Object.assign({}, q);
    if (typeof fixed.question !== 'string') fixed.question = 'Pyetje e paqartë';
    if (!Array.isArray(fixed.options) || fixed.options.length === 0) fixed.options = ['Opsione mungojnë'];
    if (typeof fixed.correct !== 'number' || fixed.correct < 0 || fixed.correct >= fixed.options.length) {
        console.warn('Sanitizing question (invalid correct):', fixed.question, '-> setting correct=0');
        fixed.correct = 0;
    }
    return fixed;
}

function showView(viewId) {
    const views = ['landing-view', 'about-view', 'contact-view', 'privacy-view', 'quiz-view', 'results-view', 'fjalori-view'];
    views.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        if (id === viewId) {
            el.classList.remove('hidden');
            try { gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }); } catch(e){}
        } else {
            el.classList.add('hidden');
        }
    });

    const navLinks = document.getElementById('nav-links');
    const navPlayBtn = document.getElementById('nav-play-btn');
    const quizStatus = document.getElementById('quiz-status');

    if (viewId === 'quiz-view' || viewId === 'results-view') {
        if (navLinks) navLinks.classList.add('hidden');
        if (navPlayBtn) navPlayBtn.classList.add('hidden');
        if (quizStatus) quizStatus.classList.remove('hidden');
    } else {
        if (navLinks) navLinks.classList.remove('hidden');
        if (navPlayBtn) navPlayBtn.classList.remove('hidden');
        if (quizStatus) quizStatus.classList.add('hidden');
    }

    if (viewId === 'fjalori-view') {
        populateFjalori();
    }

    window.scrollTo(0, 0);
}

function populateFjalori() {
    const container = document.getElementById('fjalori-container');
    const fraseContainer = document.getElementById('fraselogjike-container');
    if (!container || !fraseContainer) return;
    container.innerHTML = '';
    fraseContainer.innerHTML = '';

    fjaletEHarruara.sort((a, b) => a.fjala.localeCompare(b.fjala)).forEach(item => {
        const card = document.createElement('div');
        card.className = 'word-card p-6 rounded-2xl';
        card.innerHTML = `
            <h4 class="text-xl font-bold text-red-500 mb-2">${item.fjala}</h4>
            <p class="text-gray-300 text-sm">${item.kuptimi}</p>
        `;
        container.appendChild(card);
    });

    shprehjeFrazelogjike.sort((a, b) => a.shprehja.localeCompare(b.shprehja)).forEach(item => {
        const card = document.createElement('div');
        card.className = 'word-card p-6 rounded-2xl';
        card.innerHTML = `
            <h4 class="text-xl font-bold text-orange-500 mb-2">"${item.shprehja}"</h4>
            <p class="text-gray-300 text-sm">${item.kuptimi}</p>
        `;
        fraseContainer.appendChild(card);
    });

    try { gsap.from(".word-card", { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 }); } catch(e){}
}

function startQuiz(category = null) {
    if (!category) {
        showView('landing-view');
        setTimeout(() => {
            const kategoriteSection = document.getElementById('kategorite');
            if (kategoriteSection) {
                kategoriteSection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
        return;
    }

    if (allQuestions[category]) {
        const shuffled = [...allQuestions[category]].sort(() => Math.random() - 0.5);
        activeQuestions = shuffled.map(q => sanitizeQuestion(q)).slice(0, 10);
    } else {
        activeQuestions = [];
    }

    currentQuestion = 0;
    score = 0;

    const categoryNames = {
        'gramatika': 'Gramatika',
        'drejtshkrimi': 'Drejtshkrimi',
        'leksiologjia': 'Leksiologjia',
        'letërsia': 'Letërsia'
    };

    const badge = document.getElementById('category-badge');
    if (badge) badge.innerText = categoryNames[category] || category;
    const totalEl = document.getElementById('total-q-num');
    if (totalEl) totalEl.innerText = activeQuestions.length;
    updateStats(true);
    showView('quiz-view');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= activeQuestions.length) {
        showResults();
        return;
    }
    const qData = activeQuestions[currentQuestion];
    const qText = document.getElementById('question-text');
    const optsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('quiz-controls');

    if (nextBtn) {
        nextBtn.style.opacity = "0";
        nextBtn.style.pointerEvents = "none";
    }
    isAnswering = true;

    const currentNum = document.getElementById('current-q-num');
    if (currentNum) currentNum.innerText = currentQuestion + 1;
    const progressFill = document.getElementById('progress-fill');
    if (progressFill) {
        const denom = activeQuestions.length || 1;
        const progressPct = (currentQuestion / denom) * 100;
        progressFill.style.width = `${progressPct}%`;
    }

    if (qText) {
        try {
            gsap.to(qText, { opacity: 0, y: -10, duration: 0.2, onComplete: () => {
                qText.innerText = qData.question;
                gsap.to(qText, { opacity: 1, y: 0, duration: 0.2 });
            }});
        } catch(e) {
            qText.innerText = qData.question;
        }
    }

    if (!optsContainer) return;
    optsContainer.innerHTML = '';

    qData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-card text-left p-6 rounded-xl text-lg font-medium w-full flex justify-between items-center group';
        btn.innerHTML = `<span>${opt}</span><span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>`;
        btn.type = 'button';
        btn.onclick = () => selectOption(index, btn);
        optsContainer.appendChild(btn);
    });

    try { gsap.from(".option-card", { y: 20, opacity: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }); } catch(e){}
}

function selectOption(selectedIndex, btnElement) {
    if (!isAnswering) return;
    isAnswering = false;
    const current = activeQuestions[currentQuestion];
    const allBtns = Array.from(document.querySelectorAll('.option-card'));
    let correctIndex = (current && typeof current.correct === 'number') ? current.correct : null;

    if (!Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex >= allBtns.length) {
        console.warn('Invalid correct index for question:', current && current.question, 'correct:', correctIndex);
        correctIndex = null;
    }

    if (selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score += 20;
    } else {
        btnElement.classList.add('wrong');
        if (correctIndex !== null) {
            const correctBtn = allBtns[correctIndex];
            if (correctBtn) correctBtn.classList.add('correct');
        }
    }

    allBtns.forEach(btn => btn.style.pointerEvents = 'none');
    updateStats();
    try { gsap.to("#quiz-controls", { opacity: 1, pointerEvents: "all", duration: 0.3, delay: 0.4 }); } catch(e){}
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function updateStats(immediate = false) {
    const scoreEl = document.getElementById('score-display');
    if (!scoreEl) return;
    try {
        if (immediate) {
            scoreEl.innerText = score;
        } else {
            gsap.to(scoreEl, { innerText: score, duration: 0.5, snap: { innerText: 1 } });
        }
    } catch (e) {
        scoreEl.innerText = score;
    }
}

function showResults() {
    const finalScoreEl = document.getElementById('final-score');
    if (finalScoreEl) finalScoreEl.innerText = score;
    showView('results-view');
}

window.addEventListener('load', () => {
    try { gsap.registerPlugin(ScrollTrigger); } catch(e){}
    const heroTl = (typeof gsap !== 'undefined' && gsap.timeline) ? gsap.timeline() : null;
    if (heroTl) {
        heroTl.from("#badge", { y: -20, opacity: 0, duration: 0.8, ease: "power2.out" })
              .from("#hero-title", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.4")
              .to("#hero-text", { y: 0, opacity: 1, duration: 1 }, "-=0.6")
              .to("#hero-cta", { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");
    }

    try {
        gsap.to(".float-icon", {
            y: -20, rotation: 10, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut", stagger: 1
        });
    } catch(e){}

    try {
        gsap.from(".cat-card", {
            scrollTrigger: { trigger: "#kategorite", start: "top 85%" },
            y: 60, opacity: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.7)"
        });
    } catch(e){}

    try {
        gsap.utils.toArray(".counter").forEach(counter => {
            const target = counter.getAttribute("data-target");
            ScrollTrigger.create({
                trigger: counter,
                start: "top 90%",
                onEnter: () => {
                    gsap.to(counter, { innerText: target, duration: 2, snap: { innerText: 1 }, ease: "power2.out" });
                }
            });
        });
    } catch(e){}
});