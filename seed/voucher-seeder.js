var Voucher = require("../models/Voucher");

var mongoose = require("mongoose");

// Connect to the Mongo DB
var MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/ClickyGamePro";
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false
});

var vouchers = [
  new Voucher({
    code: "DISC10A",
    discount: 10,
    expiry: new Date("2019-12-31T23:59:59Z")
  }),
  new Voucher({
    code: "DISC10B",
    discount: 10,
    expiry: new Date("2019-12-31T23:59:59Z")
  }),
  new Voucher({
    code: "DISC10C",
    discount: 10,
    expiry: new Date("2019-12-31T23:59:59Z")
  }),
  new Voucher({
    code: "DISC20A",
    discount: 20,
    expiry: new Date("2019-12-31T23:59:59Z")
  }),
  new Voucher({
    code: "DISC20A",
    discount: 20,
    expiry: new Date("2019-12-31T23:59:59Z")
  }),
  new Voucher({
    code: "FREETIX",
    discount: 100,
    expiry: new Date("2019-12-31T23:59:59Z")
  })
];

var done = 0;
for (var i = 0; i < vouchers.length; i++) {
  vouchers[i].save(function(err, result) {
    done++;
    if (done === vouchers.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
