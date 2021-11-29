import { Module } from '@nestjs/common';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';

@Module({
  imports: [RenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== 'production' }))],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class AppModule {}
