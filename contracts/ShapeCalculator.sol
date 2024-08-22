// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/// @title Shape Calculator
/// @notice This contract provides functions to conveniently calculate the areas of different shapes..
///  @dev All functions calls are currently implemented without side effects.
contract ShapeCalculator {
    /// @notice The address of the contract creator.
    address public immutable creator;

    /// @notice Sets the creator of the address to the address that deploys it.
    constructor() {
        creator = msg.sender;
    }

    /// @notice Calculates the area of a rectangle.
    /// @param width The width of the rectangle.
    /// @param height The height of the rectangle.
    /// @return The area of rectangle.
    function rectangle(uint width, uint height) public pure returns (uint) {
        return width * height;
    }

    /// @notice Calculates the area of a square.
    /// @notice Calls `rectangle` internally with provides args.
    /// @param side The length of the side of the square.
    /// @return The area of a square.
    function square(uint side) external pure returns (uint) {
        return rectangle(side, side);
    }

    /// @notice Calculates the area of triangle.
    /// @param base The length of the base of the triangle.
    /// @param height The height of the triangle.
    /// @return The area of the triangle.
    function triangle(uint base, uint height) external pure returns (uint) {
        return (base * height) / 2;
    }

    /// @notice Gets the contract creator.
    /// @return The address of the contract creator.
    function getCreator() external view returns (address) {
        return creator;
    }
}
