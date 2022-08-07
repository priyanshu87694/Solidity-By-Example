const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const args = ["0x4093a6dfc8DA488950cF12272c954EA708C432A2", "BMW"]

    const carFactory = await deploy("CarFactory", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmation || 1,
    })
}

module.exports.tags = ["main", "contractCreatesAnotherContract"]