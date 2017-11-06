var chai        = require('chai');

chai.should();


describe( "absent: check existence of a variable", function() {

    var absent = require('./absent');

    it( "should detect as null if variable is set as null", function() {
        var ddd = null;
        absent.isNull(ddd).should.equal(true);
    });

    it( "should detect as null if variable is undefined", function() {
        var ddd;
        absent.isNull(ddd).should.equal(true);
    });

});

describe( "absent: check blankness of a string", function() {

    var absent = require('./absent');

    it( "should detect as blank if string is set as null", function() {
        var ddd = null;
        absent.isBlank(ddd).should.equal(true);
    });

    it( "should detect as blank if string is undefined", function() {
        var ddd;
        absent.isBlank(ddd).should.equal(true);
    });

    it( "should detect as blank if string is blank", function() {
        var ddd = "";
        absent.isBlank(ddd).should.equal(true);
    });

});

describe( "absent: provides other helper functions", function() {

    var absent = require('./absent');

    it( "should detect as set", function() {
        var ddd = "not empty";
        absent.isSet(ddd).should.equal(true);
    });

    it( "should return false as negative of true", function() {
        var ddd = true;
        absent.not(ddd).should.equal(false);
    });

    it( "should return true as negative of false", function() {
        var ddd = false;
        absent.not(ddd).should.equal(true);
    });

});