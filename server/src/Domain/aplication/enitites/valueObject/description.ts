export class Description {
  private readonly description: string

  private validateDescription(description: string): boolean {
    return description.length > 5 && description.length < 240
  }

  constructor(description: string) {
    const isDescriptionValidate = this.validateDescription(description)

    if (!isDescriptionValidate) {
      throw new Error('description length erro.')
    }
    this.description = description
  }

  public get value(): string {
    return this.description
  }
}
