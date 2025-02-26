export default class ValidarCPF {
  constructor(element) {
    this.element = element;
  }

  static regexpEmail = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

  static validar(email) {
    return this.regexpEmail.test(email);
  }

  adicionarEvento() {
    this.element.addEventListener("change", () => {
      const email = this.element.value;
      if (ValidarCPF.validar(email)) {
        this.element.classList.add('valido');
        this.element.classList.remove('invalido');
        if (this.erroEmail) {
          this.erroEmail.innerText = '';
          this.erroEmail.classList.remove('ativo')
        }
      } else {
        this.element.classList.remove('valido');
        this.element.classList.add('invalido');
        if (this.erroEmail) {
          this.erroEmail.innerText = 'Email Inválido!';
          this.erroEmail.classList.add('ativo')
        }
      }
    
    });
  }

  adicionarErro() {
    this.erroEmail = document.createElement('p');
    this.erroEmail.classList.add('erro-email');
    this.element.parentElement.insertBefore(this.erroEmail, this.element.nextElementSibling);
  }

  init() {
    this.adicionarEvento();
    this.adicionarErro();
    return this;
  }
}
