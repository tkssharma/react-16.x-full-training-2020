/** Replace these with your own API keys, username and roomId from Chatkit  */
import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import SendMessageForm from './sendMessageForm';
import MessageList from './MessageList';

const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/14f15b5f-b858-4be6-a5a2-04fb404e7ab0/token"
const instanceLocator = "v1:us1:14f15b5f-b858-4be6-a5a2-04fb404e7ab0"
const roomId = '19420415'

class MessageApp extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
    } 
    
    componentDidMount() {
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: 'tks',
            tokenProvider: new Chatkit.TokenProvider({
                url: testToken
            })
        })
        
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser
            this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onNewMessage: message => {

                    this.setState({
                        messages: [...this.state.messages, message]
                    })
                }
            }
        })
      })
    }
    
    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId: roomId
        })
    }
    
    render() {
        return (
            <div className="app">
              <p className="title">My awesome chat app</p>
              <MessageList 
                  roomId={this.state.roomId}
                  messages={this.state.messages} />
              <SendMessageForm
                  sendMessage={this.sendMessage} />
            </div>
        );
    }
}


export default MessageApp;
























