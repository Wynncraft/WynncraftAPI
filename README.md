<h1 align="center">
    <br/>
    <a href="httsp:://wynncraft.com/" target="_blank">
        <img src="https://cdn.wynncraft.com/img/logo.png" width="200" alt="Wynncraft" />
    </a>
    <br/>
    Official Wynncraft Public API
    <br/>
</h1>

<h4 align="center">Connecting Wynncraft's Services with the Community</h4>

<p align="center">
    <a href="https://docs.wynncraft.com/" target="_blank">Documentation</a> •
    <a href="https://discord.gg/nUFD9xX" target="_blank">Discord Server</a>
</p>

<h6 align="center">Table of Contents</h6>
<p align="center">
    <a href="#overview">Overview</a> •
    <a href="#issues-and-bugs">Issues and Bugs</a> •
    <a href="#contributing">Contributing</a>
</p>

## Overview
This repository serves as both an issue tracker and as a reference for anyone using Wynncraft's Public API service. This repository is not for other Wynncraft related items.

## Issues and Bugs
Do not discuss / share any vulnerabilities or bugs that can be used to exploit the API or our platforms. Instead, please private message Colin#0670 on discord or colin350 on the forums. 

If you would like to make an issue regarding the API or its documentation, please open an issue [here](https://github.com/Wynncraft/WynncraftAPI/issues).

## Contributing
The Wynncraft Team has decided to make the Official Public API Documentation a community effort, as well as put a foot forward towards developing an ecosystem that is built off of our API service. We hope in the future language specific libraries and wrappers are built around our API service, and more creative tools created by the community are to come! 

To contribute to the Documentation, you will need a few things:
1. You will need the latest version of Node.js and NPM installed on your system. You can get node.js and npm together on their website.

2. You will need to globally install gitbook-cli via NPM, as the documentation platform is built on top of gitbook. To install gitbook-cli, you will run something like this: `$ npm install -g gitbook-cli`

3. You will need to fork this repository and clone it to your system.

4. After making your __proposed__ changes, in the root of this repository, you should run:
```bash
$ gitbook build
$ gitbook serve
```

5. You should test the new documentation you've generated on your local host, and make sure it is bug free and compiles without any errors!

6. When you are done, submit a pull request and I will review it!


Best of luck, and happy coding!
-Colin
