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

    _updateStyle() {
        this._style.textContent = `
            .note-card {
                width: 25%;
                padding: 2%;
                background: #333;
                display: grid;
                gap: 5px;
                border-radius: 15px;
            }

            h2 {
                font-size: 1.2em;
            }

            span {
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
                <h2>${note.title}</h2>
                <span>${new Date(note.createdAt).toLocaleDateString()}</span>
                <p>${note.body}</p>
            </div>
        `;
    }
}

customElements.define('note-item', NoteItem);