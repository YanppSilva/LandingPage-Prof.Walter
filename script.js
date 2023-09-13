// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
// scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });
  // sticky navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link (scroll)

  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

// scroll reveal
ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 1800,
  delay: 190
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'})
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form, .fidelity-container', {origin: 'bottom'})
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'})
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'})
ScrollReveal().reveal('.fidelity-content', {origin: 'right'})


//typed js

const typed = new Typed('.multiple-text', {
  strings: ['Criador de Conteúdo', 'Consultor Cripto'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: 1000
});

//show topics
document.addEventListener("DOMContentLoaded", function () {
  const botoesLeiaMais = document.querySelectorAll(".leia-mais");

  botoesLeiaMais.forEach(function (botao) {
      botao.addEventListener("click", function (e) {
          e.preventDefault();
          const cursoID = botao.getAttribute("data-course");
          const topicosCurso = document.getElementById(cursoID);

          if (topicosCurso) {
              if (topicosCurso.style.maxHeight === "0px") {
                  topicosCurso.style.maxHeight = "350px"; // Altura máxima para exibir todos os tópicos
                  botao.textContent = "Fechar";
              } else {
                  topicosCurso.style.maxHeight = "0px"; // Oculta os tópicos do curso
                  botao.textContent = "Leia Mais";
              }
          }
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form");

  // Função para validar o nome
  function validateName() {
    const nomeInput = document.querySelector('input[name="Nome"]');
    const spanNome = document.querySelector('.span-required.nome');

    if (nomeInput.value.length < 3) {
      spanNome.style.display = "block";
      return false;
    } else {
      spanNome.style.display = "none";
      return true;
    }
  }

  // Função para validar o email
  function validateEmail() {
    const emailInput = document.querySelector('input[name="Email"]');
    const spanEmail = document.querySelector('.span-required.email');
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (!emailPattern.test(emailInput.value)) {
      spanEmail.style.display = "block";
      return false;
    } else {
      spanEmail.style.display = "none";
      return true;
    }
  }

  // Função para validar o número
  function validateNumber() {
    const numeroInput = document.querySelector('input[name="Número"]');
    const spanNumero = document.querySelector('.span-required.numero');
    const numeroPattern = /^[0-9]{11}$/;

    if (!numeroPattern.test(numeroInput.value)) {
      spanNumero.style.display = "block";
      return false;
    } else {
      spanNumero.style.display = "none";
      return true;
    }
  }

  // Função para validar o assunto
  function validateAssunto() {
    const assuntoInput = document.querySelector('input[name="Assunto"]');
    const spanAssunto = document.querySelector('.span-required.assunto');

    if (assuntoInput.value.length < 2) {
      spanAssunto.style.display = "block";
      return false;
    } else {
      spanAssunto.style.display = "none";
      return true;
    }
  }

  // Função para validar o textarea
  function validateTextarea() {
    const textareaInput = document.querySelector('textarea[name="message"]');
    const spanTextarea = document.querySelector('.span-required.textarea');

    if (textareaInput.value.length < 2) {
      spanTextarea.style.display = "block";
      return false;
    } else {
      spanTextarea.style.display = "none";
      return true;
    }
  }

  // Adicionar eventos oninput para realizar a validação
  form.addEventListener("input", function() {
    validateName();
    validateEmail();
    validateNumber();
    validateAssunto();
    validateTextarea();
  });

  // Evento de envio do formulário
  form.addEventListener("submit", function(event) {
    if (
      !validateName() ||
      !validateEmail() ||
      !validateNumber() ||
      !validateAssunto() ||
      !validateTextarea()
    ) {
      event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
  });
});

