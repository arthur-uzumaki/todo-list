import { compare, hash } from 'bcryptjs'

import { HashGenerator } from '@/Domain/application/cryptography/hash-generator'
import { HashCompare } from '@/Domain/application/cryptography/hash-comparer'

export class CryptographyHasher implements HashCompare, HashGenerator {
  private HASH_SALT_LENGTH = 8

  has(plain: string): Promise<string> {
    return hash(plain, this.HASH_SALT_LENGTH)
  }

  compare(plain: string, hash: string): Promise<boolean> {
    return compare(plain, hash)
  }
}
