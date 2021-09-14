// SPDX-License-Identifier: MIT
pragma solidity >0.5.11;

contract HelloWorld {

    string _name; 

    //Hay que indicar donde se almacena el input (en este caso en la memoria)
    constructor( string memory name ) public {
        _name = name; 
    }

    // View = consulta de lectura, no tiene coste de gas
    function SayHello() public view returns ( string memory ) {
        
        return _name;
    }
}