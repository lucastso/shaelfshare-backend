import { Module } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { BookmarksController } from './bookmarks.controller';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [PrismaService, BookmarksService],
  controllers: [BookmarksController],
})
export class BookmarksModule {}
