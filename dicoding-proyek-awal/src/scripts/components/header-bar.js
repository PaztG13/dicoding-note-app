class HeaderBar extends HTMLElement {
    _shadowRoot = null;
    _style = null;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    connectedCallback() {
        this.render();
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = ``;
    }

    _updateStyle() {
        this._style.textContent = `
            :host {
                display: block;
            }

            div {
                margin: 5% 0 5% 0;
                text-align: center;
            }

            h2 {
                margin: 0;
                font-size: 4em;
            }
            
            p {
                margin: 0;
                font-weight: 300;
                letter-spacing: 3px;
                font-style: italic;
            }
        `;
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
            <div>
                <h2 class="h2-title">Welcome to notes!</h2>
                <p class="short-desc">Your own self-reminder</p>
            </div>
        `;
    }
}

customElements.define('header-bar', HeaderBar);