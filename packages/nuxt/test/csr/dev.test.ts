import { fileURLToPath } from 'node:url'
import { $fetch, setup } from '@nuxt/test-utils'
import { describe, it } from 'vitest'
import { assertMetaTags } from '../utils'

const fixture = fileURLToPath(new URL('../../playground', import.meta.url))

describe('ssr: false, dev mode', async () => {
  await setup({
    server: true,
    dev: true,
    fixture,
    nuxtConfig: { ssr: false },
  })

  it('injects command meta tags', async () => {
    const html = await $fetch('/')
    assertMetaTags(html)
  })
})
