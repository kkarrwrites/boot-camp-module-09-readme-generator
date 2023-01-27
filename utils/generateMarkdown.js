// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return `N/A`;
  } else if (license === "Apache License 2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "GNU General Public License v3.0") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "MIT License") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "BSD 2-Clause 'Simplified' License") {
    return `![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)`;
  } else if (license === "BSD 3-Clause 'New' or 'Revised' License") {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  } else if (license === "Boost Software License 1.0") {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return `![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`;
  } else if (license === "Eclipse Public License 2.0") {
    return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`;
  } else if (license === "GNU Affero General Public License v3.0") {
    return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
  } else if (license === "GNU General Public License v3.0") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "GNU Lesser General Public License v3.0") {
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else if (license === "The Unlicense") {
    return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return `N/A`;
  } else if (license === "Apache License 2.0") {
    return `[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU General Public License v3.0") {
    return `[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "MIT License") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === "BSD 2-Clause 'Simplified' License") {
    return `[BSD 2-Clause 'Simplified' License](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (license === "BSD 3-Clause 'New' or 'Revised' License") {
    return `[BSD 3-Clause 'New' or 'Revised' License](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license === "Boost Software License 1.0") {
    return `[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return `[Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license === "Eclipse Public License 2.0") {
    return `[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license === "GNU Affero General Public License v3.0") {
    return `[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license === "GNU General Public License v3.0") {
    return `[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "GNU Lesser General Public License v3.0") {
    return `[GNU Lesser General Public License v3.0](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license === "Mozilla Public License 2.0") {
    return `[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === "The Unlicense") {
    return `[The Unlicense](http://unlicense.org/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
