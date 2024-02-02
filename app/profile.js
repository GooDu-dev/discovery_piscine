const createProfile = () => {

    const profile1 = document.createElement("div")
    profile1.className = 'profile'

    const profile_text1 = document.createElement("div")
    profile_text1.className = 'profile-text'

    const name1 = document.createElement("h2")
    name1.innerText = "Pawarit"

    const intra1 = document.createElement("p")
    intra1.innerText = "pakinsri"
    
    const desc1 = document.createElement("p")
    desc1.innerText = 'Computer Science, Science'

    const img1 = document.createElement('img')
    img1.src = './asset/public/good.png'

    const profile2 = document.createElement("div")
    profile2.className = 'profile'

    const profile_text2 = document.createElement("div")
    profile_text2.className = 'profile-text'

    const name2 = document.createElement("h2")
    name2.innerText = "Thanchanok"

    const intra2 = document.createElement("p")
    intra2.innerText = "tnuengch"
    
    const desc2 = document.createElement("p")
    desc2.innerText = 'Robotics and AI, Engineering'

    const img2 = document.createElement('img')
    img2.src = './asset/public/km.png'

    profile_text1.appendChild(name1)
    profile_text1.appendChild(intra1)
    profile_text1.appendChild(desc1)

    profile_text2.appendChild(name2)
    profile_text2.appendChild(intra2)
    profile_text2.appendChild(desc2)

    profile1.appendChild(profile_text1)
    profile1.appendChild(img1)
    profile2.appendChild(img2)
    profile2.appendChild(profile_text2)

    return [profile1, profile2]
}