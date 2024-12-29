export default defineNuxtConfig({
  modules: ['../src/module'],
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
  devtools: { enabled: true },
  compatibilityDate: '2024-12-30',
})
