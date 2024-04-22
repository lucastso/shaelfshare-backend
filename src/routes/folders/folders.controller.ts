import { Controller, Get } from '@nestjs/common';
import { FoldersService } from './folders.service';

@Controller('folders')
export class FoldersController {
  constructor(private foldersService: FoldersService) {}

  @Get()
  async getAllFolders() {
    return this.foldersService.getFolders();
  }
}
