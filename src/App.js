import awsExports from './aws-exports';
import awsmobile from './aws-exports';
import React, { useState, useEffect } from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import { API } from 'aws-amplify';
import {Authenticator, Button, Heading, Image, Text, useAuthenticator, useTheme, View} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { listTodos } from './graphql/queries';
import { createTodo as createNoteMutation, deleteTodo as deleteNoteMutation } from './graphql/mutations';

Amplify.configure(awsExports);
const initialFormState = { name: '', description: '' }

const components = {
    Header() {
        const { tokens } = useTheme();

        return (

            <View textAlign="center" padding={tokens.space.large}>
                <Image style={{"pointer-events": "none"}}
                       alt="Amplify logo"
                       src= "https://nhakhoamyducweb13bb192891a2b4afc8959ad872273d8785758-staging.s3.amazonaws.com/private/myduclogo.jpg"
                />
            </View>
        );
    },

    Footer() {
        const { tokens } = useTheme();

        return (
            <View textAlign="center" padding={tokens.space.large}>
                <Text color={tokens.colors.neutral[80]}>
                    &copy; All Rights Reserved
                </Text>
            </View>
        );
    },

    SignIn: {
        Header() {
            const { tokens } = useTheme();

            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Sign in to your account
                </Heading>
            );
        },
        Footer() {
            const { toResetPassword } = useAuthenticator();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toResetPassword}
                        size="small"
                        variation="link"
                    >
                        Reset Password
                    </Button>
                </View>
            );
        },
    },

    SignUp: {
        Header() {
            const { tokens } = useTheme();

            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Create a new account
                </Heading>
            );
        },
        Footer() {
            const { toSignIn } = useAuthenticator();

            return (
                <View textAlign="center">
                    <Button
                        fontWeight="normal"
                        onClick={toSignIn}
                        size="small"
                        variation="link"
                    >
                        Back to Sign In
                    </Button>
                </View>
            );
        },
    },
    ConfirmSignUp: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    SetupTOTP: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    ConfirmSignIn: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
    ResetPassword: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
    },
    ConfirmResetPassword: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
};

const formFields = {
    signIn: {
        username: {
            labelHidden: false,
            placeholder: 'Enter your email',
        },
    },
    signUp: {
        password: {
            labelHidden: false,
            label: 'Password:',
            placeholder: 'Enter your Password:',
            isRequired: false,
            order: 2,
        },
        confirm_password: {
            labelHidden: false,
            label: 'Confirm Password:',
            order: 1,
        },
    },
    forceNewPassword: {
        password: {
            labelHidden: false,
            placeholder: 'Enter your Password:',
        },
    },
    resetPassword: {
        username: {
            labelHidden: false,
            placeholder: 'Enter your email:',
        },
    },
    confirmResetPassword: {
        confirmation_code: {
            labelHidden: false,
            placeholder: 'Enter your Confirmation Code:',
            label: 'New Label',
            isRequired: false,
        },
        confirm_password: {
            labelHidden: false,
            placeholder: 'Enter your Password Please:',
        },
    },
    setupTOTP: {
        QR: {
            totpIssuer: 'test issuer',
            totpUsername: 'amplify_qr_test_user',
        },
        confirmation_code: {
            labelHidden: false,
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
    confirmSignIn: {
        confirmation_code: {
            labelHidden: false,
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
};

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
        <Authenticator components={components}>
            {({ signOut, user }) => (
                <div className="App">
                    <h1>{user.username}'s Notes App</h1>
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
