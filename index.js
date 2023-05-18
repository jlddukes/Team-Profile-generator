const inquirer = require("inquirer");

const fs = require("fs");

const generateHTML = require("./src/generateHTML");

const Engineer = require("./lib/Engineer.js");

const Intern = require("./lib/Intern.js");

const Manager = require("./lib/Manager.js");


const employee = [];



const managerQuestions = [
    {
        type: 'input',
        message: 'What is your managers name?',
        name: 'name',
     },
    {
        type: 'input',
        message: 'What is your managers ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is your managers email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your managers office #?',
        name: 'officeNumber',
    },
]

const internQuestions = [
    {
        type: 'input',
        message: 'Hello?',
        name: 'typeOfEmployee',
     },
    {
        type: 'input',
        message: 'Hello?',
        name: 'typeOfEmployee',
    },
    {
        type: 'input',
        message: 'Hello?',
        name: 'typeOfEmployee',
    },
    {
        type: 'input',
        message: 'Hello?',
        name: 'typeOfEmployee',
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'Hello?',
        name: 'typeOfEmployee',
     },
    {
        type: 'input',
        message: 'Hello?',
        name: 'typeOfEmployee',
    },
    {
        type: 'input',
        message: 'Hello?',
        name: 'typeOfEmployee',
    },
    {
        type: 'input',
        message: 'Hello?',
        name: 'typeOfEmployee',
    },
]

const continueQueston = [
    {
        type: 'list',
        name: 'employeeType',
        message: '',
        choices: ['Intern', 'Engineer', 'No more team members']
         
    }
]

function start() {
    inquirer
    .prompt (managerQuestions)
    .then ((data) => {
        console.log(data)
        const manager = new Manager(data.name, data.ID, )
        employee.push (manager)
        nextQuestion()

    })
}

function intern() {
    inquirer
     .prompt (internQuestions)
     .then
}

function engineer() {

}

function writeFinish() {
    
console.log(employee)


}



function nextQuestion() {
    inquirer
    .prompt (continueQueston)
    .then ((data) => {
        if (data.employeeType === 'Intern') { 
            intern()
        }
        if (data.employeeType === 'Engineer') {
            engineer

        }
    }
    )
}


start()