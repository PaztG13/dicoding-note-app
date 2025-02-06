import Utils from '../utils.js';
import notesData from "../data/remote/notes-api.js";

const home = () => {
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

    const showNoteList = () => {
        Array.from(noteListContainerElement.children).forEach((element) => {
            Utils.hideElement(element);
        });
        Utils.showElement(noteListElement);
    };

    displayNotes(notesData());
};

export default home;