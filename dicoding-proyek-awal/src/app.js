import './scripts/components/index.js';

import home from './scripts/view/home.js';

document.addEventListener('DOMContentLoaded', () => {
    home();
});

const form = document.querySelector('form');
const titleInput = form.elements.title;
const bodyInput = form.elements.body;

form.addEventListener('submit', (event) => event.preventDefault());

const customValidationHandler = (event) => {
    event.target.setCustomValidity('');

    if (event.target.validity.valueMissing) {
        event.target.setCustomValidity('Wajib diisi.');
        return;
    }
};

titleInput.addEventListener('change', customValidationHandler);
titleInput.addEventListener('invalid', customValidationHandler);

bodyInput.addEventListener('change', customValidationHandler);
bodyInput.addEventListener('invalid', customValidationHandler);

titleInput.addEventListener('blur', (event) => {
    //Validate the field
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage;

    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidationEl = connectedValidationId ?  document.getElementById(connectedValidationId) : null;

    if (connectedValidationEl && errorMessage && !isValid) {
        connectedValidationEl.innerText = errorMessage;
    } else {
        connectedValidationEl.innerText = '';
    }
});

bodyInput.addEventListener('blur', (event) => {
    //Validate the field
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage;

    const connectedValidationId = event.target.getAttribute('aria-describedby');
    const connectedValidationEl = connectedValidationId ?  document.getElementById(connectedValidationId) : null;

    if (connectedValidationEl && errorMessage && !isValid) {
        connectedValidationEl.innerText = errorMessage;
    } else {
        connectedValidationEl.innerText = '';
    }
});