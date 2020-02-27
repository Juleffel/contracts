pragma solidity >=0.4.16 <0.7.0;

contract test {
    /// @dev Calculates a rectangle's surface and perimeter.
    /// @param w Width of the rectangle.
    /// @param h Height of the rectangle.
    /// @return s The calculated surface.
    /// @return p The calculated perimeter.
    function rectangle(uint w, uint h) public pure returns (uint s, uint p) {
        s = w * h;
        p = 2 * (w + h);
    }

    function myFunction() public pure returns(uint256 myNumber) {
        return (23456);
    }
}