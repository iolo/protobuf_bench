PROTOC = /usr/local/Cellar/protobuf/2.5.0/bin/protoc

desc:
	$(PROTOC) --descriptor_set_out=packet.desc --include_imports packet.proto