const targetDate = new Date("2026-05-18T17:00:00-03:00");

// ==========================
// ALTERE AQUI DEPOIS
// ==========================

// "pending"
// "yes"
// "no"

const neymarStatus = "yes";
const endrickStatus = "yes";

// ==========================

function setPlayerStatus(elementId, status){

  const element = document.getElementById(elementId);

  if(status === "yes"){

    element.className = "status status-yes";
    element.innerHTML = "✅ CONVOCADO";

  }else if(status === "no"){

    element.className = "status status-no";
    element.innerHTML = "❌ NÃO CONVOCADO";

  }else{

    element.className = "status status-pending";
    element.innerHTML = "⏳ AGUARDANDO";

  }

}

function updateMainCounter(){

  const now = new Date();

  const diff = targetDate - now;

  const mainCounter = document.getElementById("main-counter");

  if(diff <= 0){

    mainCounter.innerHTML = `
      🇧🇷 A LISTA SAIU! 🇧🇷
    `;

    return;
  }

  const totalHours = Math.floor(
    diff / (1000 * 60 * 60)
  );

  mainCounter.innerHTML = `
    Faltam ${totalHours} horas
  `;

}

function startCountdown(elementId){

  const element = document.getElementById(elementId);

  function updateCountdown(){

    const now = new Date();

    const diff = targetDate - now;

    if(diff <= 0){

      element.innerHTML = `
        <div class="status status-pending">
          🇧🇷 A LISTA SAIU!
        </div>
      `;

      return;
    }

    const days = Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );

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

updateMainCounter();

setInterval(updateMainCounter,1000);

startCountdown("countdown-neymar");
startCountdown("countdown-endrick");

setPlayerStatus("status-neymar", neymarStatus);
setPlayerStatus("status-endrick", endrickStatus);
