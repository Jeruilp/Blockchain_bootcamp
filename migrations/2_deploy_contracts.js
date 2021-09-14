var HelloBlockchain = artifacts.require("HelloBlockchain");
var HelloWorld = artifacts.require("HelloWorld");
var Arg = "Hello world";
module.exports = deployer => {
    deployer.deploy(HelloBlockchain, Arg);
    deployer.deploy(HelloWorld, "Yepaleee");
};