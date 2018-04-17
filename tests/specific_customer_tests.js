var chakram = require('chakram'),
    expect = chakram.expect;

describe("Specific customer", function () {
    before(function () {
        response = chakram.get("http://localhost:3000/customers/1");
        return response;
    });

    it("GET a specific customer", function () {
        expect(response).to.have.json('id', 1);
        expect(response).to.have.json('first_name', 'John');
        expect(response).to.have.json('last_name', 'Smith');
        expect(response).to.have.json('phone', '219-839-2819');
        return chakram.wait();
    });

    it("GET a specific customer again", function () {
        return expect(response).to.have.json(function (json) {
            expect(json.first_name).to.equal('John');
            expect(json.last_name).to.equal('Smith');
            expect(json.phone).to.equal('219-839-2819');
        });
    });
});