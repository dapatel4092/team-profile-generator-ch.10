const Employee = require("./Employee")


class Manager extends Employee {

    constructor(name, id, email,officenumber) {
       super(name,id,email)
       this.officenumber = officenumber
    }
    getGithub() {
        return this.officenumber
    }
   
    
    getRole() {
        return "Manager"
    }

}

module.exports = Manager



