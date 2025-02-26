import ValidarCPF from "./modules/validar-cpf.js";
import ValidarEMAIL from "./modules/validar-email.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCPF(cpf).init();

const email = document.querySelector('#email');
const validarEmail = new ValidarEMAIL(email).init();