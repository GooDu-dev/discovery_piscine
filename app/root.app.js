const preventRefeshWhenEnter = () => {
    const user_message_box = document.querySelector("form#user-message-box")
    user_message_box.addEventListener('submit', (e) => {
        e.preventDefault()
        readUserMessage()
    }, false)
}

const removeAdviceInChatBox = () => {
    const chatBox = document.querySelector("#chat-box")
    const advice = document.querySelectorAll(".advice")[0]
    if(chatBox.classList.length != 0 && advice !== undefined){
        advice.remove()
    }
}


const createCookie = (name, value) => {
    const exp = new Date()
    document.cookie = `${name}=${value}`
    document.cookie = `${DefaultData.COOKIE_TIME}=${exp.toUTCString()}`
}

const getCookie = (ckey) => {
    const cookies = document.cookie.split(';')
    for(const cookie of cookies){
        const [name, value] = cookie.split(';')
        if(name.trim() = ckey){
            return value;
        }
    }
    return ""
}

const getCookieValue = (ckey) => {
    const cookies = document.cookie.split(';')
    for(const cookie of cookies){
        const [name, value] = cookie.split('=')
        if(name.trim() === ckey){
            return value
        }
    }
    return ''
}

window.onload = () => {
    preventRefeshWhenEnter(),
    initChatToHistory(),
    initHistoryTime()
}