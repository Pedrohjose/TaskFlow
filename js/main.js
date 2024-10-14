// Registro

const form = document.querySelector("form"); // Criando uma variável constante para armazenar o valor de form
const h1 = document.querySelector("h1"); // Criando uma variável constante para armazenar o valor de h1

// Utilizando uma condição para chegar se form e h1 existem na página atual
if (form && h1.textContent === "Sign up") {
  form.addEventListener("submit", (f) => {
    if (!matchPasswords()) f.preventDefault();
  });
}

const password = document.getElementById("password"); // Criando uma variável constante para armazenar o valor de password
const showPasswordButton = document.querySelector(".show-password"); // Criando uma variável constante para armazenar o valor de showPassword

// Criando uma função para mostrar a senha digitada
function showPassword() {
  const showPasswordImg = showPasswordButton.querySelector("img");

  if (password.type === "password") {
    password.type = "text";
    showPasswordImg.src = "../../img/register/eye-slashed.svg";
  } else {
    password.type = "password";
    showPasswordImg.src = "../../img/register/eye.svg";
  }
}

// Utilizando uma condição para chegar se showPassword existe na página atual
if (showPasswordButton) {
  showPasswordButton.addEventListener("click", () => {
    showPassword();
  });
}

const passwordInputs = document.querySelectorAll(`input[type="password"]`); // Criando uma variável constante para armazenar os valores de passwordInputs

// Criando uma função para comparar as senhas digitadas
function matchPasswords() {
  const confirmPassword = document.getElementById("confirm-password");

  if (password.value && confirmPassword.value) {
    return password.value === confirmPassword.value;
  }
  return true;
}

// Criando uma função para validar as senhas
function passwordsValidation() {
  const validationError = document.querySelector(".validation-error");

  setTimeout(() => {
    passwordInputs.forEach((pI) => {
      if (!matchPasswords()) {
        pI.style.outline = "2px solid rgb(255, 0, 0)";
        validationError.style.display = "block";
        validationError.ariaHidden = "false";
      } else {
        pI.style.outline = "none";
        validationError.style.display = "none";
        validationError.ariaHidden = "true";
      }
    });
  }, 1000);
}

// Utilizando uma condição para chegar se passwordInputs e h1 existem na página atual
if (passwordInputs && h1.textContent === "Sign up") {
  passwordInputs.forEach((pI) => {
    pI.addEventListener("input", passwordsValidation);
    pI.addEventListener("blur", passwordsValidation);
  });
}

const slideButton = document.querySelectorAll(".slide-button"); // Criando uma variável constante para armazenar os valores de slideButton

// Criando uma função para passar os slides
function switchSlide(currentSlide) {
  const slidesArray = [
    document.querySelector(".slides-section img"),
    document.querySelector(".slides-section h2"),
    document.querySelector(".slides-section p"),
  ];

  slideButton.forEach((sB, i) => {
    sB.classList.remove("current");
    if (i === currentSlide - 1) {
      sB.classList.add("current");
    }
  });

  slidesArray.forEach((sA) => {
    sA.style.opacity = "0";
  });

  setTimeout(() => {
    switch (currentSlide) {
      case "1":
        slidesArray[0].src = "../../img/register/showcase.svg";
        slidesArray[1].textContent =
          "Mantenha suas atividades sempre em ordem!";
        slidesArray[1].ariaLabel = "Mantenha suas atividades sempre em ordem!";
        slidesArray[2].textContent =
          "A TaskFlow permite que você crie, organize e priorize suas tarefas de forma intuitiva, garantindo que nada fique fora do lugar. Acompanhe deadlines e mantenha o foco no que é mais importante.";
        slidesArray[2].ariaLabel =
          "A TaskFlow permite que você crie, organize e priorize suas tarefas de forma intuitiva, garantindo que nada fique fora do lugar. Acompanhe deadlines e mantenha o foco no que é mais importante.";
        break;

      case "2":
        slidesArray[0].src = "../../img/register/showcase2.svg";
        slidesArray[1].textContent = "Crie e gerencie usuários com facilidade!";
        slidesArray[1].ariaLabel = "Crie e gerencie usuários com facilidade!";
        slidesArray[2].textContent =
          "A TaskFlow oferece uma plataforma prática para gerenciar perfis de usuários. Crie novos usuários, atribua permissões e controle o acesso às funcionalidades da plataforma, garantindo uma experiência personalizada e segura.";
        slidesArray[2].ariaLabel =
          "A TaskFlow oferece uma plataforma prática para gerenciar perfis de usuários. Crie novos usuários, atribua permissões e controle o acesso às funcionalidades da plataforma, garantindo uma experiência personalizada e segura.";
        break;

      case "3":
        slidesArray[0].src = "../../img/register/showcase3.svg";
        slidesArray[1].textContent = "Desenvolvedores têm espaço para inovar!";
        slidesArray[1].ariaLabel = "Desenvolvedores têm espaço para inovar!";
        slidesArray[2].textContent =
          "A TaskFlow fornece ferramentas para desenvolvedores criarem e integrarem soluções personalizadas. Automatize processos, desenvolva funcionalidades específicas e torne o gerenciamento de tarefas ainda mais eficiente para sua equipe técnica.";
        slidesArray[2].ariaLabel =
          "A TaskFlow fornece ferramentas para desenvolvedores criarem e integrarem soluções personalizadas. Automatize processos, desenvolva funcionalidades específicas e torne o gerenciamento de tarefas ainda mais eficiente para sua equipe técnica.";
        break;

      default:
        break;
    }

    slidesArray.forEach((sA) => {
      sA.style.opacity = "1";
    });
  }, 300);
}

// Utilizando uma condição para checar se slideButton existe na página atual
if (slideButton) {
  let currentSlide;

  slideButton.forEach((sB) => {
    sB.addEventListener("click", (e) => {
      if (!e.currentTarget.classList.contains("current")) {
        currentSlide = e.currentTarget.dataset.slide;
        switchSlide(currentSlide);
      }
    });
  });
}
