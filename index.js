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
            name: 'gitHub',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
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
            type: 'input',
            name: 'installation',
            message: 'Provide any installation instructions:',
        },
        {
            type: 'checkbox',
            name: 'technologies',
            message: 'Which technologies will be used?',
            choices: ['HTML', 'CSS', 'JavaScript', 'Third Party API(s)','Node.js']
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide any usage instructions or examples:',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Provide any guidelines for contributing:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide any examples or instructions for tests:',
        },
        {
            type: 'input',
            name: 'currentYear',
            message: 'What is the current year?',
        }
    ])
    .then((response) => {
        const appName = response.appName;
        const deployedUrl = `https://${response.gitHub}.github.io/${response.repoName}`;
        const email = response.email;
        const gitHub = response.gitHub;
        const briefSummary = response.briefSummary;
        const installation = response.installation;
        const techList = response.technologies.toString().replace(',','\n- ');
        const usage = response.usage;
        const contributing = response.contributing;
        const tests = response.tests;
        const currentYear = response.currentYear;

        const template =

`# ${appName}

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Deployed Site

[Deployed Site](${deployedUrl})

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Technologies](#technologies)
* [Usage](#usage)
* [Future Development](#future-development)
* [Credits](#credits)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

## Description

${briefSummary}

## Installation

${installation}

## Technologies

- ${techList}

## Usage

${usage}

## Future Development

## Credits

- Nolan Frame

## Contributing

${contributing}

## Tests

${tests}

## Questions

Please checkout [https://github.com/${gitHub}/](https://github.com/${gitHub}/) or email me at [${email}](mailto:${email}).

## License

The MIT License (MIT)

Copyright (c) ${currentYear} Nolan Frame

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;


        fs.writeFile('output.md', template, (error, data) => 
            error ? console.error(error) : console.log(data)
        )
    })