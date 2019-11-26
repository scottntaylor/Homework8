const employee = require("./employee");

class engineer extends employee {
    constructor(name, id, email, misc){
        super(name, "Engineer", id, email);
        this.misc = misc;
    }
    getGithub(){
        return this.misc;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = engineer;