import { HashCompare } from '@/Domain/application/cryptography/hash-comparer'
import { Module } from '@nestjs/common'
import { CryptographyHasher } from '@/infra/cryptography/cryptography-hasher'
import { HashGenerator } from '@/Domain/application/cryptography/hash-generator'
import { Encrypter } from '@/Domain/application/cryptography/encrypter'
import { JwtEncrypter } from '@/infra/cryptography/jwt-encrypter'

@Module({
  providers: [
    { provide: HashCompare, useClass: CryptographyHasher },
    { provide: HashGenerator, useClass: CryptographyHasher },
  ],
  exports: [HashCompare, HashGenerator],
})
export class CryptographyModule {}
