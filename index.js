const inquirer = require('inquirer');
const fs = require('fs');
const open = require('open');
const employee = require('./lib/employee');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const createHTML = require('./createHTML');
const teamMemberHTML = require('./createTeamMemberHTML');
let team = []


managerPrompt();

function managerPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the name of the manager?",
                name: "name",
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
                name: "misc",
            },



        ])
        .then(answers => {

            let managerInfo = new manager(answers.managerName, answers.idNumber, answers.email, answers.misc)

            // var managerInfo = {
            //     managerName: answers.managerName,
            //     id: answers.idNumber,
            //     email: answers.email,
            //     office: answers.office,

            // }

            team.push(managerInfo);
            // console.log(teamArray);

            memberQuestion();


        });
}

function memberQuestion() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to add a team member?",
                name: "teamMember",
                choices: ["Engineer", "Intern", "I am finished"]
            },
        ])

        .then(answers => {
            // console.log(answers.teamMember);

            var memberInfo = {
                memberType: answers.teamMember,
            }

            if (memberInfo.memberType === "Engineer") {
                engineerPrompts();
            }
            else if (memberInfo.memberType === "Intern") {
                internPrompts();
            }
            else if (memberInfo.memberType === "I am finished") {
                // Run Create HTML Function
                console.log("Your team member display is ready!")
                console.log(team);
                createDisplay(team);
                open('display.html');
            }
        })
}

function engineerPrompts() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "memberName",
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
                message: "what is your Github username?",
                name: "misc",
            }


        ])
        .then(answers => {
            // console.log(answers);

            let engineerInfo = new engineer(answers.memberName, answers.idNumber, answers.email, answers.misc)

            // let engineerInfo = {
            //     name: answers.memberName,
            //     id: answers.idNumber,
            //     email: answers.email,
            //     github: answers.github,
            // }

            team.push(engineerInfo);
            memberQuestion();
        })

};
function internPrompts() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your name?",
                name: "memberName",
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
                message: "what is your college/university?",
                name: "misc",
            }


        ])
        .then(answers => {
            // console.log(answers);

            let internInfo = new Intern(answers.name, answers.idNumber, answers.email, answers.misc)

            team.push(internInfo);
            memberQuestion();
        })
}

function createDisplay(team){
    fs.writeFile('display.html', createHTML(), (err) =>{
        if (err) throw err;

        console.log( "Check out display.html for your team display!");
        addTeamMember(team);
    })
};

function addTeamMember(team){
    let teamMember = teamMemberHTML(team);
    for (i=0; i < team.length; i++){
        fs.appendFile('display.html', teamMember, (err) =>{
            if (err) throw err;
        });
    }
}

// module.exports = index;