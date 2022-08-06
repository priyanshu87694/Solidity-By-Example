const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const simpleStorage = await deploy("SimpleStorage", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmation || 1,
    })
}

module.exports.tags = ["main", "simpleStorage"]