// =====================================
// CHAVE PIX
// =====================================

const chavePix = "62996228866";

// =====================================
// COPIAR PIX
// =====================================

function copiarPix() {

    navigator.clipboard.writeText(chavePix)
        .then(() => {

            const botao = document.querySelector(".pix button");

            botao.innerHTML = "✅ Chave copiada!";

            setTimeout(() => {

                botao.innerHTML = "Copiar chave Pix";

            }, 2500);

        })
        .catch(() => {

            alert("Copie manualmente a chave Pix:\n\n" + chavePix);

        });

}

// =====================================
// ANIMAÇÃO AO ROLAR
// =====================================

const elementos = document.querySelectorAll(
".card, section h2, .hero img, .hero div"
);

const observador = new IntersectionObserver((entradas)=>{

    entradas.forEach((entrada)=>{

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

        }

    });

});

elementos.forEach((el)=>{

    el.classList.add("esconder");

    observador.observe(el);

});

// =====================================
// MENU
// =====================================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#ffffffee";
header.style.backdropFilter="blur(10px)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}else{

header.style.background="#ffffff";
header.style.boxShadow="0 2px 15px rgba(0,0,0,.08)";

}

});

// =====================================
// BARRA DE PROGRESSO
// =====================================

window.addEventListener("load",()=>{

const barra=document.getElementById("progress-bar");

if(barra){

barra.style.width="8%";

}

});

// =====================================
// MENSAGEM

console.log("Obrigado por visitar nossa página ❤️");
