const axios = require('axios');

const BASE_URL = 'https://discord.com/api';
const GATEWAY_VERSION = 8;

class Discord {
    authToken;

    constructor(authToken) {
        this.authToken = authToken;
    }

    deleteMessage(channelId, messageId) {
        return axios.delete(`${BASE_URL}/channels/${channelId}/messages/${messageId}`, {
            headers: {
                Authorization: this.authToken
            }
        });
    }

    removeRole(guildId, userId, roleId) {
        return axios.delete(`${BASE_URL}/guilds/${guildId}/members/${userId}/roles/${roleId}`, {
            headers: {
                Authorization: this.authToken
            }
        });
    }

    sendMessage(message, channelId) {
        return axios.post(`${BASE_URL}/channels/${channelId}/messages`, {
            content: message
        }, {
            headers: {
                Authorization: this.authToken
            }
        }).catch(error => {
            this._handleError(error);
        });
    }

    setRole(guildId, userId, roleId) {
        return axios.put(`${BASE_URL}/guilds/${guildId}/members/${userId}/roles/${roleId}`, {}, {
            headers: {
                Authorization: this.authToken
            }
        });
    }

    _handleError(error) {
        console.error(`Error: ${error}`);
        throw(error);
    }
}

module.exports = Discord;
