import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FoldersService {
  constructor(private prisma: PrismaService) {}

  async getFolders() {
    const folders = await this.prisma.folder.findMany();

    return folders;
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
}
