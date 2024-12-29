# nuxt-html-inject-commands

<!-- automd:badges color="yellow" license codecov bundlephobia packagephobia -->

[![npm version](https://img.shields.io/npm/v/nuxt-html-inject-commands?color=yellow)](https://npmjs.com/package/nuxt-html-inject-commands)
[![npm downloads](https://img.shields.io/npm/dm/nuxt-html-inject-commands?color=yellow)](https://npm.chart.dev/nuxt-html-inject-commands)
[![bundle size](https://img.shields.io/bundlephobia/minzip/nuxt-html-inject-commands?color=yellow)](https://bundlephobia.com/package/nuxt-html-inject-commands)
[![codecov](https://img.shields.io/codecov/c/gh/byronogis/vite-plugin-html-inject-commands?color=yellow)](https://codecov.io/gh/byronogis/vite-plugin-html-inject-commands)
[![license](https://img.shields.io/github/license/byronogis/vite-plugin-html-inject-commands?color=yellow)](https://github.com/byronogis/vite-plugin-html-inject-commands/blob/main/LICENSE)

<!-- /automd -->

Inject commands result into index.html meta tag.

## Installation

<!-- automd:pm-install dev -->

```sh
# ✨ Auto-detect
npx nypm install -D nuxt-html-inject-commands

# npm
npm install -D nuxt-html-inject-commands

# yarn
yarn add -D nuxt-html-inject-commands

# pnpm
pnpm install -D nuxt-html-inject-commands

# bun
bun install -D nuxt-html-inject-commands

# deno
deno install --dev nuxt-html-inject-commands
```

<!-- /automd -->

## Usage

```ts
// vite.config.ts
export default defineNuxtConfig({
  modules: ['nuxt-html-inject-commands'],
  htmlInjectCommands: {
    commands: [
      {
        name: 'git:commit',
        command: 'git log -1 --format="hash=%h, date=%aI"',
        errorMsg: 'Failed to get git commit hash',
      },
      {
        name: 'error:withmsg',
        command: 'exit 1',
        errorMsg: 'Failed to execute error command',
      },
      {
        name: 'error:withoutmsg',
        command: 'exit 1',
      },
    ],
  },
})
```

## Type Declarations

<!-- automd:file src="../shared/type.ts" code lang="ts" -->

```ts [type.ts]
export interface Options {
  /**
   * List of commands to be executed
   */
  commands: Command[]
}

export interface Command {
  /**
   * Which will be used to name attribute of the meta tag
   */
  name: string
  /**
   * Command to be executed
   * The result of the command will be injected into content attribute of the meta tag
   */
  command: string
  /**
   * Replease the content of the meta tag when the command fails
   */
  errorMsg?: string
}
```

<!-- /automd -->

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

<!-- automd:with-automd lastUpdate -->

---

_🤖 auto updated with [automd](https://automd.unjs.io) (last updated: Mon Dec 30 2024)_

<!-- /automd -->
