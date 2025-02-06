class NoteItem extends HTMLElement {
    _shadowRoot = null;
    _style = null;
    _note = {
        id: null,
        title: null,
        body: null,
        createdAt: null,
        archived: null,
    };

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._style = document.createElement('style');
    }

    set note(value) {
        this._note = value;

        this.render();
    }

    get note() {
        return this._note;
    }

    _emptyContent() {
        this._shadowRoot.innerHTML = ``;
    }

    _updateStyle() {
        this._style.textContent = `
            .note-card {
                padding: 2% 8%;
                height: 250px;
                background: rgba(22,22,22,0.5);
                border-radius: 15px;
                border-top: 2px solid rgb(50, 118, 196);
                transition: 0.2s ease-in-out;
            }

            .note-card:hover {
                transform: scale(1.05);
                box-shadow: -1px 12px 49px -11px rgba(0,0,0,0.75);
            }

            h2 {
                margin-bottom: 0;
                font-size: 1.4em;
                font-weight: 800;
            }

            span {
                margin: 0;
                font-size: .7em;
                font-style: italic;
                letter-spacing: 1px;
            }

            p {
                font-size: .8em;
            }
        `;
    }

    render() {
        this._emptyContent();
        this._updateStyle();

        this._shadowRoot.appendChild(this._style);
        this._shadowRoot.innerHTML += `
            <div class="note-card">
                <h2>${this._note.title}</h2>
                <span>${new Date(this._note.createdAt).toLocaleDateString()}</span>
                <p>${this._note.body}</p>
            </div>
        `;
    }
}

customElements.define('note-item', NoteItem);