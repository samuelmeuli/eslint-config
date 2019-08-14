# eslint-config

These are my personal configurations for [ESLint](https://github.com/eslint/eslint). They are based on [Airbnb's ESLint configurations](https://github.com/airbnb/javascript).

## Base configuration

1. Install the required packages:

```sh
npx install-peerdeps --dev eslint-config-airbnb-base
yarn add --dev @samuelmeuli/eslint-config eslint-plugin-simple-import-sort

# If you are using TypeScript, also run the following:
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser

# If you are using Prettier, also run the following:
yarn add --dev eslint-config-prettier
```

2. Create a `.eslintrc.yml` file with the following content in your project root:

```yml
root: true

extends:
  - "@samuelmeuli/eslint-config/base"
  # OR
  - "@samuelmeuli/eslint-config/base-typescript"

  # If you are using Prettier, also add the following line:
  - "prettier"
  # If you are using TypeScript and Prettier, also add the following line:
  - "prettier/@typescript-eslint"
```

3. Add a linting script to your `package.json` file:

```js
{
  "scripts": {
    "lint:js": "eslint --fix --max-warnings 0 .",
    // OR
    "lint:ts": "eslint --ext .ts --fix --max-warnings 0 ."
  }
}
```

## React configuration

1. Install the required packages:

```sh
npx install-peerdeps --dev eslint-config-airbnb
yarn add --dev @samuelmeuli/eslint-config eslint-plugin-simple-import-sort

# If you are using TypeScript, also run the following:
yarn add --dev @typescript-eslint/eslint-plugin @typescript-eslint/parser

# If you are using Prettier, also run the following:
yarn add --dev eslint-config-prettier
```

2. Create a `.eslintrc.yml` file with the following content in your project root:

```yml
root: true

extends:
  - "@samuelmeuli/eslint-config/react"
  # OR
  - "@samuelmeuli/eslint-config/react-typescript"

  # If you are using Prettier, also add the following line:
  - "prettier"
  # If you are using TypeScript and Prettier, also add the following line:
  - "prettier/@typescript-eslint"
```

3. Add a linting script to your `package.json` file:

```js
{
  "scripts": {
    "lint:js": "eslint --ext .js,.jsx --fix --max-warnings 0 .",
    // OR
    "lint:ts": "eslint --ext .ts,.tsx --fix --max-warnings 0 ."
  }
}
```
