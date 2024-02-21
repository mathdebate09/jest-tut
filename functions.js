function capitalize(str) {
    let givenStr = str
    givenStr = givenStr.charAt(0).toUpperCase() + givenStr.slice(1)

    return givenStr
}

export default capitalize;