import { HttpException, HttpStatus } from '@nestjs/common';

export class CreationError extends HttpException {
  constructor(httpStatus: HttpStatus) {
    super("Couldn't create character", httpStatus);
  }
}
