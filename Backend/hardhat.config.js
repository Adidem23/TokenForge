require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.20",
  networks:{
    hardhat:{},
    mumbai:{
      url:"https://polygon-mumbai.g.alchemy.com/v2/Jd5fs7i4WTUO9EMYTz5SSKmg89IsszMr",
      accounts:["5ad7f7823ac4a9518b1ce47b007c63c150bc31382d6878d48cce4abb2cc707ef"]
    }

  }
};