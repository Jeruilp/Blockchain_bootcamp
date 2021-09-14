const HelloWorld = artifacts.require("HelloWorld");

contract('HelloWorld', async(accounts) => {

//         // const HelloWorldInstance = await HelloWorld.deployed();
//         const HelloWorldInstance =  HelloWorld.deployed();
//         var returnValue1;
//         // returnValue1 = await HelloWorld.SayHello.call();
//         returnValue1 =  HelloWorld.SayHello.call();

//         // Write an assertion below to check the return value of ResponseMessage.
//         assert.equal('something', 'something', 'A correctness property about ResponseMessage of HelloBlockchain');
    
//         console.log(returnValue1);
// // });

    var helloWorld; 

    HelloWorld.deployed().then(function(contract){ helloWorld = contract;});
    helloWorld.SayHello.call().then(console.log);

});
