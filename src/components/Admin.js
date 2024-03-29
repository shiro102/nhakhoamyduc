import awsExports from '../aws-exports';
import awsmobile from '../aws-exports';
import React, { useState, useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { API } from 'aws-amplify';
import {Link} from "react-router-dom";

import {
    Authenticator,
    Button,
    CheckboxField,
    Heading,
    Image, PhoneNumberField, Radio, SelectField,
    Text,
    useAuthenticator,
    useTheme,
    View
} from '@aws-amplify/ui-react';
import { listTodos } from '../graphql/queries';
import { createTodo as createNoteMutation, deleteTodo as deleteNoteMutation } from '../graphql/mutations';
import useScript from "./useScript";
import useLink from "./useLink";

Amplify.configure(awsExports);
const initialFormState = { name: '', description: '' }

const components = {
    Header() {
        const { tokens } = useTheme();

        return (
            <div>
                <Link to={"/"}>Go back to main page</Link>
            <View textAlign="center" padding={tokens.space.large}>

                <Image style={{"pointerEvents": "none"}}
                       alt="Amplify logo"
                       src= "https://nhakhoamyducweb13bb192891a2b4afc8959ad872273d8785758-staging.s3.amazonaws.com/private/myduclogo.jpg"
                />
            </View>
                </div>
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
        FormFields() {
            const {validationErrors} = useAuthenticator();
            return (
                <>
                    {/* Re-use default `Authenticator.SignUp.FormFields` */}
                    <Authenticator.SignUp.FormFields/>
                    <SelectField options={["Male", "Female"]} placeholder={"Choose your gender"} label={"Gender"} name={"gender"}></SelectField>
                    <PhoneNumberField defaultCountryCode={"+84"} label={"Phone Number"} name={"phone_number"}/>

                    {/* Append & require Terms & Conditions field to sign up  */}
                    <CheckboxField
                        errorMessage={validationErrors.acknowledgement }
                        hasError={!!validationErrors.acknowledgement}
                        name="acknowledgement"
                        value="yes"
                        label="I agree with the Terms & Conditions"
                    />
                </>
            );
        }
    },
    ResetPassword: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    level={3}
                >
                    Reset Password
                </Heading>
            );
        },
    },
};


const formFields = {
    signIn: {
        password: {
            labelHidden: false,
            isRequired: true,
            placeholder: 'Enter your password',
        },
    },
    signUp: {
        "custom:username":{
            label: "Username",
            labelHidden: false,
            placeholder: 'Enter your username',
            isRequired: true,
        },
        username: {
            label: 'Email',
            labelHidden: false,
            placeholder: 'Enter your email',
            isRequired: true,
        },
        password: {
            labelHidden: false,
            placeholder: 'Enter your password',
            isRequired: true,
        },
        email: {
            hidden: true,
        },
        confirm_password: {
            labelHidden: false,
            label: 'Confirm password',
        },
        given_name: {
            label: 'First name',
            labelHidden: false,
            placeholder: 'Enter your first name',
        },
        family_name: {
            label: 'Last name',
            labelHidden: false,
            placeholder: 'Enter your last name',
        },
        birthdate: {
            label: 'Date of birth',
            type: "datetime",
            labelHidden: false,
            placeholder: 'Enter your birthdate',
        },
    },
    forceNewPassword: {
        password: {
            labelHidden: false,
            placeholder: 'Enter your password:',
        },
    },
    resetPassword: {
        username: {
            labelHidden: false,
            placeholder: 'Enter your username',
        },
    },
};

function Admin() {
    const [notes, setNotes] = useState([]);
    const [formData, setFormData] = useState(initialFormState);

    useEffect(() => {
        fetchNotes();
    }, []);

    // Function for retrieving data
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

    // Set script

    useLink("css/App.css", "admin")


    return (
        <Authenticator  components= {components} formFields={formFields}
                        services={{
                            async validateCustomSignUp(formData) {
                                if (!formData.acknowledgement) {
                                    return {
                                        acknowledgement: 'You must agree to the Terms & Conditions',
                                    };
                                }
                            },
                        }}
        >
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

export default Admin;
