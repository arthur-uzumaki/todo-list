import { HashCompare } from '@/Domain/application/cryptography/hash-comparer'
import { HashGenerator } from '@/Domain/application/cryptography/hash-generator'

export class FakeHash implements HashGenerator, HashCompare {
  async has(plain: string): Promise<string> {
    return plain.concat('-hashed')
  }

  async compare(plain: string, hash: string): Promise<boolean> {
    return plain.concat('-hashed') === hash
  }
}
