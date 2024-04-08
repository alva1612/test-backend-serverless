export interface IApiService {
  get<T>(url: string, params?: object): Promise<T>;
}
