export abstract class HashGenerator {
  abstract has(plain: string): Promise<string>
}
