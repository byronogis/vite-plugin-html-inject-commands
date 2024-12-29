import { fileURLToPath } from 'node:url'
import { $fetch, setup } from '@nuxt/test-utils'
import { describe, it } from 'vitest'
import { assertMetaTags } from '../utils'

const fixture = fileURLToPath(new URL('../../playground', import.meta.url))

describe('ssr: false, target: server, prod mode', async () => {
  await setup({
    server: true,
    build: true,
    fixture,
    nuxtConfig: { ssr: false },
  })

  it('render', async () => {
    const html = await $fetch('/')
    assertMetaTags(html)
  })
})
