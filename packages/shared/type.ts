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
