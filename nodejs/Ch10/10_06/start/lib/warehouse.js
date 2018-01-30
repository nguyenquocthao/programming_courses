module.exports = {

    packageAndShip(sku, qty, done) {

        var trackingNumber = 123456789;

        //
        // TODO: Command Robots to unshelf
        //

        //
        //  TODO: Print Labels
        //

        //
        //  TODO: Command Robots to package
        //

        //
        //  TODO: Command Robots to leave items at dock
        //

        // Create a 1.5 second delay to simulate shipping request
        setTimeout(done.bind(null, trackingNumber), 1500);
        // bind => make function done have the first argument is 123456789

        // done= tracking => {console.log; spy(tracking)} (argument passed from order.js)

        // => after 1.5s, spy(123456789)

        // But in order-spec.js, packageAndShip = sinon.stub.yields(10987654321), done is callback function => done have argument 10987654321

        // => after 1.5s, spy(10987654321)

    }

};