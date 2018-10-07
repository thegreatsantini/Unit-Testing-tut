const expect = require('chai').expect;
const Checkout = require("../checkout");

let checkout;

beforeEach(() => {
    checkout = new Checkout();
    checkout.addItemPrice('a', 1);
    checkout.addItemPrice("b", 2);
})

it("Can calculate current total", (done) => {

    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
    done();
})

it('Can add multiple items and calculate total', (done) => {
    checkout.addItem('a');
    checkout.addItem('b');
    expect(checkout.calculateTotal()).to.equal(3);
    done();
})

it('Can add discount rule', (done) => {
    checkout.addDiscount('a', 3, 2);
    done()
})

it('Can apply discount rules to the total', (done) => {
    checkout.addDiscount('a', 3, 2);
    checkout.addItem('a');
    checkout.addItem('a');
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(2);
    done();
})

it("Throws when added item doesn't have a price specified", (done) => {
    expect(() => checkout.addItem('c')).to.throw();
    done();
})