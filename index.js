const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'appName',
            message: 'What is your app name in title case?',
        },
        {
            type: 'input',
            name: 'repoName',
            message: 'What is your repo name? (ex. readme-generator)',
        },
        {
            type: 'input',
            name: 'briefSummary',
            message: 'Give a brief summary of the app:',
        },
        {
            type: 'checkbox',
            name: 'technologies',
            message: 'Which technologies will be used?',
            choices: ['HTML', 'CSS', 'JavaScript', 'Third Party API(s)','Node.js']
        },
        {
            type: 'input',
            name: 'currentYear',
            message: 'What is the current year?',
        }
    ])
    .then((response) => {
        const appName = response.appName;
        const deployedUrl = `https://framenolan.github.io/${response.repoName}`;
        const techList = response.technologies.toString().replace(',','\n- ');
        const briefSummary = response.briefSummary;
        const currentYear = response.currentYear;

        const template =

`# ${appName}

## Deployed Site

[Deployed Site](${deployedUrl})

## Table of Contents
* [Introduction](#introduction)
* [Technologies](#technologies)
* [Future Development](#future-development)
* [Images](#images)
* [Credits](#credits)
* [License](#license)

## Introduction

${briefSummary}

## Technologies

- ${techList}

## Future Development

## Images

## Credits

- Nolan Frame

## License

The MIT License (MIT)

Copyright (c) ${currentYear} Nolan Frame

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;


        fs.writeFile('README.md', template, (error, data) => 
            error ? console.error(error) : console.log(data)
        )
    })