# Encryted Chat Application

## Overview

This project is a cutting-edge, cross-platform secure communications app designed for desktop, Android, and iOS platforms. The app supports end-to-end encrypted messaging, voice, and video communication, with advanced security features such as message expiration, secure file sharing, and multi-factor authentication (MFA). 

### Project Ethos:  
*Blistering past horizons.*

## Project Objectives

1. **Proof of Concept (POC):**  
   Develop a basic secure communications app that supports encrypted messaging.
   
2. **End-to-End Encryption:**  
   Ensure all communications are encrypted using a secure protocol like Matrix or Signal.
   
3. **Core Functionality:**  
   Demonstrate secure, encrypted messaging between users to ensure data privacy and protection.

---

## Step-by-Step Project Development

### Step 1: Project Setup

- We initialized the project by setting up a multi-platform development environment using **React Native** for mobile (iOS/Android) and **Electron** for desktop.
- For package management, we utilized **npm** and managed the cross-platform functionalities using **React Native Web**.
- Firebase was integrated for user authentication and secure file storage.

### Step 2: Encryption Implementation

- **Encryption Library Setup:**  
  We selected **Signal Protocol** to implement end-to-end encryption (E2EE). This ensures that all messages, voice, and video calls are encrypted on both sending and receiving ends.
  
- **Encryption Workflow:**  
  - All messages are encrypted on the user's device before being sent to the server.
  - The server acts as a relay but cannot access the content of the message.
  - Messages are decrypted only on the receiving device.

### Step 3: Core Messaging Feature Development

- **User Authentication:**  
  We used Firebase Authentication to provide secure user registration and login. This allows seamless cross-platform integration.
  
- **Encrypted Messaging:**  
  Implemented the basic messaging functionality where users can send and receive encrypted text messages. Each message is encrypted using a unique session key for enhanced security.

### Step 4: Documenting Software Architecture

- **Architecture Breakdown:**  
  A detailed Software Architecture Plan was created, outlining:
  - The client-server communication model.
  - Encryption and decryption flow.
  - Data flow diagrams detailing message routing, encryption/decryption points, and secure storage mechanisms for message history.
  
- **Platform-Specific Considerations:**  
  - For Android/iOS, we ensured secure storage of encryption keys using native secure storage options like Android Keystore and iOS Keychain.
  - For desktop, we implemented **Electron's Secure Storage** to safeguard user credentials and encryption keys.

### Step 5: Adding Advanced Security Features

- **Message Expiration:**  
  Implemented a self-destruct feature where messages expire and are deleted after a set time. This adds an extra layer of privacy.
  
- **Secure File Sharing:**  
  Added functionality to securely share files, encrypting files before upload using AES encryption. Files are only decrypted on the recipient’s device.
  
- **Multi-Factor Authentication (MFA):**  
  Integrated MFA with Firebase's multi-factor authentication service, ensuring an additional layer of security for user accounts.

### Step 6: UI/UX Design

- **User-Centric Design:**  
  Designed a minimalist and intuitive UI using Figma, ensuring that the app is easy to navigate without compromising on security. We provided wireframes in the project documentation.
  
- **Secure by Design:**  
  Security options such as "Message Expiry" and "MFA" are integrated into the user interface, making it easy for users to configure these features without technical knowledge.

### Step 7: Scalability and Cross-Platform Testing

- **Cross-Platform Testing:**  
  We tested the app on Android, iOS, and desktop environments to ensure seamless functionality and performance across platforms.
  
- **Cloud Services:**  
  We utilized Firebase for real-time messaging and AWS for secure storage and handling of large media files.

---

## Deliverables

1. **Proof of Concept (POC):**  
   The basic secure communications app supports encrypted messaging and runs on Android, iOS, and desktop platforms.

2. **Software Architecture Documentation:**  
   A detailed document explaining the software architecture, encryption protocols, data flow diagrams, and security features.

3. **UI/UX Design:**  
   Wireframes of the user interface highlighting security features such as MFA, message expiration, and secure file sharing.

---

## Future Enhancements

- **Voice and Video Calls Encryption:**  
  Extend encryption to voice and video calls using the WebRTC protocol.
  
- **Advanced File Sharing Features:**  
  Secure large file transfers using encrypted cloud storage and direct peer-to-peer encryption.

- **Message Metadata Encryption:**  
  Implement metadata obfuscation to further enhance privacy.

---

## Getting Started

To get started with the project, follow these steps:

1. **Clone the Repository:**

```bash
git clone https://github.com/pratik-shaw/Chat-Application.git
