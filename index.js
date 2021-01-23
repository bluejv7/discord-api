const axios = require('axios');

const BASE_URL = 'https://discord.com/api';
const GATEWAY_VERSION = 8;

class Discord {
    authToken;

    constructor(authToken) {
        this.authToken = authToken;
    }

    sendMessage(message, channelId) {
        return axios.post(`${BASE_URL}/channels/${channelId}/messages`, {
            content: message
        }, {
            headers: {
                Authorization: this.authToken
            }
        });
    }
}

module.exports = Discord;
