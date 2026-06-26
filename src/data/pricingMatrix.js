export const pricingMatrix = {
  plans: {
    Basic: { baseRate: 15 },
    Pro: { baseRate: 35 },
    Enterprise: { baseRate: 75 }
  },

  currencies: {
    USD: {
      symbol: "$",
      multiplier: 1
    },
    INR: {
      symbol: "₹",
      multiplier: 83
    },
    EUR: {
      symbol: "€",
      multiplier: 0.92
    }
  },

  billing: {
    Monthly: 1,
    Annual: 0.8
  }
};
