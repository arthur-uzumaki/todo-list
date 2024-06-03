import { BadRequestException, PipeTransform } from '@nestjs/common'
import { fromError } from 'zod-validation-error'
import { ZodSchema, ZodError } from 'zod'

export class ZodValidadePipes implements PipeTransform {
  constructor(private readonly schema: ZodSchema) {}
  transform(value: unknown) {
    try {
      return this.schema.parse(value)
    } catch (error) {
      if (error instanceof ZodError) {
        throw new BadRequestException({
          statusbar: 400,
          message: 'validade failed.',
          errors: fromError(error),
        })
      }
      throw new BadRequestException('validade failed')
    }
    return value
  }
}
