const allQuestions = {
    gramatika: [
        { question: "Cila fjali ka kryefjalë të nënkuptuar dhe kundrinor të drejtë?", options: ["Nxënësi lexon librin.", "Lexoj librin çdo mbrëmje.", "Libri lexohet nga nxënësi.", "Nxënësit po lexojnë."], correct: 1 },
        { question: "Në cilën fjali 'i bukur' është pjesë e kallëzuesit?", options: ["Djali i bukur po vjen.", "Djali, i bukur dhe i zgjuar, po vjen.", "Djali është i bukur.", "I bukuri erdhi sot."], correct: 2 },
        { question: "Cila fjali është e përbërë me varësi?", options: ["Ai lexon dhe shkruan.", "Ai lexon librin.", "Kur erdhi mësuesi, filloi ora.", "Nxënësit po mësojnë."], correct: 2 },
        { question: "Cila fjalë është përemër vetor në trajtë të shkurtër?", options: ["librin", "ai", "ia", "vetë"], correct: 2 },
        { question: "Në cilën fjali ka dy kundrinorë?", options: ["Ai lexon librin.", "Ia dhashë librin shokut.", "Shkon në shkollë.", "Erdhi dje."], correct: 1 },
        { question: "Cila fjali është dëftore, por shpreh këshillë?", options: ["Mos fol shumë!", "Do ishte mirë të mësoje.", "A po mëson?", "Mëso tani."], correct: 1 },
        { question: "Cila fjali ka rend të përmbysur të gjymtyrëve?", options: ["Nxënësi lexon librin.", "Librin lexon nxënësi.", "Nxënësit po mësojnë.", "Ai po vjen."], correct: 1 },
        { question: "Në cilën fjali 'me librin' është kundrinor i zhdrejtë?", options: ["Erdhi me librin në dorë.", "Libri është mbi tavolinë.", "Lexoi librin.", "Libri është i ri."], correct: 0 },
        { question: "Cila fjali është pyetëse pa shenjë pikëpyetjeje?", options: ["Kush erdhi sot", "A po vjen nesër", "Sa bukur është", "Të gjitha"], correct: 3 },
        { question: "Cila fjali ka kallëzues emëror?", options: ["Djali vrapon.", "Djali është nxënës.", "Djali lexon librin.", "Djali po mëson."], correct: 1 }
    ],
    drejtshkrimi: [
        { question: "Cila fjalë ka drejtshkrimin e saktë?", options: ["Mësim", "Mësiim", "Messim", "Mëssim"], correct: 0 },
        { question: "Cilat nga këto janë shkruar saktë?", options: ["Shkollë", "Shkolle", "Shkollë", "Shkollë"], correct: 0 },
        { question: "Cila fjali është shkruar saktë?", options: ["Ai po vrapë", "Ai po vrap", "Ai po vrapë", "Ai po vrapë"], correct: 1 },
        { question: "Cila është forma e saktë?", options: ["Nxënës", "Nxenes", "Nxënëss", "Nxenës"], correct: 0 },
        { question: "Si shkruhet saktë?", options: ["Përkufizim", "Perkufizim", "Përkufizim", "Perkufikzim"], correct: 0 },
        { question: "Cila fjali nuk ka gabime drejtshkrimi?", options: ["Ata jan nxenes", "Ata janë nxënës", "Ata jane nxënës", "Ata janë nxenes"], correct: 1 },
        { question: "Cila është forma e saktë?", options: ["Bibliotekë", "Biblioteke", "Biblioteka", "Bibliotekë"], correct: 0 },
        { question: "Si shkruhet saktë?", options: ["Mëndja", "Medhja", "Mendja", "Mendhja"], correct: 2 },
        { question: "Cilat nga këto janë shkruar saktë?", options: ["Dëshirë", "Desirë", "Dësirë", "Désire"], correct: 0 },
        { question: "Cila fjali nuk ka gabime?", options: ["Libri eshte interesant", "Libri është interesant", "Libri eshte interesannt", "Libri esht interesant"], correct: 1 }
    ],
    leksiologjia: [
        { question: "Cila fjalë është sinonim me 'i mençur'?", options: ["I bujshëm", "I zgjuar", "I ndryshueshëm", "I paqeshëm"], correct: 1 },
        { question: "Cila fjalë është antonim i 'e mirë'?", options: ["E shtrenjtë", "E keqe", "E lirë", "E rrallë"], correct: 1 },
        { question: "Çfarë nënkupton 'freskë'?", options: ["E vjetër", "E re dhe e freskë", "E therur", "E prishur"], correct: 1 },
        { question: "Cila fjalë ka të njëjtin kuptim me 'lëndim'?", options: ["Dërgim", "Plagosje", "Ardhje", "Largim"], correct: 1 },
        { question: "Cili është antonimi i 'mbërritje'?", options: ["Ardhje", "Largim", "Hyrje", "Ngjitje"], correct: 1 },
        { question: "Cila fjalë nënkupton 'shumë i gjatë'?", options: ["I shkurtër", "I përgjatshëm", "I ngushtë", "I i ngathët"], correct: 1 },
        { question: "Sinonim i 'gëzim' është:", options: ["Trishtim", "Këngë", "Lumturi", "Dhimbje"], correct: 2 },
        { question: "Cili është antonimi i 'fillim'?", options: ["Mbarim", "Hapje", "Ngjitje", "Bie"], correct: 0 },
        { question: "Çfarë nënkupton 'buzeqeshje'?", options: ["Për të vrarë", "Ngurrim", "Buzëzim hapës", "Buzë e vogël"], correct: 3 },
        { question: "Cila fjalë ka të njëjtin kuptim me 'ngathtësirë'?", options: ["Fortësi", "Dëxtrim", "Dobësi", "Ligësi"], correct: 1 }
    ],
    letërsia: [
        { question: "Cila është dallimi kryesor mes fabulës dhe subjektit?", options: ["Fabula ka personazhe", "Subjekti është më i shkurtër", "Fabula ndjek rendin kohor të ngjarjeve", "Nuk ka dallim"], correct: 2 },
        { question: "Cila figurë letrare përdoret në shprehjen 'zemra më digjej'?", options: ["Krahasim", "Personifikim", "Metaforë", "Epitet"], correct: 2 },
        { question: "Cila poezi quhet lirike?", options: ["Poezia me dialog", "Poezia që tregon një histori", "Poezia që shpreh ndjenja personale", "Poezia me shumë personazhe"], correct: 2 },
        { question: "Çfarë është personazhi kolektiv?", options: ["Personazh kryesor", "Personazh i imagjinuar", "Një grup që vepron si një personazh", "Personazh negativ"], correct: 2 },
        { question: "Cila figurë letrare i jep sendeve cilësi njerëzore?", options: ["Metafora", "Krahasimi", "Personifikimi", "Hiperbola"], correct: 2 },
        { question: "Migjeni dallohet sepse:", options: ["Shkruan për heronj historikë", "Zbukuronte realitetin", "Tregonte realitetin e hidhur shoqëror", "Shkruante vetëm poezi dashurie"], correct: 2 },
        { question: "Cila vepër është menduar kryesisht për t'u luajtur?", options: ["Poezia", "Tregimi", "Drama", "Eseja"], correct: 2 },
        { question: "Çfarë është monologu?", options: ["Bisedë mes dy personave", "Mendim i brendshëm i personazhit", "Përshkrim i vendit", "Rrëfim i autorit"], correct: 1 },
        { question: "Rima shërben kryesisht për:", options: ["Tregim të gjatë", "Bukuri tingëllore në poezi", "Shpjegim idesh", "Argumentim"], correct: 1 },
        { question: "Qëllimi kryesor i figurave letrare është:", options: ["Të sqarojnë rregulla", "Të zbukurojnë dhe forcojnë shprehjen", "Të japin informacion", "Të tregojnë kohën"], correct: 1 }
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
    { fjala: "Masha", kuptimi: "Kapse per të tërhequr drurin " },
    { fjala: "Finjilla zjarri", kuptimi: "Shpuzë" },
    { fjala: "Shal kali", kuptimi: "Vend për të qëndruar sipër kalit" },
    { fjala: "Hipizëm", kuptimi: "Garë me kuaj" },
    { fjala: "Hebe", kuptimi: "Mbajtëse sendesh" },
    { fjala: "Trasta", kuptimi: "Mbajtëse sendesh të qëndrisura me punë dore" },
    { fjala: "Djep", kuptimi: "Krevat për bebet" },
    { fjala: "Shpergenj", kuptimi: "Brez për të lidhur femijët në djepe" },
    { fjala: "Odat ", kuptimi: "Dhomë për miqtë" },
    { fjala: "Postiqe", kuptimi: "Gëzof i deles" },
    { fjala: "Tunci", kuptimi: "Tundëse qumështi" },
    { fjala: "Gyp", kuptimi: "Tub prej druri" },
    { fjala: "Korbulla", kuptimi: "Vend për të ruajtur produktet bulmore" },
    { fjala: "Gajtanr", kuptimi: "Fije e trashë" },
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
    { fjala: "Kullostër", kuptimi: "Qumështi i parë pasi lindin bagëtit" },
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
    const fraseContainer = document.getElementById('fraselogjike-container');
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
    
    gsap.from(".word-card", { opacity: 0, y: 20, stagger: 0.1, duration: 0.5 });
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
        activeQuestions = [...allQuestions[category]].sort(() => Math.random() - 0.5);
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
    
    document.getElementById('category-badge').innerText = categoryNames[category] || category;
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
