import ValidarCPF from "./modules/validar-cpf.js";
import ValidarEMAIL from "./modules/validar-email.js";
import ValidarPHONE from "./modules/validar-phone.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCPF(cpf).init();

const email = document.querySelector('#email');
const validarEmail = new ValidarEMAIL(email).init();

const phone = document.querySelector('#phone');
const validarPhone = new ValidarPHONE(phone).init();