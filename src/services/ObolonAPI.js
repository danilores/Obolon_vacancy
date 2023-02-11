
// You can destructure some of the API functions as token manipulations \ vacancy tables manipulations
// Like SomeAPI... /login/auth, /login/register || /vacancy/add, /vacancy/answer

class ObolonAPI {
    BaseUrl = `http://127.0.0.1:8080`;

    getUsers = async() => {
        // return await fetch(``)
    }
    register = async(userInfo = {email: '1234567', role: 'user', userName: 'tsar', pass: 'zxc', RT: 'qwe'}) => {

        // Must contain data in body, as: 
        // {
        //  email: '1234567', role: 'user', userName: 'tsar', pass: 'zxc', RT: 'qwe'
        // }

        // RT?????

        if (!userInfo) {
            return new Error('user data is empty');
        } else {
            return await fetch(`${this.BaseUrl}/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }).then(data => data.json())
        }
    }
    login = async(userInfo = { email: '123456', role: 'admin', userName: 'denis2', pass: 'zxc' }) => {

        // Must contain data in body, as: 
        // {
        //  email, role???, userName, pass
        // }

        if (!userInfo) {
            return new Error('user data is empty');
        } else {
            return await fetch(`${this.BaseUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo)
            }).then(data => data.json())
        }
    }
    quit = async() => {
        return await fetch(`${this.BaseUrl}`)
    }
    checkToken = async() => {
        return await fetch(`${this.BaseUrl}`)
    }
    refreshToken = async() => {
        return await fetch(`${this.BaseUrl}`)
    }
}

export default new ObolonAPI();