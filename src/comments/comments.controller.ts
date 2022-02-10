import {
  Controller,
  UseGuards,
  Get,
  Post,
  Patch,
  Delete,
  Request,
  Param,
  Body,
  ParseUUIDPipe,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Request() req, @Body() createCommentDto: CreateCommentDto) {
    createCommentDto.userId = req.user.id;
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.commentsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(
    @Request() req,
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    const comment = await this.commentsService.findOne(id);
    if (!comment) {
      throw new NotFoundException();
    }
    if (comment.user.id !== req.user.id) {
      throw new ForbiddenException();
    }
    return this.commentsService.update(id, updateCommentDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Request() req, @Param('id', ParseUUIDPipe) id: string) {
    const comment = await this.commentsService.findOne(id);
    if (!comment) {
      throw new NotFoundException();
    }
    if (comment.user.id !== req.user.id) {
      throw new ForbiddenException();
    }
    return this.commentsService.remove(id);
  }
}
