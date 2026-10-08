/* ==========================================================
   Portfolio data + interactions
   To add a project: append an object to PROJECTS (or FEATURED).
   Video types: { type: "youtube", id: "VIDEO_ID", start?: seconds }
                { type: "drive",   id: "GOOGLE_DRIVE_FILE_ID" }
   ========================================================== */

const IMG = "assets/img/";

/* ---------------- Latest / featured (concept only, NDA-safe) ---------------- */
const FEATURED = [
  {
    title: "Operations Control Room Smartwall",
    year: "2025 – Now",
    type: "Real-time Visualization · Large Display",
    engine: "Unity 6",
    platform: "Windows · Multi-screen Video Wall",
    art: "smartwall",
    concept:
      "A real-time command-center dashboard for an international airport's operations control room. It pulls live data from many systems onto one large-format smartwall, so operators can see the state of the whole facility at a glance and react to incidents quickly.",
    points: [
      "Live camera wall with switchable 1 / 4 / 9-feed grid layouts",
      "Incident and security counters with severity-coded alert frames (critical / medium / low)",
      "Hardware and device availability monitoring with weekly and monthly KPI cards",
      "API-driven data layer with a modular panel system that adapts to each site",
    ],
    tags: ["Unity 6", "C#", "REST API", "Live Streaming", "Data Viz", "UI/UX"],
    videos: [],
  },
  {
    title: "Excavator Simulation & Virtual Assistant",
    type: "Virtual Reality · Training Simulation",
    engine: "Unity 3D",
    platform: "Meta Quest / Oculus",
    thumb: "excavator.jpg",
    concept:
      "An immersive VR training simulator for heavy equipment. Trainees explore a full-scale excavator engine and learn its systems step by step, guided by a friendly animated virtual assistant, without needing the real machine on site.",
    points: [
      "Interactive, step-by-step walkthrough of engine systems (e.g. the fuel line from cooler to tank)",
      "Animated mascot assistant that narrates and guides each lesson",
      "Controller ray interaction with rotate, zoom and reset for close inspection",
      "Standalone VR build that runs untethered on Meta Quest",
    ],
    tags: ["Meta Quest", "Unity XR", "C#", "Training Sim", "Virtual Assistant"],
    videos: [{ label: "Preview", type: "drive", id: "1r5SlJ6P22i9mjG4Dpxkc9OKBdJUbaZAM" }],
  },
  {
    title: "Spatial AI Assistant",
    year: "2024 – Now",
    type: "Spatial Computing · AI",
    engine: "visionOS",
    platform: "Apple Vision Pro",
    art: "visionpro",
    concept:
      "Spatial intelligence powered by AI and RAG. The assistant looks at the user's real environment, understands the objects and content around them, and a friendly 3D character answers questions by voice, for example helping a customer choose the right smartphone or gadget.",
    points: [
      "Object Detection: recognises real-world items (devices, products, furniture) in real time",
      "Content Detection: reads posters, screens and printed material and turns them into context",
      "AI Assistant: a 3D character that talks with the user, grounded in a RAG knowledge base",
      "Natural input: look to target, pinch to select, speak to ask; no controllers needed",
    ],
    tags: ["Spatial Computing", "AI + RAG", "Object Detection", "Voice Assistant", "Hand/Eye Tracking"],
    videos: [],
  },
];

/* ---------------- Project library ---------------- */
const PROJECTS = [
  {
    title: "Nova Hop",
    year: "2026", cat: ["game"], type: "Hyper-casual · One-tap Arcade",
    engine: "HTML5 Canvas", platform: "Web · Mobile", lang: "JavaScript", thumb: "nova-hop.jpg",
    desc: "One-tap orbit hopper for browser and mobile: your comet circles a planet, and a tap slings it toward the next ring before a rising plasma tide catches up. Designed and built solo with no engine and no build step.",
    role: ["Game design and tuning: difficulty curve, five colour zones, gems and six unlockable trails", "Game feel: screen shake, hit-stop on perfects, squash and stretch, particles and haptics", "Fully synthesised WebAudio sound, with landing notes that climb a pentatonic scale", "Self-playing bot mode, used to simulate players and check the difficulty curve"],
    tags: ["JavaScript", "Canvas 2D", "WebAudio", "Game Feel", "Solo Dev"],
    links: [
      { label: "Play in Browser", url: "https://mackands.github.io/nova-hop/" },
      { label: "Source Code", url: "https://github.com/Mackands/nova-hop" },
    ],
  },
  {
    title: "The Reality Defender",
    year: "2026", cat: ["ar", "game"], type: "AR · Target Practice",
    engine: "Unity 6", platform: "Mobile (ARCore / ARKit)", lang: "C#", thumb: "reality-defender.jpg",
    desc: "AR target-practice mini-game: scan a surface, tap to place an anchored base, then shoot the three energy targets floating above it. Built with AR Foundation and URP.",
    role: ["Plane detection and tap-to-place, with the base anchored to the tapped plane and turned to face the player", "Physics-based shooting with pooled projectiles and continuous collision detection", "Custom unlit Shader Graph for the energy targets: scrolling noise, fresnel rim, hit flash and vertex wobble", "Event-driven architecture wired in one composition root, with no singletons"],
    tags: ["AR Foundation", "URP", "Shader Graph", "Object Pooling", "Input System"],
    links: [{ label: "Source Code", url: "https://github.com/Mackands/The-Reality-Defender" }],
  },
  {
    title: "Realm Protector", nda: true,
    year: "2023–2024", cat: ["game"], type: "Turn-Based RPG",
    engine: "Unity 3D", platform: "Mobile", lang: "C#", art: "realm",
    desc: "Turn-based cultivation RPG inspired by Taoism and the Shan Hai Jing (Classic of Mountains and Seas). I took full project ownership, from system architecture to implementation, after rebuilding most of the game's systems.",
    role: ["Character selection with attribute & skill systems", "Real-time stamina dashboard, inventory and cultivation (rank up & ascension)", "Battle preparation plus turn order / action selection battle system", "API manager, real-time sync, validation & error handling"],
    tags: ["C#", "Architecture", "Backend Integration"],
  },
  {
    title: "Math Adventure RPG", nda: true,
    year: "2023–2024", cat: ["game"], type: "Educational RPG",
    engine: "Unity 3D", platform: "Mobile", lang: "C#", art: "math",
    desc: "Math adventure for Indonesian elementary school students: run through a village world, and every obstacle hit or checkpoint reached opens a math quiz to keep going. Rebuilt from scratch as the sole game developer.",
    role: ["Training arena & adventure world", "Main-menu dashboard and Google login", "Battle preparation & battle system", "Documentation and collaboration with the project owner"],
    tags: ["C#", "EdTech", "Solo Dev"],
  },
  {
    title: "Pop Pop — Bubble Shooter",
    year: "2022", cat: ["game"], type: "Hyper-casual · Web3",
    engine: "Unity 3D", platform: "Web", lang: "C#",
    desc: "Refactored a bubble shooter into Pop Pop and released it on an omni-chain gamified engagement platform.",
    role: ["Gameplay refactor", "Platform release", "Code reviews & sprint tasks"],
    tags: ["WebGL", "Hyper-casual"],
    videos: [{ label: "Gameplay", type: "youtube", id: "i4H9U_5RuMc" }],
  },
  {
    title: "Pewpew",
    year: "2022", cat: ["game"], type: "Hyper-casual · Web3",
    engine: "Unity 3D", platform: "Web", lang: "C#",
    desc: "Refactored and released the Pewpew arcade shooter on a web gaming platform.",
    role: ["Gameplay refactor", "Platform release"],
    tags: ["WebGL", "Arcade"],
    videos: [{ label: "Gameplay", type: "youtube", id: "lyToNBBotNc" }],
  },
  {
    title: "ARPG Inventory & Drop Systems", nda: true,
    year: "2022–2023", cat: ["game"], type: "Action RPG · NFT",
    engine: "Unity 3D", platform: "PC", lang: "C#", art: "inventory",
    desc: "Inventory UI and enemy drop system for a 3D action RPG with roguelike procedural dungeons: weighted rarity/type drop rolls, loot pickup, and inventory data synced with the game backend.",
    role: ["Inventory system & item management UI", "Randomised drop algorithm for rarity & type", "Backend integration"],
    tags: ["C#", "Systems Design"],
  },
  {
    title: "Parkour System R&D",
    year: "2022–2023", cat: ["game"], type: "R&D · Traversal",
    engine: "Unreal Engine 5", platform: "PC", lang: "Blueprint / C++", thumb: "parkour-cover.jpg",
    desc: "Research and prototypes for AAA-style climbing, vaulting and traversal, in the style of Genshin Impact and Assassin's Creed.",
    role: ["Climbing & vaulting prototypes", "Best-practice documentation for responsive parkour"],
    tags: ["UE5", "Prototyping"],
    videos: [{ label: "Gameplay", type: "drive", id: "1DQD7tZ6O0bsByQWe12WUlwcDbLmtepbk" }],
  },
  {
    title: "Marvel Legacy 5DX",
    year: "2020", cat: ["ar", "game"], type: "AR · Card Battle",
    engine: "Unity 3D", platform: "Android", lang: "C#", thumb: "marvel-5dx.jpg",
    desc: "AR card-battle game. I handled character animation and skill FX, plus asset bundle integration.",
    role: ["Character animation & skill FX", "Asset Bundle integration", "UI layout & implementation"],
    tags: ["AR", "Asset Bundles", "FX"],
    videos: [{ label: "Online Battle", type: "youtube", id: "PEvkCm53VWI" }],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.fivedx.Marvel5DXLegacy&hl=en&gl=US" }],
  },
  {
    title: "XRGIS",
    year: "2020", cat: ["ar"], type: "AR · GIS & BIM",
    engine: "Unity 3D", platform: "Android", lang: "C#", thumb: "xrgis.jpg",
    desc: "AR app that shows underground utilities (water pipes, optical and electrical cables) on-site, using GIS & BIM data.",
    role: ["Concept to launch-ready app", "Unity front-end & backend integration", "Responsive UI"],
    tags: ["AR", "GIS", "BIM", "API"],
    videos: [{ label: "Trailer", type: "youtube", id: "B1pCHsmjhwE" }],
    links: [{ label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.XRGIS.XRGISVIEW" }],
  },
  {
    title: "Mining AR Visualization",
    year: "2020", cat: ["ar"], type: "AR · GIS & BIM",
    engine: "Unity 3D", platform: "Android", lang: "C#", art: "lock",
    desc: "Private enterprise AR application for visualising GIS & BIM data. I took it from concept to a launch-ready app.",
    role: ["Concept to launch-ready app", "UI responsive", "API integration"],
    tags: ["AR", "Enterprise", "Private"],
  },
  {
    title: "VR Hajj",
    year: "2020", cat: ["vr"], type: "Immersive VR · Education",
    engine: "Unity 3D", platform: "Android VR", lang: "C#", thumb: "vr-haji.jpg",
    desc: "Immersive VR learning experience about the Hajj pilgrimage, with lessons, 360° video, competencies and evaluations.",
    role: ["VR concept", "UI concept & layout", "Quiz & gameplay concept"],
    tags: ["VR", "360 Video", "EdTech"],
  },
  {
    title: "ARATOMY — AR Human Anatomy",
    year: "2021", cat: ["ar"], type: "Augmented Reality · Education",
    engine: "Unity 3D", platform: "Android", lang: "C#, Java", thumb: "aratomy.jpg",
    desc: "Marker-based AR app for learning human anatomy with interactive 3D organs.",
    role: ["AR concept", "Gameplay concept", "UI concept"],
    tags: ["AR", "EdTech", "3D"],
    videos: [{ label: "Trailer", type: "youtube", id: "ZGK8ILOsTTY" }],
  },
  {
    title: "Instagram AR Filters",
    year: "2021", cat: ["ar"], type: "AR Filters · Social",
    engine: "Spark AR", platform: "Instagram & Facebook", lang: "JavaScript / TypeScript", thumb: "ig-filter-1.jpg", portrait: true,
    desc: "A set of AR face and world filters for Instagram, including cultural character filters and a wedding greeting filter.",
    role: ["Filter concept", "UI layout & implementation", "App logic & gameplay"],
    tags: ["Spark AR", "JavaScript", "Social AR"],
    links: [
      { label: "Bregada Rakyat Jogja", url: "https://www.instagram.com/ar/4587254851369295" },
      { label: "Bregada Malioboro", url: "https://www.instagram.com/ar/316775156571137" },
      { label: "Greeting Wish Wedding", url: "https://www.instagram.com/ar/454966946010140" },
      { label: "Toy Story Character", url: "https://www.instagram.com/ar/458892945792467" },
    ],
  },
  {
    title: "VR Human Anatomy",
    year: "2021", cat: ["vr"], type: "Immersive VR · Education",
    engine: "Unity 3D", platform: "Android (VR Box)", lang: "C#", thumb: "vr-anatomy.jpg",
    desc: "Mobile VR anatomy lab with learning material, competencies, quizzes and an in-world guide.",
    role: ["Gameplay concept", "UI layout & implementation", "Quiz concept"],
    tags: ["VR", "Mobile VR", "EdTech"],
    videos: [{ label: "Trailer", type: "youtube", id: "-rmwyLaSz1o" }],
  },
  {
    title: "VR Virtual Academy — Item Box",
    year: "2021", cat: ["vr"], type: "Virtual Reality",
    engine: "Unity 3D", platform: "PC / Oculus", lang: "C#",
    desc: "Item box feature for a VR virtual academy: grab, inspect and manage learning items in VR.",
    role: ["VR concept", "Gameplay concept", "UI layout & implementation"],
    tags: ["Oculus", "VR Interaction"],
    videos: [{ label: "Preview", type: "youtube", id: "qZmQvfsvl8M" }],
  },
  {
    title: "VR Academy — Lab Tour",
    year: "2021", cat: ["vr"], type: "Virtual Reality",
    engine: "Unity 3D", platform: "PC / Oculus", lang: "C#", thumb: "vr-academy.jpg",
    desc: "A virtual tour of a university computer lab in VR, with interactive info points on the lab equipment.",
    role: ["VR concept", "Gameplay concept", "UI layout & implementation"],
    tags: ["Oculus", "Virtual Tour"],
    videos: [{ label: "Preview", type: "youtube", id: "eH5yay-NeUc" }],
  },
  {
    title: "VR Isra Mi'raj",
    year: "2019", cat: ["vr"], type: "Immersive VR · Education",
    engine: "Unity 3D", platform: "Android", lang: "C#, Java", thumb: "isra-miraj.jpg",
    desc: "Educational VR journey that tells the story of Isra Mi'raj, with learning material, competencies and evaluations.",
    role: ["VR concept", "UI concept", "Quiz & gameplay concept"],
    tags: ["VR", "Storytelling", "EdTech"],
  },
  {
    title: "AR Animals",
    year: "2019", cat: ["ar"], type: "Augmented Reality",
    engine: "Unity 3D", platform: "Android", lang: "C#, Java", thumb: "ar-animals.jpg",
    desc: "Marker-based AR app that brings 3D animals to life for kids to explore and learn.",
    role: ["AR concept", "UI concept", "Gameplay concept"],
    tags: ["AR", "Kids", "EdTech"],
  },
  {
    title: "Shinobi.io",
    year: "2018", cat: ["game"], type: "Online Battle Royale .io",
    engine: "Unity 3D", platform: "Android", lang: "C#", thumb: "shinobi.jpg",
    desc: "Ninja online battle royale. I imported and managed game assets (characters, pets, weapons), built UI features, fixed bugs and did QA.",
    role: ["Asset management & import", "New game features (mostly UI)", "Debugging & maintenance", "Quality assurance"],
    tags: ["Multiplayer", "UI", "QA"],
    videos: [{ label: "Gameplay", type: "youtube", id: "OcW6zAfNuT0", start: 27 }],
  },
  {
    title: "Legend of Karna: Son of Surya",
    year: "2018", cat: ["game"], type: "3D Action RPG",
    engine: "Unity 3D", platform: "Android", lang: "C#", thumb: "karna.jpg",
    desc: "My thesis project: a 3D action RPG that introduces Karna from the Indonesian Mahabharata. I did the story, UI, minigames, programming and modeling.",
    role: ["Game design concept & story", "Programming & 3D modeling", "UI & minigames"],
    tags: ["Action RPG", "Thesis", "Solo Dev"],
    videos: [
      { label: "Trailer", type: "youtube", id: "XK-wW3rvK0I" },
      { label: "Gameplay", type: "youtube", id: "508xM-UOui4" },
    ],
  },
];

/* ---------------- Experience ---------------- */
const EXPERIENCE = [
  { role: "Unity Developer", company: "Ewide Indonesia · Jakarta, Indonesia", date: "Nov 2024 – Now", current: true,
    points: ["Led development of an AI assistance system on Apple Vision Pro, combining spatial computing, real-time object recognition and 3D interaction", "Integrated hand/eye tracking, voice control and AI-driven contextual help", "Documentation and collaboration with the UI designer & team lead"],
    tags: ["Vision Pro", "Spatial Computing", "AI"] },
  { role: "Senior Unity Developer", company: "GRIP Principle Pte. Ltd. · Batam, Indonesia", date: "Sep 2023 – Nov 2024",
    points: ["Rebuilt most systems of the turn-based RPG Realm Protector; promoted to Senior after 3 months", "Full ownership from system architecture to implementation in a 2-person Unity team", "Character selection, dashboard, inventory, cultivation, battle prep & turn-based battle, API manager"],
    tags: ["RPG", "Architecture", "Backend"] },
  { role: "Game Developer (Freelance)", company: "Revolusi Belajar Indonesia · Jakarta, Indonesia", date: "Mar 2023 – Feb 2024",
    points: ["Sole developer of a Math Adventure RPG for elementary school students", "Recreated training arena, adventure world, dashboard, Google login and battle system"],
    tags: ["EdTech", "Solo Dev"] },
  { role: "Junior Game Programmer", company: "Agate International · Bandung, Indonesia", date: "Jun 2022 – Mar 2023",
    points: ["Built inventory and item-drop systems for an ARPG NFT game (Unity)", "Unreal Engine 5 R&D on AAA-style workflows and a parkour/traversal system"],
    tags: ["Unity", "UE5", "R&D"] },
  { role: "Junior Game Developer", company: "Ethlas · Remote, Singapore", date: "Apr 2022 – Jun 2022",
    points: ["Refactored and released Pop Pop (bubble shooter) and Pewpew on the Ethlas platform", "Sprint planning, code reviews, documentation"],
    tags: ["Web3", "Hyper-casual"] },
  { role: "Game Programmer", company: "Arkids · Yogyakarta, Indonesia", date: "Jul 2020 – Jan 2021",
    points: ["Marvel Legacy 5DX: character animation, skill FX, Asset Bundle integration", "Took AR apps (XRGIS, enterprise GIS/BIM) from concept to launch-ready", "Unity front-end, UI implementation and backend integration"],
    tags: ["AR", "GIS/BIM", "Mobile"] },
  { role: "Junior Unity Engineer", company: "Arutala · Yogyakarta, Indonesia", date: "Apr 2019 – Dec 2019",
    points: ["Designed and developed robust Unity solutions with the dev & testing team to meet client requirements for functionality, scalability and performance", "Gathered requirement specifications with business analysts, developers and technical support", "Researched, designed and implemented scalable Unity UI applications"],
    tags: ["Unity", "Client Projects", "UI"] },
  { role: "Game Programmer", company: "Catlil Studio Indonesia · Jakarta, Indonesia", date: "Oct 2018 – Dec 2018",
    points: ["Imported and managed assets (characters, pets, weapons, emoticons, icons)", "Implemented new features (mostly UI), debugging and QA for Shinobi.io"],
    tags: ["Multiplayer", "QA"] },
  { role: "Game Developer", company: "Universitas Ahmad Dahlan (Multimedia Lab) · Yogyakarta", date: "Mar 2018 – Jul 2018",
    points: ["Developed the 3D action RPG Legend of Karna: Son of Surya, from story and concept to programming and modeling"],
    tags: ["Action RPG"] },
];

/* ---------------- Skills ---------------- */
const RANK = { S: 10, A: 8, B: 6, C: 4 };
const SKILLS = [
  ["Unity 3D", "S"], ["C#", "S"], ["Game Development", "S"], ["C++", "A"],
  ["Game Design", "A"], ["OOP", "A"], ["Database", "A"], ["Git", "A"],
  ["PHP", "A"], ["HTML", "A"], ["Documentation", "A"], ["Unreal Engine", "B"],
  ["Java", "B"], ["Swift", "B"], ["Design", "B"], ["Blender 3D", "C"],
];
const ATTRIBUTES = [
  ["Programming", 95], ["Integration", 90], ["3D Asset", 70], ["Communication", 82], ["Database", 85],
];
const CERTS = [
  ["AKYLADE Certified C# Developer (A/CCSD) — Subject Matter Expert", "Jul 2025", true],
  ["AKYLADE Certified C# Developer (A/CCSD) — Exam Developer", "Jul 2025", true],
  ["Certificate of Completion — Unreal Engine 5 (Udemy)", "May 2024"],
  ["Unity Certified Associate: Game Developer", "Dec 2023", true],
  ["Learn SOLID Programming Principles", "Nov 2023"],
  ["Japanese Language Proficiency N5", "Aug 2023"],
  ["Certificate of Competence — 3D Character Design", "May 2019"],
  ["Certificate of Competence — Multimedia Application Development", "Apr 2018"],
];

/* ==========================================================
   Helpers
   ========================================================== */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const PLAY_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

function videoThumb(v) {
  if (!v) return null;
  if (v.type === "youtube") return `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
  if (v.type === "drive") return `https://drive.google.com/thumbnail?id=${v.id}&sz=w1280`;
  return null;
}
function videoEmbed(v) {
  if (v.type === "youtube") return `https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0${v.start ? "&start=" + v.start : ""}`;
  if (v.type === "drive") return `https://drive.google.com/file/d/${v.id}/preview`;
  return "";
}

/* Control-room smartwall dashboard illustration (concept only, no client data) */
function smartwallArt() {
  const M = 'font-family="JetBrains Mono, monospace"';
  const D = 'font-family="Chakra Petch, sans-serif" font-weight="700"';
  const panel = (x, y, w, h, title, accent = "#008fd4") =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#0b1a26" stroke="#16324a"/>` +
    `<rect x="${x}" y="${y}" width="3" height="14" fill="${accent}"/>` +
    `<text x="${x + 9}" y="${y + 11}" ${M} font-size="7" fill="#7ac8ef" letter-spacing="1">${title}</text>`;
  let s = "";

  // header bar
  s += `<rect x="0" y="0" width="640" height="30" fill="#081520"/><rect x="0" y="30" width="640" height="1.5" fill="#008fd4"/>`;
  s += `<polygon points="14,8 22,4 30,8 30,20 22,24 14,20" fill="none" stroke="#008fd4" stroke-width="1.5"/><circle cx="22" cy="14" r="3" fill="#008fd4"/>`;
  s += `<text x="38" y="19" ${D} font-size="11" fill="#fff" letter-spacing="1.5">OPERATIONS CONTROL ROOM</text>`;
  s += `<circle cx="470" cy="15" r="3.5" fill="#22c55e"><animate attributeName="opacity" values="1;.2;1" dur="1.6s" repeatCount="indefinite"/></circle>`;
  s += `<text x="478" y="18" ${M} font-size="8" fill="#22c55e">LIVE</text>`;
  s += `<text x="626" y="19" ${M} font-size="10" fill="#fff" text-anchor="end">14:32:08</text>`;
  s += `<text x="560" y="19" ${M} font-size="7" fill="#5f7a90" text-anchor="end">WED · 18 SEP</text>`;

  // ---------- left column ----------
  s += panel(10, 40, 150, 100, "HARDWARE & DEVICES");
  [["CAMERA", "248", 60], ["SENSOR", "96", 110], ["ACCESS", "42", 160]].forEach(([k, v], i) => {
    const x = 16 + i * 48;
    s += `<rect x="${x}" y="58" width="44" height="42" fill="#0e2233"/>`;
    s += `<text x="${x + 22}" y="80" ${D} font-size="15" fill="#fff" text-anchor="middle">${v}</text>`;
    s += `<text x="${x + 22}" y="93" ${M} font-size="6" fill="#7ac8ef" text-anchor="middle">${k}</text>`;
  });
  s += `<text x="16" y="116" ${M} font-size="6.5" fill="#5f7a90">ONLINE</text><rect x="48" y="111" width="104" height="5" fill="#16324a"/><rect x="48" y="111" width="96" height="5" fill="#22c55e"/>`;
  s += `<text x="16" y="129" ${M} font-size="6.5" fill="#5f7a90">OFFLINE</text><rect x="48" y="124" width="104" height="5" fill="#16324a"/><rect x="48" y="124" width="8" height="5" fill="#ff4d4f"/>`;

  s += panel(10, 148, 150, 112, "INCIDENT COUNT", "#ffb020");
  s += `<text x="20" y="190" ${D} font-size="30" fill="#fff">17</text><text x="62" y="190" ${M} font-size="7" fill="#5f7a90">TODAY</text>`;
  [["CRITICAL", "#ff4d4f", 3, 30], ["MEDIUM", "#ffb020", 6, 60], ["LOW", "#008fd4", 8, 80]].forEach(([k, c, n, w], i) => {
    const y = 206 + i * 17;
    s += `<text x="20" y="${y + 5}" ${M} font-size="6.5" fill="#9fb3c4">${k}</text>`;
    s += `<rect x="66" y="${y}" width="72" height="6" fill="#16324a"/><rect x="66" y="${y}" width="${w * 0.72}" height="6" fill="${c}"/>`;
    s += `<text x="150" y="${y + 6}" ${M} font-size="7" fill="#fff" text-anchor="end">${n}</text>`;
  });

  s += panel(10, 268, 150, 60, "SECURITY INCIDENTS", "#ff4d4f");
  s += `<polyline points="18,318 34,306 50,312 66,296 82,302 98,290 114,298 130,286 150,292" fill="none" stroke="#ff4d4f" stroke-width="1.5"/>`;
  s += `<polyline points="18,318 34,306 50,312 66,296 82,302 98,290 114,298 130,286 150,292 150,322 18,322" fill="rgba(255,77,79,.12)"/>`;

  // ---------- center: live camera wall ----------
  s += panel(170, 40, 300, 288, "LIVE VIEW · 9 FEEDS");
  ["1", "4", "9"].forEach((t, i) => {
    const x = 408 + i * 20, act = t === "9";
    s += `<rect x="${x}" y="43" width="16" height="10" fill="${act ? "#008fd4" : "#0e2233"}" stroke="#16324a"/>`;
    s += `<text x="${x + 8}" y="50.5" ${M} font-size="6.5" fill="#fff" text-anchor="middle">${t}</text>`;
  });
  const cw = 94, ch = 82, gx = 5;
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) {
    const x = 176 + c * (cw + gx), y = 60 + r * (ch + gx), k = r * 3 + c;
    const alert = k === 4;
    const tone = ["#1b2c3a", "#22313d", "#1d2a33", "#26343f", "#1a2833", "#202e38", "#1e2d39", "#243240", "#1b2a35"][k];
    s += `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" fill="${tone}"/>`;
    // simple terminal / hall perspective scene
    const vx = x + cw * (0.35 + (k % 3) * 0.15), vy = y + ch * 0.42;
    s += `<g stroke="#3d5569" stroke-width=".8" fill="none">`;
    s += `<line x1="${x}" y1="${y + ch}" x2="${vx}" y2="${vy}"/><line x1="${x + cw}" y1="${y + ch}" x2="${vx}" y2="${vy}"/>`;
    s += `<line x1="${x}" y1="${y + 8}" x2="${vx}" y2="${vy - 12}"/><line x1="${x + cw}" y1="${y + 8}" x2="${vx}" y2="${vy - 12}"/>`;
    s += `<line x1="${x + cw * 0.18}" y1="${y + ch * 0.8}" x2="${x + cw * 0.82}" y2="${y + ch * 0.8}"/></g>`;
    // people silhouettes
    for (let p = 0; p < 2 + (k % 3); p++) {
      const px = x + 16 + ((k * 23 + p * 29) % (cw - 30)), py = y + ch * 0.62 + ((p * 7) % 12);
      s += `<circle cx="${px}" cy="${py - 9}" r="2.6" fill="#5b7488"/><rect x="${px - 3}" y="${py - 6}" width="6" height="11" rx="2" fill="#5b7488"/>`;
    }
    s += `<rect x="${x}" y="${y}" width="${cw}" height="11" fill="rgba(0,0,0,.45)"/>`;
    s += `<circle cx="${x + 6}" cy="${y + 5.5}" r="2" fill="#ff4d4f"/>`;
    s += `<text x="${x + 11}" y="${y + 8}" ${M} font-size="6" fill="#fff">CAM ${String(k + 1).padStart(2, "0")}</text>`;
    if (alert) {
      s += `<rect x="${x}" y="${y}" width="${cw}" height="${ch}" fill="rgba(255,77,79,.10)" stroke="#ff4d4f" stroke-width="2"><animate attributeName="stroke-opacity" values="1;.25;1" dur="1.2s" repeatCount="indefinite"/></rect>`;
      s += `<rect x="${x + cw - 38}" y="${y + ch - 13}" width="34" height="9" fill="#ff4d4f"/><text x="${x + cw - 21}" y="${y + ch - 6.5}" ${M} font-size="5.5" fill="#fff" text-anchor="middle">ALERT</text>`;
    }
  }

  // ---------- right column: availability ----------
  s += panel(480, 40, 150, 218, "HARDWARE AVAILABILITY");
  [["VSS", "99.2", "▲ 0.4", "#22c55e"], ["ACS", "97.8", "▼ 1.1", "#ff4d4f"], ["IDS", "98.6", "▲ 0.2", "#22c55e"]].forEach(([k, v, d, c], i) => {
    const y = 58 + i * 66;
    s += `<rect x="486" y="${y}" width="138" height="60" fill="#0e2233" stroke="#16324a"/>`;
    s += `<text x="493" y="${y + 13}" ${D} font-size="10" fill="#fff">${k}</text>`;
    s += `<text x="493" y="${y + 26}" ${M} font-size="5.5" fill="#5f7a90">WEEKLY</text><text x="560" y="${y + 26}" ${M} font-size="5.5" fill="#5f7a90">MONTHLY</text>`;
    s += `<text x="493" y="${y + 44}" ${D} font-size="15" fill="#fff">${v}%</text>`;
    s += `<text x="560" y="${y + 44}" ${D} font-size="15" fill="#9fb3c4">${(+v - 0.6).toFixed(1)}%</text>`;
    s += `<text x="493" y="${y + 55}" ${M} font-size="6" fill="${c}">${d}</text>`;
    s += `<rect x="560" y="${y + 50}" width="58" height="3" fill="#16324a"/><rect x="560" y="${y + 50}" width="${58 * v / 100}" height="3" fill="#008fd4"/>`;
  });
  s += panel(480, 266, 150, 62, "SYSTEM HEALTH", "#22c55e");
  [["API", 1], ["STREAM", 1], ["DB", 1], ["SYNC", 0]].forEach(([k, ok], i) => {
    const x = 488 + i * 36;
    s += `<circle cx="${x + 10}" cy="298" r="8" fill="none" stroke="${ok ? "#22c55e" : "#ffb020"}" stroke-width="2.5" stroke-dasharray="${ok ? "50 0" : "34 16"}"/>`;
    s += `<text x="${x + 10}" y="318" ${M} font-size="5.5" fill="#9fb3c4" text-anchor="middle">${k}</text>`;
  });

  // bottom alert ticker
  s += `<rect x="0" y="336" width="640" height="24" fill="#081520"/><rect x="0" y="336" width="640" height="1" fill="#16324a"/>`;
  s += `<rect x="10" y="342" width="46" height="12" fill="#ff4d4f"/><text x="33" y="350.5" ${M} font-size="6.5" fill="#fff" text-anchor="middle">ALERT</text>`;
  s += `<text x="64" y="351" ${M} font-size="7" fill="#d3dde6">CAM 05 · Unattended object detected — Zone B, Level 2 · Operator assigned · 00:02:14 ago</text>`;

  return `<div class="art art-dash"><svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Illustration of a control room smartwall dashboard">${s}</svg></div>`;
}

/* Spatial AI assistant: looping 4-stage animated concept (Home → Object → Content → Assistant).
   Each scene shows for 4s of a 16s cycle; timing lives in style.css (.vp-*). */
function visionProArt() {
  const M = 'font-family="JetBrains Mono, monospace"';
  const D = 'font-family="Chakra Petch, sans-serif" font-weight="700"';
  const B = 'font-family="Inter, sans-serif"';
  const sc = (i, inner) => `<g class="vp-scene vp-s${i}" style="--i:${i}">${inner}</g>`;
  const at = (i, k = 0) => `style="--i:${i};--k:${k}"`;
  let s = "";

  /* ---- defs ---- */
  s += `<defs>
    <linearGradient id="vpWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a3440"/><stop offset="1" stop-color="#1b232c"/></linearGradient>
    <linearGradient id="vpGlass" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#5ee7f0"/><stop offset=".45" stop-color="#8b5cf6"/><stop offset="1" stop-color="#22d3ee"/></linearGradient>
    <linearGradient id="vpTable" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b4a2e"/><stop offset="1" stop-color="#4a3220"/></linearGradient>
    <radialGradient id="vpVig" cx=".5" cy=".5" r=".75"><stop offset=".6" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".75"/></radialGradient>
    <clipPath id="vpGlassClip"><rect x="170" y="44" width="300" height="160" rx="16"/></clipPath>
  </defs>`;

  /* ---- passthrough room (always visible) ---- */
  s += `<rect width="640" height="360" fill="url(#vpWall)"/>`;
  s += `<rect x="0" y="0" width="640" height="360" fill="none"/>`;
  for (let x = 0; x < 640; x += 80) s += `<rect x="${x}" y="0" width="1.5" height="250" fill="#34414e"/>`;
  s += `<rect x="0" y="250" width="640" height="110" fill="#151b22"/>`;
  // wall poster (content-detection target)
  s += `<rect x="470" y="62" width="112" height="140" rx="3" fill="#e8e1d6"/><rect x="478" y="70" width="96" height="58" fill="#f59e0b" opacity=".85"/>`;
  s += `<circle cx="526" cy="99" r="16" fill="#fff" opacity=".85"/><rect x="478" y="136" width="80" height="7" fill="#1f2937"/><rect x="478" y="148" width="62" height="5" fill="#6b7280"/><rect x="478" y="158" width="70" height="5" fill="#6b7280"/><rect x="478" y="176" width="42" height="14" rx="3" fill="#ef4444"/>`;
  // table + objects (object-detection targets)
  s += `<path d="M40 262 L600 262 L620 300 L20 300 Z" fill="url(#vpTable)"/><rect x="20" y="300" width="600" height="10" fill="#3a2718"/>`;
  s += `<rect x="92" y="222" width="92" height="42" rx="3" fill="#cbd5e1"/><rect x="97" y="226" width="82" height="32" fill="#0f172a"/><rect x="80" y="262" width="116" height="5" rx="2" fill="#94a3b8"/>`; // laptop
  s += `<rect x="262" y="250" width="58" height="12" rx="3" fill="#111827" stroke="#374151"/><circle cx="312" cy="256" r="2" fill="#374151"/>`; // phone lying
  s += `<rect x="402" y="214" width="22" height="48" rx="5" fill="#7c2d12" opacity=".9"/><rect x="406" y="206" width="14" height="10" rx="2" fill="#a16207"/><rect x="404" y="228" width="18" height="14" fill="#fde68a"/>`; // bottle
  s += `<ellipse cx="540" cy="262" rx="22" ry="5" fill="#0f172a" opacity=".5"/><path d="M526 236h28l-3 26h-22z" fill="#e5e7eb"/><path d="M554 242c8 0 8 12 0 12" fill="none" stroke="#e5e7eb" stroke-width="3"/>`; // cup

  /* ---- scene 1: home window + gaze/pinch ---- */
  s += sc(0, `
    <g class="vp-float">
      <rect x="170" y="44" width="300" height="160" rx="16" fill="url(#vpGlass)" opacity=".92"/>
      <g clip-path="url(#vpGlassClip)"><ellipse class="vp-blob" cx="260" cy="140" rx="120" ry="40" fill="#f0abfc" opacity=".35"/></g>
      <rect x="170" y="44" width="300" height="160" rx="16" fill="none" stroke="rgba(255,255,255,.55)"/>
      <text x="320" y="78" ${D} font-size="11" fill="#fff" text-anchor="middle" opacity=".9">BEYOND BOUNDARIES</text>
      <text x="320" y="102" ${D} font-size="19" fill="#fff" text-anchor="middle">Spatial Intelligence</text>
      <text x="320" y="122" ${B} font-weight="600" font-size="11" fill="#fff" text-anchor="middle">powered by AI &amp; RAG</text>
      <rect x="190" y="140" width="126" height="22" rx="11" fill="rgba(15,23,42,.7)"/>
      <rect class="vp-btn-hl" ${at(0)} x="190" y="140" width="126" height="22" rx="11" fill="#008fd4" stroke="#fff"/>
      <text x="253" y="155" ${B} font-size="8.5" fill="#fff" text-anchor="middle" font-weight="600">Object Detection</text>
      <rect x="324" y="140" width="126" height="22" rx="11" fill="rgba(15,23,42,.7)"/>
      <text x="387" y="155" ${B} font-size="8.5" fill="#fff" text-anchor="middle" font-weight="600">Content Detection</text>
      <rect x="257" y="170" width="126" height="22" rx="11" fill="rgba(15,23,42,.7)"/>
      <text x="320" y="185" ${B} font-size="8.5" fill="#fff" text-anchor="middle" font-weight="600">AI Assistant</text>
      <rect x="296" y="210" width="48" height="4" rx="2" fill="rgba(255,255,255,.6)"/>
    </g>
    <g class="vp-gaze" ${at(0)}><circle r="9" fill="rgba(255,255,255,.25)" stroke="#fff" stroke-width="1.5"/><circle r="2.5" fill="#fff"/></g>
    <g class="vp-pinch" ${at(0)}><circle cx="253" cy="151" r="14" fill="none" stroke="#fff" stroke-width="2"/></g>
    <text x="320" y="238" ${M} font-size="7.5" fill="#cbd5e1" text-anchor="middle" letter-spacing="1">LOOK + PINCH TO SELECT</text>
  `);

  /* ---- scene 2: object detection ---- */
  const box = (x, y, w, h, label, conf, k) => `
    <g class="vp-pop" ${at(1, k)}>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="rgba(34,211,238,.08)" stroke="#22d3ee" stroke-width="1.8" rx="3"/>
      <path d="M${x} ${y + 8}v-8h8M${x + w - 8} ${y}h8v8M${x} ${y + h - 8}v8h8M${x + w - 8} ${y + h}h8v-8" fill="none" stroke="#fff" stroke-width="2.2"/>
      <rect x="${x}" y="${y - 15}" width="${label.length * 5.6 + 34}" height="13" rx="3" fill="#0891b2"/>
      <text x="${x + 5}" y="${y - 5.5}" ${M} font-size="7.5" fill="#fff">${label} ${conf}%</text>
    </g>`;
  s += sc(1, `
    <rect class="vp-scan" ${at(1)} x="20" y="190" width="600" height="3" fill="#22d3ee" opacity=".7"/>
    ${box(86, 216, 104, 54, "Laptop", 96, 0)}
    ${box(256, 244, 70, 24, "Smartphone", 98, 1)}
    ${box(396, 202, 34, 64, "Bottle", 93, 2)}
    ${box(520, 230, 42, 36, "Cup", 91, 3)}
    <g class="vp-float"><rect x="24" y="28" width="150" height="54" rx="10" fill="rgba(15,23,42,.72)" stroke="rgba(255,255,255,.25)"/>
    <text x="36" y="46" ${M} font-size="7.5" fill="#22d3ee" letter-spacing="1">OBJECT DETECTION</text>
    <text x="36" y="64" ${D} font-size="15" fill="#fff">4 objects</text>
    <text x="36" y="75" ${M} font-size="6.5" fill="#94a3b8">real-time · on-device</text></g>
  `);

  /* ---- scene 3: content detection ---- */
  s += sc(2, `
    <g class="vp-pop" ${at(2, 0)}>
      <rect x="464" y="56" width="124" height="152" rx="4" fill="rgba(167,139,250,.12)" stroke="#a78bfa" stroke-width="2"/>
      <rect x="464" y="41" width="92" height="13" rx="3" fill="#7c3aed"/><text x="469" y="50.5" ${M} font-size="7.5" fill="#fff">Poster · text</text>
    </g>
    <rect class="vp-scanx" ${at(2)} x="466" y="58" width="3" height="148" fill="#c4b5fd"/>
    <path class="vp-link" ${at(2)} d="M464 130 C 420 130, 420 120, 392 120" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="4 4"/>
    <g class="vp-slide" ${at(2)}>
      <rect x="196" y="56" width="196" height="132" rx="14" fill="rgba(15,23,42,.8)" stroke="rgba(255,255,255,.25)"/>
      <text x="212" y="78" ${M} font-size="7.5" fill="#c4b5fd" letter-spacing="1">CONTENT DETECTED</text>
      <text x="212" y="98" ${D} font-size="13" fill="#fff">Product promotion</text>
      <rect class="vp-line" ${at(2, 0)} x="212" y="110" width="160" height="6" rx="3" fill="#475569"/>
      <rect class="vp-line" ${at(2, 1)} x="212" y="122" width="130" height="6" rx="3" fill="#475569"/>
      <rect class="vp-line" ${at(2, 2)} x="212" y="134" width="146" height="6" rx="3" fill="#475569"/>
      <rect x="212" y="152" width="84" height="22" rx="11" fill="#7c3aed"/><text x="254" y="166" ${B} font-size="8" fill="#fff" text-anchor="middle" font-weight="600">Ask AI about it</text>
    </g>
  `);

  /* ---- scene 4: AI assistant character + voice ---- */
  let wave = "";
  for (let i = 0; i < 9; i++) wave += `<rect class="vp-wave" style="--w:${i}" x="${422 + i * 6}" y="210" width="3" height="16" rx="1.5" fill="#22d3ee"/>`;
  s += sc(3, `
    <g class="vp-bob">
      <ellipse cx="206" cy="262" rx="30" ry="5" fill="#000" opacity=".35"/>
      <rect x="186" y="208" width="40" height="46" rx="12" fill="#008fd4"/>
      <rect x="192" y="226" width="28" height="10" rx="3" fill="#0b1a26"/>
      <circle cx="206" cy="190" r="26" fill="#0ea5e9"/>
      <circle cx="184" cy="186" r="7" fill="#cbd5e1"/><circle cx="228" cy="186" r="7" fill="#cbd5e1"/>
      <path d="M188 190a18 16 0 0 1 36 0v6a18 12 0 0 1 -36 0z" fill="#0b1220" stroke="#cbd5e1" stroke-width="2.5"/>
      <circle class="vp-eye" cx="198" cy="192" r="2.4" fill="#22d3ee"/><circle class="vp-eye" cx="214" cy="192" r="2.4" fill="#22d3ee"/>
      <rect class="vp-wavehand" x="224" y="212" width="10" height="26" rx="5" fill="#0369a1"/>
    </g>
    <g class="vp-slide" ${at(3)}>
      <rect x="250" y="120" width="300" height="118" rx="16" fill="rgba(241,245,249,.94)"/>
      <text x="266" y="142" ${M} font-size="7" fill="#0891b2" letter-spacing="1">AI ASSISTANT · RAG</text>
      <g class="vp-type" ${at(3)}>
        <text x="266" y="160" ${B} font-size="9.5" fill="#1f2937">Hi! I'm your spatial assistant. Tell me what</text>
        <text x="266" y="174" ${B} font-size="9.5" fill="#1f2937">you need, and I'll help you pick the right gadget.</text>
      </g>
      <circle class="vp-mic" ${at(3)} cx="400" cy="218" r="13" fill="#fff" stroke="#e2e8f0"/>
      <path d="M397 211a3 3 0 0 1 6 0v7a3 3 0 0 1 -6 0z M394 217a6 6 0 0 0 12 0 M400 223v4" fill="none" stroke="#1f2937" stroke-width="1.6" stroke-linecap="round"/>
      <g class="vp-waves">${wave}</g>
    </g>
  `);

  /* ---- device frame / HUD ---- */
  s += `<rect width="640" height="360" fill="url(#vpVig)"/>`;
  s += `<text x="320" y="20" ${M} font-size="7.5" fill="#e2e8f0" text-anchor="middle" letter-spacing="2" opacity=".8">◉ SPATIAL COMPUTING · PASSTHROUGH</text>`;
  const steps = ["HOME", "OBJECT", "CONTENT", "ASSISTANT"];
  steps.forEach((t, i) => {
    const x = 160 + i * 82;
    s += `<rect x="${x}" y="328" width="74" height="3" rx="1.5" fill="rgba(255,255,255,.2)"/>`;
    s += `<rect class="vp-prog" style="--i:${i}" x="${x}" y="328" width="74" height="3" rx="1.5" fill="#008fd4"/>`;
    s += `<text class="vp-steplbl" style="--i:${i}" x="${x}" y="344" ${M} font-size="6.5" fill="#94a3b8" letter-spacing="1">0${i + 1} ${t}</text>`;
  });

  return `<div class="art art-vp"><svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Animated concept: spatial AI assistant detecting objects and content, then answering by voice">${s}</svg></div>`;
}

/* Realm Protector: animated turn-based battle, Taoist cultivation × Shan Hai Jing (12s loop).
   Beats: talisman cast → bagua strike → sword-immortal crit → fox-fire counter → realm breakthrough.
   Timing lives in style.css (.rp-*). */
function realmArt() {
  const M = 'font-family="JetBrains Mono, monospace"';
  const D = 'font-family="Chakra Petch, sans-serif" font-weight="700"';
  const Z = 'font-family="KaiTi, STKaiti, \'Noto Serif SC\', \'Songti SC\', serif" font-weight="700"';
  const GOLD = "#e0b35a", RED = "#c0392b";
  let s = "";

  s += `<defs>
    <linearGradient id="rpSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1a1f3a"/><stop offset=".55" stop-color="#2d4a5a"/><stop offset="1" stop-color="#8fb3a8"/></linearGradient>
    <linearGradient id="rpMtnB" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4a6b6e"/><stop offset="1" stop-color="#8fb3a8" stop-opacity=".2"/></linearGradient>
    <linearGradient id="rpMtnF" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1f3437"/><stop offset="1" stop-color="#2d4a4d"/></linearGradient>
    <linearGradient id="rpGround" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#3b4a45"/><stop offset="1" stop-color="#1b2422"/></linearGradient>
    <radialGradient id="rpMoon"><stop offset=".6" stop-color="#fff3d1"/><stop offset="1" stop-color="#fff3d1" stop-opacity="0"/></radialGradient>
    <radialGradient id="rpFire"><stop offset="0" stop-color="#fff"/><stop offset=".4" stop-color="#7dd3fc"/><stop offset="1" stop-color="#0ea5e9" stop-opacity="0"/></radialGradient>
    <filter id="rpGlow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>`;

  /* ---- world ---- */
  s += `<rect width="640" height="360" fill="url(#rpSky)"/>`;
  s += `<circle cx="520" cy="92" r="46" fill="url(#rpMoon)" opacity=".5"/><circle cx="520" cy="92" r="30" fill="#fff3d1" opacity=".9"/>`;
  // xiangyun (auspicious) clouds drifting
  const cloud = (x, y, k) => `<g class="rp-cloud" style="--c:${k}" opacity=".55"><path d="M${x} ${y}c6-12 22-12 26 0c4-10 20-10 22 2c10-2 14 10 4 12h-52c-10 0-10-12 0-14z" fill="#e8efe9"/><path d="M${x + 14} ${y + 4}a6 6 0 1 1 8 4" fill="none" stroke="#b9c9c2" stroke-width="1.5"/></g>`;
  s += cloud(60, 70, 0) + cloud(300, 50, 1) + cloud(420, 130, 2);
  // ink mountains (three layers)
  s += `<path d="M0 210 L40 150 L70 175 L120 100 L170 170 L210 140 L260 190 L300 120 L350 180 L400 130 L450 175 L500 110 L560 170 L600 140 L640 165 V360 H0Z" fill="url(#rpMtnB)" opacity=".7"/>`;
  s += `<path d="M0 240 L50 190 L90 215 L150 160 L200 220 L250 200 L300 235 L380 180 L430 225 L480 195 L540 230 L600 185 L640 215 V360 H0Z" fill="url(#rpMtnF)" opacity=".85"/>`;
  s += `<rect class="rp-mist" x="-80" y="205" width="800" height="26" fill="#dfe9e3" opacity=".22"/>`;
  s += `<path d="M0 262 Q320 238 640 262 V360 H0Z" fill="url(#rpGround)"/>`;
  s += `<path d="M0 262 Q320 238 640 262" fill="none" stroke="#6b8078" stroke-width="1.5"/>`;

  /* ---- bagua formation under the beast ---- */
  let bagua = `<circle r="70" fill="none" stroke="${GOLD}" stroke-width="3"/><circle r="52" fill="none" stroke="${GOLD}" stroke-width="1.5"/>`;
  for (let i = 0; i < 8; i++) {
    const a = (i * 45 * Math.PI) / 180;
    for (let j = 0; j < 3; j++) {
      const r = 56 + j * 5, broken = (i + j) % 2;
      const x1 = Math.cos(a - 0.16) * r, y1 = Math.sin(a - 0.16) * r, x2 = Math.cos(a + 0.16) * r, y2 = Math.sin(a + 0.16) * r;
      bagua += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${GOLD}" stroke-width="2.5" ${broken ? 'stroke-dasharray="4 3"' : ""}/>`;
    }
  }
  bagua += `<path d="M0 -18a18 18 0 0 1 0 36a9 9 0 0 1 0-18a9 9 0 0 0 0-18z" fill="${GOLD}"/><circle r="18" fill="none" stroke="${GOLD}" stroke-width="2"/>`;
  s += `<g transform="translate(470 282) scale(1 .28)"><g class="rp-t rp-bagua-glow" filter="url(#rpGlow)"><g class="rp-bagua">${bagua}</g></g></g>`;

  /* ---- Nine-Tailed Fox (九尾狐) ---- */
  let tails = "";
  for (let i = 0; i < 9; i++) {
    const ang = -70 + i * 17;
    tails += `<g transform="rotate(${ang} 505 262)"><g class="rp-tail" style="--d:${i}"><path d="M505 262 C 530 250, 560 245, 572 226 C 576 238, 566 256, 540 266 Z" fill="#f4efe6" stroke="#cfc5b4" stroke-width="1"/><circle cx="570" cy="229" r="5" fill="url(#rpFire)"/></g></g>`;
  }
  s += `<g class="rp-t rp-foxhit"><g class="rp-bob2">
    <ellipse cx="470" cy="286" rx="58" ry="7" fill="#000" opacity=".35"/>
    ${tails}
    <path d="M436 280 C 440 250, 470 238, 505 250 C 515 262, 510 280, 500 284 Z" fill="#f4efe6" stroke="#cfc5b4"/>
    <path d="M440 282v-12M455 284v-10M492 284v-12M502 283v-10" stroke="#cfc5b4" stroke-width="5" stroke-linecap="round"/>
    <path d="M444 256 C 430 246, 420 246, 408 252 C 414 258, 426 262, 440 262 Z" fill="#f4efe6" stroke="#cfc5b4"/>
    <path d="M430 246 L 434 228 L 442 244 Z M442 246 L 450 230 L 454 248 Z" fill="#f4efe6" stroke="#cfc5b4"/>
    <path d="M433 240 L 435 232 L 439 242 Z" fill="${RED}"/>
    <path class="rp-eye" d="M424 250 q4 -3 8 0" stroke="${RED}" stroke-width="2.5" fill="none"/>
    <circle cx="409" cy="252" r="2" fill="#333"/>
    <path d="M452 250 q10 6 22 2" stroke="${RED}" stroke-width="1.5" fill="none"/>
  </g></g>`;

  /* ---- party: talisman caster, sword immortal, Taoist priest ---- */
  const hero = (x, robe, trim, weapon, cls = "") => `
    <g class="${cls}"><g class="rp-bob" style="--b:${x}">
      <ellipse cx="${x}" cy="284" rx="20" ry="4" fill="#000" opacity=".35"/>
      <path d="M${x - 15} 282 L${x - 8} 246 Q${x} 240 ${x + 8} 246 L${x + 15} 282 Z" fill="${robe}"/>
      <path d="M${x - 11} 266 L${x + 11} 266" stroke="${trim}" stroke-width="4"/>
      <path d="M${x - 8} 246 L${x} 262 L${x + 8} 246" fill="none" stroke="${trim}" stroke-width="2"/>
      <circle cx="${x}" cy="233" r="10" fill="#f5dcc3"/>
      <path d="M${x - 10} 232 a10 10 0 0 1 20 0 q-10 -4 -20 0z" fill="#1b1b24"/>
      <circle cx="${x}" cy="220" r="5" fill="#1b1b24"/><rect x="${x - 1}" y="214" width="2" height="10" fill="${GOLD}"/>
      <circle cx="${x + 4}" cy="234" r="1.3" fill="#1b1b24"/>
      ${weapon}
    </g></g>`;
  const sword = (x) => `<line x1="${x + 10}" y1="258" x2="${x + 34}" y2="226" stroke="#e5edf3" stroke-width="3" stroke-linecap="round"/><line x1="${x + 7}" y1="256" x2="${x + 14}" y2="262" stroke="${GOLD}" stroke-width="3"/>`;
  const whisk = (x) => `<line x1="${x + 10}" y1="262" x2="${x + 20}" y2="236" stroke="#8b5a2b" stroke-width="2.5"/><path d="M${x + 20} 236 q8 6 4 20 M${x + 20} 236 q12 2 12 16 M${x + 20} 236 q4 8 0 20" stroke="#f1f5f9" stroke-width="1.5" fill="none"/>`;
  const fu = (x) => `<rect x="${x + 10}" y="244" width="8" height="16" fill="#f7d774" stroke="${RED}" stroke-width=".8"/><path d="M${x + 12} 248h4M${x + 14} 248v9M${x + 12} 253h4" stroke="${RED}" stroke-width="1"/>`;
  s += `<g class="rp-t rp-partyhit">
    ${hero(110, "#3b3f8f", GOLD, whisk(110))}
    ${hero(175, "#e8f1f2", "#2aa39a", sword(175), "rp-t rp-dash")}
    ${hero(240, "#b23a3a", "#f7d774", fu(240))}
  </g>`;

  /* ---- skill FX ---- */
  // flying talismans (符)
  [0, 1, 2].forEach((k) => {
    s += `<g class="rp-t rp-fu" style="--f:${k}"><rect x="${250}" y="${226 + k * 10}" width="12" height="22" fill="#f7d774" stroke="${RED}"/><path d="M${253} ${231 + k * 10}h6M${256} ${231 + k * 10}v12M${253} ${238 + k * 10}h6" stroke="${RED}" stroke-width="1.3"/></g>`;
  });
  // lightning on the beast
  s += `<path class="rp-t rp-bolt" d="M478 120 L466 180 L482 182 L462 250" fill="none" stroke="#fef9c3" stroke-width="4" stroke-linejoin="round" filter="url(#rpGlow)"/>`;
  // sword slash
  s += `<path class="rp-t rp-slash" d="M400 200 Q 470 250 540 230" fill="none" stroke="#e0f2fe" stroke-width="6" stroke-linecap="round" filter="url(#rpGlow)" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>`;
  // fox-fire counter
  [0, 1, 2].forEach((k) => { s += `<circle class="rp-t rp-foxfire" style="--f:${k}" cx="430" cy="${236 + k * 10}" r="9" fill="url(#rpFire)"/>`; });
  // damage numbers
  s += `<text class="rp-t rp-dmg1" x="470" y="226" ${D} font-size="20" fill="#fef3c7" stroke="#7c2d12" stroke-width="3" paint-order="stroke" text-anchor="middle">-1,280</text>`;
  s += `<text class="rp-t rp-dmg2" x="470" y="220" ${D} font-size="26" fill="${GOLD}" stroke="#3b1d06" stroke-width="3.5" paint-order="stroke" text-anchor="middle">-2,450</text>`;
  s += `<text class="rp-t rp-dmg2" x="470" y="238" ${M} font-size="9" fill="#fff" text-anchor="middle" letter-spacing="2">CRITICAL</text>`;
  s += `<text class="rp-t rp-dmg3" x="175" y="208" ${D} font-size="18" fill="#fecaca" stroke="#450a0a" stroke-width="3" paint-order="stroke" text-anchor="middle">-640</text>`;
  s += `<rect class="rp-t rp-flash" width="640" height="360" fill="#fff"/>`;

  /* ---- HUD ---- */
  // title
  s += `<text x="16" y="26" ${D} font-size="14" fill="#fff" letter-spacing="2">REALM PROTECTOR</text>`;
  s += `<text x="16" y="42" ${Z} font-size="11" fill="${GOLD}">山海經 · 修仙</text>`;
  // turn order
  s += `<rect x="226" y="10" width="188" height="36" rx="4" fill="rgba(15,20,30,.7)" stroke="${GOLD}" stroke-opacity=".6"/>`;
  s += `<text x="234" y="22" ${M} font-size="6" fill="#cbd5e1" letter-spacing="1">TURN ORDER</text>`;
  [["#b23a3a", "符"], ["#2aa39a", "劍"], ["#f4efe6", "狐"], ["#3b3f8f", "道"]].forEach(([c, g], i) => {
    const x = 296 + i * 30;
    s += `<circle cx="${x}" cy="28" r="11" fill="${c}" stroke="#0b0f14" stroke-width="1.5"/><text x="${x}" y="32" ${Z} font-size="11" fill="${i === 2 ? RED : "#fff"}" text-anchor="middle">${g}</text>`;
  });
  s += `<circle class="rp-t rp-turn" cx="296" cy="28" r="14" fill="none" stroke="${GOLD}" stroke-width="2.5"/>`;
  // enemy nameplate + HP
  s += `<rect x="420" y="56" width="204" height="34" rx="4" fill="rgba(15,20,30,.72)" stroke="${RED}" stroke-opacity=".7"/>`;
  s += `<text x="430" y="70" ${Z} font-size="11" fill="#fff">九尾狐</text><text x="470" y="70" ${M} font-size="7" fill="#fca5a5">NINE-TAILED FOX · LV.42</text>`;
  s += `<rect x="430" y="76" width="184" height="7" fill="#3f1d1d"/><rect class="rp-t rp-hp" x="430" y="76" width="184" height="7" fill="${RED}"/>`;
  // party panel
  s += `<rect x="12" y="298" width="206" height="52" rx="4" fill="rgba(15,20,30,.75)" stroke="${GOLD}" stroke-opacity=".5"/>`;
  [["DAO PRIEST", "#3b3f8f"], ["SWORD IMMORTAL", "#2aa39a"], ["TALISMAN ADEPT", "#b23a3a"]].forEach(([n, c], i) => {
    const y = 310 + i * 14;
    s += `<rect x="20" y="${y - 6}" width="6" height="6" fill="${c}"/><text x="30" y="${y}" ${M} font-size="6.5" fill="#e2e8f0">${n}</text>`;
    s += `<rect x="112" y="${y - 6}" width="60" height="4" fill="#1e293b"/><rect class="rp-t rp-php" x="112" y="${y - 6}" width="60" height="4" fill="#22c55e"/>`;
    s += `<rect x="176" y="${y - 6}" width="34" height="4" fill="#1e293b"/><rect x="176" y="${y - 6}" width="${[26, 18, 30][i]}" height="4" fill="#38bdf8"/>`;
  });
  // action menu
  const acts = [["攻", "ATTACK"], ["技", "SKILL"], ["符", "TALISMAN"], ["丹", "ELIXIR"]];
  s += `<g class="rp-t rp-menu">`;
  acts.forEach(([g, t], i) => {
    const x = 262 + i * 70;
    s += `<rect x="${x}" y="306" width="64" height="40" rx="4" fill="rgba(15,20,30,.78)" stroke="${GOLD}" stroke-opacity=".45"/>`;
    s += `<text x="${x + 32}" y="326" ${Z} font-size="15" fill="${GOLD}" text-anchor="middle">${g}</text>`;
    s += `<text x="${x + 32}" y="339" ${M} font-size="6" fill="#cbd5e1" text-anchor="middle" letter-spacing="1">${t}</text>`;
  });
  s += `<rect class="rp-t rp-cursor" x="262" y="306" width="64" height="40" rx="4" fill="rgba(224,179,90,.18)" stroke="${GOLD}" stroke-width="2"/>`;
  s += `</g>`;

  /* ---- breakthrough banner ---- */
  s += `<g class="rp-t rp-banner">
    <rect x="150" y="128" width="340" height="70" fill="rgba(15,20,30,.85)" stroke="${GOLD}" stroke-width="2"/>
    <rect x="156" y="134" width="328" height="58" fill="none" stroke="${GOLD}" stroke-opacity=".5"/>
    <text x="320" y="164" ${Z} font-size="24" fill="${GOLD}" text-anchor="middle" letter-spacing="6">境界突破</text>
    <text x="320" y="184" ${M} font-size="8" fill="#fff" text-anchor="middle" letter-spacing="2">REALM BREAKTHROUGH · FOUNDATION → GOLDEN CORE</text>
  </g>`;

  return `<div class="art art-rp"><svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Animated concept: Taoist cultivators battle a nine-tailed fox in a turn-based RPG">${s}</svg></div>`;
}

/* Math Adventure: Indonesian-village endless runner; obstacles & checkpoints open math quizzes (12s loop).
   Beats: run → dodge to left lane → hit bakso cart → quiz 1 → run & collect coins → checkpoint gate → quiz 2 → level up.
   Depth trick: objects are drawn at their "near" size and scaled from the vanishing point (320,118). Timing in style.css (.mr-*). */
function mathArt() {
  const M = 'font-family="JetBrains Mono, monospace"';
  const D = 'font-family="Chakra Petch, sans-serif" font-weight="700"';
  const R = "#dc2626", W = "#fff", Y = "#f59e0b";
  let s = "";

  s += `<defs>
    <linearGradient id="mrSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#38bdf8"/><stop offset="1" stop-color="#e0f2fe"/></linearGradient>
    <linearGradient id="mrRoad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6b7280"/><stop offset="1" stop-color="#374151"/></linearGradient>
  </defs>`;

  /* ---- sky, volcano, ground ---- */
  s += `<rect width="640" height="118" fill="url(#mrSky)"/>`;
  s += `<circle cx="540" cy="46" r="20" fill="#fde047"/><circle cx="540" cy="46" r="30" fill="#fde047" opacity=".25"/>`;
  s += `<g class="mr-cloudA"><ellipse cx="90" cy="40" rx="30" ry="10" fill="#fff"/><ellipse cx="110" cy="34" rx="18" ry="10" fill="#fff"/></g>`;
  s += `<g class="mr-cloudB"><ellipse cx="400" cy="30" rx="26" ry="8" fill="#fff"/><ellipse cx="418" cy="25" rx="14" ry="8" fill="#fff"/></g>`;
  s += `<path d="M150 118 L236 62 L248 58 L262 64 L350 118Z" fill="#64748b"/><path d="M236 62 L248 58 L262 64 L256 72 L242 70Z" fill="#e2e8f0"/>`; // volcano with snow-ish cap
  s += `<path class="mr-smoke" d="M246 54 q-6 -10 4 -16 q10 -6 6 -16" fill="none" stroke="#cbd5e1" stroke-width="5" stroke-linecap="round"/>`;
  s += `<path d="M0 118 Q80 96 170 118Z M380 118 Q470 92 640 112 V118Z" fill="#4d7c0f"/>`;
  s += `<rect y="118" width="640" height="242" fill="#84cc16"/>`;
  // sidewalks + road
  s += `<path d="M284 118 L296 118 L60 360 L0 360 L0 352Z" fill="#e7d7b1"/><path d="M344 118 L356 118 L640 352 L640 360 L580 360Z" fill="#e7d7b1"/>`;
  s += `<path d="M296 118 L344 118 L580 360 L60 360Z" fill="url(#mrRoad)"/>`;
  s += `<path d="M296 118 L60 360 M344 118 L580 360" stroke="#fef3c7" stroke-width="3"/>`;
  s += `<path class="mr-dash" d="M312 118 L213 360" stroke="#fff" stroke-width="4" stroke-dasharray="14 16"/>`;
  s += `<path class="mr-dash" d="M328 118 L427 360" stroke="#fff" stroke-width="4" stroke-dasharray="14 16"/>`;

  /* ---- scenery approaching from the vanishing point ---- */
  const palm = (x) => `<path d="M${x} 330 q6 -80 -4 -150" stroke="#92400e" stroke-width="10" fill="none"/>
    <path d="M${x - 4} 182 q-40 -10 -60 20 M${x - 4} 182 q-30 -30 -60 -20 M${x - 4} 182 q30 -30 60 -14 M${x - 4} 182 q40 0 54 30 M${x - 4} 182 q0 -30 10 -44" stroke="#15803d" stroke-width="9" fill="none" stroke-linecap="round"/>`;
  const house = (x) => `<rect x="${x}" y="230" width="110" height="90" fill="#fef3c7"/><path d="M${x - 16} 234 L${x + 55} 180 L${x + 126} 234Z" fill="#b45309"/>
    <rect x="${x + 16}" y="260" width="24" height="26" fill="#1e3a8a"/><rect x="${x + 64}" y="262" width="26" height="58" fill="#78350f"/>`;
  const warung = (x) => `<rect x="${x}" y="236" width="120" height="84" fill="#fde68a"/><path d="M${x - 10} 240 h140 l-12 -28 h-116z" fill="${R}"/>
    <path d="M${x - 10} 240 h140" stroke="#fff" stroke-width="4" stroke-dasharray="14 14"/>
    <rect x="${x + 12}" y="246" width="96" height="22" fill="#fff"/><text x="${x + 60}" y="262" ${D} font-size="14" fill="${R}" text-anchor="middle">WARUNG</text>
    <rect x="${x + 10}" y="280" width="100" height="40" fill="#a16207"/>`;
  const flag = (x) => `<rect x="${x}" y="150" width="5" height="180" fill="#9ca3af"/><rect x="${x + 5}" y="152" width="46" height="15" fill="${R}"/><rect x="${x + 5}" y="167" width="46" height="15" fill="#fff"/>`;
  const approach = (inner, k, cls = "mr-app") => `<g class="${cls}" style="--k:${k}">${inner}</g>`;
  s += approach(house(-40), 0) + approach(palm(40), 1) + approach(flag(20), 2);
  s += approach(warung(560), 0.5) + approach(palm(610), 1.5) + approach(flag(600), 2.5);

  /* ---- coins in the centre lane ---- */
  const coin = (k) => `<g class="mr-coin" style="--k:${k}"><circle cx="320" cy="300" r="14" fill="#facc15" stroke="#ca8a04" stroke-width="3"/><text x="320" y="306" ${D} font-size="15" fill="#a16207" text-anchor="middle">+</text></g>`;
  s += coin(0) + coin(0.33) + coin(0.66);

  /* ---- obstacle: bakso cart in the left lane ---- */
  s += `<g class="mr-t mr-cart">
    <rect x="146" y="238" width="92" height="56" rx="4" fill="#f8fafc" stroke="#1e3a8a" stroke-width="3"/>
    <rect x="146" y="226" width="92" height="14" fill="#1e3a8a"/>
    <text x="192" y="272" ${D} font-size="17" fill="${R}" text-anchor="middle">BAKSO</text>
    <circle cx="164" cy="300" r="10" fill="#111827"/><circle cx="220" cy="300" r="10" fill="#111827"/>
    <path d="M150 226 q42 -26 84 0" fill="none" stroke="#1e3a8a" stroke-width="3"/>
  </g>`;
  s += `<g class="mr-t mr-bruk"><path d="M150 214 l14 10 l6 -16 l8 14 l14 -10 l-2 16 l16 2 l-14 8 l10 12 l-16 -2 l-4 16 l-8 -12 l-12 10 l0 -16 l-16 0 l12 -10z" fill="#fde047" stroke="#b45309" stroke-width="2"/><text x="182" y="244" ${D} font-size="12" fill="${R}" text-anchor="middle">BRUK!</text></g>`;

  /* ---- checkpoint gapura (red-white gate) ---- */
  s += `<g class="mr-t mr-gate">
    <rect x="40" y="150" width="34" height="190" fill="${R}"/><rect x="566" y="150" width="34" height="190" fill="${R}"/>
    <rect x="40" y="150" width="34" height="20" fill="#fff"/><rect x="566" y="150" width="34" height="20" fill="#fff"/>
    <rect x="30" y="118" width="580" height="40" fill="#fff" stroke="${R}" stroke-width="5"/>
    <text x="320" y="146" ${D} font-size="22" fill="${R}" text-anchor="middle" letter-spacing="3">CHECKPOINT 2</text>
    <path d="M40 118 l20 -18 l20 18 M560 118 l20 -18 l20 18" fill="${R}"/>
  </g>`;

  /* ---- the runner: Indonesian SD student (back view) ---- */
  s += `<g class="mr-t mr-lane"><g class="mr-t mr-hit"><g class="mr-bob">
    <ellipse cx="320" cy="352" rx="24" ry="5" fill="#000" opacity=".3"/>
    <g class="mr-legL"><rect x="306" y="318" width="11" height="28" rx="4" fill="#b7794a"/><rect x="304" y="340" width="15" height="9" rx="3" fill="#111827"/></g>
    <g class="mr-legR"><rect x="323" y="318" width="11" height="28" rx="4" fill="#b7794a"/><rect x="321" y="340" width="15" height="9" rx="3" fill="#111827"/></g>
    <rect x="302" y="306" width="36" height="18" rx="4" fill="${R}"/>
    <g class="mr-armL"><rect x="292" y="274" width="10" height="28" rx="5" fill="#b7794a"/></g>
    <g class="mr-armR"><rect x="338" y="274" width="10" height="28" rx="5" fill="#b7794a"/></g>
    <rect x="300" y="268" width="40" height="42" rx="9" fill="#f8fafc"/>
    <rect x="305" y="273" width="30" height="32" rx="7" fill="#2563eb"/><rect x="311" y="288" width="18" height="12" rx="3" fill="#1d4ed8"/>
    <circle cx="304" cy="258" r="4" fill="#b7794a"/><circle cx="336" cy="258" r="4" fill="#b7794a"/>
    <circle cx="320" cy="254" r="16" fill="#1f2937"/>
    <path d="M303 250 a17 12 0 0 1 34 0 z" fill="${R}"/><rect x="303" y="246" width="34" height="5" fill="#fff"/>
  </g></g></g>`;

  /* ---- HUD ---- */
  s += `<rect x="10" y="10" width="110" height="30" rx="15" fill="rgba(255,255,255,.9)"/>`;
  s += `<text x="24" y="31" ${D} font-size="15" fill="${R}">♥♥♥</text><text x="112" y="30" ${D} font-size="12" fill="#1e293b" text-anchor="end">XP 240</text>`;
  s += `<rect x="530" y="10" width="100" height="30" rx="15" fill="rgba(255,255,255,.9)"/><circle cx="548" cy="25" r="9" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>`;
  s += `<text class="mr-t mr-c1" x="620" y="31" ${D} font-size="15" fill="#1e293b" text-anchor="end">36</text><text class="mr-t mr-c2" x="620" y="31" ${D} font-size="15" fill="#1e293b" text-anchor="end">41</text>`;
  s += `<text x="320" y="24" ${D} font-size="15" fill="#fff" stroke="#1e3a8a" stroke-width="3" paint-order="stroke" text-anchor="middle" letter-spacing="2">MATH ADVENTURE</text>`;
  s += `<rect x="250" y="32" width="140" height="7" rx="3.5" fill="rgba(255,255,255,.7)"/><rect class="mr-t mr-prog" x="250" y="32" width="140" height="7" rx="3.5" fill="#22c55e"/>`;
  s += `<text x="394" y="39" ${M} font-size="7" fill="#1e3a8a">🏁</text>`;

  /* ---- quiz popups ---- */
  s += `<rect class="mr-t mr-dim" width="640" height="360" fill="#0f172a"/>`;
  const quiz = (n, head, q, opts, right) => {
    let o = "";
    opts.forEach((v, i) => {
      const x = 170 + (i % 2) * 154, y = 170 + Math.floor(i / 2) * 42;
      o += `<rect x="${x}" y="${y}" width="146" height="34" rx="10" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>`;
      if (i === right) o += `<rect class="mr-t mr-ok${n}" x="${x}" y="${y}" width="146" height="34" rx="10" fill="#22c55e" stroke="#15803d" stroke-width="2"/>`;
      o += `<text x="${x + 73}" y="${y + 23}" ${D} font-size="17" fill="#0f172a" text-anchor="middle">${v}</text>`;
    });
    const rx = 170 + (right % 2) * 154 + 100, ry = 170 + Math.floor(right / 2) * 42 + 24;
    return `<g class="mr-t mr-q${n}">
      <rect x="150" y="62" width="340" height="250" rx="18" fill="#fff" stroke="${Y}" stroke-width="5"/>
      <rect x="150" y="62" width="340" height="34" rx="16" fill="${Y}"/><rect x="150" y="80" width="340" height="16" fill="${Y}"/>
      <text x="320" y="85" ${D} font-size="14" fill="#fff" text-anchor="middle" letter-spacing="1">${head}</text>
      <text x="320" y="146" ${D} font-size="38" fill="#1e3a8a" text-anchor="middle">${q}</text>
      ${o}
      <g class="mr-t mr-hand${n}"><path d="M${rx} ${ry} l-4 -18 a3 3 0 0 1 6 -1 l3 11 l1 -4 a3 3 0 0 1 5 1 l1 3 a3 3 0 0 1 5 1 l1 3 a3 3 0 0 1 5 2 l1 10 q0 10 -10 12 h-8 q-6 0 -9 -6z" fill="#fde68a" stroke="#92400e" stroke-width="1.5"/></g>
      <g class="mr-t mr-stamp${n}"><rect x="245" y="262" width="150" height="34" rx="8" fill="#22c55e" stroke="#15803d" stroke-width="2" transform="rotate(-4 320 279)"/><text x="320" y="285" ${D} font-size="17" fill="#fff" text-anchor="middle" transform="rotate(-4 320 279)">BENAR! +10 XP</text></g>
    </g>`;
  };
  s += quiz(1, "OOPS! JAWAB UNTUK LANJUT", "6 × 7 = ?", [36, 42, 48, 40], 1);
  s += quiz(2, "CHECKPOINT! SOAL BONUS", "48 ÷ 6 = ?", [6, 7, 8, 9], 2);

  /* ---- level up ---- */
  s += `<g class="mr-t mr-lvl"><rect x="190" y="130" width="260" height="70" rx="16" fill="#1e3a8a" stroke="#facc15" stroke-width="4"/>
    <text x="320" y="164" ${D} font-size="26" fill="#facc15" text-anchor="middle">NAIK LEVEL!</text>
    <text x="320" y="186" ${M} font-size="10" fill="#fff" text-anchor="middle" letter-spacing="2">★ ★ ★  LEVEL 5  ★ ★ ★</text></g>`;

  return `<div class="art art-mr"><svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Animated concept: an Indonesian schoolkid runs through a village; hitting obstacles and passing checkpoints opens math quizzes">${s}</svg></div>`;
}

/* ARPG roguelike: procedural dungeon → combat → rarity drop roll → loot flies into inventory → backend sync (12s loop).
   Moving pieces are drawn at the origin inside a positioned wrapper, so CSS only animates the deltas. Timing in style.css (.dz-*). */
function dungeonArt() {
  const M = 'font-family="JetBrains Mono, monospace"';
  const D = 'font-family="Chakra Petch, sans-serif" font-weight="700"';
  const RAR = { common: "#9ca3af", rare: "#3b82f6", epic: "#a855f7", legendary: "#f59e0b" };
  let s = "";

  s += `<defs>
    <pattern id="dzTile" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#2b2233"/><path d="M16 0H0V16" fill="none" stroke="#3a2f45"/></pattern>
    <linearGradient id="dzBeamL" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${RAR.legendary}" stop-opacity=".9"/><stop offset="1" stop-color="${RAR.legendary}" stop-opacity="0"/></linearGradient>
    <linearGradient id="dzBeamE" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${RAR.epic}" stop-opacity=".9"/><stop offset="1" stop-color="${RAR.epic}" stop-opacity="0"/></linearGradient>
    <linearGradient id="dzBeamR" x1="0" y1="1" x2="0" y2="0"><stop offset="0" stop-color="${RAR.rare}" stop-opacity=".9"/><stop offset="1" stop-color="${RAR.rare}" stop-opacity="0"/></linearGradient>
    <radialGradient id="dzTorch"><stop offset="0" stop-color="#fdba74" stop-opacity=".6"/><stop offset="1" stop-color="#fdba74" stop-opacity="0"/></radialGradient>
  </defs>`;

  /* ---- item icons (centred on 0,0) ---- */
  const sword = (c) => `<line x1="-7" y1="7" x2="8" y2="-8" stroke="#f1f5f9" stroke-width="4" stroke-linecap="round"/><line x1="-9" y1="1" x2="-1" y2="9" stroke="${c}" stroke-width="3" stroke-linecap="round"/><circle cx="-8" cy="8" r="2.5" fill="${c}"/>`;
  const armor = (c) => `<path d="M-9 -7 L-4 -9 Q0 -6 4 -9 L9 -7 L8 2 Q7 8 0 10 Q-7 8 -8 2Z" fill="${c}" stroke="#1f1633" stroke-width="1.5"/><path d="M0 -6v14" stroke="#1f1633" stroke-width="1.2"/>`;
  const potion = (c) => `<rect x="-2.5" y="-10" width="5" height="4" fill="#d6d3d1"/><path d="M-3 -6 h6 v2 l5 6 a8 8 0 1 1 -16 0 l5 -6z" fill="${c}"/><circle cx="-2" cy="3" r="1.6" fill="#fff" opacity=".7"/>`;
  const gem = (c) => `<path d="M0 -9 L8 -2 L0 9 L-8 -2Z" fill="${c}"/><path d="M-8 -2h16M0 -9 L-3 -2 L0 9 L3 -2Z" fill="none" stroke="#fff" stroke-opacity=".5"/>`;
  const ring = (c) => `<circle r="7" fill="none" stroke="${c}" stroke-width="3"/><path d="M-3 -8 L0 -12 L3 -8Z" fill="#67e8f9"/>`;
  const bow = (c) => `<path d="M-6 -9 Q8 0 -6 9" fill="none" stroke="${c}" stroke-width="2.5"/><line x1="-6" y1="-9" x2="-6" y2="9" stroke="#e5e7eb"/>`;

  /* ---- backdrop ---- */
  s += `<rect width="640" height="360" fill="#140f1c"/>`;
  s += `<radialGradient id="dzFog" cx=".35" cy=".55" r=".6"><stop offset="0" stop-color="#3b2a52" stop-opacity=".55"/><stop offset="1" stop-color="#140f1c" stop-opacity="0"/></radialGradient>`;
  s += `<rect width="410" height="360" fill="url(#dzFog)"/>`;
  s += `<text x="14" y="24" ${D} font-size="13" fill="#fff" letter-spacing="2">3D ACTION RPG</text>`;
  s += `<text x="14" y="36" ${M} font-size="7" fill="#a78bfa" letter-spacing="1">ROGUELIKE · INVENTORY &amp; DROP SYSTEMS</text>`;

  /* ---- procedural dungeon, isometric 3D ----
     Rooms are authored in a flat plan and projected with ISO; plan offset (k,k) = straight down on screen,
     so stacked offset copies form the slab thickness and (-18,-18) raises the back walls. */
  const ISO = "matrix(.75 .41 -.75 .41 235 40)";
  const room = (x, y, w, h, r, wall = true) => {
    let g = "";
    ["#0c0812", "#150f1e", "#1f172b"].forEach((c, i) => { const k = (3 - i) * 7; g += `<rect x="${x + k}" y="${y + k}" width="${w}" height="${h}" fill="${c}"/>`; });
    g += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#dzTile)"/>`;
    if (wall) {
      g += `<polygon points="${x},${y} ${x + w},${y} ${x + w - 18},${y - 18} ${x - 18},${y - 18}" fill="#4a3b5c"/>`;
      g += `<polygon points="${x},${y} ${x},${y + h} ${x - 18},${y + h - 18} ${x - 18},${y - 18}" fill="#342943"/>`;
      g += `<path d="M${x - 9} ${y - 9} H${x + w - 9} M${x - 9} ${y - 9} V${y + h - 9}" stroke="#241b30" stroke-width="1.5" stroke-dasharray="10 6"/>`;
      g += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="#7c6a8f" stroke-width="2.5"/>`;
    }
    return `<g class="dz-t dz-room" style="--r:${r}">${g}</g>`;
  };
  s += `<g transform="${ISO}">`;
  s += room(32, 56, 88, 74, 6);          // D: chest room (back)
  s += room(64, 128, 16, 94, 5, false);  // A→D corridor
  s += room(176, 140, 128, 124, 2);      // B: combat
  s += room(24, 220, 96, 96, 0);         // A: start
  s += room(118, 240, 60, 16, 1, false); // A→B corridor
  s += room(302, 244, 20, 16, 3, false); // B→C corridor
  s += room(320, 236, 64, 88, 4);        // C: stairs
  s += `<g class="dz-t dz-room" style="--r:7"><rect x="336" y="290" width="32" height="24" fill="#0c0812"/><path d="M340 294h24M340 300h24M340 306h24" stroke="#6b5b7b" stroke-width="2.5"/></g>`;
  s += `</g>`;
  // upright props at projected positions (chest, wall torches, slime)
  s += `<g class="dz-t dz-room" style="--r:7">
    <g transform="translate(224 107)"><path d="M-12 -2 L0 -8 L12 -2 L0 4Z" fill="#b45309"/><path d="M-12 -2 L0 4 V14 L-12 8Z" fill="#78350f"/><path d="M12 -2 L0 4 V14 L12 8Z" fill="#92400e"/><path d="M-12 1 L0 7 L12 1" fill="none" stroke="#fbbf24" stroke-width="1.5"/><rect x="-1.5" y="6" width="3" height="4" fill="#fbbf24"/></g>
    <circle class="dz-flicker" cx="262" cy="174" r="24" fill="url(#dzTorch)"/><rect x="260" y="170" width="4" height="10" fill="#57534e"/><path d="M262 162 q-4 5 0 9 q4 -4 0 -9z" fill="#f97316"/>
    <circle class="dz-flicker" cx="349" cy="209" r="24" fill="url(#dzTorch)"/><rect x="347" y="205" width="4" height="10" fill="#57534e"/><path d="M349 197 q-4 5 0 9 q4 -4 0 -9z" fill="#f97316"/>
    <g class="dz-slime" transform="translate(48 24)"><ellipse cx="254" cy="268" rx="11" ry="3" fill="#000" opacity=".4"/><path d="M243 266 q11 -22 22 0z" fill="#22c55e"/><path d="M247 262 q5 -8 10 -6" stroke="#86efac" stroke-width="2" fill="none"/><circle cx="251" cy="260" r="1.6" fill="#052e16"/><circle cx="257" cy="260" r="1.6" fill="#052e16"/></g>
  </g>`;
  s += `<g class="dz-t dz-gen"><rect x="85" y="176" width="230" height="30" rx="4" fill="rgba(20,15,28,.9)" stroke="#a78bfa"/>
    <text x="200" y="195" ${M} font-size="9" fill="#e9d5ff" text-anchor="middle" letter-spacing="1">⚙ GENERATING DUNGEON · SEED 0x7A3F</text></g>`;
  s += `<text class="dz-t dz-floor" x="398" y="36" ${M} font-size="7" fill="#9ca3af" text-anchor="end">FLOOR 3 · 4 ROOMS</text>`;

  /* ---- enemy: armoured skeleton knight at screen (240,211) ---- */
  s += `<g transform="translate(284 228)"><g class="dz-t dz-enemy"><g transform="scale(1.7)">
    <ellipse cy="13" rx="11" ry="3.5" fill="#000" opacity=".5"/>
    <path d="M-4 6 L-5 13 M4 6 L5 13" stroke="#a8a29e" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M-7 -3 Q0 -6 7 -3 L6 7 Q0 9 -6 7Z" fill="#57534e"/><path d="M-7 -3 Q0 -6 7 -3 L6 1 Q0 3 -6 1Z" fill="#78716c"/>
    <path d="M-3 -1v6M0 -1v7M3 -1v6" stroke="#d6d3d1" stroke-width="1"/>
    <circle cy="-10" r="6.5" fill="#e7e5e4"/><path d="M-6.5 -10 a6.5 6.5 0 0 1 13 0" fill="#44403c"/><path d="M0 -17 v-4" stroke="#dc2626" stroke-width="2"/>
    <circle cx="-2.4" cy="-9" r="1.5" fill="#ef4444"/><circle cx="2.4" cy="-9" r="1.5" fill="#ef4444"/>
    <path d="M-9 -1 L-9 9" stroke="#9ca3af" stroke-width="5" stroke-linecap="round"/>
    <path d="M8 2 L15 -14" stroke="#cbd5e1" stroke-width="2.2"/><path d="M6 0 L10 4" stroke="#78716c" stroke-width="2"/>
  </g></g>
  <g class="dz-t dz-ehp"><rect x="-16" y="-44" width="32" height="4" fill="#450a0a"/><rect class="dz-t dz-ehpfill" x="-16" y="-44" width="32" height="4" fill="#ef4444"/></g>
  <circle class="dz-t dz-burst" r="16" fill="none" stroke="#fbbf24" stroke-width="3"/>
  </g>`;
  s += `<text class="dz-t dz-d1" x="298" y="188" ${D} font-size="13" fill="#fff" stroke="#000" stroke-width="3" paint-order="stroke">-86</text>`;
  s += `<text class="dz-t dz-d2" x="292" y="180" ${D} font-size="16" fill="#fbbf24" stroke="#000" stroke-width="3" paint-order="stroke">-142 CRIT</text>`;

  /* ---- hero: caped knight, walks start room → corridor → combat room ---- */
  s += `<g transform="translate(88 179)"><g class="dz-t dz-hero"><g transform="scale(1.6)"><g class="dz-bob">
    <ellipse cy="13" rx="10" ry="3.5" fill="#000" opacity=".5"/>
    <path d="M-6 -3 Q-10 8 -8 12 L8 12 Q10 8 6 -3Z" fill="#991b1b"/>
    <path d="M-3 6 L-4 13 M3 6 L4 13" stroke="#334155" stroke-width="3" stroke-linecap="round"/>
    <path d="M-6 -3 Q0 -6 6 -3 L5 7 Q0 9 -5 7Z" fill="#3b82f6"/><path d="M-6 -3 Q0 -6 6 -3 L5.5 1 Q0 3 -5.5 1Z" fill="#60a5fa"/>
    <circle cy="-9" r="6" fill="#cbd5e1"/><path d="M-6 -9 a6 6 0 0 1 12 0 v1 h-12z" fill="#e2e8f0"/><rect x="-4" y="-9" width="8" height="2" fill="#1e293b"/>
    <path d="M0 -15 q4 -4 8 -2" stroke="#ef4444" stroke-width="2" fill="none"/>
    <path d="M6 2 L15 -12" stroke="#f1f5f9" stroke-width="2.4" stroke-linecap="round"/><path d="M4 0 L8 4" stroke="#fbbf24" stroke-width="2"/>
  </g></g></g></g>`;
  s += `<path class="dz-t dz-slash" d="M252 200 Q284 186 292 226" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" pathLength="100" stroke-dasharray="100" stroke-dashoffset="100"/>`;

  /* ---- loot: pops out of the enemy, lands, then flies to its inventory slot ---- */
  const loot = (n, icon, beam) => `<g transform="translate(284 228)"><g class="dz-t dz-loot${n}">
    <rect class="dz-t dz-beam" x="-6" y="-56" width="12" height="56" fill="url(#${beam})"/>
    <circle r="12" fill="rgba(0,0,0,.35)"/>${icon}
  </g></g>`;
  const lootSvg = loot(1, sword(RAR.legendary), "dzBeamL") + loot(2, armor(RAR.epic), "dzBeamE") + loot(3, potion(RAR.rare), "dzBeamR"); // appended last so it flies over the inventory panel

  /* ---- drop-roll panel ---- */
  s += `<g class="dz-t dz-roll">
    <rect x="120" y="50" width="190" height="42" rx="6" fill="rgba(20,15,28,.92)" stroke="#fbbf24"/>
    <text x="130" y="65" ${M} font-size="7" fill="#9ca3af" letter-spacing="1">DROP ROLL · d100 = 99.3</text>
    <text class="dz-t dz-r1" x="130" y="84" ${D} font-size="15" fill="${RAR.common}">COMMON</text>
    <text class="dz-t dz-r2" x="130" y="84" ${D} font-size="15" fill="${RAR.rare}">RARE</text>
    <text class="dz-t dz-r3" x="130" y="84" ${D} font-size="15" fill="${RAR.epic}">EPIC</text>
    <text class="dz-t dz-r4" x="130" y="84" ${D} font-size="15" fill="${RAR.legendary}">★ LEGENDARY</text>
    <text x="300" y="84" ${M} font-size="7" fill="#fbbf24" text-anchor="end">1% CHANCE</text>
  </g>`;

  /* ---- inventory panel ---- */
  s += `<rect x="410" y="12" width="222" height="338" rx="8" fill="#1c1526" stroke="#4c3d5e" stroke-width="2"/>`;
  s += `<text x="422" y="32" ${D} font-size="12" fill="#fff" letter-spacing="1.5">INVENTORY</text>`;
  s += `<text class="dz-t dz-cnt1" x="620" y="32" ${M} font-size="9" fill="#a78bfa" text-anchor="end">15 / 24</text>`;
  s += `<text class="dz-t dz-cnt2" x="620" y="32" ${M} font-size="9" fill="#fbbf24" text-anchor="end">18 / 24</text>`;
  ["ALL", "WEAPON", "ARMOR", "ITEM"].forEach((t, i) => {
    const x = 422 + i * 51;
    s += `<rect x="${x}" y="42" width="47" height="15" rx="3" fill="${i === 0 ? "#7c3aed" : "#2a2036"}"/><text x="${x + 23.5}" y="52.5" ${M} font-size="6.5" fill="#fff" text-anchor="middle">${t}</text>`;
  });
  const pre = [
    [sword, "rare"], [armor, "common"], [potion, "rare"], [gem, "epic"], [ring, "rare"], [bow, "common"],
    [potion, "common"], [gem, "rare"], [armor, "rare"], [ring, "epic"], [sword, "common"], [potion, "epic"],
    [bow, "rare"], [gem, "common"], [potion, "common"],
  ];
  for (let i = 0; i < 24; i++) {
    const c = i % 6, r = Math.floor(i / 6), x = 424 + c * 34, y = 64 + r * 34;
    const it = pre[i];
    s += `<rect x="${x}" y="${y}" width="30" height="30" rx="4" fill="#2a2036" stroke="${it ? RAR[it[1]] : "#3f3350"}" stroke-width="${it ? 1.8 : 1}"/>`;
    if (it) s += `<g transform="translate(${x + 15} ${y + 15}) scale(.85)">${it[0](RAR[it[1]])}</g>`;
  }
  // new-item highlights on slots 15, 16, 17
  [[15, "legendary"], [16, "epic"], [17, "rare"]].forEach(([i, rr]) => {
    const c = i % 6, r = Math.floor(i / 6), x = 424 + c * 34, y = 64 + r * 34;
    s += `<g class="dz-t dz-new"><rect x="${x - 1}" y="${y - 1}" width="32" height="32" rx="5" fill="none" stroke="${RAR[rr]}" stroke-width="2.5"/><rect x="${x + 12}" y="${y - 5}" width="20" height="9" rx="2" fill="${RAR[rr]}"/><text x="${x + 22}" y="${y + 2}" ${M} font-size="6" fill="#fff" text-anchor="middle">NEW</text></g>`;
  });
  // tooltip for the legendary drop
  s += `<g class="dz-t dz-tip">
    <rect x="420" y="208" width="202" height="104" rx="6" fill="#241a31" stroke="${RAR.legendary}" stroke-width="1.5"/>
    <rect x="428" y="216" width="34" height="34" rx="4" fill="#2a2036" stroke="${RAR.legendary}" stroke-width="2"/>
    <g transform="translate(445 233) scale(1.1)">${sword(RAR.legendary)}</g>
    <text x="470" y="229" ${D} font-size="11" fill="${RAR.legendary}">Emberfang Blade</text>
    <text x="470" y="243" ${M} font-size="7" fill="#fcd34d">★★★★★ LEGENDARY · SWORD</text>
    <text x="430" y="266" ${M} font-size="8" fill="#e5e7eb">ATK        +148</text>
    <text x="430" y="279" ${M} font-size="8" fill="#e5e7eb">CRIT RATE  +12%</text>
    <text x="430" y="292" ${M} font-size="8" fill="#fb923c">◆ Burn enemies on hit</text>
    <text x="614" y="304" ${M} font-size="6.5" fill="#9ca3af" text-anchor="end">iLvl 42 · roll #A7F3-19</text>
  </g>`;
  // backend sync status
  s += `<rect x="420" y="320" width="202" height="22" rx="4" fill="#140f1c"/>`;
  s += `<g class="dz-t dz-sync1"><circle class="dz-spin" cx="433" cy="331" r="5" fill="none" stroke="#a78bfa" stroke-width="2" stroke-dasharray="20 12"/><text x="444" y="334" ${M} font-size="7.5" fill="#c4b5fd">SYNCING WITH BACKEND…</text></g>`;
  s += `<g class="dz-t dz-sync2"><circle cx="433" cy="331" r="6" fill="#22c55e"/><path d="M430 331l2 2 4-4" stroke="#fff" stroke-width="1.6" fill="none"/><text x="444" y="334" ${M} font-size="7.5" fill="#86efac">INVENTORY SYNCED · 3 ITEMS</text></g>`;

  s += lootSvg;

  return `<div class="art art-dz"><svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Animated concept: a procedural roguelike dungeon where a defeated enemy drops rarity-rolled loot that flies into a synced inventory">${s}</svg></div>`;
}

/* Generated SVG cover art for projects without shareable screenshots */
function art(kind, title) {
  if (kind === "inventory") return dungeonArt();
  if (kind === "math") return mathArt();
  if (kind === "realm") return realmArt();
  if (kind === "smartwall") return smartwallArt();
  if (kind === "visionpro") return visionProArt();
  const common = `<text x="16" y="20" font-family="JetBrains Mono, monospace" font-size="11" fill="#7ac8ef" letter-spacing="2">${esc((title || "").toUpperCase())}</text>`;
  const shapes = {
    visionpro: `
      <ellipse cx="200" cy="120" rx="150" ry="60" fill="none" stroke="#7ac8ef" stroke-opacity=".3" stroke-dasharray="4 6"/>
      <ellipse cx="200" cy="120" rx="110" ry="92" fill="none" stroke="#7ac8ef" stroke-opacity=".2" stroke-dasharray="2 6"/>
      <path d="M128 100c0-18 16-28 72-28s72 10 72 28v24c0 20-14 30-34 30-16 0-22-12-38-12s-22 12-38 12c-20 0-34-10-34-30z" fill="rgba(0,143,212,.25)" stroke="#fff" stroke-width="3"/>
      <path d="M140 104c0-10 12-18 60-18s60 8 60 18" fill="none" stroke="#7ac8ef" stroke-width="2"/>
      <circle cx="80" cy="70" r="6" fill="#008fd4"/><circle cx="330" cy="160" r="5" fill="#7ac8ef"/><circle cx="310" cy="64" r="3" fill="#fff"/>
      <rect x="44" y="140" width="64" height="30" rx="6" fill="rgba(255,255,255,.08)" stroke="#7ac8ef"/><text x="76" y="159" text-anchor="middle" font-size="10" font-family="JetBrains Mono" fill="#fff">AI ◆</text>
      <rect x="292" y="84" width="72" height="30" rx="6" fill="rgba(255,255,255,.08)" stroke="#7ac8ef"/><text x="328" y="103" text-anchor="middle" font-size="10" font-family="JetBrains Mono" fill="#fff">OBJ 98%</text>`,
    rpg: `
      <path d="M200 40l50 20v46c0 36-22 60-50 72-28-12-50-36-50-72V60z" fill="rgba(0,143,212,.25)" stroke="#fff" stroke-width="3"/>
      <path d="M200 64v92M176 96h48" stroke="#7ac8ef" stroke-width="5" stroke-linecap="square"/>
      <text x="100" y="80" font-size="11" font-family="JetBrains Mono" fill="#7ac8ef">TURN 03</text>
      <rect x="280" y="70" width="80" height="8" fill="rgba(255,255,255,.15)"/><rect x="280" y="70" width="56" height="8" fill="#22c55e"/>
      <rect x="280" y="86" width="80" height="8" fill="rgba(255,255,255,.15)"/><rect x="280" y="86" width="40" height="8" fill="#008fd4"/>`,
    math: `
      <text x="200" y="138" text-anchor="middle" font-family="Chakra Petch" font-weight="700" font-size="84" fill="#fff">7×8</text>
      <text x="90" y="80" font-family="Chakra Petch" font-size="36" fill="#7ac8ef">+</text>
      <text x="300" y="70" font-family="Chakra Petch" font-size="32" fill="#008fd4">÷</text>
      <text x="310" y="170" font-family="Chakra Petch" font-size="30" fill="#7ac8ef">=</text>
      <text x="80" y="175" font-family="Chakra Petch" font-size="30" fill="#008fd4">−</text>`,
    inventory: (() => {
      let s = ""; const cl = ["#7ac8ef", "#a855f7", "#ffb020", "#008fd4", "#22c55e"];
      for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) {
        const x = 90 + c * 38, y = 50 + r * 38, k = (r * 6 + c) % 7;
        s += `<rect x="${x}" y="${y}" width="32" height="32" fill="rgba(255,255,255,.06)" stroke="${k < 5 ? cl[k] : "#334"}"/>`;
        if (k < 5) s += `<path d="M${x + 16} ${y + 7}l8 9-8 9-8-9z" fill="${cl[k]}"/>`;
      }
      return s;
    })(),
    parkour: `
      <path d="M40 180h80v-40h70v-50h80v-40h90" fill="none" stroke="#7ac8ef" stroke-width="3"/>
      <path d="M100 150 Q150 60 210 80 T320 36" fill="none" stroke="#008fd4" stroke-width="2.5" stroke-dasharray="6 6"/>
      <circle cx="320" cy="36" r="7" fill="#fff"/>
      <text x="230" y="140" font-size="11" font-family="JetBrains Mono" fill="#fff">VAULT · CLIMB</text>`,
    lock: `
      <rect x="160" y="96" width="80" height="64" rx="6" fill="rgba(0,143,212,.25)" stroke="#fff" stroke-width="3"/>
      <path d="M176 96V80a24 24 0 0 1 48 0v16" fill="none" stroke="#fff" stroke-width="3"/>
      <circle cx="200" cy="124" r="7" fill="#7ac8ef"/>
      <text x="200" y="186" text-anchor="middle" font-size="11" font-family="JetBrains Mono" fill="#7ac8ef">PRIVATE BUILD · NDA</text>`,
  };
  return `<div class="art"><svg viewBox="0 0 400 240" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${shapes[kind] || ""}${common}</svg></div>`;
}

function mediaHTML(p, { eager = false } = {}) {
  const v = p.videos && p.videos[0];
  const local = p.thumb ? IMG + p.thumb : null;
  let visual;
  if (local) {
    visual = `<img src="${local}" alt="${esc(p.title)} screenshot" loading="${eager ? "eager" : "lazy"}" class="${p.portrait ? "portrait" : ""}">`;
  } else if (v && v.type === "youtube") {
    visual = `<img src="${videoThumb(v)}" alt="${esc(p.title)} video thumbnail" loading="lazy">`;
  } else {
    visual = art(p.art, p.title);
  }
  return visual;
}

/* ==========================================================
   Render: featured
   ========================================================== */
function renderFeatured() {
  const root = $("#featuredList");
  root.innerHTML = FEATURED.map((p, i) => {
    const v = p.videos[0];
    const media = mediaHTML(p, { eager: i === 0 });
    const play = v
      ? `<button class="play" data-feat="${i}" aria-label="Play ${esc(p.title)} preview"><span class="play-btn">${PLAY_SVG}</span><span class="play-label">▶ WATCH PREVIEW</span></button>`
      : `<button class="play play-concept" data-feat="${i}" aria-label="View ${esc(p.title)} concept"><span class="play-label">◆ CONCEPT ILLUSTRATION</span></button>`;
    return `
      <article class="feat reveal">
        <div class="feat-media">${media}${play}</div>
        <div class="feat-body">
          <div class="feat-top">
            <span class="badge-new">NEW</span>
            <span class="mono muted">${esc(p.type)}</span>
          </div>
          <h3>${esc(p.title)}</h3>
          <p class="feat-concept">${esc(p.concept)}</p>
          <ul class="feat-points">${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
          <div class="chips">${[p.platform, ...p.tags].map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
          <div class="feat-actions">
            ${v
              ? `<button class="btn btn-primary btn-sm" data-feat="${i}">${PLAY_SVG} Watch Preview</button>`
              : `<button class="btn btn-line btn-sm" data-feat="${i}">◆ View Concept</button>`}
          </div>
          <p class="nda">🔒 Client &amp; company details under NDA. Only the concept is shown.</p>
        </div>
      </article>`;
  }).join("");

  root.querySelectorAll("[data-feat]").forEach((b) =>
    b.addEventListener("click", () => openModal(FEATURED[+b.dataset.feat], true))
  );
}

/* ==========================================================
   Render: project grid
   ========================================================== */
function renderProjects() {
  const grid = $("#projectGrid");
  grid.innerHTML = PROJECTS.map((p, i) => {
    const hasVideo = p.videos && p.videos.length;
    return `
      <button class="card reveal" data-i="${i}" data-cat="${p.cat.join(" ")}" aria-label="Open ${esc(p.title)} details">
        <div class="card-media">
          ${mediaHTML(p)}
          <span class="card-year">${esc(p.year)}</span>
          ${hasVideo ? `<span class="play" aria-hidden="true"><span class="play-btn">${PLAY_SVG}</span></span>` : ""}
          ${!hasVideo && p.art ? `<span class="concept-label">◆ VIEW CONCEPT</span>` : ""}
        </div>
        <div class="card-body">
          <span class="card-type">${esc(p.type)}</span>
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.desc)}</p>
          <div class="chips">${[p.engine, p.platform].map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
          ${p.nda ? `<p class="nda nda-card">🔒 Under NDA · concept illustration only</p>` : ""}
        </div>
      </button>`;
  }).join("");

  grid.querySelectorAll(".card").forEach((c) =>
    c.addEventListener("click", () => openModal(PROJECTS[+c.dataset.i]))
  );

  // image fallback: broken remote thumbnail -> generated art
  grid.querySelectorAll("img").forEach((img) =>
    img.addEventListener("error", () => { img.outerHTML = art("rpg", ""); }, { once: true })
  );

  // filter counts
  document.querySelectorAll(".filter").forEach((f) => {
    const k = f.dataset.filter;
    const n = k === "all" ? PROJECTS.length : PROJECTS.filter((p) => p.cat.includes(k)).length;
    f.insertAdjacentHTML("beforeend", `<span class="count">${n}</span>`);
  });
}

function setupFilters() {
  const btns = document.querySelectorAll(".filter");
  btns.forEach((b) =>
    b.addEventListener("click", () => {
      btns.forEach((x) => { x.classList.toggle("active", x === b); x.setAttribute("aria-selected", x === b); });
      const f = b.dataset.filter;
      document.querySelectorAll("#projectGrid .card").forEach((c) => {
        const show = f === "all" || c.dataset.cat.split(" ").includes(f);
        c.classList.toggle("hide", !show);
        if (show) c.classList.add("in");
      });
    })
  );
}

/* ==========================================================
   Modal
   ========================================================== */
const modal = $("#modal");
let lastFocus = null;

function openModal(p, featured = false) {
  lastFocus = document.activeElement;
  const media = $("#modalMedia");
  const body = $("#modalBody");
  const vids = p.videos || [];

  const setVideo = (v) => { media.innerHTML = `<iframe src="${videoEmbed(v)}" title="${esc(p.title)} video" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen></iframe>`; };

  if (vids.length) setVideo(vids[0]);
  else if (p.thumb) media.innerHTML = `<img src="${IMG + p.thumb}" alt="${esc(p.title)}">`;
  else media.innerHTML = art(p.art, p.title);

  const meta = [
    ["Year", p.year], ["Engine", p.engine], ["Platform", p.platform], ["Language", p.lang], ["Genre", p.type],
  ].filter(([, v]) => v);

  const role = p.role || p.points || [];
  const links = p.links || [];

  body.innerHTML = `
    ${vids.length > 1 ? `<div class="video-tabs">${vids.map((v, i) => `<button data-v="${i}" class="${i === 0 ? "active" : ""}">▶ ${esc(v.label)}</button>`).join("")}</div>` : ""}
    <span class="card-type">${featured ? "Latest Project · Concept" : esc(p.type)}</span>
    <h3 id="modalTitle">${esc(p.title)}</h3>
    <p class="muted">${esc(p.concept || p.desc)}</p>
    <div class="modal-meta">${meta.map(([k, v]) => `<div><small>${k}</small><span>${esc(v)}</span></div>`).join("")}</div>
    ${role.length ? `<div><p class="mono muted" style="margin-bottom:.4rem">${featured ? "KEY FEATURES" : "MY ROLE"}</p><ul>${role.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>` : ""}
    ${p.tags ? `<div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : ""}
    ${links.length ? `<div class="modal-links">${links.map((l) => `<a class="btn btn-line btn-sm" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
    ${p.nda ? `<div class="disclaimer"><strong>ⓘ Concept disclaimer</strong><span>This animation is an illustrative recreation of the game's idea and core loop, made for this portfolio. It is not actual in-game footage, art or assets, and characters, numbers and UI are representative only.</span></div>` : ""}
    ${featured || p.nda ? `<p class="nda">🔒 Client &amp; company details under NDA. Only the concept is shown.</p>` : ""}
  `;

  body.querySelectorAll("[data-v]").forEach((b) =>
    b.addEventListener("click", () => {
      body.querySelectorAll("[data-v]").forEach((x) => x.classList.toggle("active", x === b));
      setVideo(vids[+b.dataset.v]);
    })
  );

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("lock");
  $(".modal-close", modal).focus();
  modalHasVideo = vids.length > 0;
  if (modalHasVideo) document.dispatchEvent(new Event("modal:open")); // lets BGM pause
}
let modalHasVideo = false;

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lock");
  if (modalHasVideo) { modalHasVideo = false; document.dispatchEvent(new Event("modal:close")); }
  setTimeout(() => { $("#modalMedia").innerHTML = ""; }, 250); // stop video
  if (lastFocus) lastFocus.focus();
}
modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open")) closeModal(); });

/* ==========================================================
   Experience / skills / certs
   ========================================================== */
function renderTimeline() {
  $("#timeline").innerHTML = EXPERIENCE.map((e) => `
    <li class="tl-item reveal ${e.current ? "current" : ""}">
      <div class="tl-card">
        <div class="tl-head">
          <h3>${esc(e.role)}${e.current ? '<span class="status-live">ACTIVE</span>' : ""}</h3>
          <span class="tl-date">${esc(e.date)}</span>
        </div>
        <p class="tl-company">${esc(e.company)}</p>
        <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <div class="chips">${e.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>
      </div>
    </li>`).join("");
}

function renderSkills() {
  $("#skillList").innerHTML = SKILLS.map(([name, r]) => `
    <li class="skill">
      <span class="skill-name">${esc(name)}</span>
      <span class="skill-rank ${r}">${r}</span>
      <span class="segments">${Array.from({ length: 10 }, (_, i) => `<i class="${i < RANK[r] ? "on" : ""}" style="animation-delay:${i * 60}ms"></i>`).join("")}</span>
    </li>`).join("");

  $("#certList").innerHTML = CERTS.map(([name, date, hl]) => `
    <li class="cert ${hl ? "hl" : ""}">
      <span class="cert-icon"><svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg></span>
      <span><strong>${esc(name)}</strong><small>${esc(date)}</small></span>
    </li>`).join("");
}

function renderRadar() {
  const svg = $("#radar");
  const cx = 160, cy = 150, R = 105, n = ATTRIBUTES.length;
  const pt = (i, r) => {
    const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };
  let s = "";
  [0.25, 0.5, 0.75, 1].forEach((k) => {
    s += `<polygon class="ring" points="${ATTRIBUTES.map((_, i) => pt(i, R * k).join(",")).join(" ")}"/>`;
  });
  ATTRIBUTES.forEach((_, i) => { const [x, y] = pt(i, R); s += `<line class="axis" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`; });
  s += `<polygon class="area" points="${ATTRIBUTES.map(([, v], i) => pt(i, (R * v) / 100).join(",")).join(" ")}"/>`;
  ATTRIBUTES.forEach(([label, v], i) => {
    const [x, y] = pt(i, (R * v) / 100);
    s += `<circle class="pt" cx="${x}" cy="${y}" r="4.5"/>`;
    const [lx, ly] = pt(i, R + 24);
    const anchor = Math.abs(lx - cx) < 10 ? "middle" : lx > cx ? "start" : "end";
    s += `<text class="lbl" x="${lx}" y="${ly}" text-anchor="${anchor}">${label}</text>`;
    s += `<text class="val" x="${lx}" y="${ly + 13}" text-anchor="${anchor}">${v}</text>`;
  });
  svg.innerHTML = s;
}

/* ==========================================================
   Effects: typing, counters, reveal, nav
   ========================================================== */
function typer() {
  const el = $("#typer");
  const words = ["Unity Game Developer", "XR Developer", "VR / AR Engineer", "Spatial Computing Dev", "Gameplay Programmer"];
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let w = 0, c = words[0].length, del = true;
  const tick = () => {
    const word = words[w];
    el.textContent = word.slice(0, c);
    if (del) {
      c--;
      if (c < 0) { del = false; w = (w + 1) % words.length; c = 0; }
      setTimeout(tick, 40);
    } else {
      c++;
      if (c > words[w].length) { del = true; c = words[w].length; setTimeout(tick, 1800); return; }
      setTimeout(tick, 80);
    }
  };
  setTimeout(tick, 2200);
}

function counters() {
  document.querySelectorAll("[data-count]").forEach((el) => {
    const end = +el.dataset.count; let cur = 0;
    const step = () => { cur++; el.textContent = cur; if (cur < end) setTimeout(step, 1200 / end); };
    step();
  });
}

function reveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((e) => io.observe(e));
}

function nav() {
  const navEl = $("#nav"), toggle = $("#navToggle"), links = $("#navLinks");
  const onScroll = () => navEl.classList.toggle("scrolled", window.scrollY > 10);
  onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    links.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");
  }));

  // active section highlight
  const sections = ["latest", "projects", "experience", "skills"].map((id) => document.getElementById(id));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) links.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => s && io.observe(s));
}

/* ---------------- Init ---------------- */
renderFeatured();
renderProjects();
setupFilters();
renderTimeline();
renderSkills();
renderRadar();
typer();
counters();
nav();
reveal();
$("#year").textContent = new Date().getFullYear();
