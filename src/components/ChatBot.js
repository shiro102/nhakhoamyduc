import React from "react";
import {Amplify} from "aws-amplify";
import {AmplifyChatbot} from "@aws-amplify/ui-react/legacy";

Amplify.configure({
    Auth: {
        identityPoolId: 'ap-southeast-1:10555350-ce3f-4f6b-b278-6aee825bd8fd',
        region: 'ap-southeast-1'
    },
    Interactions: {
        bots: {
            OrderFlowers_testing: {
                name: 'OrderFlowers_testing',
                alias: 'Test_One',
                region: 'ap-southeast-1'
            }
        }
    }
});

const ChatBot = () => {

    return (
        <AmplifyChatbot
            botName="OrderFlowers_testing"
            botTitle="My ChatBot"
            welcomeMessage="Hello, how can I help you?"
        />
    )
};

export default ChatBot;