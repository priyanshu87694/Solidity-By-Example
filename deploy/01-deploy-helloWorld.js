const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const helloWorld = await deploy("HelloWorld", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmation || 1,
    })
    // const string = await helloWorld.methods.helloWorld().call()
}

module.exports.tags = ["main", "helloWorld"]