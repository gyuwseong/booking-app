import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { RequestBody, ResponseBody } from './booking.interface';

@Controller()
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('getTimeSlots')
  async getTimeSlots(@Body() req: RequestBody): Promise<ResponseBody> {
    return this.bookingService.getTimeSlots(req);
  }
}
