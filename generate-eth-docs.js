const fs = require("fs");
const path = require("path");
const spawnSync = require("child_process").spawnSync;

const MAX_DEPTH = 4;

fs.rmdirSync('node_modules/tender-core/contracts/test',{ recursive: true, force: true })

const args = [
    "node_modules/solidity-docgen/dist/cli.js",
    "--input=node_modules/tender-core/contracts", //\"test/!(mainnet)/**/*.ts\"
    "--exclude=node_modules/tender_core/contracts/test/*.sol",
    "--output=tenderize-contracts",
    "--helpers=config/ethereum-smart-contracts/helpers.js",
    "--templates=config/ethereum-smart-contracts",
    "--solc-module=solc",
    "--solc-settings=" + JSON.stringify({ optimizer: { enabled: true, runs: 200 }})
];

const result = spawnSync("node", args, { stdio: ["inherit", "inherit", "pipe"], encoding: "utf8" });
if (result.stderr.length > 0) {
    throw new Error(result.stderr);
}

function fix(pathName) {
    if (fs.lstatSync(pathName).isDirectory()) {
        for (const fileName of fs.readdirSync(pathName))
            fix(path.join(pathName, fileName));
    }
    else if (pathName.endsWith(".md")) {
        // const parts = pathName.toLowerCase().split(path.sep);
        // const lines = fs.readFileSync(pathName, { encoding: "utf8" }).split("\r").join("").split("\n");
        // fs.unlinkSync(pathName)
        // fs.writeFileSync(
        //     [...parts.slice(0, Math.min(parts.length - 1, MAX_DEPTH)), parts.slice(-1)[0]].join(path.sep),
        //     lines.filter(line => line.trim().length > 0).join("\n\n") + "\n"
        // );
    }
}

function clear(pathName) {
    if (fs.lstatSync(pathName).isDirectory()) {
        const fileNames = fs.readdirSync(pathName);
        if (fileNames.length == 0)
            fs.rmdirSync(pathName);
        else for (const fileName of fileNames)
            clear(path.join(pathName, fileName));
    }
}

fs.rmdirSync("tenderize-contracts/libs",{ recursive: true, force: true })
fs.rmdirSync("tenderize-contracts/test",{ recursive: true, force: true })
fs.rmSync("tenderize-contracts/liquidity/LiquidityPoolToken.md")
fs.rmSync("tenderize-contracts/liquidity/IERC20Decimals.md")
fs.rmSync("tenderize-contracts/liquidity/ISwapRouterWithWETH.md")
fs.rmSync("tenderize-contracts/liquidity/TenderFarm.md")
fs.rmSync("tenderize-contracts/liquidity/UniswapPoolMock.md")
fs.rmSync("tenderize-contracts/liquidity/UniswapRouterMock.md")
fs.rmSync("tenderize-contracts/liquidity/TenderSwap.md")
fs.rmSync("tenderize-contracts/liquidity/SwapUtils.md")
fs.rmdirSync("tenderize-contracts/tenderizer/integrations",{ recursive: true, force: true })
fs.rmSync("tenderize-contracts/tenderizer/Tenderizer.md")
fs.rmSync("tenderize-contracts/tenderizer/ITotalStakedReader.md")
fs.rmSync("tenderize-contracts/token/TenderToken.md")
fs.rmSync("tenderize-contracts/token/IWETH.md")
fs.rmSync("tenderize-contracts/token/WETHMock.md")
fs.rmSync("tenderize-contracts/Registry.md")
fs.rmSync("tenderize-contracts/TokenFaucet.md")

fs.renameSync("tenderize-contracts/liquidity/ITenderFarm.md", "tenderize-contracts/liquidity/TenderFarm.md")
fs.renameSync("tenderize-contracts/liquidity/ITenderSwap.md", "tenderize-contracts/liquidity/TenderSwap.md")
fs.renameSync("tenderize-contracts/tenderizer/ITenderizer.md", "tenderize-contracts/tenderizer/Tenderizer.md")
fs.renameSync("tenderize-contracts/token/ITenderToken.md", "tenderize-contracts/token/TenderToken.md")

fix("tenderize-contracts");
clear("tenderize-contracts");

// fs.copyFileSync("node_modules/@bancor/contracts-solidity/README.md", "tenderize-contracts/README.md");

// fs.writeFileSync(
//     "tenderize-contracts/README.md",
//     fs.readFileSync(
//         "tenderize-contracts/README.md",
//         { encoding: "utf8" }
//     )
//     .split("](solidity/")
//     .join("](https://github.com/bancorprotocol/contracts-solidity/blob/master/solidity/")
// );


