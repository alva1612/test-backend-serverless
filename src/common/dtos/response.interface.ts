import { ApiProperty } from '@nestjs/swagger';

export class ApiRes<T> {
  @ApiProperty()
  public data: T;
  @ApiProperty({ example: 200 })
  public statusCode: number;

  constructor(data: T, statusCode: number) {
    this.data = data;
    this.statusCode = statusCode;
  }
}
