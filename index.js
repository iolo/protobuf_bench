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

function run(itemCount) {

    itemCount = itemCount || 0;

    var items = [];
    for(var i = 0 ; i < itemCount ; i++) {
        items.push({
            id: i + 1,
            category: 'weapon',
            count: i + 1,
        });
    }

    var json = {
        id: 123456789,
        error: {
            category: 500,
            message: "invalid protocol buffer",
            code: -100
        },
        account: {
            id: 123456789,
            userID: 'who@gmail.com',
        },
        accessToken: "12345678901234567890",
        items: items,
    };

    var pbuf = new pb.LoginResponse({
        id: json.id,
        error: new pb.Error(json.error),
        account: new pb.Account(json.account),
        accessToken: json.accessToken,
        items: items.map(function(item) { return new pb.Item(item); }),
    });

    console.log('\n##', itemCount, 'items ##\n');
    console.log('JSON:', JSON.stringify(json).length, 'bytes');
    console.log('protobuf:', pbuf.encodeNB().length, 'bytes\n');

    //
    var suite = new Benchmark.Suite();
    suite.add('JSON', function() {
        JSON.parse(JSON.stringify(json));
    })
    .add('protocol-buffers', function() {
        pb3.LoginResponse.decode(pb3.LoginResponse.encode(json));
    })
    .add('protobuf', function() {
        LoginResponse.parse(LoginResponse.serialize(json));
    })
    .add('node-protobuf', function() {
        npb.parse(npb.serialize(json, "packet.LoginResponse"), "packet.LoginResponse");
    })
    .add('ProtoBuf.js', function() {
        pb.LoginResponse.decode(pbuf.encodeNB());
    })
    .on('complete', function() {
        this.forEach(function(bench) {
            console.log('-', bench.toString());
        });
    })
    .run();
    // .run({ async: true });
}

for(var i = 0 ; i <= 1000 ; i += 100) {
    run(i);
}