import {Controller, Get, Param, Render} from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('/dashboard')
export class DashboardController {
  constructor(private service: DashboardService) {}

  @Render('dashboard')
  @Get()
  public index() {
    return {
      title: this.service.getList(),
    };
  }
  @Render('dashboard/[id]')
  @Get(':id')
  public get(@Param('id') slug: string) {
    return {
      id: slug,
    };
  }
}