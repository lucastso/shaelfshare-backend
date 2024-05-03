import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookmarksModule } from './routes/bookmarks/bookmarks.module';
import { FoldersModule } from './routes/folders/folders.module';
import { CategoriesModule } from './routes/categories/categories.module';
import { UsersModule } from './routes/users/users.module';

@Module({
  imports: [BookmarksModule, FoldersModule, CategoriesModule, UsersModule],
  controllers: [AppController],
})
export class AppModule {}
