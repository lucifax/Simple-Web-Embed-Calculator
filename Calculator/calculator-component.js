class CalculatorComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="styles.css">
    <div class="calculator">
      <input type="text" class="display" readonly>
      <div class="buttons">
        <button data-type="clear">C</button>
        <button data-type="plus-minus">+/-</button>
        <button data-type="percentage">%</button>
        <button data-type="operator">/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button data-type="operator">*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button data-type="operator">-</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button data-type="operator">+</button>
        <button data-type="zero">0</button>
        <button>.</button>
        <button class="equals">=</button>
      </div>
    </div>
  `;

        this.display = this.shadowRoot.querySelector('.display');
        this.attachEventListeners();
    }

    attachEventListeners() {
        this.shadowRoot.querySelectorAll('button:not(.equals)').forEach(button => {
            button.addEventListener('click', () => {
                this.display.value += button.textContent;
            });
        });

        this.shadowRoot.querySelector('.equals').addEventListener('click', () => {
            try {
                this.display.value = eval(this.display.value);
            } catch (error) {
                this.display.value = 'Error';
            }
        });

        this.shadowRoot.querySelector('button[data-type="clear"]').addEventListener('click', () => {
            this.display.value = '';
        });

        this.shadowRoot.querySelector('button[data-type="plus-minus"]').addEventListener('click', () => {
            const currentValue = parseFloat(this.display.value);
            if (!isNaN(currentValue)) {
                this.display.value = (-currentValue).toString();
            }
        });

        this.shadowRoot.querySelector('button[data-type="percentage"]').addEventListener('click', () => {
            const currentValue = parseFloat(this.display.value);
            if (!isNaN(currentValue)) {
                this.display.value = (currentValue / 100).toString();
            }
        });
    }

}

customElements.define('calculator-component', CalculatorComponent);
