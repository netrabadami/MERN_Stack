const express = require("express");
const faker = require("ng-faker");
const app = express();

const count = 0;
const count1 = 0;
class User {
    constructor(){
        this.id = count;
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.count ++; 
    }
}

class Company {
    constructor(){
        this.id = count1;
        this.name = faker.company.companyName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country =  faker.address.country();
        this.count ++; 

    }
}

app.get("/api/users/new", (req, res) => {
    console.log(new User());
    res.send("new User");
    //res.send(new User());
  });

app.get("/api/companies/new", (req,res) => {
        console.log(new Company());
        res.send("new Company");
     //   res.send(new Company());
      
  });

  const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);