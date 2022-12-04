export declare class complex {
    /** The real component of the complex number */
    private _real;
    /** The imaginary component of the complex number */
    private _img;
    /**
    * Construct a new complex number from two real numbers
    * @param real - The real component
    * @param imaginary - The imaginary component
    * @returns Complex number constructed from given parameters
    */
    constructor(real: number, imaginary: number);
    /**
    * Get the real component of the complex number
    * @returns The real component - this._real
    */
    get real(): number;
    /**
    * Get the imaginary component of the complex number
    * @returns The imaginary component - this._imaginary
    */
    get img(): number;
    /**
    * Add two complex numbers
    * @param other - The 2nd complex number operand
    * @returns x + other
    */
    add(other: complex): complex;
    /**
    * Subtract two complex numbers
    * @param other - The 2nd complex number operand
    * @returns x - other
    */
    sub(other: complex): complex;
    /**
    * Multiply two complex numbers
    * @param other - The 2nd complex number operand
    * @returns The product of x / other
    */
    mult(other: complex): complex;
    /**
    * Divide two complex numbers
    * @param other - The 2nd complex number operand
    * @returns The result of the division x / other
    */
    div(other: complex): complex;
    /**
    * Scalar multiply a complex number, by a real number lambda
    * @param lambda - The real number scaling factor
    * @returns The scaled version of the complex number
    */
    scalarMult(lambda: number): complex;
    /**
    * Get the magnitude(absolute value) of the complex number
    * @returns The magnitude: sqroot(a^2 + b^2)
    */
    mag(): number;
    /**
    * Get the conjugate of the complex number
    * @returns The conjugate of the complex number:  a + (-bi)
    */
    conj(): complex;
    /**
    * Get the negation of the complex number
    * @returns The negation of the complex number:  -a + (-bi)
    */
    neg(): complex;
    /**
    * Get the arguement of the complex number, the angle in radians with the x-axis in polar coordinates
    * @returns The arguement of the complex number
    */
    arg(): number;
    /**
    * Get the exponential of the complex number
    * @returns The exponential of the complex number: (exp(a) * cos(b)) + (exp(a) * sin(b))(i)
    */
    exp(): complex;
    /**
    * Get the natural base e log of the complex number
    * @returns The natural base e log of the complex number
    */
    log(): complex;
    /**
    * Get the sine of the complex number
    * @returns The sine of the complex number
    */
    sin(): complex;
    /**
    * Get the cosine of the complex number
    * @returns The cosine of the complex number
    */
    cos(): complex;
    /**
    * Get the tangent of the complex number
    * @returns The tangent of the complex number
    */
    tan(): complex;
    /**
    * Static method to construct a complex number in rectangular form from polar coordinates
    * @param theta - The angle/arguement
    * @param magnitude - The magnitude
    * @returns Complex number in rectangular coordinates constructed from the arguement theta & the magnitude
    */
    static fromPolar(theta: number, magnitude: number): complex;
    /**
    * Get the complex number's polar coordinates as a tuple
    * @returns A tuple containing the arguement/angle of the complex number as the 1st element, and the magnitude as the 2nd
    */
    toPolar(): [number, number];
    /**
    * Get the complex number as a string
    * @returns String representation of the complex number
    */
    toString(): string;
    /**
    * Compare two complex numbers for equality
    * @param other - The 2nd complex number operand
    * @returns true if equal, else false
    */
    equals(other: complex): boolean;
}
