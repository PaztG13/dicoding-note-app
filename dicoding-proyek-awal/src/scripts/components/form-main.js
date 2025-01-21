class FormMain extends HTMLElement {
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
                position: sticky;
                top: 5%;
            }

            form {
                padding: 10% 10%;
                display: grid;
                align-items: center;
                box-shadow: 1px 34px 95px -25px rgba(255,255,255,0.09) inset;
                gap: 8px;
                background: rgba(22,22,22,0.5);
                border-top: 2px solid rgb(50, 118, 196);
                border-radius: 15px;
            }

            form input {
                width: 100%;
                padding: 5% 0;
                background: rgba(0, 0, 0, 0);
                color: white;
                border: 0;
                border-bottom: 2px solid rgb(50, 118, 196);
                font-size: 1em;
            }

            .form-title, .form-body {
                width: 100%;
                margin: 0;
            }

            .form-body {
                margin-bottom: 25px;
            }

            button {
                margin: 0 auto;
                width: 70%;
                padding: 5%;
                border: 0;
                border-radius: 15px;
                background: rgba(0, 0, 0, 0.2);
                color: white;
                border: 1px solid rgb(50, 118, 196);
                transition: 0.1s ease-in-out;
            }

            button:hover {
                transform: scale(1.1);
                box-shadow: 0px 5px 46px -25px rgba(50,118,196,0.8) inset;
            }
        `;
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
            <form action="#">
                <div class="form-title">
                    <input id="title" name="title" type="text" placeholder="Title" required />
                </div>
                <div class="form-body">
                    <input id="body" name="body" type="textarea" placeholder="What's on your mind?" required />
                </div>
                <button type="submit">Submit</button>
            </form>
        `;
    }
}

customElements.define('form-main', FormMain);