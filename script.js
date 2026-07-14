// ==========================================================================
// Ananya — personal site
// Shared behavior: mobile nav, footer year, hero tile-convergence animation
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  /* ---- mobile nav toggle ---- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  /* ---- footer year ---- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  /* ---- hero signature: wordle-style tile convergence ----
     A tiny nod to the Shannon-entropy Wordle solver: a row of tiles
     cycles through a couple of "guesses" and settles on a final word.
     Purely decorative; respects prefers-reduced-motion. */
  const row = document.getElementById('tileRow');
  if (!row) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const tiles = Array.from(row.querySelectorAll('.tile'));

  const frames = [
    { word: 'SLATE', states: ['miss', 'near', 'miss', 'hit', 'miss'] },
    { word: 'ROUND', states: ['miss', 'hit', 'miss', 'near', 'miss'] },
    { word: 'BUILD', states: ['hit', 'hit', 'hit', 'hit', 'hit'] },
  ];

  if (prefersReduced) {
    // Jump straight to the final, resolved word — no motion.
    const last = frames[frames.length - 1];
    tiles.forEach((tile, i) => {
      tile.textContent = last.word[i];
      tile.classList.add(last.states[i]);
    });
    return;
  }

  let frameIndex = 0;

  function playFrame(index) {
    const frame = frames[index];
    tiles.forEach((tile, i) => {
      tile.classList.remove('hit', 'near', 'miss', 'flip');
      // stagger the flip per tile
      setTimeout(() => {
        tile.classList.add('flip');
        // swap the letter/state mid-flip so it reads as a "reveal"
        setTimeout(() => {
          tile.textContent = frame.word[i];
          tile.classList.add(frame.states[i]);
        }, 150);
      }, i * 90);
    });
  }

  playFrame(frameIndex);

  const interval = setInterval(() => {
    frameIndex += 1;
    if (frameIndex >= frames.length) {
      clearInterval(interval);
      return;
    }
    playFrame(frameIndex);
  }, 1000);
});
