export class ApiRes<T> {
  constructor(public data: T) {
    this.data = data;
  }
}
