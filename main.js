const texts = document.querySelector(".texts");

const start = document.getElementById("start");
const status = document.getElementById("status");

start.onclick= ()=>{

status.innerText = "Activo";
status.style.color = "green";
start.disabled = true;

window.SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
texts.appendChild(p);
const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

p.innerText = text;
if (e.results[0].isFinal) {
    if (text.includes("Hola")) {
        p.classList.add("replay");
        p.innerText = "Hola, tú";
        texts.appendChild(p);
    }
    if (text.includes("Cómo estás")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Bien y tú?";
    texts.appendChild(p);
    }
    if(text.includes("Dame la hora")){
        const d = new Date();
        p.classList.add("replay");
        p.innerText = d.getHours() + ":" + d.getMinutes();
        texts.appendChild(p);
    }
    if(text.includes("Adiós")){
        const d = new Date();
        p.classList.add("replay");
        p.innerText = "Adiós";
        texts.appendChild(p);
    }
    if(text.includes("Apagar")|| text.includes("apagar")){
        p.classList.add("replay");
        p.innerText = "Apagando...";
        texts.appendChild(p);
        document.getElementById("main").classList.add("off");
    }

    if(text.includes("Prender") || text.includes("prender")){
        p.classList.add("replay");
        p.innerText = "Prendiendo...";
        texts.appendChild(p);
        document.getElementById("main").classList.remove("off");
    }

    if (text.includes("Abre YouTube")) {
    p = document.createElement("p");
    p.classList.add("replay");
    p.innerText = "Abriendo YouTube";
    texts.appendChild(p);
    console.log("Abriendo YouTube");
    window.open("https://www.youtube.com/");
    }
    p = document.createElement("p");
}
});

recognition.addEventListener("end", () => {
recognition.start();
});

recognition.start();







}