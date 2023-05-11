// constructor for employee class
class employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
}

// constructor for manager class
class manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
}

// constructor for engineer class
class engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
}

// constructor for intern class
class intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
}

// export classes
module.exports = {
    employee: employee,
    manager: manager,
    engineer: engineer,
    intern: intern
}

// Path: lib\HTMLgenerator.js

