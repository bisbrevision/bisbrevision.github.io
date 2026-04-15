const STORAGE_KEY = "bisb-revision-data";
const SESSION_GATE_KEY = "bisb-session-unlocked";
const DEFAULT_PASSWORD = "goner234";

const CATALOG_SETS = [
  {
    id: "rock-cycle",
    title: "Rock Cycle",
    subject: "Earth 1",
    description: "Flashcards first, then a full quiz from the rock cycle lesson.",
    cards: [
      { term: "Lesson objective", definition: "Bringing together knowledge of rocks to form the rock cycle." },
      { term: "Four layers of the Earth from outside to inside", definition: "Crust, mantle, outer core, inner core." },
      { term: "Conditions needed for metamorphic rock to form", definition: "High heat and high pressure." },
      { term: "Type of weathering acid rain belongs to", definition: "Chemical weathering." },
      { term: "What matter is in the rock cycle", definition: "Matter is neither created nor destroyed." },
      { term: "How rocks behave over time", definition: "Rocks are constantly changing." },
      { term: "How long rock cycle changes can take", definition: "They can take millions of years, although some changes happen very quickly." },
      { term: "Examples of rapid rock cycle changes", definition: "Landslides and volcanoes." },
      { term: "Resource problem in the rock cycle", definition: "Humans are using resources faster than they are being made." },
      { term: "What magma is", definition: "Molten rock." },
      { term: "What sediment can be made from", definition: "Mud, sand and shells." },
      { term: "Process that turns sediment into sedimentary rock", definition: "Compaction and cementation." },
      { term: "Process that turns any rock into sediment", definition: "Weathering and erosion." },
      { term: "Process that turns rock into metamorphic rock", definition: "Heat and pressure." },
      { term: "Process that turns rock into magma", definition: "Melting." },
      { term: "Process that turns magma into igneous rock", definition: "Cooling and crystallisation, also called solidification." },
      { term: "Cooling that forms large crystals", definition: "Slow cooling below the surface, called intrusive cooling." },
      { term: "Cooling that forms small crystals", definition: "Fast cooling above the surface, called extrusive cooling." },
      { term: "Igneous rock formed by slow intrusive cooling", definition: "Granite with large crystals." },
      { term: "Igneous rock formed by fast extrusive cooling", definition: "Basalt with small crystals." },
      { term: "Examples of sedimentary rock in the lesson", definition: "Mudstone, limestone and sandstone." },
      { term: "Examples of metamorphic rock in the lesson", definition: "Marble and slate." },
      { term: "What uplift does", definition: "It brings rock back towards the surface so it can become exposed." },
      { term: "What happens after weathering and erosion in task 1", definition: "Transport, then deposition." },
      { term: "Meaning of cooled above surface", definition: "Igneous rock forms above the surface, for example basalt." },
      { term: "Meaning of cooled below surface", definition: "Igneous rock forms below the surface, for example granite." },
      { term: "Order after deposition in task 1", definition: "Compaction and cementation, then sedimentary rock." },
      { term: "What exposed sedimentary rock means", definition: "Sedimentary rock that has been uplifted and is at the surface." },
      { term: "Order after metamorphic rock in task 1", definition: "Melting, magma, cooling, then igneous rock." },
      { term: "What exposed metamorphic rock means", definition: "Metamorphic rock that has been uplifted and is at the surface." },
      { term: "What exposed sedimentary rock can go through next", definition: "Heat and pressure, or weathering and erosion." },
      { term: "What exposed metamorphic rock can go through next", definition: "Weathering and erosion." },
      { term: "Task 2 viewpoint", definition: "Write a story from the viewpoint of a piece of sediment." },
      { term: "Task 2 instruction", definition: "Document the journey through the rock cycle from one type of rock to another, including all processes of transfer involved." },
      { term: "Key word: transportation", definition: "The movement of weathered rock fragments from one place to another." },
      { term: "Key word: deposition", definition: "When transported sediment is dropped and settles." },
      { term: "Key word: freeze-thaw weathering", definition: "Water gets into cracks, freezes, expands and makes the cracks bigger until pieces break off." },
      { term: "Where the sample story starts", definition: "As a large piece of granite on the top of a mountain." },
      { term: "What caused cracking in the sample story", definition: "Cold nights and hot days caused weathering." },
      { term: "What transported the fragments downhill in the sample story", definition: "Heavy rain." },
      { term: "Where the sediment was deposited in the sample story", definition: "In the sea where more and more sediment settled on top." },
      { term: "What happened deep underground in the sample story", definition: "High temperatures and high pressures changed the rock." },
      { term: "What happened after more Earth movements in the sample story", definition: "The rock became so hot that it melted." },
      { term: "How the sample story ended", definition: "The melted rock was forced up through cracks, cooled and became a large piece of granite again." }
    ]
  },
  {
    id: "rock-cycle-outstanding",
    title: "Rock Cycle Outstanding",
    subject: "Earth 1 Advanced",
    description: "A memory trainer for rock formation and destruction, chemical weathering, equations, and accurate compaction particle diagrams.",
    immersive: true,
    cards: [
      {
        term: "How igneous rock is made",
        definition: "Igneous rock forms when magma cools and crystallises. Slow cooling underground forms large crystals like granite, while fast cooling at the surface forms small crystals like basalt.",
        memoryCue: "I = ignition and cooling magma",
        prompt: "Explain how igneous rock is made."
      },
      {
        term: "How igneous rock is destroyed",
        definition: "Igneous rock can be destroyed by weathering and erosion into sediment, changed by heat and pressure into metamorphic rock, or melted back into magma.",
        memoryCue: "Weather, squeeze, or melt",
        prompt: "How can igneous rock be destroyed in the rock cycle?"
      },
      {
        term: "How sedimentary rock is made",
        definition: "Sedimentary rock forms when weathered fragments are transported, deposited, compacted, and then cemented together.",
        memoryCue: "Deposit, compact, cement",
        prompt: "How is sedimentary rock made?"
      },
      {
        term: "How sedimentary rock is destroyed",
        definition: "Sedimentary rock can be weathered and eroded back into sediment, changed by heat and pressure into metamorphic rock, or dissolved by chemical weathering if it contains reactive minerals like calcium carbonate.",
        memoryCue: "Break, squeeze, react",
        prompt: "How is sedimentary rock destroyed?"
      },
      {
        term: "How metamorphic rock is made",
        definition: "Metamorphic rock forms when existing rock is changed by high heat and high pressure without melting.",
        memoryCue: "Meta means changed",
        prompt: "How is metamorphic rock made?"
      },
      {
        term: "How metamorphic rock is destroyed",
        definition: "Metamorphic rock can be weathered and eroded into sediment or melted into magma if temperatures become high enough.",
        memoryCue: "Break down or melt",
        prompt: "How is metamorphic rock destroyed?"
      },
      {
        term: "How compaction works in particle terms",
        definition: "In compaction, layers of sediment build up, pressing particles closer together so the gaps between them get smaller and the sediment becomes more tightly packed.",
        memoryCue: "Same particles, less space",
        prompt: "Explain compaction using an accurate particle diagram idea.",
        visual: "compaction-particles"
      },
      {
        term: "How cementation works",
        definition: "In cementation, dissolved minerals are deposited in the gaps between sediment particles and stick the grains together into rock.",
        memoryCue: "Minerals glue the grains",
        prompt: "What happens during cementation?"
      },
      {
        term: "Accurate particle diagram for compaction",
        definition: "Before compaction, sediment particles are spread out with larger gaps. After compaction, the particles are still the same size but much closer together with fewer pore spaces.",
        memoryCue: "Do not shrink particles, shrink the gaps",
        prompt: "What must an accurate particle diagram for compaction show?"
      },
      {
        term: "Chemical weathering",
        definition: "Chemical weathering breaks down rock by chemical reactions that change the minerals in the rock, often involving weak acids in rainwater.",
        memoryCue: "The minerals change, not just the shape",
        prompt: "Define chemical weathering."
      },
      {
        term: "Acid rain formation word equation",
        definition: "Carbon dioxide + water -> carbonic acid.",
        memoryCue: "Gas plus rain makes weak acid",
        prompt: "What is the word equation for carbonic acid formation?"
      },
      {
        term: "Acid rain formation symbol equation",
        definition: "CO2 + H2O -> H2CO3.",
        memoryCue: "CO2 + H2O = H2CO3",
        prompt: "What is the symbol equation for carbonic acid formation?"
      },
      {
        term: "Limestone chemical weathering word equation",
        definition: "Calcium carbonate + acid -> calcium salt + water + carbon dioxide.",
        memoryCue: "Carbonate plus acid fizzes",
        prompt: "What is the word equation for chemical weathering of limestone?"
      },
      {
        term: "Limestone chemical weathering symbol equation",
        definition: "CaCO3 + 2HCl -> CaCl2 + H2O + CO2.",
        memoryCue: "Carbonate plus acid gives salt, water, gas",
        prompt: "What is the symbol equation for limestone reacting with hydrochloric acid?"
      },
      {
        term: "Why limestone is vulnerable",
        definition: "Limestone contains calcium carbonate, which reacts with acids during chemical weathering and slowly dissolves.",
        memoryCue: "Calcium carbonate is reactive",
        prompt: "Why is limestone especially affected by chemical weathering?"
      },
      {
        term: "Best explanation of compaction in one sentence",
        definition: "Compaction is the process where layers of sediment press down on lower layers so the particles become closer together and pore spaces decrease.",
        memoryCue: "Pressure closes spaces",
        prompt: "Give a strong one-sentence definition of compaction."
      }
    ]
  }
];

let state = loadState();
let selectedSetId = null;

const elements = {
  passwordGate: document.getElementById("passwordGate"),
  passwordForm: document.getElementById("passwordForm"),
  passwordInput: document.getElementById("passwordInput"),
  passwordError: document.getElementById("passwordError"),
  setList: document.getElementById("setList"),
  studyIntro: document.getElementById("studyIntro"),
  studyShell: document.getElementById("studyShell"),
  studyTitle: document.getElementById("studyTitle"),
  studyStep: document.getElementById("studyStep"),
  studyProgress: document.getElementById("studyProgress"),
  studyContent: document.getElementById("studyContent"),
  confettiCanvas: document.getElementById("confettiCanvas"),
  setCount: document.getElementById("setCount"),
  cardCount: document.getElementById("cardCount"),
  sessionCount: document.getElementById("sessionCount")
};

const reviseState = {
  index: 0,
  stage: "flashcard",
  flipped: false,
  reveal: false,
  score: 0,
  answerFeedback: "",
  answerFeedbackClass: "",
  sessionRecorded: false,
  queue: [],
  mastery: {},
  masteredCount: 0
};

let confettiState = {
  canvas: null,
  ctx: null,
  pieces: [],
  frame: 0,
  running: false
};

boot();

function boot() {
  if (sessionStorage.getItem(SESSION_GATE_KEY) === "true") {
    elements.passwordGate.classList.add("hidden");
  }

  elements.passwordForm.addEventListener("submit", unlockGate);
  setupConfetti();
  renderStats();
  renderSetList();
  renderStudyArea();
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  let parsed = {};

  if (raw) {
    try {
      parsed = JSON.parse(raw);
    } catch {
      parsed = {};
    }
  }

  return {
    password: parsed.password || DEFAULT_PASSWORD,
    sessionsCompleted: Number(parsed.sessionsCompleted) || 0,
    setStats: hydrateSetStats(parsed.setStats)
  };
}

function hydrateSetStats(setStats) {
  const output = {};
  CATALOG_SETS.forEach((set) => {
    const current = setStats?.[set.id] || {};
    output[set.id] = {
      completed: Number(current.completed) || 0,
      best: Number(current.best) || 0
    };
  });
  return output;
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function unlockGate(event) {
  event.preventDefault();
  const entered = elements.passwordInput.value.trim();

  if (entered !== state.password) {
    elements.passwordError.textContent = "Incorrect password.";
    return;
  }

  sessionStorage.setItem(SESSION_GATE_KEY, "true");
  elements.passwordGate.classList.add("hidden");
  elements.passwordInput.value = "";
  elements.passwordError.textContent = "";
}

function renderStats() {
  elements.setCount.textContent = String(CATALOG_SETS.length);
  elements.cardCount.textContent = String(CATALOG_SETS.reduce((sum, set) => sum + set.cards.length, 0));
  elements.sessionCount.textContent = String(state.sessionsCompleted);
}

function renderSetList() {
  elements.setList.innerHTML = CATALOG_SETS.map((set) => {
    const active = set.id === selectedSetId ? "active" : "";
    const stats = state.setStats[set.id];
    return `
      <button class="set-button ${active}" data-set-id="${set.id}">
        <div class="set-button-title">
          <span>${escapeHtml(set.title)}</span>
          <span>${set.cards.length}</span>
        </div>
        <div class="set-meta">${escapeHtml(set.description)}</div>
        <div class="set-meta">${escapeHtml(set.subject)} · ${stats.completed} sessions · best ${stats.best}%</div>
      </button>
    `;
  }).join("");

  elements.setList.querySelectorAll("[data-set-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedSetId = button.dataset.setId;
      resetReviseState();
      renderSetList();
      renderStudyArea();
    });
  });
}

function getSelectedSet() {
  return CATALOG_SETS.find((set) => set.id === selectedSetId) || null;
}

function renderStudyArea() {
  const set = getSelectedSet();

  if (!set) {
    elements.studyIntro.classList.remove("hidden");
    elements.studyShell.classList.add("hidden");
    return;
  }

  elements.studyIntro.classList.add("hidden");
  elements.studyShell.classList.remove("hidden");
  elements.studyTitle.textContent = set.title;

  if (set.immersive) {
    renderImmersiveStudy(set);
    return;
  }

  const card = set.cards[reviseState.index];
  if (!card) {
    renderSummary(set);
    return;
  }

  elements.studyProgress.textContent = `${reviseState.index + 1} / ${set.cards.length}`;
  elements.studyStep.textContent = reviseState.stage === "flashcard" ? "Flashcard" : "Quiz";

  if (reviseState.stage === "flashcard") renderFlashcardCard(card, set);
  if (reviseState.stage === "quiz") renderQuizCard(card, set);
}

function renderImmersiveStudy(set) {
  ensureImmersiveQueue(set);

  if (!reviseState.queue.length) {
    renderImmersiveSummary(set);
    return;
  }

  const currentIndex = reviseState.queue[0];
  const card = set.cards[currentIndex];
  const currentLevel = reviseState.mastery[currentIndex] || 0;
  elements.studyStep.textContent = reviseState.reveal ? "Lock It In" : "Remember";
  elements.studyProgress.textContent = `${reviseState.masteredCount} / ${set.cards.length} mastered`;

  elements.studyContent.innerHTML = `
    <section class="study-card study-card-immersive">
      <div>
        <p class="eyebrow">${reviseState.reveal ? "Remember this exactly" : "Try to recall"}</p>
        <div class="card-face">${escapeHtml(reviseState.reveal ? card.definition : (card.prompt || card.term))}</div>
      </div>
      ${renderCardSupport(card, set, reviseState.reveal ? "reveal" : "focus")}
      <div class="memory-status">
        <span class="memory-chip">Mastery ${currentLevel}/2</span>
        <p>${reviseState.reveal ? "Mark whether this answer is locked in or needs to come back again." : "Say the answer out loud first, then reveal it."}</p>
      </div>
      <div class="card-actions">
        ${reviseState.reveal
          ? '<button id="lockInButton">Locked in</button><button id="againButton" class="secondary">Again later</button>'
          : '<button id="revealButton">Reveal answer</button><button id="peekDiagramButton" class="secondary">Show support</button>'}
      </div>
    </section>
  `;

  if (!reviseState.reveal) {
    document.getElementById("revealButton").addEventListener("click", () => {
      reviseState.reveal = true;
      renderStudyArea();
    });
    document.getElementById("peekDiagramButton").addEventListener("click", () => {
      reviseState.reveal = true;
      renderStudyArea();
    });
    return;
  }

  document.getElementById("lockInButton").addEventListener("click", () => {
    handleImmersiveRating(set, currentIndex, true);
  });

  document.getElementById("againButton").addEventListener("click", () => {
    handleImmersiveRating(set, currentIndex, false);
  });
}

function renderFlashcardCard(card, set) {
  const label = reviseState.flipped ? "Definition" : "Term";
  const text = reviseState.flipped ? card.definition : card.term;

  elements.studyContent.innerHTML = `
    <section class="study-card ${set.immersive ? "study-card-immersive" : ""}">
      <div>
        <p class="eyebrow">${label}</p>
        <button id="flashcardFace" class="card-face card-button" type="button">${escapeHtml(text)}</button>
      </div>
      ${renderCardSupport(card, set, "flashcard")}
      <p class="subtle-copy">Click the card to flip it, then continue to answer the quiz for this card.</p>
      <div class="card-actions">
        <button id="prevButton" class="secondary" ${reviseState.index === 0 ? "disabled" : ""}>Previous</button>
        <button id="nextButton" class="secondary">Continue to quiz</button>
      </div>
    </section>
  `;

  document.getElementById("flashcardFace").addEventListener("click", () => {
    reviseState.flipped = !reviseState.flipped;
    renderStudyArea();
  });

  document.getElementById("prevButton").addEventListener("click", () => {
    if (reviseState.index === 0) return;
    reviseState.index -= 1;
    reviseState.flipped = false;
    renderStudyArea();
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    reviseState.stage = "quiz";
    renderStudyArea();
  });
}

function renderQuizCard(card, set) {
  elements.studyContent.innerHTML = `
    <section class="study-card ${set.immersive ? "study-card-immersive" : ""}">
      <div>
        <p class="eyebrow">Type the answer</p>
        <div class="card-face">${escapeHtml(card.prompt || card.term)}</div>
      </div>
      ${renderCardSupport(card, set, "quiz")}
      <label>
        Your answer
        <input id="answerInput" type="text" placeholder="Type here">
      </label>
      <p class="${reviseState.answerFeedbackClass}">${escapeHtml(reviseState.answerFeedback)}</p>
      <div class="card-actions">
        <button id="checkButton">Check</button>
        <button id="skipButton" class="secondary">Skip</button>
      </div>
    </section>
  `;

  const input = document.getElementById("answerInput");
  input.focus();

  document.getElementById("checkButton").addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) return;

    const correct = isCloseEnough(value, card.definition);

    reviseState.answerFeedbackClass = correct ? "feedback-good" : "feedback-bad";
    reviseState.answerFeedback = correct ? "Correct." : `Correct answer: ${card.definition}`;
    if (correct) {
      reviseState.score += 1;
      burstConfetti();
    }
    goToNextCard();
  });

  document.getElementById("skipButton").addEventListener("click", () => {
    reviseState.answerFeedbackClass = "feedback-bad";
    reviseState.answerFeedback = `Correct answer: ${card.definition}`;
    goToNextCard();
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("checkButton").click();
    }
  });
}

function goToNextCard() {
  const feedback = reviseState.answerFeedback;
  const feedbackClass = reviseState.answerFeedbackClass;

  elements.studyContent.innerHTML = `
    <section class="study-card">
      <div>
        <p class="eyebrow">Result</p>
        <div class="card-face">${escapeHtml(feedback)}</div>
      </div>
      <p class="${feedbackClass}">${escapeHtml(feedback)}</p>
    </section>
  `;

  window.setTimeout(() => {
    reviseState.index += 1;
    reviseState.stage = "flashcard";
    reviseState.flipped = false;
    reviseState.answerFeedback = "";
    reviseState.answerFeedbackClass = "";
    renderStudyArea();
  }, 700);
}

function renderSummary(set) {
  const percent = set.cards.length ? Math.round((reviseState.score / set.cards.length) * 100) : 0;
  recordSession(set.id, percent);
  elements.studyStep.textContent = "Finished";
  elements.studyProgress.textContent = `${set.cards.length} / ${set.cards.length}`;
  elements.studyContent.innerHTML = `
    <div class="summary-grid">
      <div class="summary-card">
        <strong>${reviseState.score}</strong>
        <p>Correct</p>
      </div>
      <div class="summary-card">
        <strong>${set.cards.length}</strong>
        <p>Total</p>
      </div>
      <div class="summary-card">
        <strong>${percent}%</strong>
        <p>Score</p>
      </div>
    </div>
    <div class="summary-actions">
      <button id="restartButton">Restart</button>
    </div>
  `;

  document.getElementById("restartButton").addEventListener("click", () => {
    resetReviseState();
    renderStudyArea();
  });
}

function renderImmersiveSummary(set) {
  const percent = 100;
  recordSession(set.id, percent);
  elements.studyStep.textContent = "Mastered";
  elements.studyProgress.textContent = `${set.cards.length} / ${set.cards.length} mastered`;
  elements.studyContent.innerHTML = `
    <div class="summary-grid">
      <div class="summary-card">
        <strong>${set.cards.length}</strong>
        <p>Concepts locked in</p>
      </div>
      <div class="summary-card">
        <strong>2x</strong>
        <p>Needed twice correct to clear</p>
      </div>
      <div class="summary-card">
        <strong>100%</strong>
        <p>Memory cycle complete</p>
      </div>
    </div>
    <div class="summary-actions">
      <button id="restartButton">Restart Memory Set</button>
    </div>
  `;

  document.getElementById("restartButton").addEventListener("click", () => {
    resetReviseState();
    renderStudyArea();
  });
}

function renderCardSupport(card, set, stage) {
  const parts = [];

  if (set.immersive && card.memoryCue) {
    parts.push(`
      <div class="memory-strip">
        <span class="memory-chip">Memorise</span>
        <p>${escapeHtml(card.memoryCue)}</p>
      </div>
    `);
  }

  if (card.visual === "compaction-particles") {
    parts.push(`
      <div class="diagram-panel">
        <div class="diagram-block">
          <p class="diagram-title">Before compaction</p>
          <div class="particle-grid loose">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
        </div>
        <div class="diagram-arrow">-></div>
        <div class="diagram-block">
          <p class="diagram-title">After compaction</p>
          <div class="particle-grid tight">
            <span></span><span></span><span></span>
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `);
  }

  if (stage === "quiz" && set.immersive) {
    parts.push(`<p class="subtle-copy strong-copy">Use full rock-cycle vocabulary. Short, accurate answers score best.</p>`);
  }

  if (stage === "focus" && set.immersive) {
    parts.push(`<p class="subtle-copy strong-copy">Do not read the answer yet. Try to say it from memory first.</p>`);
  }

  return parts.join("");
}

function recordSession(setId, percent) {
  if (reviseState.sessionRecorded) return;
  reviseState.sessionRecorded = true;
  state.sessionsCompleted += 1;
  state.setStats[setId].completed += 1;
  state.setStats[setId].best = Math.max(state.setStats[setId].best, percent);
  saveState();
  renderStats();
  renderSetList();
}

function resetReviseState() {
  reviseState.index = 0;
  reviseState.stage = "flashcard";
  reviseState.flipped = false;
  reviseState.reveal = false;
  reviseState.score = 0;
  reviseState.answerFeedback = "";
  reviseState.answerFeedbackClass = "";
  reviseState.sessionRecorded = false;
  reviseState.queue = [];
  reviseState.mastery = {};
  reviseState.masteredCount = 0;
}

function ensureImmersiveQueue(set) {
  if (reviseState.queue.length || reviseState.masteredCount) return;
  reviseState.queue = set.cards.map((_, index) => index);
  reviseState.mastery = Object.fromEntries(set.cards.map((_, index) => [index, 0]));
}

function handleImmersiveRating(set, currentIndex, lockedIn) {
  const nextQueue = [...reviseState.queue];
  nextQueue.shift();

  if (lockedIn) {
    const nextLevel = Math.min((reviseState.mastery[currentIndex] || 0) + 1, 2);
    reviseState.mastery[currentIndex] = nextLevel;
    if (nextLevel >= 2) {
      reviseState.masteredCount += 1;
      burstConfetti();
    } else {
      nextQueue.push(currentIndex);
    }
  } else {
    reviseState.mastery[currentIndex] = 0;
    nextQueue.push(currentIndex);
  }

  reviseState.queue = nextQueue;
  reviseState.reveal = false;
  renderStudyArea();
}

function setupConfetti() {
  confettiState.canvas = elements.confettiCanvas;
  confettiState.ctx = confettiState.canvas.getContext("2d");
  resizeConfettiCanvas();
  window.addEventListener("resize", resizeConfettiCanvas);
}

function resizeConfettiCanvas() {
  const ratio = window.devicePixelRatio || 1;
  confettiState.canvas.width = window.innerWidth * ratio;
  confettiState.canvas.height = window.innerHeight * ratio;
  confettiState.canvas.style.width = `${window.innerWidth}px`;
  confettiState.canvas.style.height = `${window.innerHeight}px`;
  confettiState.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function burstConfetti() {
  const colors = ["#ffffff", "#8df0b3", "#7dd3fc", "#f9a8d4", "#fef08a"];
  const originX = window.innerWidth / 2;
  const originY = window.innerHeight * 0.28;

  for (let i = 0; i < 90; i += 1) {
    confettiState.pieces.push({
      x: originX,
      y: originY,
      vx: (Math.random() - 0.5) * 10,
      vy: Math.random() * -8 - 4,
      size: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 90,
      rotation: Math.random() * Math.PI,
      spin: (Math.random() - 0.5) * 0.3
    });
  }

  if (!confettiState.running) {
    confettiState.running = true;
    requestAnimationFrame(stepConfetti);
  }
}

function stepConfetti() {
  const ctx = confettiState.ctx;
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  confettiState.pieces = confettiState.pieces.filter((piece) => piece.life > 0);

  confettiState.pieces.forEach((piece) => {
    piece.x += piece.vx;
    piece.y += piece.vy;
    piece.vy += 0.18;
    piece.life -= 1;
    piece.rotation += piece.spin;

    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rotation);
    ctx.globalAlpha = Math.max(piece.life / 90, 0);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.7);
    ctx.restore();
  });

  if (confettiState.pieces.length) {
    requestAnimationFrame(stepConfetti);
  } else {
    confettiState.running = false;
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
}

function normalize(value) {
  return value.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, " ").trim();
}

function isCloseEnough(input, expected) {
  const normalizedInput = normalize(input);
  const normalizedExpected = normalize(expected);

  if (!normalizedInput || !normalizedExpected) return false;

  const distance = levenshteinDistance(normalizedInput, normalizedExpected);
  const maxLength = Math.max(normalizedInput.length, normalizedExpected.length);
  const similarity = 1 - distance / maxLength;
  return similarity >= 0.6;
}

function levenshteinDistance(a, b) {
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i += 1) dp[i][0] = i;
  for (let j = 0; j < cols; j += 1) dp[0][j] = j;

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[a.length][b.length];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
