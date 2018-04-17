var chakram = require('chakram'),
    expect = chakram.expect;


describe("Customers", function () {
    before(function () {
        response = chakram.get("http://localhost:3000/customers");
        return response;
    });

    it("GET all customers", function () {
        expect(response).to.have.status(200);
        expect(response).to.have.header('content-type', 'application/json; charset=utf-8');
        expect(response).to.have.responsetime(3000);
        expect(response).to.have.schema({
            id: {
                type: "string"
            },
            first_name: {
                type: "string"
            },
            last_name: {
                type: "string"
            },
            phone: {
                type: "string"
            }
        });
        return chakram.wait();
    });

    it("check schema", function () {
        expect(response).to.have.schema('[0]', {
            "required": [
                "id",
                "first_name",
                "last_name",
                "phone"
            ]
        });
        return chakram.wait();
    });
});