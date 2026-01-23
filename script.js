const allQuestions = {
    gramatika: [
        { question: "Cila fjali është e thjeshtë?", options: ["Ai filloi të fliste.", "E dija ku do të dilje.", "Shkoi që të niste një jetë të re.", "Prisni sa të pushojë shiu"], correct: 0 },
        { question: "Forma e pashtjelluar e foljes \"pa punuar\" është:", options: ["pjesore", "paskajore", "mohore", "përcjellore"], correct: 2 },
        { question: "Folja \"mund\" te grupi i fjalëve \"mund të shprehet\" është folje:", options: ["modale", "gjysmëndihmëse", "ndihmëse", "me kuptim të plotë leksikor"], correct: 0 },
        { question: "Forma e pashtjelluar e foljes \"pa punuar\" është:", options: ["pjesore", "paskajore", "mohore", "përcjellore"], correct: 2 },
        { question: "Kaltërsia e qiellit humbi në muzgun e mbrëmjes, është:", options: ["dykryegjymtyrëshe", "njëkryegjymtyrëshe", "njëkryegjymtyrëshe foljore", "fjalia përcaktore"], correct: 0 },
        { question: "Dielli i kuq zjarri, është:", options: ["njëkryegjymtyrëshe emërore", "njëkryegjymtyrëshe", "njëkryegjymtyrëshe foljore", "fjalia foljore e zgjeruar"], correct: 0 },
        { question: "Diku gjëmon, është:", options: ["njëkryegjymtyrëshe foljore", "njëkryegjymtyrëshe emërore", "dykryegjymtyrëshe e pazgjeruar", "fjalia e plotë"], correct: 0 },
        { question: "Në fjalinë \"Asgjë nuk pipëtinte\", gjymtyra kryesore shprehet me:", options: ["përemër i pacaktuar", "përemër pronor", "përemër lidhor", "përemër dëftor"], correct: 0 },
        { question: "Në fjalinë \"Shkronjat qenë shtypur me dy ngjyra të ndryshme\", kallëzuesi është:", options: ["kallëzues emëror", "kallëzues i përbërë", "kallëzues foljor i thjeshtë", "folje veprore"], correct: 2 },
        { question: "Fusha e Rugës Pal, emërton:", options: ["një mjedis loje", "një rrugë", "një fshat", "një mal"], correct: 0 },
        { question: "Fusha e djemve të lumtur të fshatit, është:", options: ["emërore përshkruese", "foljore e zgjeruar", "kallëzore", "njëkryegjymtyrëshe"], correct: 0 },
        { question: "E kuqja e kaltër e magjiplotë qiellore ndërtohet me:", options: ["emër dhe mbiemra", "vetëm emra", "folje dhe emra", "ndajfolje"], correct: 0 },
        { question: "S’kishte kënaqësi më të madhe, gjymtyra e dytë është:", options: ["kundrinor", "përcaktor kallëzuesor", "rrethanor", "kryefjalë"], correct: 1 },
        { question: "A është përdorur si duhet përemri vetor në fjalinë \"Neve do të shkojmë në bibliotekë\"?", options: ["Po", "Jo", "Nuk dihet", "Nuk ka përemër vetor"], correct: 1 },
        { question: "Në fjalinë \"Ku shkon?\", fjala \"ku\" është:", options: ["Pjesëz", "Lidhëz", "Ndajfolje", "Pasthirrmë"], correct: 2 },
        { question: "Në fjalinë \"Mbaroi së lexuari\", shprehja \"së lexuari\" është:", options: ["Folje", "Mbiemër", "Emër prejfoljor asnjanës", "Ndajfolje"], correct: 2 },
        { question: "Në fjalinë \"Pse më shikon me habi?\", çfarë është \"pse\"?", options: ["Kundrinor i drejtë", "Rrethanor", "Kryefjalë", "Kallëzues"], correct: 1 },
        { question: "Sa përemra ka në këtë fjali: \"Ky libër u kujtonte të gjithëve se çdokush mund ta humbiste veten kur ndodhej në situata të tilla\"?", options: ["4", "5", "6", "7"], correct: 2 },
        { question: "Fjala \"nxënësit\" është:", options: ["emër njëjës", "emër shumës", "mbiemër", "përemër"], correct: 1 },
        { question: "Cila fjali ka kryefjalë të nënkuptuar?", options: ["Ai lexon librin", "Nxënësi mëson", "Lexoj çdo ditë", "Libri është i ri"], correct: 2 },
        { question: "Fjala \"më\" është:", options: ["emër", "lidhëz", "përemër vetor", "pjesëz"], correct: 2 },
        { question: "Cila fjali është e përbërë?", options: ["Ai po vjen", "Nxënësi lexon", "Ai lexon dhe shkruan", "Libri është interesant"], correct: 2 },
        { question: "Kundrinor i drejtë ka fjalia:", options: ["Ai foli me shokun", "Ai bleu librin", "Ai shkoi në shkollë", "Ai është nxënës"], correct: 1 },
        { question: "Fjala \"i bukur\" është:", options: ["emër", "mbiemër", "ndajfolje", "folje"], correct: 1 },
        { question: "Në cilën fjali ka kallëzues emëror?", options: ["Ai vrapon", "Ai është nxënës", "Ai lexon librin", "Ai po shkruan"], correct: 1 },
        { question: "Fjala \"shpejt\" është:", options: ["mbiemër", "ndajfolje", "emër", "folje"], correct: 1 },
        { question: "Cila fjali është pohore?", options: ["A po vjen?", "Mos ik!", "Ai po lexon", "Sa bukur!"], correct: 2 },
        { question: "Fjala \"të\" në \"dua të lexoj\" është:", options: ["përemër", "parafjalë", "pjesëz", "lidhëz"], correct: 2 },
        { question: "Fjalia \"Libri u lexua\" është:", options: ["veprore", "joveprore", "pyetëse", "dëftore"], correct: 1 },
        { question: "Fjala \"vajzat\" është:", options: ["emër femëror shumës", "emër mashkullor", "mbiemër", "ndajfolje"], correct: 0 },
        { question: "Kundrinor të zhdrejtë ka fjalia:", options: ["Ai bleu librin", "Ai i foli shokut", "Ai shkoi në shtëpi", "Ai është nxënës"], correct: 1 },
        { question: "Fjala \"në\" është:", options: ["lidhëz", "parafjalë", "pjesëz", "përemër"], correct: 1 },
        { question: "Fjalia \"Nxënësit mësojnë\" është:", options: ["e thjeshtë", "e përbërë", "pyetëse", "mohuese"], correct: 0 },
        { question: "Cila është folje?", options: ["bukur", "lexoj", "libri", "i madh"], correct: 1 },
        { question: "Fjala \"ai\" është:", options: ["emër", "mbiemër", "përemër vetor", "lidhëz"], correct: 2 },
        { question: "Cila fjali ka rrethanor vendi?", options: ["Ai lexon librin", "Ai erdhi dje", "Ai shkoi në shkollë", "Ai është nxënës"], correct: 2 },
        { question: "Fjala \"mëson\" është në:", options: ["kohën e shkuar", "kohën e tashme", "kohën e ardhme", "mënyrën lidhore"], correct: 1 },
        { question: "Fjalia \"Të lexosh është mirë\" ka kryefjalë:", options: ["emër", "mbiemër", "folje", "përemër"], correct: 2 }
    ],
    drejtshkrimi: [
        { question: "Është shkruar saktë fjala:", options: ["Për së gjalli", "Përsë gjalli", "Për sëgjalli", "Përsëgjalli"], correct: 3 },
        { question: "Cila fjalë është shkruar saktë?", options: ["Gjithesekush", "Gjithe sekush", "Gjith se kush", "Gjithsekush"], correct: 3 },
        { question: "Cila fjalë është shkruar gabim?", options: ["Gjithsecili", "Kurrkund", "Gjithnjë", "Kurrekush"], correct: 3 },
        { question: "Cila është shkruar saktë?", options: ["Shkolla ime", "shkolla Ime", "shkolla ime", "Shkolla Ime"], correct: 2 },
        { question: "Fjalia me presje të saktë është:", options: ["Kur erdhi mësuesi filloi ora", "Kur erdhi, mësuesi filloi ora", "Kur erdhi mësuesi, filloi ora", "Kur, erdhi mësuesi filloi ora"], correct: 2 },
        { question: "Cila fjali mbyllet me pikëçuditëse?", options: ["A po vjen", "Mos ik", "Sa bukur është deti", "Kur erdhi"], correct: 2 },
        { question: "Cila fjalë ka ë të patheksuar?", options: ["dritë", "bukë", "nxënës", "fletore"], correct: 2 },
        { question: "Cila është shkruar drejt?", options: ["përëndim", "perëndim", "perendim", "përendim"], correct: 1 },
        { question: "Dy pika (:) përdoren për:", options: ["pyetje", "listim", "habi", "mohim"], correct: 1 },
        { question: "Cila fjali ka pikësim të saktë?", options: ["Ai tha se, do të vijë", "Ai tha se do të vijë", "Ai, tha se do të vijë", "Ai tha, se do të vijë"], correct: 1 },
        { question: "Presja përdoret për:", options: ["ndarje fjalësh", "ndarje fjalisë", "ndarje paragrafësh", "mbyllje teksti"], correct: 1 },
        { question: "Cila fjalë ka shkronjë të madhe?", options: ["nxënës", "shqipëri", "Shqipëri", "shqiperi"], correct: 2 },
        { question: "Cila është shkruar drejt?", options: ["bashkpunim", "bashkëpunim", "bashkepunim", "bashkpunimi"], correct: 1 }
    ],
    leksiologjia: [
        { question: "Dallo fjalën e parme.", options: ["Bregore", "Bregdetar", "Bregdet", "Breg"], correct: 3 },
        { question: "Sinonim i \"i gëzuar\":", options: ["i mërzitur", "i lumtur", "i lodhur", "i heshtur"], correct: 1 },
        { question: "Antonim i \"i madh\":", options: ["i gjatë", "i vogël", "i gjerë", "i trashë"], correct: 1 },
        { question: "\"Zemërgur\" ka kuptim:", options: ["të drejtpërdrejtë", "figurativ", "shkencor", "teknik"], correct: 1 },
        { question: "Cila është fjalë e përbërë?", options: ["shtëpi", "nxënës", "kryeqytet", "libër"], correct: 2 },
        { question: "Fjala \"libër\" është:", options: ["e huazuar", "dialektore", "shqipe", "teknike"], correct: 2 },
        { question: "Sinonim i \"i shpejtë\":", options: ["i ngadaltë", "i vrullshëm", "i vonë", "i lodhur"], correct: 1 },
        { question: "Antonim i \"i errët\":", options: ["i zi", "i thellë", "i ndritshëm", "i madh"], correct: 2 },
        { question: "Fjala \"kokëfortë\" është:", options: ["fjalë e thjeshtë", "fjalë e përbërë", "sinonim", "antonim"], correct: 1 },
        { question: "Kuptim figurativ ka fjalia:", options: ["Ai hapi derën", "Ai ka zemër të madhe", "Ai pi ujë", "Ai lexon librin"], correct: 1 },
        { question: "Sinonim i \"trim\":", options: ["frikacak", "guximtar", "i dobët", "i lodhur"], correct: 1 },
        { question: "Antonim i \"i pasur\":", options: ["i madh", "i varfër", "i gjerë", "i fortë"], correct: 1 },
        { question: "Fjala \"mendjehapur\" është:", options: ["e thjeshtë", "e përbërë", "e huaj", "dialektore"], correct: 1 },
        { question: "Fjala \"dritë\" në \"dritë e jetës\" është:", options: ["kuptim i drejtpërdrejtë", "kuptim figurativ", "ndajfolje", "mbiemër"], correct: 1 },
        { question: "Sinonim i \"i bukur\":", options: ["i keq", "i shëmtuar", "i hijshëm", "i errët"], correct: 2 },
        { question: "Antonim i \"fillim\":", options: ["hap", "nisje", "fund", "rrugë"], correct: 2 },
        { question: "Fjala \"nxënës\" është:", options: ["fjalë e huaj", "fjalë shqipe", "term teknik", "dialektore"], correct: 1 },
        { question: "Sinonim i \"i zgjuar\":", options: ["i trashë", "i mençur", "i lodhur", "i ngadaltë"], correct: 1 },
        { question: "Antonim i \"i qetë\":", options: ["i zhurmshëm", "i mirë", "i bukur", "i butë"], correct: 0 },
        { question: "Fjala \"shpresë\" ka kuptim:", options: ["konkret", "abstrakt", "teknik", "dialektor"], correct: 1 },
        { question: "\"Krahëhapur\" përdoret zakonisht në kuptim:", options: ["të drejtpërdrejtë", "figurativ", "shkencor", "teknik"], correct: 1 }
    ],
    letërsia: [ 
        { question: "Figura letrare: \"Puhia e lehtë rrudhte sipërfaqen e detit\" është:", options: ["epitet", "simbol", "metaforë", "antitezë"], correct: 2 },
        { question: "Kush u zgjodh kryetar te Kongresi i Manastirit?", options: ["Gjergj Fishta", "Parashqevi Qiriazi", "Luigj Gurakuqi", "Mit'hat Frashëri"], correct: 3 },
        { question: "Cila vepër është cilësuar si Iliada shqiptare?", options: ["Bagëti e bujqësi", "Poema e mjerimit", "Lahuta e Malcis", "Martesa e Halilit"], correct: 2 },
        { question: "\"Bagëti e Bujqësi\" është vepër e:", options: ["Migjeni", "Naim Frashëri", "Kadare", "Fishta"], correct: 1 },
        { question: "Migjeni trajton kryesisht:", options: ["dashurinë", "mjerimin shoqësor", "natyrën", "mitologjinë"], correct: 1 },
        { question: "\"Kronikë në gur\" është shkruar nga:", options: ["Naim Frashëri", "Ismail Kadare", "Fan Noli", "Fishta"], correct: 1 },
        { question: "\"Lahuta e Malcis\" është vepër e:", options: ["Migjeni", "Noli", "Fishta", "Kadare"], correct: 2 },
        { question: "Poezia lirike shpreh:", options: ["urdhra", "dialog", "ndjenja personale", "rregulla"], correct: 2 },
        { question: "Epika trajton:", options: ["ndjenja", "ngjarje", "urdhra", "përshkrime shkencore"], correct: 1 },
        { question: "Figura letrare në \"koha fluturon\" është:", options: ["krahasim", "metaforë", "epitet", "hiperbolë"], correct: 1 },
        { question: "Fan Noli njihet si:", options: ["poet vetëm", "shkrimtar dhe përkthyes", "dramaturg", "romancier"], correct: 1 },
        { question: "\"Mrizi i Zanave\" është vepër e:", options: ["Naim Frashëri", "Migjeni", "Fishta", "Kadare"], correct: 2 },
        { question: "Personazhi kryesor është:", options: ["më pak i rëndësishmi", "ai që shfaqet pak", "qendra e veprës", "rrëfimtari"], correct: 2 },
        { question: "Teksti letrar përdor:", options: ["gjuhë të thatë", "gjuhë figurative", "gjuhë teknike", "rregulla"], correct: 1 },
        { question: "Migjeni i përket:", options: ["romantizmit", "realizmit", "simbolizmit", "klasicizmit"], correct: 1 },
        { question: "Kadare njihet për:", options: ["poezi lirike", "romane", "drama", "përralla"], correct: 1 },
        { question: "Rima përdoret në:", options: ["prozë", "poezi", "lajm", "tekst shkencor"], correct: 1 },
        { question: "Fabula është:", options: ["morali", "ngjarja kryesore", "përshkrimi", "dialogu"], correct: 1 },
        { question: "Tema është:", options: ["personazhi", "ideja kryesore", "vendi", "koha"], correct: 1 },
        { question: "Proza dallon nga poezia sepse:", options: ["ka rimë", "nuk ka vargje", "ka figurë", "ka ndjenja"], correct: 1 },
        { question: "Personazhet dytësore janë:", options: ["kryesorët", "më pak të rëndësishëm", "rrëfimtarë", "autorë"], correct: 1 },

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
        const shuffled = [...allQuestions[category]].sort(() => Math.random() - 0.5);
        activeQuestions = shuffled.slice(0, 10);
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
