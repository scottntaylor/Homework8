const employee = require("./employee");

class manager extends employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

mnodule.exports = manager;