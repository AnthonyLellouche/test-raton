# Design Tokens

## Installation

### Configure the registry

Check that your .npmrc contains the following registry.

```bash
@petank-ui:registry=https://nexus.forge.enovacom.cloud/repository/npm-group/
```

### Install the package

```bash
npm i @petank-ui/design-tokens
```

## How to use

The generated tokens are available inside `/dist` folder

Tokens are available in several formats : css, scss, less and ts.

The dist directory tree is the following :


```
|──dist/
|   ├── css/
|      ├── _variables.css
       ├── color-scheme.css

|   ├── scss/
|      ├── _variables.scss
       ├── _color-scheme.scss
       
|   ├── less/
|      ├── _variables.less
       ├── color-scheme.less
       
|   ├── ts/
|      ├── base/
|         ├── color/
|           ├── color.ts/
|           ├── color.d.ts/
|           ├── index.ts/
|         ├── darkPalette/
|           ├── darkPalette.ts/
|           ├── darkPalette.d.ts/
|           ├── index.ts/
|         ├── lightPalette/
|           ├── lightPalette.ts/
|           ├── lightPalette.d.ts/
|           ├── index.ts/
|         ├── font/
|           ├── font.ts/
|           ├── font.d.ts/
|           ├── index.ts/
|         ├── radius/
|           ├── radius.ts/
|           ├── radius.d.ts/
|           ├── index.ts/
|         ├── spacing/
|           ├── spacing.ts/
|           ├── spacing.d.ts/
|           ├── index.ts/
|         ├── shadows/
|           ├── shadows.ts/
|           ├── shadows.d.ts/
|           ├── index.ts/
|         ├── typography/
|           ├── typography.ts/
|           ├── typography.d.ts/
|           ├── index.ts/
|         ├── index.js/
|      ├── index.js
|      ├── tokens.d.ts
|      ├── tokens.js  
```


### Import

For js/ts project :

```shell
import tokens from '@petank-ui/design-tokens';
```
For css
```css
@import "~@petank-ui/design-tokens/dist/css/_variables.css";
​ :root {
	--ifm-color-primary: var(--petankLightPrimaryMain);
	--ifm-color-primary-dark: var(--petankLightPrimaryDark);
	--ifm-color-primary-light: var(--petankLightPrimaryLight);
}
```

## Style dictionary

This project uses [**Style dictionary**](https://v4.styledictionary.com/) for creating design tokens.
Design tokens are the platform-agnostic way to define design decisions, and are the main input for Style Dictionary.
Design tokens are created by the UI/UX team with Figma [**Tokens Studio plugin**](https://docs.tokens.studio/).
This plugin generate multiple JSON files used by Style Dictionary to create tokens.

### Category / Type / Item

**This structure is not required.** This is just one example of how to structure your design tokens.
The token's name follow this pattern 

<p align="center">
	<img title="a title" alt="schéma_nommage_tokens" src="static/img/token_naming_schema.svg"/>
</p>

Examples:

- colorBackgroundButtonPrimaryActive = #3FD752
- sizeFontModalHeader = 1.5rem
- fontEsv2GraphBlock = Roboto Mono

For more informations about this pattern: [Amazon/style-dictionary](https://amzn.github.io/style-dictionary/#/properties?id=category-type-item).
