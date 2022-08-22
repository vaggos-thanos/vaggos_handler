# vaggos_handler


![CI](https://github.com/vaggos-thanos/vaggos_handler/actions/workflows/main.yml/badge.svg?branch=main)
![CodeQL](https://github.com/vaggos-thanos/vaggos_handler/actions/workflows/codeql-analysis.yml/badge.svg?branch=main)
![Node.js CI](https://github.com/vaggos-thanos/vaggos_handler/actions/workflows/node.js.yml/badge.svg?branch=main)

vaggos_handler is an class based command and event handler for discord.js v13

## Features

- Slash command deployer
- Command handler
- Event listener

## Installation

vaggos_handler requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the script.

```sh
cd vaggos_handler
npm i
```
Build the slash commands, 
But fisrt check the file `vaggos_handler/src/DeploySlashCommands.js` and change this values to your projects info `clientID` to your's bot id and `guildId` to your's server's id and `scope` to `local` for guild deployment or `global` for all the guilds that the bot is in bear in mind that the `global` method could take up to an Hour!

```sh
npm i
npm run deploy
```

For production environments...

```sh
npm run start
```


MIT License

Copyright (c) 2022 vaggos_Dev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
