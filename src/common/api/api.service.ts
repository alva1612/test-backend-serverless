import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom, map } from 'rxjs';

import { IApiService } from './api.service.interface';

@Injectable()
export class ApiService implements IApiService {
  constructor(private readonly httpService: HttpService) {}

  async get<T>(url: string, params?: Record<string, string>): Promise<T> {
    try {
      const source$ = this.httpService
        .get(url, { params })
        .pipe(map((response) => response.data));
      const res = await lastValueFrom(source$);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}
