import { expect } from "chai";
import hre from "hardhat";

describe("ShapeCalculator", () => {
  async function deployShapeCalculator() {
    const [creator, otherAccount] = await hre.ethers.getSigners();

    const ShapeCalculator = await hre.ethers.getContractFactory(
      "ShapeCalculator"
    );

    const shapeCalculator = await ShapeCalculator.deploy();

    return { creator, otherAccount, shapeCalculator };
  }

  describe("Deployment", () => {
    it("Should set the right creator", async () => {
      const { creator, shapeCalculator } = await deployShapeCalculator();

      expect(await shapeCalculator.creator()).to.equal(creator.address);
    });
  });

  describe("Rectangle", () => {
    it("Should calculates and return the area of a rectangle", async () => {
      const { shapeCalculator } = await deployShapeCalculator();

      const width = 12;
      const height = 6;
      const expectedArea = 72;

      const calculatedArea = await shapeCalculator.rectangle(width, height);

      expect(calculatedArea).to.equals(expectedArea);
    });
  });

  describe("Square", () => {
    it("Should calculates and return the area of a square", async () => {
      const { shapeCalculator } = await deployShapeCalculator();

      const side = 7;

      const expectedArea = 49;

      const calculatedArea = await shapeCalculator.square(side);

      expect(calculatedArea).to.equals(expectedArea);
    });
  });

  describe("Triangle", () => {
    it("Should calculates and return the area of a triangle", async () => {
      const { shapeCalculator } = await deployShapeCalculator();

      const base = 3;
      const height = 4;
      const expectedArea = 6;

      const calculatedArea = await shapeCalculator.triangle(base, height);

      expect(calculatedArea).to.equals(expectedArea);
    });
  });
});
