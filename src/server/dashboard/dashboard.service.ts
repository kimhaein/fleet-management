import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
  public getList(): string {
    return '성공했다';
  }
}