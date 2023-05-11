# Team Profile Generator

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
This command-line application generates a team roster webpage based on user input. The user is prompted to enter team members' information such as name, ID, email, GitHub username, and school (if an intern). Once all the necessary information is entered, the application generates an HTML file that displays a nicely formatted team roster. The HTML file also contains links to each team member's email address and GitHub profile.

## Installation
To install this application, clone the repository from [GitHub](https://github.com/SChafinIII/Team-Profile-Generator.git) to your local machine. Then, navigate to the root directory of the project in your terminal and run `npm install` to install the necessary dependencies.

## Usage
To use this application, navigate to the root directory of the project in your terminal and run `node index.js`. The application will prompt you to enter information for the team manager first, including their name, employee ID, email address, and office number. Once the manager's information is entered, you will be presented with a menu where you can choose to add an engineer or an intern, or finish building your team. 

If you select the engineer option, you will be prompted to enter the engineer's name, ID, email, and GitHub username. Once you enter the information, you will be taken back to the main menu. If you select the intern option, you will be prompted to enter the intern's name, ID, email, and school. Once you enter the information, you will also be taken back to the main menu.

When you are finished building your team, select the option to finish. The application will generate an HTML file that displays a nicely formatted team roster. Clicking on an email address in the HTML file will open your default email program and populate the TO field of the email with the address. Clicking on a GitHub username will open the corresponding GitHub profile in a new tab.

## Warning
This repo is still under development and is currently not functional. Please check back soon for updates.

## Tests
To run tests for this application, navigate to the root directory of the project in your terminal and run `npm test`.

## License
This application is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Questions
If you have any questions about this application, please contact me via email at schafin.iii@gmail.com or on [GitHub](https://github.com/SChafinIII).
 
