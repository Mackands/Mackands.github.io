/* ==========================================================
   Background music + UI sound effects (opt-in, off by default)

   BGM source, pick one:
     { type: "youtube", id: "VIDEO_ID", start: 0, volume: 25 }   // volume 0–100
     { type: "file", src: "assets/audio/bgm.mp3", volume: 25 }     // local MP3, loops
   ========================================================== */

const BGM = { type: "youtube", id: "XK-wW3rvK0I", start: 0, volume: 25 };
const SFX_ON = true; // soft click / whoosh sounds while music is on

(() => {
  const btn = document.getElementById("soundBtn");
  const label = btn.querySelector(".sound-label");
  const store = {
    get() { try { return localStorage.getItem("bgm"); } catch { return null; } },
    set(v) { try { localStorage.setItem("bgm", v); } catch {} },
  };

  let on = false;          // user wants sound
  let ducked = false;      // paused because a project video is open
  let engine = null;       // { play, pause, setVolume }
  let fadeTimer = null;

  /* ---------------- Engines ---------------- */
  function fileEngine() {
    const a = new Audio(BGM.src);
    a.loop = true; a.volume = 0; a.preload = "auto";
    return Promise.resolve({
      play: () => a.play().catch(() => {}),
      pause: () => a.pause(),
      setVolume: (v) => { a.volume = Math.max(0, Math.min(1, v / 100)); },
    });
  }

  function youtubeEngine() {
    return new Promise((resolve) => {
      const create = () => {
        const p = new YT.Player("bgmPlayer", {
          host: "https://www.youtube-nocookie.com",
          videoId: BGM.id,
          width: 1, height: 1,
          playerVars: {
            autoplay: 0, controls: 0, disablekb: 1, fs: 0, rel: 0, playsinline: 1,
            loop: 1, playlist: BGM.id, start: BGM.start || 0, iv_load_policy: 3,
          },
          events: {
            onReady: () => {
              p.setVolume(0);
              resolve({
                play: () => p.playVideo(),
                pause: () => p.pauseVideo(),
                setVolume: (v) => p.setVolume(Math.round(v)),
              });
            },
            // restart from `start` when the track ends (loop)
            onStateChange: (e) => { if (e.data === YT.PlayerState.ENDED) { p.seekTo(BGM.start || 0); p.playVideo(); } },
          },
        });
      };
      if (window.YT && window.YT.Player) return create();
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => { if (prev) prev(); create(); };
      const s = document.createElement("script");
      s.src = "https://www.youtube.com/iframe_api";
      document.head.appendChild(s);
    });
  }

  let enginePromise = null;
  function getEngine() {
    if (!enginePromise) enginePromise = (BGM.type === "file" ? fileEngine() : youtubeEngine()).then((e) => (engine = e));
    return enginePromise;
  }

  /* ---------------- Fading ---------------- */
  let vol = 0;
  function fadeTo(target, ms, done) {
    clearInterval(fadeTimer);
    const steps = 20, from = vol, delta = (target - from) / steps;
    let i = 0;
    fadeTimer = setInterval(() => {
      i++; vol = from + delta * i;
      if (engine) engine.setVolume(vol);
      if (i >= steps) { clearInterval(fadeTimer); vol = target; if (done) done(); }
    }, ms / steps);
  }

  async function start() {
    await getEngine();
    if (!on || ducked) return;
    engine.play();
    fadeTo(BGM.volume, 1200);
  }
  function stop() {
    if (!engine) return;
    fadeTo(0, 500, () => engine.pause());
  }

  /* ---------------- UI ---------------- */
  function render() {
    btn.classList.toggle("on", on);
    btn.setAttribute("aria-pressed", on);
    btn.setAttribute("aria-label", on ? "Turn music off" : "Turn music on");
    btn.title = on ? "Music: on" : "Music: off";
    label.textContent = on ? "BGM ON" : "BGM OFF";
  }

  function toggle() {
    on = !on;
    store.set(on ? "on" : "off");
    render();
    if (on) { sfx("click"); start(); } else stop();
  }
  btn.addEventListener("click", (e) => { e.stopPropagation(); toggle(); });

  // Pause while a project video plays, resume after
  document.addEventListener("modal:open", () => { ducked = true; if (on) stop(); });
  document.addEventListener("modal:close", () => { ducked = false; if (on) start(); });

  // Pause when the tab is hidden
  document.addEventListener("visibilitychange", () => {
    if (!on || ducked) return;
    if (document.hidden) stop(); else start();
  });

  // Returning visitor who chose "on": browsers need a click first, so start on the first interaction
  if (store.get() === "on") {
    on = true; render();
    const kick = (e) => {
      if (e.target.closest && e.target.closest("#soundBtn")) return; // the toggle handles itself
      start();
      window.removeEventListener("pointerdown", kick);
      window.removeEventListener("keydown", kick);
    };
    window.addEventListener("pointerdown", kick);
    window.addEventListener("keydown", kick);
  }

  /* ---------------- SFX (synthesised, no files) ---------------- */
  let ctx = null;
  function sfx(kind) {
    if (!SFX_ON || !on) return;
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      if (kind === "whoosh") {
        o.type = "sine";
        o.frequency.setValueAtTime(320, t); o.frequency.exponentialRampToValueAtTime(900, t + 0.18);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.06, t + 0.05); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
        o.start(t); o.stop(t + 0.26);
      } else {
        o.type = "triangle";
        o.frequency.setValueAtTime(1400, t); o.frequency.exponentialRampToValueAtTime(700, t + 0.06);
        g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.05, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
        o.start(t); o.stop(t + 0.1);
      }
    } catch {}
  }
  document.addEventListener("click", (e) => {
    if (e.target.closest("#soundBtn")) return;
    if (e.target.closest(".card, .play, [data-feat]")) sfx("whoosh");
    else if (e.target.closest("button, .btn, .nav-links a, .filter")) sfx("click");
  });

  render();
})();
