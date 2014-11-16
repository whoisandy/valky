var chai = require('chai');
var expect = chai.expect;
var valky = require('../');

describe('Valky', function(){

    it('should return a function', function(){
       expect(valky).to.be.an.Function;
    });

    it('should return key if obj passed', function(){
        var o = {
            name: 'Andy',
            database: {
                host: 'localhost',
                creds: {
                    user: 'user',
                    pass: 'pass',
                    ports: {
                        one: 9001,
                        two: 9002,
                        three: [3001, 3002]
                    }
                }
            }
        };

        var name = valky(o, 'Andy');
        var host = valky(o, 'localhost');
        var user = valky(o, 'user');
        var pass = valky(o, 'pass');
        var one = valky(o, 9001);
        var two = valky(o, 9002);
        var three = valky(o, [3001, 3002]);

        expect(name).to.eql('name');
        expect(host).to.eql('database.host');
        expect(user).to.eql('database.creds.user');
        expect(pass).to.eql('database.creds.pass');
        expect(one).to.eql('database.creds.ports.one');
        expect(two).to.eql('database.creds.ports.two');
        expect(three).to.eql('database.creds.ports.three');
    });

});