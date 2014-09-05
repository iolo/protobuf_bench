## Benchmarked Modules ##

- JSON (built-in)
- [protocol-buffers](https://github.com/mafintosh/protocol-buffers)
- [protobuf](https://github.com/chrisdew/protobuf)
- [node-protobuf](https://github.com/fuwaneko/node-protobuf)
- [ProtoBuf.js](https://github.com/dcodeIO/ProtoBuf.js)

## Test Platform ##

iMac Late 2012, OS X 10.9.4

- CPU: 2.9 GHz Intel Core i5
- RAM: 8G 1600 MHz DDR3

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

- JSON x 237,516 ops/sec ±0.30% (100 runs sampled)
- protocol-buffers x 155,906 ops/sec ±0.50% (94 runs sampled)
- protobuf x 44,407 ops/sec ±1.36% (96 runs sampled)
- node-protobuf x 25,380 ops/sec ±0.86% (93 runs sampled)
- ProtoBuf.js x 14,862 ops/sec ±1.61% (94 runs sampled)

## 100 items ##

JSON: 4272 bytes
protobuf: 1490 bytes

- JSON x 9,098 ops/sec ±0.68% (102 runs sampled)
- protocol-buffers x 6,599 ops/sec ±0.13% (100 runs sampled)
- protobuf x 1,866 ops/sec ±0.52% (98 runs sampled)
- node-protobuf x 1,293 ops/sec ±0.41% (99 runs sampled)
- ProtoBuf.js x 530 ops/sec ±2.05% (89 runs sampled)

## 200 items ##

JSON: 8572 bytes
protobuf: 3036 bytes

- JSON x 4,673 ops/sec ±0.53% (101 runs sampled)
- protocol-buffers x 3,335 ops/sec ±0.26% (101 runs sampled)
- protobuf x 959 ops/sec ±0.43% (98 runs sampled)
- node-protobuf x 676 ops/sec ±0.32% (98 runs sampled)
- ProtoBuf.js x 274 ops/sec ±1.79% (87 runs sampled)

## 300 items ##

JSON: 12872 bytes
protobuf: 4636 bytes

- JSON x 2,867 ops/sec ±0.49% (99 runs sampled)
- protocol-buffers x 1,876 ops/sec ±0.13% (101 runs sampled)
- protobuf x 655 ops/sec ±0.51% (98 runs sampled)
- node-protobuf x 453 ops/sec ±0.28% (97 runs sampled)
- ProtoBuf.js x 186 ops/sec ±1.73% (82 runs sampled)

## 400 items ##

JSON: 17172 bytes
protobuf: 6236 bytes

- JSON x 2,353 ops/sec ±0.26% (98 runs sampled)
- protocol-buffers x 1,778 ops/sec ±0.35% (101 runs sampled)
- protobuf x 489 ops/sec ±0.52% (95 runs sampled)
- node-protobuf x 342 ops/sec ±0.38% (94 runs sampled)
- ProtoBuf.js x 124 ops/sec ±5.45% (72 runs sampled)

## 500 items ##

JSON: 21472 bytes
protobuf: 7836 bytes

- JSON x 1,861 ops/sec ±0.58% (101 runs sampled)
- protocol-buffers x 1,269 ops/sec ±0.21% (99 runs sampled)
- protobuf x 395 ops/sec ±0.49% (93 runs sampled)
- node-protobuf x 275 ops/sec ±0.43% (96 runs sampled)
- ProtoBuf.js x 113 ops/sec ±1.88% (74 runs sampled)

## 600 items ##

JSON: 25772 bytes
protobuf: 9436 bytes

- JSON x 1,503 ops/sec ±0.38% (99 runs sampled)
- protocol-buffers x 1,157 ops/sec ±0.44% (98 runs sampled)
- protobuf x 333 ops/sec ±0.43% (94 runs sampled)
- node-protobuf x 229 ops/sec ±0.48% (92 runs sampled)
- ProtoBuf.js x 94.07 ops/sec ±2.03% (71 runs sampled)

## 700 items ##

JSON: 30072 bytes
protobuf: 11036 bytes

- JSON x 1,252 ops/sec ±0.62% (97 runs sampled)
- protocol-buffers x 903 ops/sec ±0.36% (100 runs sampled)
- protobuf x 288 ops/sec ±0.42% (94 runs sampled)
- node-protobuf x 196 ops/sec ±0.35% (93 runs sampled)
- ProtoBuf.js x 79.55 ops/sec ±1.94% (70 runs sampled)

## 800 items ##

JSON: 34372 bytes
protobuf: 12636 bytes

- JSON x 1,186 ops/sec ±0.68% (99 runs sampled)
- protocol-buffers x 847 ops/sec ±0.15% (100 runs sampled)
- protobuf x 249 ops/sec ±0.45% (93 runs sampled)
- node-protobuf x 171 ops/sec ±0.46% (89 runs sampled)
- ProtoBuf.js x 68.51 ops/sec ±2.09% (73 runs sampled)

## 900 items ##

JSON: 38672 bytes
protobuf: 14236 bytes

- JSON x 930 ops/sec ±0.77% (97 runs sampled)
- protocol-buffers x 769 ops/sec ±0.39% (98 runs sampled)
- protobuf x 221 ops/sec ±0.57% (89 runs sampled)
- node-protobuf x 152 ops/sec ±0.32% (89 runs sampled)
- ProtoBuf.js x 61.01 ops/sec ±1.98% (65 runs sampled)

## 1000 items ##

JSON: 42974 bytes
protobuf: 15836 bytes

- JSON x 842 ops/sec ±0.52% (100 runs sampled)
- protocol-buffers x 630 ops/sec ±0.38% (95 runs sampled)
- protobuf x 200 ops/sec ±0.33% (87 runs sampled)
- node-protobuf x 137 ops/sec ±0.42% (80 runs sampled)
- ProtoBuf.js x 55.59 ops/sec ±2.04% (60 runs sampled)
