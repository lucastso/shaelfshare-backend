import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FoldersService } from './folders.service';
import { FolderBody } from 'src/dtos/folder-body';

@Controller('folders')
export class FoldersController {
  constructor(private foldersService: FoldersService) {}

  @Get()
  async getAllFolders() {
    return this.foldersService.getFolders();
  }

  @Post()
  async postFolder(@Body() body: FolderBody) {
    const { name, collabsId, creatorId } = body;
    return this.foldersService.createFolder(name, collabsId, creatorId);
  }

  @Delete('/:id')
  async deleteFolder(@Param('id') id: string) {
    return this.foldersService.deleteFolder(Number(id));
  }

  @Get('/collabs/:id')
  async getAllUsersFromFolder(@Param('id') id: string) {
    return this.foldersService.getAllUsersFromFolder(Number(id));
  }
}
