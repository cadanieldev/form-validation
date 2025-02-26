export default class ValidarCPF {
  constructor(element) {
    this.element = element;
  }
  limpar(cpf) {
    return cpf.replace(/\D/g, "");
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }
  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  }

  //Adicionar Evento
  adicionarEvento() {
    this.element.addEventListener("change", () => {
      this.validarNaMudança(this.element);
    });
  }

  validarNaMudança(cpfElement) {
    if (this.validar(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value);
      cpfElement.classList.add("valido");
      cpfElement.classList.remove("erro");
      cpfElement.nextElementSibling.classList.remove("ativar");
    } else {
      cpfElement.classList.remove("valido");
      cpfElement.classList.add("erro");
      cpfElement.nextElementSibling.classList.add("ativar");
    }
  }

  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return matchCpf && matchCpf[0] === cpf;
  }

  adicionarErroSpan() {
    const erroSpan = document.createElement("p");
    erroSpan.classList.add("erro-text");
    erroSpan.innerText = "CPF Inválido";
    this.element.parentElement.insertBefore(
      erroSpan,
      this.element.nextElementSibling
    );
  }

  init() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}
