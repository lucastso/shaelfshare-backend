import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryBody } from 'src/dtos/category-body';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Get()
  async getAllCategories() {
    return this.categoriesService.getCategories();
  }

  @Post()
  async postCategory(@Body() body: CategoryBody) {
    const { creatorId, name, backgroundColor, textColor } = body;
    return this.categoriesService.createCategory(
      creatorId,
      name,
      backgroundColor,
      textColor,
    );
  }

  @Delete('/:id')
  async deleteCategory(@Param('id') id: string) {
    return this.categoriesService.deleteCategory(Number(id));
  }
}
