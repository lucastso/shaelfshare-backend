import { Body, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { BookmarkBody } from 'src/dtos/bookmark-body';

@Injectable()
export class BookmarksService {
  constructor(private prisma: PrismaService) {}

  async getBookmarks() {
    const bookmarks = await this.prisma.bookmark.findMany({
      orderBy: [
        {
          favourite: 'desc',
        },
        {
          createdAt: 'desc',
        },
      ],
      include: {
        category: true,
      },
    });

    return bookmarks;
  }

  async getBookmark(id: number) {
    const bookmark = await this.prisma.bookmark.findFirst({
      where: { id: id },
    });

    return bookmark;
  }

  async createBookmark(
    userId: string,
    folderId: number,
    url: string,
    name: string,
    icon: string,
  ) {
    const bookmark = await this.prisma.bookmark.create({
      data: {
        userId,
        folderId,
        url,
        name,
        icon,
      },
    });

    return bookmark;
  }

  async deleteBookmark(id: number) {
    await this.prisma.bookmark.delete({
      where: { id: id },
    });

    return 'Deleted!';
  }

  async favouriteBookmark(id: number) {
    const favouriteState = await this.prisma.bookmark.findUnique({
      where: { id: id },
      select: { favourite: true },
    });

    await this.prisma.bookmark.update({
      where: { id: id },
      data: { favourite: !favouriteState?.favourite },
    });

    return 'Successfully favourited!';
  }
}
