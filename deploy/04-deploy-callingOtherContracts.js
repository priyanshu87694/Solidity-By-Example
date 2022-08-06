const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    // dploying Callee contract first
    const callee = await deploy("Callee", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmation || 1,
    })
    // deploying Caller contract
    const caller = await deploy("Caller", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmation || 1,
    })
}

module.exports.tags = ["main", "callingOtherContracts"]