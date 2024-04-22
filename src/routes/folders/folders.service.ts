import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FoldersService {
  constructor(private prisma: PrismaService) {}

  async getFolders() {
    const folders = await this.prisma.folder.findMany();

    return folders;
  }
}
