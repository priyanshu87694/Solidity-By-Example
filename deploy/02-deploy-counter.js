const { network } = require("hardhat")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    
    const counter = await deploy ("Counter", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmation: network.config.blockConfirmation || 1
    })

    console.log(`contract deployed at ${counter.address}`)
}

module.exports.tags = ["main", "counter"]