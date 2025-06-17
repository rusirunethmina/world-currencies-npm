# 🌍 @rusirunethmina/world-currencies-js

A lightweight and developer-friendly JavaScript library for working with world currency data, including **ISO 4217 currency codes**, **names**, and **symbols**.

---

## 📦 Installation

```bash
npm install @rusirunethmina/world-currencies-js
```

or using Yarn:

```bash
yarn add @rusirunethmina/world-currencies-js
```

---

## 🔧 Usage

```js
const currencies = require('@rusirunethmina/world-currencies-js');

// Get all currencies
console.log(currencies.getAll());

// Get currency by ISO code
console.log(currencies.getByCode('USD'));
// Output: { code: 'USD', name: 'United States Dollar', symbol: '$' }

// Get currency by name
console.log(currencies.getByName('Euro'));
// Output: { code: 'EUR', name: 'Euro', symbol: '€' }
```

---

## 📘 API Reference

### `getAll(): Currency[]`

Returns a list of all currencies in the dataset.

```js
[
  { code: 'USD', name: 'United States Dollar', symbol: '$' },
  { code: 'EUR', name: 'Euro', symbol: '€' },
  ...
]
```

---

### `getByCode(code: string): Currency | null`

Returns the currency object that matches the given ISO 4217 code (case-insensitive).

```js
getByCode('inr');
// { code: 'INR', name: 'Indian Rupee', symbol: '₹' }
```

---

### `getByName(name: string): Currency | null`

Returns the currency object that matches the exact name (case-insensitive).

```js
getByName('British Pound');
// { code: 'GBP', name: 'British Pound', symbol: '£' }
```

---

## 🧾 Currency Object Format

Each currency entry has the following format:

```ts
{
  code: string;   // ISO 4217 currency code (e.g., "USD")
  name: string;   // Full currency name (e.g., "United States Dollar")
  symbol: string; // Currency symbol (e.g., "$")
}
```

---

## 🛠 Use Cases

- Currency pickers in forms
- E-commerce or payment apps
- Data normalization tools
- Localization & formatting

---

## 📁 Project Structure

```
.
├── currencies.json       # Raw data file
├── index.js              # Module exports and API
├── package.json
└── README.md
```

---

## 💡 Roadmap

- ✅ JavaScript version (v1)
- 🔜 TypeScript version (`@rusirunethmina/world-currencies`)
- 🔜 Add more metadata (regions, subregions, decimals, etc.)
- 🔜 ISO currency validation

---

## 👫 Contributing

Contributions are welcome!  
Please open an issue or submit a pull request with improvements or new features.

---

## 📜 License

[MIT](./LICENSE)

---

## 🔗 Related Projects

- 🌍 [`@rusirunethmina/world-countries`](https://www.npmjs.com/package/@rusirunethmina/world-countries) *(Coming Soon)* — ISO 3166 country data.
- 💸 [`currency.js`](https://www.npmjs.com/package/currency.js) — A library for money math (not currency lists).

---
