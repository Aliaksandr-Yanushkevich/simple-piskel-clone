getIpinfo = async function() {
    const ipInfoToken = '5a82c3c01a87ab';
    const url = `https://ipinfo.io/json?token=${ipInfoToken}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

