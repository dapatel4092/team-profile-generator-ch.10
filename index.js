const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')
const fs = require('fs')
const inquirer = require("inquirer")
let Employeelist = []

const addTeamMembers = () => {
    inquirer.prompt([
        {
            type: "list",
            choices: ["Intern", "Engineer", "Manager", "Generate Team HTML & Exit"],
            message: "which role are you",
            name: "options"
        }
    ]).then(({ options }) => {
        console.log(options)
        switch (options) {
            case "Intern": addIntern()
                break;
            case "Engineer": addEngineer()
                break;
            case "Manager": addManager()
                break;
            default: html()





        }

    })
}
  function addIntern(){
    inquirer.prompt ([
        {
            type:"input",
            message: "enter name",
            name: "name"


        },
        {
            type:"input",
            message: "enter ID",
            name: "ID"


        },
        {
            type:"input",
            message: "enter Email",
            name: "email"


        },
        {
            type:"input",
            message: "enter school name",
            name: "school"


        },
    ]).then(repsonse => {
        const newIntern = new Intern(response.name,repsonse.ID,response.email,repsonse.school)

        Employeelist.push(newIntern)
        addTeamMembers()
    })
  }
  

  function addIntern(){
    inquirer.prompt ([
        {
            type:"input",
            message: "enter name",
            name: "name"


        },
        {
            type:"input",
            message: "enter ID",
            name: "ID"


        },
        {
            type:"input",
            message: "enter Email",
            name: "email"


        },
        {
            type:"input",
            message: "enter school name",
            name: "school"


        },
    ]).then(response => {
        const newIntern = new Intern(response.name,response.ID,response.email,response.school)

        Employeelist.push(newIntern)
        addTeamMembers()
    })
  }
  function addManager(){
    inquirer.prompt ([
        {
            type:"input",
            message: "enter name",
            name: "name"


        },
        {
            type:"input",
            message: "enter ID",
            name: "ID"


        },
        {
            type:"input",
            message: "enter Email",
            name: "email"


        },
        {
            type:"input",
            message: "enter office number",
            name: "office"


        },
    ]).then(response => {
        const newManager = new Manager(response.name,response.ID,response.email,response.office)

        Employeelist.push(newManager)
        addTeamMembers()
    })
  }


  function addEngineer(){
    inquirer.prompt ([
        {
            type:"input",
            message: "enter name",
            name: "name"


        },
        {
            type:"input",
            message: "enter ID",
            name: "ID"


        },
        {
            type:"input",
            message: "enter Email",
            name: "email"


        },
        {
            type:"input",
            message: "enter github",
            name: "github"


        },
    ]).then(response => {
        const newengineer = new Engineer(response.name,response.ID,response.email,response.github)

        Employeelist.push(newengineer)
        addTeamMembers()
    })
  }
  function html() {
    let employeesHTML = "";
  
    Employeelist.forEach((employee) => {
      let employeeHTML = `
        <div>
          <h3>Name: ${employee.name}</h3>
          <p>ID: ${employee.id}</p>
          <p>Email: ${employee.email}</p>
        </div>
      `;
      employeesHTML += employeeHTML;
    });
  
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Team Profile</title>
      </head>
      <body>
        ${employeesHTML}
      </body>
      </html>
    `;
  
    fs.writeFile('team.html', htmlContent, (err) => {
      if (err) throw err;
      console.log('Team HTML file generated successfully!');
    });
  }
  
   



addTeamMembers();