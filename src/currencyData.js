const currencyData = {
  "valid":true,
  "timestamp":1582195447,
  "base":"USD",
  "rates": [
    {
      "id": 1,
      "name": "AED",
      "value": 3.67338,
    },
    {
      "id": 2,
      "name": "AFN",
      "value": 77.8079,
    },
    {
      "id": 3,
      "name": "ALL",
      "value": 113.23065,
    },
    {
      "id": 4,
      "name": "AMD",
      "value": 478.14251,
    },
    {
      "id": 5,
      "name": "AOA",
      "value": 493.9822,
    },
    {
      "id": 6,
      "name": "ARS",
      "value": 61.66319,
    },
    {
      "id": 7,
      "name": "AUD",
      "value":1.50684,
    },
    {
      "id": 8,
      "name": "AWG",
      "value": 1.8,
    },
    {
      "id": 9,
      "name": "AZN",
      "value":1.7,
    },
    {
      "id": 10,
      "name": "BAM",
      "value": 1.811,
    },
    {
      "id": 11,
      "name": "BBD",
      "value": 2.01732,
    },
    {
      "id": 12,
      "name": "UAH",
      "value": 24.50375,
    },
  ]
};

export const currencyPromise = (state = true) => {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve(currencyData);
    } else {
      reject('Error');
    }
  });
}