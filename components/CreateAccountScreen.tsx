// src/components/CreateAccountScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createUser } from '../api/api'; // Import createUser instead of loginUser

const CreateAccountScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleCreateAccount = async () => {
        // Handle the account creation logic
        try {
            const response = await createUser(email, password); // Use createUser for account creation
            console.log('Account created successfully:', response);
            // Navigate to the next screen or show a success message
        } catch (error) {
            console.error('Error creating account:', error);
            // Show an error message
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Account</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Create Account" onPress={handleCreateAccount} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
    },
});

export default CreateAccountScreen;
