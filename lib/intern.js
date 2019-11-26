const employee = require("./employee");

class Intern extends employee {
    constructor (name,id, email, college){
        super(name, 'Intern', id, email);
        this.college = college;
    }

    getCollege(){
        return this.college;
    }

    getRole(){
        return "Intern";
    }
}
module.exports = Intern;