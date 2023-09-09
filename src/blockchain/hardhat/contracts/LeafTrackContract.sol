//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/KeeperCompatible.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "src/blockchain/hardhat/contracts/MultiWordConsumerContract.sol";

contract LeafTrackContract is
    ERC721,
    ERC721URIStorage,
    KeeperCompatibleInterface,
    MultiWordConsumerContract
{
    using Counters for Counters.Counter;

    Counters.Counter public tokenIdCounter;

    address account;
    string parkName;
    uint256 immutable interval = 2 minutes;
    uint256 immutable price = 0.08 ether;
    uint256 immutable id = 0;
    uint256 lastTimeStamp;

    string[] IpfsUri = [
        // Guacharos
        "https://oriojas.pythonanywhere.com/file_name/Guacharos_2018",
        "https://oriojas.pythonanywhere.com/file_name/Guacharos_2019",
        "https://oriojas.pythonanywhere.com/file_name/Guacharos_2020",
        "https://oriojas.pythonanywhere.com/file_name/Guacharos_2021",
        "https://oriojas.pythonanywhere.com/file_name/Guacharos_2022",
        //     // Tayrona
        "https://oriojas.pythonanywhere.com/file_name/Tayrona_2018",
        "https://oriojas.pythonanywhere.com/file_name/Tayrona_2019",
        "https://oriojas.pythonanywhere.com/file_name/Tayrona_2020",
        "https://oriojas.pythonanywhere.com/file_name/Tayrona_2021",
        "https://oriojas.pythonanywhere.com/file_name/Tayrona_2022",
        //     // Apaporis
        "https://oriojas.pythonanywhere.com/file_name/Apaporis_2018",
        "https://oriojas.pythonanywhere.com/file_name/Apaporis_2019",
        "https://oriojas.pythonanywhere.com/file_name/Apaporis_2020",
        "https://oriojas.pythonanywhere.com/file_name/Apaporis_2021",
        "https://oriojas.pythonanywhere.com/file_name/Apaporis_2022",
        //     // Biolumen
        "https://oriojas.pythonanywhere.com/file_name/Biolumen_2018",
        "https://oriojas.pythonanywhere.com/file_name/Biolumen_2019",
        "https://oriojas.pythonanywhere.com/file_name/Biolumen_2020",
        "https://oriojas.pythonanywhere.com/file_name/Biolumen_2021",
        "https://oriojas.pythonanywhere.com/file_name/Biolumen_2022"
    ];

    event NvdiRegistered(
        bytes32 indexed requestId,
        string mean,
        string std,
        string max,
        string min,
        string uuid,
        string id,
        string parkName
    );

    constructor() ERC721("leaftrack", "LFT") {
        lastTimeStamp = block.timestamp;
        account = msg.sender;
    }

    // Check if upkeep is needed (for Keeper network integration)
    function checkUpkeep(
        bytes calldata /* checkData */
    )
        external
        view
        override
        returns (bool upkeepNeeded, bytes memory /* performData */)
    {
        uint256 tokenId = tokenIdCounter.current() - 1;
        bool done;
        if (numberStage(tokenId) >= 12) {
            done = true;
        }
        upkeepNeeded = !done && ((block.timestamp - lastTimeStamp) > interval);
    }

    // Perform upkeep (for Keeper network integration)
    function performUpkeep(bytes calldata /* performData */) external override {
        if ((block.timestamp - lastTimeStamp) > interval) {
            lastTimeStamp = block.timestamp;
            uint256 tokenId = tokenIdCounter.current() - 1;
            changeNumber(tokenId);
        }
    }
// Mint a new token and set its URI
    function safeMint(
        address _to,
        string memory _name,
        uint _service
    ) external payable onlyOwner {
        require(msg.value >= _service, "The funds don't sufficient");
        payable(_to).transfer(msg.value);
        uint256 tokenId = tokenIdCounter.current();
        tokenIdCounter.increment();
        parkName = _name;
        _safeMint(_to, tokenId);
        _setTokenURI(tokenId, IpfsUri[0]);
    }
// Change the URI and request data
    function changeNumber(uint256 _tokenId) public {
        if (numberStage(_tokenId) >= 12) {
            return;
        }
        uint256 newValue = numberStage(_tokenId) + 1;
        string memory newUri = IpfsUri[newValue];
        _setTokenURI(_tokenId, newUri);
        requestMultipleParameters(newUri);
    }
    // Handle callback from Chainlink VRF (for MultiWordConsumerContract)
    function requestHook(
        bytes32 requestId,
        string memory _mean,
        string memory _std,
        string memory _max,
        string memory _min,
        string memory _uuid,
        string memory _id
    ) public override {
        emit NvdiRegistered(
            requestId,
            _mean,
            _std,
            _max,
            _min,
            _uuid,
            _id,
            parkName
        );
    }

    // determine the stage of number
    function numberStage(uint256 _tokenId) public view returns (uint256) {
        string memory _uri = tokenURI(_tokenId);
        // number I
        if (compareStrings(_uri, IpfsUri[0])) {
            return 0;
        }
        // number II
        if (compareStrings(_uri, IpfsUri[1])) {
            return 1;
        }
        // number III
        if (compareStrings(_uri, IpfsUri[2])) {
            return 2;
        }
        // number IV
        if (compareStrings(_uri, IpfsUri[3])) {
            return 3;
        }
        // number V
        if (compareStrings(_uri, IpfsUri[4])) {
            return 0;
        }
        // number VI
        if (compareStrings(_uri, IpfsUri[5])) {
            return 1;
        }
        // number VII
        if (compareStrings(_uri, IpfsUri[6])) {
            return 2;
        }
        // number VIII
        if (compareStrings(_uri, IpfsUri[7])) {
            return 3;
        }
        // number IX
        if (compareStrings(_uri, IpfsUri[8])) {
            return 1;
        }
        // number X
        if (compareStrings(_uri, IpfsUri[9])) {
            return 2;
        }
        // number XI
        if (compareStrings(_uri, IpfsUri[10])) {
            return 3;
        }
        // number XII
        return 11;
    }

    // helper function to compare strings
    function compareStrings(
        string memory a,
        string memory b
    ) public pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    // Override the _burn function as required by Solidity
    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    // Override the tokenURI function as required by Solidity
    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}
