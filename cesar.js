function cesar(str, shift, action) {
    str = str.toLowerCase()
    alp = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    alpCrypt = new Map()
    for (let i = 0; i < 33; ++i) {
        if (action == 'encode') {
            alpCrypt[alp[i]] = alp[(i + shift) % 33]
        } else if (action == 'decode') {
            alpCrypt[alp[(i + shift) % 33]] = alp[i]
        } else {
            return `"${action}" is wrong action`
        }
    }
    let len = str.length
    let strCrypt = ""
    for (let i = 0; i < len; ++i) {
        let charcode = str[i].charCodeAt()
        if (charcode >= 1072 && charcode <= 1105) {
            strCrypt += alpCrypt[str[i]]
        } else {
            strCrypt += str[i]
        }
    }
    return strCrypt
}

// Взлом "эзтыхз фзъзъз"
for (let i = 0; i < 33; ++i) {
    console.log(cesar("эзтыхз фзъзъз", i, 'decode'))
}

// хакуна матата, короче говоря