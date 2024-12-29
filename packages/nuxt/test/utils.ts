import { expect } from 'vitest'

export function assertMetaTags(html: string) {
  expect(html).toMatch(/<meta name="git:commit" content="hash=\w+, date=.+">/)
  expect(html).toMatch(/<meta name="error:withmsg" content="Failed to execute error command">/)
  expect(html).toMatch(/<meta name="error:withoutmsg" content="Failed to excute command: exit 1">/)
}
