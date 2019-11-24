var inquirer = require('inquirer');
let teamArray = []


managerPrompt();

function managerPrompt() {
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



        ])
        .then(answers => {

            let managerInfo = new manager (answers.managerName, answers.idNumber, answers.email, answers.office)
           
            // var managerInfo = {
            //     managerName: answers.managerName,
            //     id: answers.idNumber,
            //     email: answers.email,
            //     office: answers.office,

            // }

teamArray.push(managerInfo);
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
     else if (memberInfo.memberType === "I am finished"){
    // Run Create HTML Function
     console.log("Your team member display is ready!")
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
                name: "github",
            }


        ])
        .then(answers => {
            // console.log(answers);

            let engineerInfo = new Intern (answers.memberName, answers.idNumber, answers.email, answers.github)

            // let engineerInfo = {
            //     name: answers.memberName,
            //     id: answers.idNumber,
            //     email: answers.email,
            //     github: answers.github,
            // }

            teamArray.push(engineerInfo);
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
                name: "college",
            }


        ])
        .then(answers => {
            // console.log(answers);

            let internInfo = new Intern(answers.name, answers.idNumber, answers.email, answers.college)

            teamArray.push(internInfo);
            memberQuestion();
        })
}

// function