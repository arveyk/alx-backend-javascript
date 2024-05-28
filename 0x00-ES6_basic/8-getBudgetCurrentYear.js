function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {};

  budget[getCurrentYear.income] = income;
  budget[getCurrentYear.gdp] = gdp;
  budget[getCurrentYear.capita] = capita;

  return budget;
}
