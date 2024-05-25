const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const GumballModule = buildModule("GumballModule", (m) => {
  const gumball = m.contract("GumballMachine");

  return { gumball };
});

module.exports = GumballModule;