const readUserMessage = () => {
    const user_input = document.querySelector("#user-message")
    const text = user_input.value
    user_input.value = ""
    addMessageToChatBox(text, DefaultData.USER.CLIENT)
    sendAnswerMessage(text)
}

const addMessageToChatBox = (text, sender) => {
    const chat_box = document.querySelector("#chat-box")
    const chat = createChatDOM(text)
    const user = createSenderDOM(sender)
    const element = document.createElement('div')
    element.appendChild(user)
    element.appendChild(chat)
    chat_box.appendChild(element)
    removeAdviceInChatBox()
    if(sender == DefaultData.USER.CLIENT){
        addChatToHistory(text)
    }
}

const createChatDOM = (text) => {
    const output = document.createElement('p')
    output.innerText = text
    return output
}

const createSenderDOM = (who) => {
    const output = document.createElement('h3')
    output.innerText = "/> " + who
    return output
}

const getChatResponse = async (text) => {
    try {
        let response = await fetch(DefaultData.ANSWER_PATH);
        
        if (!response.ok) {
            throw new Error('Cannot fetch JSON');
        }

        let data = await response.json();
        let output = data[text.toLowerCase()];
        if(output === undefined){
            output = "Sorry we don't know what that's mean"
        }

        return output;
    } catch (err) {
        alert("Error: " + err);
    }
}

const sendAnswerMessage = (text) => {
    getChatResponse(text)
    .then( answer => {
        addMessageToChatBox(answer, DefaultData.USER.SERVER)
    })
    .catch( err => {
        alert("Error: " + err)
    })
}