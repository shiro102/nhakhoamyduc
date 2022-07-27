import React, { useState, useEffect } from 'react';
import './App.css';
import { API } from 'aws-amplify';
import { Authenticator  } from '@aws-amplify/ui-react';
import { listTodos } from './graphql/queries';
import { createTodo as createNoteMutation, deleteTodo as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

function App() {
    const [notes, setNotes] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchNotes();
    }, []);

    async function fetchNotes() {
        const apiData = await API.graphql({ query: listTodos });
        setNotes(apiData.data.listTodos.items);
    }

    async function createNote() {
        if (!formData.name || !formData.description) return;
        await API.graphql({ query: createNoteMutation, variables: { input: formData } });
        setNotes([ ...notes, formData ]);
        setFormData(initialFormState);
    }

    async function deleteNote({ id }) {
        const newNotesArray = notes.filter(note => note.id !== id);
        setNotes(newNotesArray);
        await API.graphql({ query: deleteNoteMutation, variables: { input: { id } }});
    }

    return (
        <Authenticator>
            {({ signOut, user }) => (
                <div className="App">
                <h1>My Notes App</h1>
                <input
                    onChange={e => setFormData({ ...formData, 'name': e.target.value})}
                    placeholder="Note name"
                    value={formData.name}
                />
                <input
                    onChange={e => setFormData({ ...formData, 'description': e.target.value})}
                    placeholder="Note description"
                    value={formData.description}
                />
                <button onClick={createNote}>Create Note</button>
                    <button onClick={signOut}>Sign out</button>
                <div style={{marginBottom: 30}}>
                    {
                        notes.map(note => (
                            <div key={note.id || note.name}>
                                <h2>{note.name}</h2>
                                <p>{note.description}</p>
                                <button onClick={() => deleteNote(note)}>Delete note</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            )}
        </Authenticator>
    );
}

export default App;