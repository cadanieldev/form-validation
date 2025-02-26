export default class ValidarPHONE {
  constructor(element) {
    this.element = element;
  }

  static regexpCelular =
  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;

  static validar(phone) {
    return this.regexpCelular.test(phone);
  }

  adicionarEvento() {
    this.element.addEventListener('change', () => {
      const celular = this.element.value;
      if (ValidarPHONE.validar(celular)) {
        this.element.classList.add('valido')
        this.element.classList.remove('erro')
      } else {
        this.element.classList.remove('valido')
        this.element.classList.add('erro')
      }
    })
  }

  init() {
    this.adicionarEvento();
    return this;
  }
}
