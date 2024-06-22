import { exec } from 'node:child_process'
import type { HtmlTagDescriptor, Plugin } from 'vite'
import type { Options } from './type'

export default function htmlInjectCommands(options: Options): Plugin {
  if (!options || !Array.isArray(options.commands))
    throw new Error('Invalid options')

  return {
    name: 'vite-plugin-html-inject-commands',
    transformIndexHtml(_html) {
      const commands = options.commands

      const getMetaTag = (name: string, content: string): HtmlTagDescriptor => ({
        tag: 'meta',
        injectTo: 'head-prepend',
        attrs: { name, content },
      })

      const tasks = commands.map(({ name, command, errorMsg }) => {
        return new Promise<HtmlTagDescriptor>((resolve) => {
          exec(command, (error, stdout) => error
            ? resolve(getMetaTag(name, errorMsg ?? `Failed to excute command: ${command}`))
            : resolve(getMetaTag(name, `${stdout.trim()}`)))
        })
      })

      return Promise.all(tasks)
    },
  }
}
