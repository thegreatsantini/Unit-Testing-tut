const expect = require('chai').expect;
const Checkout = require("../checkout");

let checkout;

beforeEach(()=>{
    checkout = new Checkout();
})
it("Can add item price", (done) => {
    checkout.addItemPrice('a', 1);
    done();
})

it("Can add item", (done)=>{
    checkout.addItemPrice("a", 1);
    checkout.addItem("a");
    done();
})

it("Can calculate current total", (done)=> {
    checkout.addItemPrice('a', 1);
    checkout.addItem('a');
    expect(checkout.calculateTotal()).to.equal(1);
    done();
})