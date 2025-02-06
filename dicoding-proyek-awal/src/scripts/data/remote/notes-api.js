const endpoint = 'https://notes-api.dicoding.dev/v2';

export const notesData = async () => {
    try {
        const response = await fetch(`${endpoint}/notes`, {
            method: 'GET',
        });
        const notes = await response.json();
        if (response.ok) {
            return notes.data;
        }
    } catch (error) {
        alert(error.message);
    }
};

export const createNote = async (note) => {
    try {
        const response = await fetch(`${endpoint}/notes`, {
            method: 'POST',
            body: JSON.stringify({
                title: note.title,
                body: note.body
            }),
        });
        const responseJson = await response.json();
        if (response.ok) {
            alert(responseJson.message);
        }
    } catch (error) {
        alert(error.message);
    }
}