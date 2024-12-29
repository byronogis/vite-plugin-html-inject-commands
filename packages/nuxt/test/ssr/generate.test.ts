import { readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { setup, useTestContext } from '@nuxt/test-utils'
import { describe, it } from 'vitest'
import { assertMetaTags } from '../utils'

const fixture = fileURLToPath(new URL('../../playground', import.meta.url))

await setup({
  server: false,
  rootDir: fixture,
  nuxtConfig: {
    nitro: {
      prerender: {
        routes: ['/', '/200.html'],
      },
    },
  },
})

describe('ssr: true, target: static, generated files', () => {
  it('generated file', async () => {
    const ctx = useTestContext()
    const generateDir = resolve(ctx.nuxt!.options.nitro.output?.dir || '', 'public')
    const files = ['index.html', '200.html']
    for (const file of files) {
      const contents = await readFile(join(generateDir, file), 'utf-8')
      assertMetaTags(contents)
    }
  })
})
