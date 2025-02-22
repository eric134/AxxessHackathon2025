import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons";

const INTRO_MESSAGE = "Hello! I'm Healthcare Harry 🩺\n\nI'm here to provide friendly, clear health advice in bullet points.\n\nYou can ask me about:\n• Symptoms\n• Medications\n• Healthy habits\n• Medical conditions\n• General health questions\n\nI'll do my best to help!";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/intro')
      .then(response => response.json())
      .then(data => {
        setMessages([{ sender: 'bot', text: data.response }]);
      })
      .catch(error => {
        console.error('Error fetching intro:', error);
        setMessages([{ sender: 'bot', text: INTRO_MESSAGE }]);
      });
  }, []);

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');

    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput })
      });
      const data = await response.json();
      const botMessage = { sender: 'bot', text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.message,
              msg.sender === 'user' ? styles.userMessage : styles.botMessage
            ]}
          >
            <Text style={msg.sender === 'user' ? styles.userText : styles.botText}>
              {msg.text.split('\n').map((line, i) => (
                <Text key={i}>{line}{'\n'}</Text>
              ))}
            </Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={sendMessage}
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Ionicons name="send" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  message: {
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    maxWidth: '70%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: 'crimson',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'pink',
  },
  userText: {
    color: 'white',
  },
  botText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatBot;
