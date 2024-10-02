import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const HomeScreen = ({ navigation }: any) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Fetch messages from the backend
        const fetchMessages = async () => {
            try {
                const response = await axios.get('http://your-backend-url/api/messages');
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };
        fetchMessages();
    }, []);

    const renderMessage = ({ item }: any) => (
        <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.content}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Messages</Text>
            <FlatList
                data={messages}
                renderItem={renderMessage}
                keyExtractor={(item) => item.id.toString()}
            />
            <Button title="Logout" onPress={() => navigation.navigate('Login')} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        marginBottom: 12,
        textAlign: 'center',
    },
    messageContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    messageText: {
        fontSize: 16,
    },
});

export default HomeScreen;
