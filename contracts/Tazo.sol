pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Tazo is ERC721{ 
    constructor() ERC721("Tazo", "TZX") public {
    }

    function mint(address _to, string memory _tokenURI) public returns(bool){
        uint _tokenId = totalSupply().add(1);
        _mint( _to, _tokenId);
        _setTokenURI(_tokenId, _tokenURI);
        return true;
    }
}