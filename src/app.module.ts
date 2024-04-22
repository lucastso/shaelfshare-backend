import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookmarksModule } from './routes/bookmarks/bookmarks.module';
import { FoldersModule } from './routes/folders/folders.module';
import { CategoriesModule } from './routes/categories/categories.module';

@Module({
  imports: [BookmarksModule, FoldersModule, CategoriesModule],
  controllers: [AppController],
})
export class AppModule {}
