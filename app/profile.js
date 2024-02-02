const createProfile = () => {
    const container = document.createElement('div')
    container.className = 'profile-container'

    const profile1 = document.createElement("div")
    profile.className = 'profile'

    const profile_text1 = document.createElement("div")
    profile_text.className = 'profile-text'

    const name1 = document.createElement("h2")
    name1.innerText = "Pawarit"

    const intra1 = document.createElement("p")
    intra1.innerText = "pakinsri"
    
    const desc1 = document.createElement("p")
    desc1.innerText = 'Computer Science, Science'

    const profile2 = document.createElement("div")
    profile.className = 'profile'

    const profile_text2 = document.createElement("div")
    profile_text.className = 'profile-text'

    const name2 = document.createElement("h2")
    name2.innerText = "Thanchanok"

    const intra2 = document.createElement("p")
    intra2.innerText = "tnuengch"
    
    const desc2 = document.createElement("p")
    desc2.innerText = 'Robotics and AI, Engineering'

    profile_text1.appendChild(name1)
    profile_text1.appendChild(intra1)
    profile_text1.appendChild(desc1)

    profile_text2.appendChild(name2)
    profile_text2.appendChild(intra2)
    profile_text2.appendChild(desc2)

    profile1.appendChild(profile_text1)
    profile2.appendChild(profile_text2)

    container.appendChild(profile1)
    container.appendChild(profile2)

    return container
}