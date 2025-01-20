import { describe, it, expect } from "vitest";
import { calculateTotalDiscount } from "../lib/helpers";

describe("calculateTotalDiscount", () => {
  it("should calculate effective discount correctly for products with various discounts", () => {
    const products: any = [
      { price: 100, discountPercentage: 15 },
      { price: 200, discountPercentage: 20 },
    ];

    const result = calculateTotalDiscount(products);

    expect(result.effectiveDiscount).toBe("20.00");
  });

  it("should handle no discounts (0%) correctly", () => {
    const products: any = [
      { price: 100, discountPercentage: 0 },
      { price: 200, discountPercentage: 0 },
    ];

    const result = calculateTotalDiscount(products);

    expect(result.effectiveDiscount).toBe("0.00");
  });

  it("should handle mixed discounts", () => {
    const products: any = [
      { price: 100, discountPercentage: 10 },
      { price: 200, discountPercentage: 5 },
    ];

    const result = calculateTotalDiscount(products);

    expect(result.effectiveDiscount).toBe("5.00");
  });

  it("should handle empty product list", () => {
    const products: any[] = [];

    const result = calculateTotalDiscount(products);

    expect(result.effectiveDiscount).toBe("NaN"); // ponieważ dzielimy przez 0
  });

  it("should handle single product correctly", () => {
    const products: any = [{ price: 100, discountPercentage: 15 }];

    const result = calculateTotalDiscount(products);

    expect(result.effectiveDiscount).toBe("20.00");
  });

  it("should handle all products with no price (zero price)", () => {
    const products: any = [
      { price: 0, discountPercentage: 10 },
      { price: 0, discountPercentage: 20 },
    ];

    const result = calculateTotalDiscount(products);

    expect(result.effectiveDiscount).toBe("NaN"); // dzielenie przez 0
  });
});
