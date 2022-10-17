export const plans = [
  {
    id: 1,
    title: "Standard",
    price: "$100",
    description: ["Complete cloud data warehouse", "Secure data sharing"],
  },
  {
    id: 2,
    title: "Premium",
    price: "$180",
    description: [
      "Multi-cluster warehouse",
      "Premium 24x365 support",
      "Search optimization service",
    ],
  },
  {
    id: 3,
    title: "Enterprice",
    price: "Contact Us",
    description: [
      "PCI compliance",
      "HIPAA support",
      "AWS PrivateLink",
      "Azure PrivateLink",
      "Database failover and failback",
    ],
  },
];

export const countries = ["USA", "Canada", "Germany", "Poland", "China", "Japan"]
  .sort()
  .map((item) => ({ value: item, label: item }));

export const states = ["CA", "TE", "WA"]
  .sort()
  .map((item) => ({ value: item, label: item }));
