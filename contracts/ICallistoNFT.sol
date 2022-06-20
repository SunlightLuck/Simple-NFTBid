pragma solidity ^0.8.0;

interface ICallistoNFT {
    event NewBid(
        uint256 indexed tokenID,
        uint256 indexed bidAmount,
        bytes bidData
    );
    event TokenTrade(
        uint256 indexed tokenID,
        address indexed new_owner,
        address indexed previous_owner,
        uint256 priceInWEI
    );
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 indexed tokenId
    );
    event TransferData(bytes data);

    struct Properties {
        // In this example properties of the given NFT are stored
        // in a dynamically sized array of strings
        // properties can be re-defined for any specific info
        // that a particular NFT is intended to store.

        /* Properties could look like this:
        bytes   property1;
        bytes   property2;
        address property3;
        */

        string[] properties;
    }

    function name() external view returns (string memory);

    function symbol() external view returns (string memory);

    function standard() external view returns (string memory);

    function balanceOf(address _who) external view returns (uint256);

    function ownerOf(uint256 _tokenId) external view returns (address);

    function transfer(
        address _to,
        uint256 _tokenId,
        bytes calldata _data
    ) external returns (bool);

    function silentTransfer(address _to, uint256 _tokenId)
        external
        returns (bool);

    function priceOf(uint256 _tokenId) external view returns (uint256);

    function bidOf(uint256 _tokenId)
        external
        view
        returns (
            uint256 price,
            address payable bidder,
            uint256 timestamp
        );

    function getTokenProperties(uint256 _tokenId)
        external
        view
        returns (Properties memory);

    function getTokenProperty(uint256 _tokenId, uint256 _propertyId)
        external
        view
        returns (string memory);

    function setBid(uint256 _tokenId, bytes calldata _data) external payable; // bid amount is defined by msg.value

    function setPrice(uint256 _tokenId, uint256 _amountInWEI) external;

    function withdrawBid(uint256 _tokenId) external returns (bool);

    function getUserContent(uint256 _tokenId)
        external
        view
        returns (string memory _content, bool _all);

    function setUserContent(uint256 _tokenId, string calldata _content)
        external
        returns (bool);
}
