var debug = require('debug');
var assert = require('assert');
var Benchmark = require('benchmark');
var fs = require('fs');
var path = require('path');

// protobuf
var Schema = require('protobuf').Schema;
var schema = new Schema(fs.readFileSync('./packet.desc'));
var Account = schema['packet.Account'];
var LoginResponse = schema['packet.LoginResponse'];
// console.log('Account', Account);
// console.log('LoginResponse', LoginResponse);

// protobuf.js
var ProtoBuf = require('protobufjs');
var builder = ProtoBuf.loadProtoFile(path.normalize('packet.proto'));
var pb = builder.build('packet');

// node-protobuf
var node_protobuf = require("node-protobuf");
var npb = new node_protobuf(fs.readFileSync("packet.desc"));

// protocol-buffers
var protocol_buffers = require('protocol-buffers');
var pb3 = protocol_buffers(fs.readFileSync('packet.proto'));
// console.log(pb3);

var json = {
    id: 1234567890,
    error: {
        category: 500,
        message: "invalid protocol buffer is sucks",
        code: -10000
    },
    account: {
        id: 1234567890,
        userID: 'who@gmail.com',
        values: [
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
            1,2,3,4,5,6,7,8,9,10,
        ],
        a: 11111,
        b: 222,
        c: 33,
        d: 44,
        e: 55,
        f: 66,
        g: 7
    },
    accessToken: "123456789012345678901234567890123456789012345678901234567890"
};

var pbuf = new pb.LoginResponse({
    id: json.id,
    error: new pb.Error(json.error),
    account: new pb.Account(json.account),
    accessToken: json.accessToken,
});

console.log('length:', 'JSON=', JSON.stringify(json).length, "protobuf=", pbuf.encodeNB().length);

//
var suite = new Benchmark.Suite();
suite.add('JSON', function() {
    JSON.parse(JSON.stringify(json));
})
.add('ProtoBuf.js', function() {
    pb.LoginResponse.decode(pbuf.encodeNB());
})
.add('protobuf', function() {
    LoginResponse.parse(LoginResponse.serialize(json));
})
.add('node-protobuf', function() {
    npb.parse(npb.serialize(json, "packet.LoginResponse"), "packet.LoginResponse");
})
.add('protocol-buffers', function() {
    pb3.LoginResponse.decode(pb3.LoginResponse.encode(json));
})
.on('complete', function() {
    this.forEach(function(bench) {
        console.log(bench.toString());
    });
})
.run();

// .run({ async: true });
