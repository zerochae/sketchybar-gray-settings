# @sketchybar-gray/config

Shared configuration for the sketchybar-gray-ui monorepo.

## Usage

### TypeScript

In your `tsconfig.json`:

```json
{
  "extends": "../../packages/config/src/tsconfig.react.json",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
```

### Prettier

In your `prettier.config.js`:

```js
export { default } from "@sketchybar-gray/config/prettier";
```

### ESLint

In your `eslint.config.js`:

```js
export { default } from "@sketchybar-gray/config/eslint";
```
