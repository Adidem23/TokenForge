// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.20;

interface IERC20 {
    function transfer(address to, uint256 amount) external  returns (bool);

    function balanceOf(address account) external view returns (uint256);
}

contract Faucet {
    address payable Owner;

    IERC20 public token;

    uint256 public withdrawalAmount=5*(10**18);

    uint256 public LockTime=1 minutes;

    event Deposite(address from,uint256 amount);

    mapping (address => uint256) nextAccessTime;

    constructor(address tokenAddress) payable {
        token=IERC20(tokenAddress);
        Owner=payable(msg.sender);
    }

    function requestTokens() public {

        require(msg.sender!=address(0),"Request Must Not Originate From Zero Account");

        require(token.balanceOf(address(this))>=withdrawalAmount,"Faucet Doesnot Have Sufficient Amount to Display");

        require(block.timestamp>=nextAccessTime[msg.sender],"Insufficient Time Elapsed");

       nextAccessTime[msg.sender] = block.timestamp+LockTime;

       token.transfer(msg.sender,withdrawalAmount);
    }

    receive() external payable{
       emit Deposite(msg.sender,msg.value);
    }

    function getBalance() external view returns(uint256){
      return  token.balanceOf(address(this));
    }

    function setwithDrawAmount(uint256 amount) public onlyOwner{
      withdrawalAmount=amount*(10**18);
    }

    function setLockTime(uint256 amount) public onlyOwner(){
        LockTime=amount*1 minutes;
    }

    function withDraw() external  onlyOwner{
        token.transfer(msg.sender,token.balanceOf(address(this)));
    }

    modifier onlyOwner {
        require(msg.sender==Owner,"Owner Can Call This function");
        _;
    }

}