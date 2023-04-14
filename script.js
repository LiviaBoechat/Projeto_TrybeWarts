// 03. Acrescente um formulário de login no header.

// capturar inputs e botão
const inputEmail = document.querySelector('.inputEmail');
const inputSenha = document.querySelector('.inputSenha');
const botaoEntrar = document.querySelector('.botaoEntrar');

const validaForm = () => {
  botaoEntrar.addEventListener('click', () => {
    if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
};
validaForm();

// 18. Habilite o botão "Enviar" após a validação do checkbox.

// captura input e botão
const inputAgreement = document.getElementById('agreement');
const botaoEnviar = document.getElementById('submit-btn');
botaoEnviar.disabled = true;

const validaCheckbox = () => {
  inputAgreement.addEventListener('click', () => {
    if (inputAgreement.value !== null && inputAgreement.value !== '') {
      botaoEnviar.disabled = false;
    } else {
      botaoEnviar.disabled = true;
    }
  });
};
validaCheckbox();
