import { Module } from '@nestjs/common';
import { FoldersController } from './folders.controller';
import { FoldersService } from './folders.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [PrismaService, FoldersService],
  controllers: [FoldersController],
})
export class FoldersModule {}
