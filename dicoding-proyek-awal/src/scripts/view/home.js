import Utils from '../utils.js';
import { notesData } from "../data/remote/notes-api.js";

const home = async () => {
    const data = await notesData();
    const noteListContainerElement = document.querySelector('#noteListContainer');
    const noteListElement = noteListContainerElement.querySelector('note-list');

    const displayNotes = (notes) => {
        const noteItemElements = notes.map((note) => {
            const noteItemElement = document.createElement('note-item');
            noteItemElement.note = note;

            return noteItemElement;
        });

        Utils.emptyElement(noteListElement);
        noteListElement.append(...noteItemElements);
    };

    document.addEventListener('DOMContentLoaded', () => {
        const noteForm = document.querySelector('form');

        const inputNoteTitle = noteForm.elements.title;
        const inputNoteBody = noteForm.elements.body;

        noteForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const note = {
                title: inputNoteTitle.value,
                body: inputNoteBody.value,
            };

            switch (event.submitter.textContent) {
                case 'Submit':
                    createNote(note);
                    break;
            }
        })
    })

    displayNotes(data);
};

export default home;