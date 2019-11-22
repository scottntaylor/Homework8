var inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of your manager?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is your ID number?",
            name: "idNumber",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is your office number?",
            name: "office",
        },

        {
            type: "list",
            message: "Woudl you like to add a team member?",
            name: "teamMember",
            choices: ["Engineer", "Intern", "I am finished"]
        },

    ])
    .then(answers => {
        // console.info('searching....');
        // console.log(answers);
        var managerInfo = {
            managerName: answers.managerName,
            id: answers.idNumber,
            email: answers.email,
            office: answers.office,

        }
console.log(managerInfo.id);
        // gatherData(answers);
    });