var chakram = require('chakram'),
    expect = chakram.expect;
const faker = require('faker');

const customer = {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    phone: faker.phone.phoneNumber()
};


describe("Customers", function () {
    it.only("POST a new customer", function () {
        var response = chakram.post("http://localhost:3000/customers", customer);

        return expect(response).to.have.json(function (json) {
            expect(response).to.have.status(201);
            expect(response).to.have.json('first_name', customer.first_name);
            expect(response).to.have.json('last_name', customer.last_name);
            expect(response).to.have.json('phone', customer.phone);
        });
    });
});