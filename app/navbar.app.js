const loadChat = () => {
    const history = getCookie('chat')
    const output = ""
    if(history.length !== 0){
        console.log("no history")
    }
    return output
}

const initHistoryTime = () => {
    const latest = getCookieValue(DefaultData.COOKIE_TIME);
    const current = new Date();
    const [howLong, meter] = howLongPast(latest, current.toUTCString())
    setHistoryTime(howLong, meter)
}

const setHistoryTime = (timeDate, meter) => {
    let time = null
    const options_items = document.querySelector('#options-items')
    time = document.querySelector("#time")
    if(options_items.childElementCount !== 0 && (time == null || time == undefined)){
        time = createHistoryTime()
    }
    time.innerText = `a ${timeDate} ${meter} ago . . . `
}

const createHistoryTime = () => {
    const header = document.querySelector('#header')
    const time = document.createElement('p')
    time.className = 'desc'
    time.id = 'time'
    header.appendChild(time)
    return time
}


const createHistoryChatDOM = (text) => {
    const chat = document.createElement('div')
    chat.className = 'item'
    const li = document.createElement('li')
    li.innerText = text
    const dropdown = createDropDown('icon', text)
    chat.appendChild(li)
    chat.appendChild(dropdown)
    return chat
}

const initChatToHistory = () => {
    const old = getCookieValue(DefaultData.COOKIE_NAME).split(',')
    console.log(old);
    const options_items = document.querySelector("#options-items")
    for(const o of old){
        const his = createHistoryChatDOM(o)
        options_items.appendChild(his)
    }
}

const addChatToHistory = (text) => {
    const options_items = document.querySelector('#options-items')
    if(options_items.childElementCount >= 4){
        options_items.removeChild(options_items.children[0])  
    }
    const child = createHistoryChatDOM(text)
    options_items.appendChild(child)
    const now = new Date();
    createCookie(DefaultData.COOKIE_NAME, options_items.innerText.split('\n'))
    createCookie(DefaultData.COOKIE_TIME, now.toUTCString())
}

const createDropDown = (className, msg) => {
    const div = document.createElement('div')
    div.className = className
    
    const dropdown_icon = document.createElement('img')
    dropdown_icon.src = "./asset/public/more.png"
    dropdown_icon.className = 'dropdown-icon'
    
    const dropdown = document.createElement('div')
    dropdown.className = 'dropdown'

    const dropdown_items = document.createElement('ul')
    dropdown_items.className = 'dropdown-items'

    const item1 = document.createElement('div')
    item1.className = 'item'
    item1.addEventListener('click', () => {
        addMessageToChatBox(msg, DefaultData.USER.CLIENT)
        sendAnswerMessage(msg)
    })

    const item_icon1 = document.createElement('img')
    item_icon1.className = 'item-icon'
    item_icon1.src = "./asset/public/share.png"

    const text1 = document.createElement('li')
    text1.className = 'font-size-xs'
    text1.innerText = "Go to . . ."

    const item2 = document.createElement('div')
    item2.className = 'item'

    const item_icon2 = document.createElement('img')
    item_icon2.className = 'item-icon'
    item_icon2.src = "./asset/public/bin.png"

    const text2 = document.createElement('li')
    text2.className = 'font-size-xs'
    text2.innerText = "Delete History"

    item1.appendChild(item_icon1)
    item1.appendChild(text1)

    item2.appendChild(item_icon2)
    item2.appendChild(text2)

    dropdown_items.appendChild(item1)
    dropdown_items.appendChild(item2)

    dropdown.appendChild(dropdown_items)
    
    div.appendChild(dropdown_icon)
    div.appendChild(dropdown)

    return div
}

const howLongPast = (time1, time2) => {
    const latest = new Date(time1)
    const current = new Date(time2)
    console.log(latest, time1)
    console.log(current, time2)
    let diff = current.getTime() - latest.getTime()
    diff /= 1000
    min = Math.round(diff / 60)
    hour = Math.round(min / 24)
    if(hour <= 0){
        return [min, 'min(s)']
    }
    return [hour, 'hour(s)']
}