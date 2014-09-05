## Benchmarked Modules ##

- JSON (built-in)
- [protocol-buffers](https://github.com/mafintosh/protocol-buffers)
- [protobuf](https://github.com/chrisdew/protobuf)
- [node-protobuf](https://github.com/fuwaneko/node-protobuf)
- [ProtoBuf.js](https://github.com/dcodeIO/ProtoBuf.js)
- [node-msgpack](https://github.com/pgriess/node-msgpack)
- [msgpack-js](https://github.com/creationix/msgpack-js)
- [msgpack5](https://github.com/mcollina/msgpack5)

## Test Platform ##

MacBook Pro 2014 Mid 2014, OS X 10.9.4

- CPU: 2.5 GHz Intel Core i7
- RAM: 16G 1600 MHz DDR3

## sample proto ##

	package packet;

	message Error {
	    enum Category {
	        OK                  = 200;
	        GameError           = 205;
	        VersionError        = 302;
	        BadRequest          = 400;
	        AuthError           = 401;
	        InvalidProtocol     = 402;
	        ServerError         = 500;
	        MaintenanceError    = 503;
	    }
	    required Category category = 1;
	    optional string message = 2;
	    optional int32 code = 3;
	    optional string reserved = 4;
	}

	message LoginResponse {
	    required uint32 id = 1;
	    optional Error error = 2;
	    optional Account account = 3;
	    optional string accessToken = 4;
	    repeated Item items = 5;
	}

	message Account {
	    required uint64 id = 1;
	    required string userID = 2;
	}

	message Item {
	    required uint64 id = 1;
	    required string category = 2;
	    optional uint32 count = 3;
	}

## sample JSON ##

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

## 0 items ##

JSON: 189 bytes
protobuf: 90 bytes
msgpack: 145 bytes
- JSON x 280,111 ops/sec ±0.46% (102 runs sampled)
- protocol-buffers x 260,371 ops/sec ±0.71% (98 runs sampled)
- node-protobuf x 36,922 ops/sec ±0.86% (98 runs sampled)
- ProtoBuf.js x 28,222 ops/sec ±1.36% (94 runs sampled)
- msgpack x 92,778 ops/sec ±1.19% (94 runs sampled)
- msgpackjs x 26,494 ops/sec ±1.26% (92 runs sampled)
- msgpack5 x 5,569 ops/sec ±2.31% (89 runs sampled)

## 100 items ##

JSON: 4272 bytes
protobuf: 1490 bytes
msgpack: 2947 bytes
- JSON x 9,809 ops/sec ±0.48% (101 runs sampled)
- protocol-buffers x 8,165 ops/sec ±0.49% (101 runs sampled)
- node-protobuf x 1,725 ops/sec ±0.59% (98 runs sampled)
- ProtoBuf.js x 986 ops/sec ±1.97% (87 runs sampled)
- msgpack x 3,866 ops/sec ±0.32% (101 runs sampled)
- msgpackjs x 880 ops/sec ±1.42% (94 runs sampled)
- msgpack5 x 207 ops/sec ±1.72% (84 runs sampled)

## 200 items ##

JSON: 8572 bytes
protobuf: 3036 bytes
msgpack: 5893 bytes
- JSON x 4,901 ops/sec ±0.71% (100 runs sampled)
- protocol-buffers x 4,094 ops/sec ±0.31% (101 runs sampled)
- node-protobuf x 888 ops/sec ±0.28% (98 runs sampled)
- ProtoBuf.js x 522 ops/sec ±1.81% (85 runs sampled)
- msgpack x 1,987 ops/sec ±0.54% (101 runs sampled)
- msgpackjs x 441 ops/sec ±1.58% (88 runs sampled)
- msgpack5 x 105 ops/sec ±1.76% (74 runs sampled)

## 300 items ##

JSON: 12872 bytes
protobuf: 4636 bytes
msgpack: 8983 bytes
- JSON x 3,299 ops/sec ±0.91% (101 runs sampled)
- protocol-buffers x 2,797 ops/sec ±0.35% (100 runs sampled)
- node-protobuf x 601 ops/sec ±0.41% (98 runs sampled)
- ProtoBuf.js x 344 ops/sec ±1.83% (86 runs sampled)
- msgpack x 1,326 ops/sec ±0.53% (100 runs sampled)
- msgpackjs x 296 ops/sec ±1.44% (86 runs sampled)
- msgpack5 x 70.83 ops/sec ±1.65% (63 runs sampled)

## 400 items ##

JSON: 17172 bytes
protobuf: 6236 bytes
msgpack: 12183 bytes
- JSON x 2,510 ops/sec ±0.55% (98 runs sampled)
- protocol-buffers x 2,110 ops/sec ±0.30% (101 runs sampled)
- node-protobuf x 456 ops/sec ±0.36% (95 runs sampled)
- ProtoBuf.js x 255 ops/sec ±1.97% (79 runs sampled)
- msgpack x 1,006 ops/sec ±0.11% (101 runs sampled)
- msgpackjs x 219 ops/sec ±1.71% (82 runs sampled)
- msgpack5 x 52.86 ops/sec ±1.99% (64 runs sampled)

## 500 items ##

JSON: 21472 bytes
protobuf: 7836 bytes
msgpack: 15383 bytes
- JSON x 2,005 ops/sec ±0.67% (100 runs sampled)
- protocol-buffers x 1,631 ops/sec ±0.24% (101 runs sampled)
- node-protobuf x 364 ops/sec ±0.48% (95 runs sampled)
- ProtoBuf.js x 213 ops/sec ±1.47% (79 runs sampled)
- msgpack x 797 ops/sec ±0.26% (99 runs sampled)
- msgpackjs x 175 ops/sec ±1.62% (84 runs sampled)
- msgpack5 x 42.41 ops/sec ±1.83% (58 runs sampled)

## 600 items ##

JSON: 25772 bytes
protobuf: 9436 bytes
msgpack: 18583 bytes
- JSON x 1,663 ops/sec ±0.78% (100 runs sampled)
- protocol-buffers x 1,414 ops/sec ±0.34% (101 runs sampled)
- node-protobuf x 304 ops/sec ±0.43% (94 runs sampled)
- ProtoBuf.js x 173 ops/sec ±2.05% (78 runs sampled)
- msgpack x 667 ops/sec ±0.39% (100 runs sampled)
- msgpackjs x 147 ops/sec ±1.61% (78 runs sampled)
- msgpack5 x 35.00 ops/sec ±2.35% (54 runs sampled)

## 700 items ##

JSON: 30072 bytes
protobuf: 11036 bytes
msgpack: 21783 bytes
- JSON x 1,426 ops/sec ±0.47% (100 runs sampled)
- protocol-buffers x 1,189 ops/sec ±0.39% (100 runs sampled)
- node-protobuf x 264 ops/sec ±0.28% (92 runs sampled)
- ProtoBuf.js x 148 ops/sec ±1.36% (78 runs sampled)
- msgpack x 576 ops/sec ±0.45% (97 runs sampled)
- msgpackjs x 122 ops/sec ±1.74% (80 runs sampled)
- msgpack5 x 30.65 ops/sec ±1.93% (55 runs sampled)

## 800 items ##

JSON: 34372 bytes
protobuf: 12636 bytes
msgpack: 24983 bytes
- JSON x 1,261 ops/sec ±0.48% (101 runs sampled)
- protocol-buffers x 1,072 ops/sec ±0.31% (99 runs sampled)
- node-protobuf x 232 ops/sec ±0.25% (94 runs sampled)
- ProtoBuf.js x 131 ops/sec ±1.78% (77 runs sampled)
- msgpack x 508 ops/sec ±0.20% (98 runs sampled)
- msgpackjs x 109 ops/sec ±1.93% (72 runs sampled)
- msgpack5 x 26.60 ops/sec ±1.78% (49 runs sampled)

## 900 items ##

JSON: 38672 bytes
protobuf: 14236 bytes
msgpack: 28183 bytes
- JSON x 1,120 ops/sec ±0.60% (101 runs sampled)
- protocol-buffers x 912 ops/sec ±0.35% (99 runs sampled)
- node-protobuf x 204 ops/sec ±0.36% (89 runs sampled)
- ProtoBuf.js x 116 ops/sec ±2.02% (76 runs sampled)
- msgpack x 451 ops/sec ±0.34% (98 runs sampled)
- msgpackjs x 101 ops/sec ±1.56% (76 runs sampled)
- msgpack5 x 23.55 ops/sec ±2.29% (43 runs sampled)

## 1000 items ##

JSON: 42974 bytes
protobuf: 15836 bytes
msgpack: 31383 bytes
- JSON x 981 ops/sec ±0.82% (101 runs sampled)
- protocol-buffers x 852 ops/sec ±0.34% (98 runs sampled)
- node-protobuf x 184 ops/sec ±0.26% (88 runs sampled)
- ProtoBuf.js x 101 ops/sec ±2.09% (77 runs sampled)
- msgpack x 406 ops/sec ±0.46% (97 runs sampled)
- msgpackjs x 89.08 ops/sec ±1.75% (78 runs sampled)
- msgpack5 x 20.76 ops/sec ±1.44% (39 runs sampled)
