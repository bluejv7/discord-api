# discord-api

This is my custom client for interfacing with the discord api.  Currently learning the ropes on how everything works.

## Usage

```
> npm install <path_to_discord_api_repo> # sorry, I haven't added this to npm yet
```

```
const Discord = require('discord-api');
let authToken = ... // set your authToken
const discord = new Discord(authToken);
```

## Methods

### sendMessage

`sendMessage(message, channelId)`

### deleteMessage

`deleteMessage(channelId, messageId)`

### setRole

`setRole(guildId, userId, roleId)`

### removeRole

`removeRole(guildId, userId, roleId)`
