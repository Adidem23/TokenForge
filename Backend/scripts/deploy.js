const hre = require("hardhat");

async function main() {
  const contract = await hre.ethers.getContractFactory('Faucet');
  const deploy = await contract.deploy("0xfd69Ac19BE151600274cfA426c3a5dFBA028fC72");
  const contractaddress = await deploy.getAddress();
  console.log(`Contact Address of deployed Contract is : ${contractaddress}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});