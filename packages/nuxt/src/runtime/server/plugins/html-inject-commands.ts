import type { NitroAppPlugin } from 'nitropack'
import type { Options } from '../../../../../shared'
import { exec } from 'node:child_process'
// @ts-expect-error TODO ignore this line
import { commands } from '#html-inject-commands'

export default <NitroAppPlugin> function (nitroApp) {
  nitroApp.hooks.hook('render:html', async (html) => {
    const getMetaTag = (name: string, content: string): string => {
      return `<meta name="${name}" content="${content}">`
    }

    const tasks = (commands as Options['commands']).map(({ name, command, errorMsg }) => {
      return new Promise<string>((resolve) => {
        exec(command, (error, stdout) => error
          ? resolve(getMetaTag(name, errorMsg ?? `Failed to excute command: ${command}`))
          : resolve(getMetaTag(name, `${stdout.trim()}`)))
      })
    })

    return Promise.all(tasks).then((tags) => {
      html.head.push(...tags)
    })
  })
}
