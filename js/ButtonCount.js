class ButtonCount extends HTMLElement {
    constructor() {
        super();
        
        let count = 0;

        function clicked(button) {
            count++;
            button.textContent = `Times Clicked: ${count}`;
        }

        //shadow DOM
        this._shadowRoot = this.attachShadow({mode: 'open'});
        
        const button = document.createElement('button');
        button.textContent = `Times Clicked: ${count}`;

        this._shadowRoot.appendChild(button);
        this._shadowRoot.querySelector('button').addEventListener('click', () => clicked(button));
    }

}

customElements.define('button-count', ButtonCount);