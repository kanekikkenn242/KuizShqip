const allQuestions = [
    { question: "Cila fjali ka kryefjalë të nënkuptuar dhe kundrinor të drejtë?", options: ["Nxënësi lexon librin.", "Lexoj librin çdo mbrëmje.", "Libri lexohet nga nxënësi.", "Nxënësit po lexojnë."], correct: 1 },
    { question: "Në cilën fjali 'i bukur' është pjesë e kallëzuesit?", options: ["Djali i bukur po vjen.", "Djali, i bukur dhe i zgjuar, po vjen.", "Djali është i bukur.", "I bukuri erdhi sot."], correct: 2 },
    { question: "Cila fjali është e përbërë me varësi?", options: ["Ai lexon dhe shkruan.", "Ai lexon librin.", "Kur erdhi mësuesi, filloi ora.", "Nxënësit po mësojnë."], correct: 2 },
    { question: "Cila fjalë është përemër vetor në trajtë të shkurtër?", options: ["librin", "ai", "ia", "vetë"], correct: 2 },
    { question: "Në cilën fjali ka dy kundrinorë?", options: ["Ai lexon librin.", "Ia dhashë librin shokut.", "Shkon në shkollë.", "Erdhi dje."], correct: 1 },
    { question: "Cila fjali është dëftore, por shpreh këshillë?", options: ["Mos fol shumë!", "Do ishte mirë të mësoje.", "A po mëson?", "Mëso tani."], correct: 1 },
    { question: "Cila fjali ka rend të përmbysur të gjymtyrëve?", options: ["Nxënësi lexon librin.", "Librin lexon nxënësi.", "Nxënësit po mësojnë.", "Ai po vjen."], correct: 1 },
    { question: "Në cilën fjali 'me librin' është kundrinor i zhdrejtë?", options: ["Erdhi me librin në dorë.", "Libri është mbi tavolinë.", "Lexoi librin.", "Libri është i ri."], correct: 0 },
    { question: "Cila fjali është pyetëse pa shenjë pikëpyetjeje?", options: ["Kush erdhi sot", "A po vjen nesër", "Sa bukur është", "Të gjitha"], correct: 3 },
    { question: "Cila fjali ka kallëzues emëror?", options: ["Djali vrapon.", "Djali është nxënës.", "Djali lexon librin.", "Djali po mëson."], correct: 1 },
    { question: "Cila është dallimi kryesor mes fabulës dhe subjektit?", options: ["Fabula ka personazhe", "Subjekti është më i shkurtër", "Fabula ndjek rendin kohor të ngjarjeve", "Nuk ka dallim"], correct: 2 },
    { question: "Cila figurë letrare përdoret në shprehjen 'zemra më digjej'?", options: ["Krahasim", "Personifikim", "Metaforë", "Epitet"], correct: 2 },
    { question: "Cila poezi quhet lirike?", options: ["Poezia me dialog", "Poezia që tregon një histori", "Poezia që shpreh ndjenja personale", "Poezia me shumë personazhe"], correct: 2 },
    { question: "Çfarë është personazhi kolektiv?", options: ["Personazh kryesor", "Personazh i imagjinuar", "Një grup që vepron si një personazh", "Personazh negativ"], correct: 2 },
    { question: "Cila figurë letrare i jep sendeve cilësi njerëzore?", options: ["Metafora", "Krahasimi", "Personifikimi", "Hiperbola"], correct: 2 },
    { question: "Migjeni dallohet sepse:", options: ["Shkruan për heronj historikë", "Zbukuronte realitetin", "Tregonte realitetin e hidhur shoqëror", "Shkruante vetëm poezi dashurie"], correct: 2 },
    { question: "Cila vepër është menduar kryesisht për t'u luajtur?", options: ["Poezia", "Tregimi", "Drama", "Eseja"], correct: 2 },
    { question: "Çfarë është monologu?", options: ["Bisedë mes dy personave", "Mendim i brendshëm i personazhit", "Përshkrim i vendit", "Rrëfim i autorit"], correct: 1 },
    { question: "Rima shërben kryesisht për:", options: ["Tregim të gjatë", "Bukuri tingëllore në poezi", "Shpjegim idesh", "Argumentim"], correct: 1 },
    { question: "Qëllimi kryesor i figurave letrare është:", options: ["Të sqarojnë rregulla", "Të zbukurojnë dhe forcojnë shprehjen", "Të japin informacion", "Të tregojnë kohën"], correct: 1 },
    { question: "Cila fjali ka kuptim figurativ?", options: ["Ai hapi derën ngadalë.", "Koha fluturon shpejt.", "Ai vrapoi shpejt.", "Dielli perëndon."], correct: 1 },
    { question: "Në cilën fjali fjala 'si' përdoret për krahasim?", options: ["Si erdhe sot?", "Ai është si vëlla për mua.", "Si quhesh?", "Si mësove kaq mirë?"], correct: 1 },
    { question: "Cila fjali shpreh këshillë pa qenë urdhër?", options: ["Mëso tani!", "Mos fol!", "Do ishte mirë të pushoje pak.", "Pusho menjëherë!"], correct: 2 },
    { question: "Cila fjali ka rend jo të zakonshëm të fjalëve?", options: ["Nxënësi lexon librin.", "Nxënësit po mësojnë.", "Librin lexon nxënësi.", "Ai po vjen sot."], correct: 2 },
    { question: "Në cilën fjali fjala e theksuar është përdorur gabim?", options: ["Ai punon më shumë se dje.", "Ky është nxënësi më i mirë.", "Ai vrapon më shpejtë.", "Kjo detyrë është më e vështirë."], correct: 2 },
    { question: "Cila fjali ka kuptim të dyfishtë?", options: ["Ai lexon librin.", "Ajo pa djalin me dylbi.", "Nxënësit po mësojnë.", "Libri është interesant."], correct: 1 },
    { question: "Në cilën fjali fjala 'dritë' ka kuptim figurativ?", options: ["Drita e llambës u fik.", "Hapi dritën e dhomës.", "Ai ishte dritë për familjen.", "Drita hyri nga dritarja."], correct: 2 },
    { question: "Cila fjali ka kryefjalë të nënkuptuar?", options: ["Nxënësi po mëson.", "Ajo lexon librin.", "Lexoj çdo ditë.", "Libri esztë i ri."], correct: 2 },
    { question: "Cila fjali është pyetëse pa fjalë pyetëse?", options: ["Kush erdhi sot?", "A po vjen nesër?", "Sa bukur është?", "Pse u vonove?"], correct: 1 },
    { question: "Cila fjali është dëftore, por shpreh këshillë?", options: ["Ulu tani!", "Mos fol!", "Do ishte mirë të mësoje më shumë.", "A po mëson?"], correct: 2 },
    { question: "Çfarë shpreh poezia lirike?", options: ["Ngjarje historike", "Ndjenja personale", "Dialog mes personazheve", "Rregulla"], correct: 1 },
    { question: "Kur themi se një personazh është simbolik?", options: ["Kur është real", "Kur përfaqëson një ide ose grup njerëzish", "Kur flet shumë", "Kur është dytësor"], correct: 1 },
    { question: "Cila figurë letrare përdoret për zbukurim?", options: ["Metafora", "Epiteti", "Ironia", "Alegoria"], correct: 1 },
    { question: "Cila figurë përdor teprim?", options: ["Krahasimi", "Epiteti", "Metafora", "Hiperbola"], correct: 3 },
    { question: "Çfarë është mesazhi i një vepre?", options: ["Ngjarja kryesore", "Personazhi kryesor", "Mendimi që autori do të përcjellë", "Titulli"], correct: 2 },
    { question: "Cila vepër mbështetet më shumë te dialogu?", options: ["Poezia", "Drama", "Eseja", "Proza poetike"], correct: 1 },
    { question: "Migjeni njihet sepse:", options: ["Idealizon jetën", "Shkruan për natyrën", "Tregon jetën e vështirë të njerëzve", "Shkruan vetëm poezi dashurie"], correct: 2 },
    { question: "Çfarë është fabula?", options: ["Idetë e autorit", "Radhitja e ngjarjeve sipas kohës", "Personazhet", "Mesazhi"], correct: 1 },
    { question: "Cila figurë i jep sendeve cilësi njerëzore?", options: ["Metafora", "Krahasimi", "Personifikimi"], correct: 2 },
    { question: "Qëllimi i letërsisë artistike është:", options: ["Të japë informacion", "Të zbukurojë gjuhën dhe të shprehë ndjenja", "Të japë urdhra", "Të shpjegojë rregulla"], correct: 1 }
];

const fjaletEHarruara = [
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
     { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
     { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
     { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
     { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
     { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
     { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
     { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
     { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
     { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Tes", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    { fjala: "Test", kuptimi: "Test." },
    
];

let activeQuestions = [];
let currentQuestion = 0;
let score = 0;
let isAnswering = false;

function showView(viewId) {
    const views = ['landing-view', 'about-view', 'contact-view', 'privacy-view', 'quiz-view', 'results-view', 'fjalori-view'];
    views.forEach(id => {
        const el = document.getElementById(id);
        if (id === viewId) {
            el.classList.remove('hidden');
            gsap.fromTo(el, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 });
        } else {
            el.classList.add('hidden');
        }
    });

    if (viewId === 'quiz-view' || viewId === 'results-view') {
        document.getElementById('nav-links').classList.add('hidden');
        document.getElementById('nav-play-btn').classList.add('hidden');
        document.getElementById('quiz-status').classList.remove('hidden');
    } else {
        document.getElementById('nav-links').classList.remove('hidden');
        document.getElementById('nav-play-btn').classList.remove('hidden');
        document.getElementById('quiz-status').classList.add('hidden');
    }

    if (viewId === 'fjalori-view') {
        populateFjalori();
    }

    window.scrollTo(0, 0);
}

function populateFjalori() {
    const container = document.getElementById('fjalori-container');
    container.innerHTML = '';
    fjaletEHarruara.forEach(item => {
        const card = document.createElement('div');
        card.className = 'word-card p-6 rounded-2xl';
        card.innerHTML = `
            <h4 class="text-xl font-bold text-red-500 mb-2">${item.fjala}</h4>
            <p class="text-gray-300 text-sm">${item.kuptimi}</p>
        `;
        container.appendChild(card);
    });
    gsap.from(".word-card", { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 });
}

function startQuiz(category = 'Mikse') {
    activeQuestions = [...allQuestions].sort(() => Math.random() - 0.5).slice(0, 10);
    currentQuestion = 0;
    score = 0;
    document.getElementById('category-badge').innerText = category;
    document.getElementById('total-q-num').innerText = activeQuestions.length;
    updateStats();
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

    nextBtn.style.opacity = "0";
    nextBtn.style.pointerEvents = "none";
    isAnswering = true;

    document.getElementById('current-q-num').innerText = currentQuestion + 1;
    const progressPct = (currentQuestion / activeQuestions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPct}%`;

    gsap.to(qText, { opacity: 0, y: -10, duration: 0.2, onComplete: () => {
        qText.innerText = qData.question;
        gsap.to(qText, { opacity: 1, y: 0, duration: 0.2 });
    }});

    optsContainer.innerHTML = '';
    qData.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-card text-left p-6 rounded-xl text-lg font-medium w-full flex justify-between items-center group';
        btn.innerHTML = `<span>${opt}</span><span class="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>`;
        btn.onclick = () => selectOption(index, btn);
        optsContainer.appendChild(btn);
    });
    gsap.from(".option-card", { y: 20, opacity: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" });
}

function selectOption(selectedIndex, btnElement) {
    if (!isAnswering) return;
    isAnswering = false;
    const correctIndex = activeQuestions[currentQuestion].correct;
    const allBtns = document.querySelectorAll('.option-card');
    if (selectedIndex === correctIndex) {
        btnElement.classList.add('correct');
        score += 20;
    } else {
        btnElement.classList.add('wrong');
        allBtns[correctIndex].classList.add('correct');
    }
    allBtns.forEach(btn => btn.style.pointerEvents = 'none');
    updateStats();
    gsap.to("#quiz-controls", { opacity: 1, pointerEvents: "all", duration: 0.3, delay: 0.4 });
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function updateStats() {
    const scoreEl = document.getElementById('score-display');
    gsap.to(scoreEl, { innerText: score, duration: 0.5, snap: { innerText: 1 } });
}

function showResults() {
    document.getElementById('final-score').innerText = score;
    showView('results-view');
}

window.addEventListener('load', () => {
    gsap.registerPlugin(ScrollTrigger);
    const heroTl = gsap.timeline();
    heroTl.from("#badge", { y: -20, opacity: 0, duration: 0.8, ease: "power2.out" })
          .from("#hero-title", { y: 50, opacity: 0, duration: 1, ease: "power4.out" }, "-=0.4")
          .to("#hero-text", { y: 0, opacity: 1, duration: 1 }, "-=0.6")
          .to("#hero-cta", { opacity: 1, y: 0, duration: 0.8 }, "-=0.5");

    gsap.to(".float-icon", {
        y: -20, rotation: 10, duration: 3, yoyo: true, repeat: -1, ease: "sine.inOut", stagger: 1
    });

    gsap.from(".cat-card", {
        scrollTrigger: { trigger: "#kategorite", start: "top 85%" },
        y: 60, opacity: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.7)"
    });

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
});
