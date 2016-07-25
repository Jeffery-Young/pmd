# make 默认make命令只做编译
default:
	fis3 release --dest=./build --root=./src/ --file=./fisconfig.js -c
	rm -rf ./output/*
	fis3 release --dest=./output --root=./src/ --file=./fisconfig-output.js -c
	cd ./output && tar -zcvf ./pmd.tar.gz ./* --exclude=css --exclude=js
dev:
	fis3 server start --root=./  
	fis3 release --dest=./build --root=./src/ --file=./fisconfig.js -w
pack:
	rm -rf ./output/*
	fis3 release --dest=./output --root=./src/ --file=./fisconfig-output.js -c
	cd ./output && tar -zcvf ./pmd.tar.gz ./* --exclude=css --exclude=js
