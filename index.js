var inquirer = require('inquirer');


managerPrompt();

function managerPrompt(){
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

        var managerInfo = {
            managerName: answers.managerName,
            id: answers.idNumber,
            email: answers.email,
            office: answers.office,

        }
        console.log(managerInfo.id);
      

        memberQuestion();

        
    });
}

    function memberQuestion(){
inquirer
    .prompt([
        {
            type: "list",
            message: "Would you like to add a team member?",
            name: "teamMember",
            choices: ["Engineer", "Intern", "I am finished"]
        },
    ])

    .then(answers =>{
        console.log(answers.teamMember);
    })
}

function engineerPrompts(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is your?",
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
        .then(answers =>{
            console.log(answers);
        })

};
function internPrompts(){
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is your?",
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
    .then(answers =>{
        console.log(answers);
    })
}