const targetDate = new Date("2026-05-18T17:00:00-03:00");

function startCountdown(elementId){

  const element = document.getElementById(elementId);

  function updateCountdown(){

    const now = new Date();

    const diff = targetDate - now;

    if(diff <= 0){

      element.innerHTML = `
        <div class="final-message">
          🇧🇷 CONVOCADOS? 🇧🇷
        </div>
      `;

      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (diff / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
      (diff / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
      (diff / 1000) % 60
    );

    element.innerHTML = `
      <div class="time-box">
        <span class="number">${days}</span>
        <span class="label">Dias</span>
      </div>

      <div class="time-box">
        <span class="number">${hours}</span>
        <span class="label">Horas</span>
      </div>

      <div class="time-box">
        <span class="number">${minutes}</span>
        <span class="label">Min</span>
      </div>

      <div class="time-box">
        <span class="number">${seconds}</span>
        <span class="label">Seg</span>
      </div>
    `;
  }

  updateCountdown();

  setInterval(updateCountdown,1000);
}

startCountdown("countdown-neymar");
startCountdown("countdown-endrick");