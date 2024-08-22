import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ShapeCalculatorModule = buildModule("ShapeCalculatorModule", (m) => {
  const shapeCalculator = m.contract("ShapeCalculator", [], {});

  return { shapeCalculator };
});

export default ShapeCalculatorModule;
