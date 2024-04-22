import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [PrismaService, CategoriesService],
  controllers: [CategoriesController],
})
export class CategoriesModule {}
