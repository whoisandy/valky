var chai = require('chai');
var expect = chai.expect;
var valky = require('../');

var o;
var name, host, user, pass, one, two, three;

describe('Valky', function(){

    before(function(){
        o = {
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
    });

    after(function(){
       name = host = user = pass = one = two = three = undefined;
    });

    it('should return a function', function(){
       expect(valky).to.be.an.Function;
    });

    it('should return key if obj passed', function(){
        name = valky(o, 'Andy');
        host = valky(o, 'localhost');
        user = valky(o, 'user');
        pass = valky(o, 'pass');
        one = valky(o, 9001);
        two = valky(o, 9002);
        three = valky(o, [3001, 3002]);

        expect(name).to.eql('name');
        expect(host).to.eql('database.host');
        expect(user).to.eql('database.creds.user');
        expect(pass).to.eql('database.creds.pass');
        expect(one).to.eql('database.creds.ports.one');
        expect(two).to.eql('database.creds.ports.two');
        expect(three).to.eql('database.creds.ports.three');
    });

    it('should return key with delimiter(:) if obj passed', function(){
        name = valky(o, 'Andy', ':');
        host = valky(o, 'localhost', ':');
        user = valky(o, 'user', ':');
        pass = valky(o, 'pass', ':');
        one = valky(o, 9001, ':');
        two = valky(o, 9002, ':');
        three = valky(o, [3001, 3002], ':');

        expect(name).to.eql('name');
        expect(host).to.eql('database:host');
        expect(user).to.eql('database:creds:user');
        expect(pass).to.eql('database:creds:pass');
        expect(one).to.eql('database:creds:ports:one');
        expect(two).to.eql('database:creds:ports:two');
        expect(three).to.eql('database:creds:ports:three');
    });

    it('should return key with delimiter(_) if obj passed', function(){
        name = valky(o, 'Andy', '_');
        host = valky(o, 'localhost', '_');
        user = valky(o, 'user', '_');
        pass = valky(o, 'pass', '_');
        one = valky(o, 9001, '_');
        two = valky(o, 9002, '_');
        three = valky(o, [3001, 3002], '_');

        expect(name).to.eql('name');
        expect(host).to.eql('database_host');
        expect(user).to.eql('database_creds_user');
        expect(pass).to.eql('database_creds_pass');
        expect(one).to.eql('database_creds_ports_one');
        expect(two).to.eql('database_creds_ports_two');
        expect(three).to.eql('database_creds_ports_three');
    });

});