# vite-plugin-html-inject-commands

<!-- automd:badges color="yellow" license codecov bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/vite-plugin-html-inject-commands?color=yellow)](https://npmjs.com/package/vite-plugin-html-inject-commands)
[![npm downloads](https://img.shields.io/npm/dm/vite-plugin-html-inject-commands?color=yellow)](https://npmjs.com/package/vite-plugin-html-inject-commands)
[![bundle size](https://img.shields.io/bundlephobia/minzip/vite-plugin-html-inject-commands?color=yellow)](https://bundlephobia.com/package/vite-plugin-html-inject-commands)
[![codecov](https://img.shields.io/codecov/c/gh/byronogis/vite-plugin-html-inject-commands?color=yellow)](https://codecov.io/gh/byronogis/vite-plugin-html-inject-commands)
[![license](https://img.shields.io/github/license/byronogis/vite-plugin-html-inject-commands?color=yellow)](https://github.com/byronogis/vite-plugin-html-inject-commands/blob/main/LICENSE)

<!-- /automd -->

Inject commands result into index.html meta tag.

## Install

<!-- automd:pm-install dev -->

```sh
# ✨ Auto-detect
npx nypm install -D vite-plugin-html-inject-commands

# npm
npm install -D vite-plugin-html-inject-commands

# yarn
yarn add -D vite-plugin-html-inject-commands

# pnpm
pnpm install -D vite-plugin-html-inject-commands

# bun
bun install -D vite-plugin-html-inject-commands
```

<!-- /automd -->

## Usage

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import HTMLInjectCommands from 'vite-plugin-html-inject-commands'

export default defineConfig({
  plugins: [
    HTMLInjectCommands({
      commands: [
        // eg: inject git commit hash and date to meta tag under head
        {
          name: 'git:commit',
          command: 'git log -1 --format="hash=%h, date=%aI"',
          errorMsg: 'Failed to get commit info',
        },
      ],
    }),
  ],
})
```

<!-- automd:fetch url="gh:byronogis/.github/main/snippets/readme-contrib-node-pnpm.md" -->

## Contribution

<details>
  <summary>Local development</summary>

- Clone this repository
- Install the latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run tests using `pnpm dev` or `pnpm test`

</details>

<!-- /automd -->

## License

<!-- automd:contributors author="byronogis" license="MIT" -->

Published under the [MIT](https://github.com/byronogis/vite-plugin-html-inject-commands/blob/main/LICENSE) license.
Made by [@byronogis](https://github.com/byronogis) and [community](https://github.com/byronogis/vite-plugin-html-inject-commands/graphs/contributors) 💛
<br><br>
<a href="https://github.com/byronogis/vite-plugin-html-inject-commands/graphs/contributors">
<img src="https://contrib.rocks/image?repo=byronogis/vite-plugin-html-inject-commands" />
</a>

<!-- /automd -->

<!-- automd:with-automd -->

---

_🤖 auto updated with [automd](https://automd.unjs.io)_

<!-- /automd -->
