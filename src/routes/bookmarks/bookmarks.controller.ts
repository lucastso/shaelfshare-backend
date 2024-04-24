import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { BookmarkBody } from 'src/dtos/bookmark-body';

@Controller('bookmarks')
export class BookmarksController {
  constructor(private bookmarksService: BookmarksService) {}

  @Get()
  async getAllBookmarks() {
    return this.bookmarksService.getBookmarks();
  }

  @Get('/:id')
  async getBookmark(@Param('id') id: string) {
    return this.bookmarksService.getBookmark(Number(id));
  }

  @Post()
  async postBookmark(@Body() body: BookmarkBody) {
    const { userId, folderId, url, name, icon } = body;
    return this.bookmarksService.createBookmark(
      userId,
      folderId,
      url,
      name,
      icon,
    );
  }

  @Delete('/:id')
  async deleteBookmark(@Param('id') id: string) {
    return this.bookmarksService.deleteBookmark(Number(id));
  }

  @Post('favourite/:id')
  async postFavourite(@Param('id') id: string) {
    return this.bookmarksService.favouriteBookmark(Number(id));
  }

  @Post('category/add/:id')
  async postAddCategoryToBookmark(
    @Param('id') id: string,
    @Body() body: { categoryId: number },
  ) {
    const { categoryId } = body;
    return this.bookmarksService.addCategoryToBookmark(Number(id), categoryId);
  }
}
