const sleep = (ms) => new Promise((resolve) => setTimeout(() => resolve, ms));

const RandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + 1;

export const countryService = {
  getCountries: async () => {
    await sleep(RandomInt(1000, 3000));
    return [
      {
        id: 1,
        name: "United States",
      },
      {
        id: 2,
        name: "Canada",
      },
      {
        id: 3,
        name: "Mexico",
      },
    ];
  },
};
