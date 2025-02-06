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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: note.title,
                body: note.body
            }),
        });

        if (!response.ok) {
            alert("Error creating note.");
        }

        const responseJson = await response.json();

        alert(responseJson.message);
        window.location.reload();

    } catch (error) {
        alert(error.message);
    }
};

export const deleteNote = async (id) => {
    try {
        const response = await fetch(`${endpoint}/notes/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (!response.ok) {
            alert("Error deleting note.");
        }

        const responseJson = await response.json();

        alert(responseJson.message);
        window.location.reload();

    } catch (error) {
        alert(error.message);
    }
};