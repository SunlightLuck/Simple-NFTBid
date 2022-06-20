pragma solidity ^0.8.0;

abstract contract NFTReceiver {
    function onERC721Received(
        address _operator,
        address _from,
        uint256 _tokenId,
        bytes calldata _data
    ) external virtual returns (bytes4);
}
