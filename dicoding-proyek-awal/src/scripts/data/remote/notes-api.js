const endpoint = 'https://notes-api.dicoding.dev/v2';

const notesData = async () => {
    try {
        const response = await fetch(`${endpoint}/notes`, {
            method: 'GET',
        });
        const notes = await response.json();
        if (response.ok) {
            console.log(notes.data);
            return notes.data;
        }
    } catch (error) {
        alert(error.message);
    }
};

export default notesData;