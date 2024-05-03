import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FoldersService {
  constructor(private prisma: PrismaService) {}

  async getFolders() {
    const folders = await this.prisma.folder.findMany({
      include: {
        creator: true,
      },
    });

    return folders;
  }

  async getFolderBookmarks(bookmarkId: number) {
    const bookmarks = await this.prisma.bookmark.findMany({
      where: {
        folderId: bookmarkId
      },
      include: {
        category: true,
        user: true
      }
    });

    return bookmarks;
  }

  async createFolder(name: string, collabsId: string[], creatorId: string) {
    const folder = await this.prisma.folder.create({
      data: {
        name,
        collabsId,
        creatorId,
      },
    });

    return folder;
  }

  async deleteFolder(id: number) {
    await this.prisma.bookmark.updateMany({
      where: { folderId: id },
      data: {
        folderId: null,
      },
    });

    await this.prisma.folder.delete({
      where: { id: id },
    });

    return 'Deleted!';
  }

  async getAllUsersFromFolder(id: number) {
    const collabsId = await this.prisma.folder.findMany({
      where: {
        id: id
      },
      select: { collabsId: true }
    });

    const users = await this.prisma.user.findMany({
      where: {
        id: {
          in: collabsId[0].collabsId
        }
      }
    })

    return users;
  }
}
