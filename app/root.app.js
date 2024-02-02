const preventRefeshWhenEnter = () => {
    const user_message_box = document.querySelector("form#user-message-box")
    user_message_box.addEventListener('submit', (e) => {
        e.preventDefault()
        readUserMessage()
    }, false)
}

const removeAdviceInChatBox = () => {
    const chatBox = document.querySelector(".chat-bpx")
    const advice = document.querySelectorAll(".advice")[0]
    if(chatBox.classList.length != 0){
        advice.remove()
    }
}

preventRefeshWhenEnter()