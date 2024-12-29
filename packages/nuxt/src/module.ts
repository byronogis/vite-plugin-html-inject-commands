import type { Options } from '../../shared'
import { addPlugin, addTemplate, createResolver, defineNuxtModule } from '@nuxt/kit'

// Module options TypeScript interface definition
export type ModuleOptions = Options

const DEFAULTS: ModuleOptions = {
  commands: [],
}
const NAME = 'html-inject-commands'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: `nuxt-${NAME}`,
    configKey: 'htmlInjectCommands',
    compatibility: {
      nuxt: '>=3.0.0',
    },
  },
  defaults: DEFAULTS,
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    nuxt.options.build.transpile.push(resolve('./runtime'))

    const htmlInjectCommandsContext = () => Object.entries(options).map(([key, value]) =>
      `export const ${key} = ${JSON.stringify(value, null, 2)}
    `).join('\n')

    nuxt.options.alias[`#${NAME}`] = addTemplate({
      filename: `${NAME}.mjs`,
      getContents: htmlInjectCommandsContext,
    }).dst

    addPlugin(resolve('./runtime/plugin'))

    nuxt.hook('nitro:config', async (config) => {
      config.externals = config.externals || {}
      config.externals.inline = config.externals.inline || []
      config.externals.inline.push(resolve(`./runtime`))
      config.virtual = config.virtual || {}
      config.virtual[`#${NAME}`] = htmlInjectCommandsContext
      config.plugins = config.plugins || []
      config.plugins.push(resolve(`./runtime/server/plugins/${NAME}`))
    })
  },
})
