import { Test, TestingModule } from '@nestjs/testing';
import { BookingService } from '../booking.service';
import { RequestBody, ResponseBody } from '../booking.interface';

describe('BookingService', () => {
  let bookingService: BookingService;

  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [BookingService],
    }).compile();
    bookingService = moduleRef.get(BookingService);
  });

  describe('getTimeSlots', () => {
    it('20210509, is_ignore_schedule:true, is_ignore_workhour:true', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210509',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: true,
        is_ignore_workhour: true,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620486000,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620486000,
              end_at: 1620489600,
            },
            {
              begin_at: 1620491400,
              end_at: 1620495000,
            },
            {
              begin_at: 1620496800,
              end_at: 1620500400,
            },
            {
              begin_at: 1620502200,
              end_at: 1620505800,
            },
            {
              begin_at: 1620507600,
              end_at: 1620511200,
            },
            {
              begin_at: 1620513000,
              end_at: 1620516600,
            },
            {
              begin_at: 1620518400,
              end_at: 1620522000,
            },
            {
              begin_at: 1620523800,
              end_at: 1620527400,
            },
            {
              begin_at: 1620529200,
              end_at: 1620532800,
            },
            {
              begin_at: 1620534600,
              end_at: 1620538200,
            },
            {
              begin_at: 1620540000,
              end_at: 1620543600,
            },
            {
              begin_at: 1620545400,
              end_at: 1620549000,
            },
            {
              begin_at: 1620550800,
              end_at: 1620554400,
            },
            {
              begin_at: 1620556200,
              end_at: 1620559800,
            },
            {
              begin_at: 1620561600,
              end_at: 1620565200,
            },
            {
              begin_at: 1620567000,
              end_at: 1620570600,
            },
          ],
        },
        {
          start_of_day: 1620572400,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620572400,
              end_at: 1620576000,
            },
            {
              begin_at: 1620577800,
              end_at: 1620581400,
            },
            {
              begin_at: 1620583200,
              end_at: 1620586800,
            },
            {
              begin_at: 1620588600,
              end_at: 1620592200,
            },
            {
              begin_at: 1620594000,
              end_at: 1620597600,
            },
            {
              begin_at: 1620599400,
              end_at: 1620603000,
            },
            {
              begin_at: 1620604800,
              end_at: 1620608400,
            },
            {
              begin_at: 1620610200,
              end_at: 1620613800,
            },
            {
              begin_at: 1620615600,
              end_at: 1620619200,
            },
            {
              begin_at: 1620621000,
              end_at: 1620624600,
            },
            {
              begin_at: 1620626400,
              end_at: 1620630000,
            },
            {
              begin_at: 1620631800,
              end_at: 1620635400,
            },
            {
              begin_at: 1620637200,
              end_at: 1620640800,
            },
            {
              begin_at: 1620642600,
              end_at: 1620646200,
            },
            {
              begin_at: 1620648000,
              end_at: 1620651600,
            },
            {
              begin_at: 1620653400,
              end_at: 1620657000,
            },
          ],
        },
        {
          start_of_day: 1620658800,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620658800,
              end_at: 1620662400,
            },
            {
              begin_at: 1620664200,
              end_at: 1620667800,
            },
            {
              begin_at: 1620669600,
              end_at: 1620673200,
            },
            {
              begin_at: 1620675000,
              end_at: 1620678600,
            },
            {
              begin_at: 1620680400,
              end_at: 1620684000,
            },
            {
              begin_at: 1620685800,
              end_at: 1620689400,
            },
            {
              begin_at: 1620691200,
              end_at: 1620694800,
            },
            {
              begin_at: 1620696600,
              end_at: 1620700200,
            },
            {
              begin_at: 1620702000,
              end_at: 1620705600,
            },
            {
              begin_at: 1620707400,
              end_at: 1620711000,
            },
            {
              begin_at: 1620712800,
              end_at: 1620716400,
            },
            {
              begin_at: 1620718200,
              end_at: 1620721800,
            },
            {
              begin_at: 1620723600,
              end_at: 1620727200,
            },
            {
              begin_at: 1620729000,
              end_at: 1620732600,
            },
            {
              begin_at: 1620734400,
              end_at: 1620738000,
            },
            {
              begin_at: 1620739800,
              end_at: 1620743400,
            },
          ],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210509, is_ignore_schedule:false, is_ignore_workhour:true', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210509',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: false,
        is_ignore_workhour: true,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620486000,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620534600,
              end_at: 1620538200,
            },
            {
              begin_at: 1620540000,
              end_at: 1620543600,
            },
            {
              begin_at: 1620545400,
              end_at: 1620549000,
            },
            {
              begin_at: 1620550800,
              end_at: 1620554400,
            },
            {
              begin_at: 1620556200,
              end_at: 1620559800,
            },
            {
              begin_at: 1620561600,
              end_at: 1620565200,
            },
            {
              begin_at: 1620567000,
              end_at: 1620570600,
            },
          ],
        },
        {
          start_of_day: 1620572400,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620572400,
              end_at: 1620576000,
            },
            {
              begin_at: 1620577800,
              end_at: 1620581400,
            },
            {
              begin_at: 1620583200,
              end_at: 1620586800,
            },
            {
              begin_at: 1620588600,
              end_at: 1620592200,
            },
            {
              begin_at: 1620594000,
              end_at: 1620597600,
            },
            {
              begin_at: 1620599400,
              end_at: 1620603000,
            },
            {
              begin_at: 1620604800,
              end_at: 1620608400,
            },
            {
              begin_at: 1620610200,
              end_at: 1620613800,
            },
            {
              begin_at: 1620615600,
              end_at: 1620619200,
            },
            {
              begin_at: 1620621000,
              end_at: 1620624600,
            },
            {
              begin_at: 1620626400,
              end_at: 1620630000,
            },
            {
              begin_at: 1620631800,
              end_at: 1620635400,
            },
            {
              begin_at: 1620637200,
              end_at: 1620640800,
            },
            {
              begin_at: 1620642600,
              end_at: 1620646200,
            },
            {
              begin_at: 1620648000,
              end_at: 1620651600,
            },
            {
              begin_at: 1620653400,
              end_at: 1620657000,
            },
          ],
        },
        {
          start_of_day: 1620658800,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620658800,
              end_at: 1620662400,
            },
            {
              begin_at: 1620664200,
              end_at: 1620667800,
            },
            {
              begin_at: 1620669600,
              end_at: 1620673200,
            },
            {
              begin_at: 1620675000,
              end_at: 1620678600,
            },
            {
              begin_at: 1620680400,
              end_at: 1620684000,
            },
            {
              begin_at: 1620685800,
              end_at: 1620689400,
            },
            {
              begin_at: 1620691200,
              end_at: 1620694800,
            },
            {
              begin_at: 1620696600,
              end_at: 1620700200,
            },
            {
              begin_at: 1620702000,
              end_at: 1620705600,
            },
            {
              begin_at: 1620707400,
              end_at: 1620711000,
            },
            {
              begin_at: 1620712800,
              end_at: 1620716400,
            },
            {
              begin_at: 1620718200,
              end_at: 1620721800,
            },
            {
              begin_at: 1620723600,
              end_at: 1620727200,
            },
            {
              begin_at: 1620729000,
              end_at: 1620732600,
            },
            {
              begin_at: 1620734400,
              end_at: 1620738000,
            },
            {
              begin_at: 1620739800,
              end_at: 1620743400,
            },
          ],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210509, is_ignore_schedule:true, is_ignore_workhour:false', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210509',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: true,
        is_ignore_workhour: false,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620486000,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620523800,
              end_at: 1620527400,
            },
            {
              begin_at: 1620529200,
              end_at: 1620532800,
            },
            {
              begin_at: 1620534600,
              end_at: 1620538200,
            },
            {
              begin_at: 1620540000,
              end_at: 1620543600,
            },
            {
              begin_at: 1620545400,
              end_at: 1620549000,
            },
            {
              begin_at: 1620550800,
              end_at: 1620554400,
            },
          ],
        },
        {
          start_of_day: 1620572400,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [],
        },
        {
          start_of_day: 1620658800,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620696600,
              end_at: 1620700200,
            },
            {
              begin_at: 1620702000,
              end_at: 1620705600,
            },
            {
              begin_at: 1620707400,
              end_at: 1620711000,
            },
            {
              begin_at: 1620712800,
              end_at: 1620716400,
            },
            {
              begin_at: 1620718200,
              end_at: 1620721800,
            },
            {
              begin_at: 1620723600,
              end_at: 1620727200,
            },
          ],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210509, is_ignore_schedule:false, is_ignore_workhour:false', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210509',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: false,
        is_ignore_workhour: false,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620486000,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620523800,
              end_at: 1620527400,
            },
            {
              begin_at: 1620529200,
              end_at: 1620532800,
            },
          ],
        },
        {
          start_of_day: 1620572400,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [],
        },
        {
          start_of_day: 1620658800,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210510, is_ignore_schedule:true, is_ignore_workhour:true', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210510',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: true,
        is_ignore_workhour: true,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620572400,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620572400,
              end_at: 1620576000,
            },
            {
              begin_at: 1620577800,
              end_at: 1620581400,
            },
            {
              begin_at: 1620583200,
              end_at: 1620586800,
            },
            {
              begin_at: 1620588600,
              end_at: 1620592200,
            },
            {
              begin_at: 1620594000,
              end_at: 1620597600,
            },
            {
              begin_at: 1620599400,
              end_at: 1620603000,
            },
            {
              begin_at: 1620604800,
              end_at: 1620608400,
            },
            {
              begin_at: 1620610200,
              end_at: 1620613800,
            },
            {
              begin_at: 1620615600,
              end_at: 1620619200,
            },
            {
              begin_at: 1620621000,
              end_at: 1620624600,
            },
            {
              begin_at: 1620626400,
              end_at: 1620630000,
            },
            {
              begin_at: 1620631800,
              end_at: 1620635400,
            },
            {
              begin_at: 1620637200,
              end_at: 1620640800,
            },
            {
              begin_at: 1620642600,
              end_at: 1620646200,
            },
            {
              begin_at: 1620648000,
              end_at: 1620651600,
            },
            {
              begin_at: 1620653400,
              end_at: 1620657000,
            },
          ],
        },
        {
          start_of_day: 1620658800,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620658800,
              end_at: 1620662400,
            },
            {
              begin_at: 1620664200,
              end_at: 1620667800,
            },
            {
              begin_at: 1620669600,
              end_at: 1620673200,
            },
            {
              begin_at: 1620675000,
              end_at: 1620678600,
            },
            {
              begin_at: 1620680400,
              end_at: 1620684000,
            },
            {
              begin_at: 1620685800,
              end_at: 1620689400,
            },
            {
              begin_at: 1620691200,
              end_at: 1620694800,
            },
            {
              begin_at: 1620696600,
              end_at: 1620700200,
            },
            {
              begin_at: 1620702000,
              end_at: 1620705600,
            },
            {
              begin_at: 1620707400,
              end_at: 1620711000,
            },
            {
              begin_at: 1620712800,
              end_at: 1620716400,
            },
            {
              begin_at: 1620718200,
              end_at: 1620721800,
            },
            {
              begin_at: 1620723600,
              end_at: 1620727200,
            },
            {
              begin_at: 1620729000,
              end_at: 1620732600,
            },
            {
              begin_at: 1620734400,
              end_at: 1620738000,
            },
            {
              begin_at: 1620739800,
              end_at: 1620743400,
            },
          ],
        },
        {
          start_of_day: 1620745200,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620745200,
              end_at: 1620748800,
            },
            {
              begin_at: 1620750600,
              end_at: 1620754200,
            },
            {
              begin_at: 1620756000,
              end_at: 1620759600,
            },
            {
              begin_at: 1620761400,
              end_at: 1620765000,
            },
            {
              begin_at: 1620766800,
              end_at: 1620770400,
            },
            {
              begin_at: 1620772200,
              end_at: 1620775800,
            },
            {
              begin_at: 1620777600,
              end_at: 1620781200,
            },
            {
              begin_at: 1620783000,
              end_at: 1620786600,
            },
            {
              begin_at: 1620788400,
              end_at: 1620792000,
            },
            {
              begin_at: 1620793800,
              end_at: 1620797400,
            },
            {
              begin_at: 1620799200,
              end_at: 1620802800,
            },
            {
              begin_at: 1620804600,
              end_at: 1620808200,
            },
            {
              begin_at: 1620810000,
              end_at: 1620813600,
            },
            {
              begin_at: 1620815400,
              end_at: 1620819000,
            },
            {
              begin_at: 1620820800,
              end_at: 1620824400,
            },
            {
              begin_at: 1620826200,
              end_at: 1620829800,
            },
          ],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210510, is_ignore_schedule:false, is_ignore_workhour:true', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210510',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: false,
        is_ignore_workhour: true,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620572400,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620572400,
              end_at: 1620576000,
            },
            {
              begin_at: 1620577800,
              end_at: 1620581400,
            },
            {
              begin_at: 1620583200,
              end_at: 1620586800,
            },
            {
              begin_at: 1620588600,
              end_at: 1620592200,
            },
            {
              begin_at: 1620594000,
              end_at: 1620597600,
            },
            {
              begin_at: 1620599400,
              end_at: 1620603000,
            },
            {
              begin_at: 1620604800,
              end_at: 1620608400,
            },
            {
              begin_at: 1620610200,
              end_at: 1620613800,
            },
            {
              begin_at: 1620615600,
              end_at: 1620619200,
            },
            {
              begin_at: 1620621000,
              end_at: 1620624600,
            },
            {
              begin_at: 1620626400,
              end_at: 1620630000,
            },
            {
              begin_at: 1620631800,
              end_at: 1620635400,
            },
            {
              begin_at: 1620637200,
              end_at: 1620640800,
            },
            {
              begin_at: 1620642600,
              end_at: 1620646200,
            },
            {
              begin_at: 1620648000,
              end_at: 1620651600,
            },
            {
              begin_at: 1620653400,
              end_at: 1620657000,
            },
          ],
        },
        {
          start_of_day: 1620658800,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620658800,
              end_at: 1620662400,
            },
            {
              begin_at: 1620664200,
              end_at: 1620667800,
            },
            {
              begin_at: 1620669600,
              end_at: 1620673200,
            },
            {
              begin_at: 1620675000,
              end_at: 1620678600,
            },
            {
              begin_at: 1620680400,
              end_at: 1620684000,
            },
            {
              begin_at: 1620685800,
              end_at: 1620689400,
            },
            {
              begin_at: 1620691200,
              end_at: 1620694800,
            },
            {
              begin_at: 1620696600,
              end_at: 1620700200,
            },
            {
              begin_at: 1620702000,
              end_at: 1620705600,
            },
            {
              begin_at: 1620707400,
              end_at: 1620711000,
            },
            {
              begin_at: 1620712800,
              end_at: 1620716400,
            },
            {
              begin_at: 1620718200,
              end_at: 1620721800,
            },
            {
              begin_at: 1620723600,
              end_at: 1620727200,
            },
            {
              begin_at: 1620729000,
              end_at: 1620732600,
            },
            {
              begin_at: 1620734400,
              end_at: 1620738000,
            },
            {
              begin_at: 1620739800,
              end_at: 1620743400,
            },
          ],
        },
        {
          start_of_day: 1620745200,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620745200,
              end_at: 1620748800,
            },
            {
              begin_at: 1620750600,
              end_at: 1620754200,
            },
            {
              begin_at: 1620756000,
              end_at: 1620759600,
            },
            {
              begin_at: 1620761400,
              end_at: 1620765000,
            },
            {
              begin_at: 1620766800,
              end_at: 1620770400,
            },
            {
              begin_at: 1620772200,
              end_at: 1620775800,
            },
            {
              begin_at: 1620777600,
              end_at: 1620781200,
            },
            {
              begin_at: 1620783000,
              end_at: 1620786600,
            },
            {
              begin_at: 1620788400,
              end_at: 1620792000,
            },
            {
              begin_at: 1620793800,
              end_at: 1620797400,
            },
            {
              begin_at: 1620799200,
              end_at: 1620802800,
            },
            {
              begin_at: 1620804600,
              end_at: 1620808200,
            },
            {
              begin_at: 1620810000,
              end_at: 1620813600,
            },
            {
              begin_at: 1620815400,
              end_at: 1620819000,
            },
            {
              begin_at: 1620820800,
              end_at: 1620824400,
            },
            {
              begin_at: 1620826200,
              end_at: 1620829800,
            },
          ],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210510, is_ignore_schedule:true, is_ignore_workhour:false', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210510',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: true,
        is_ignore_workhour: false,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620572400,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [],
        },
        {
          start_of_day: 1620658800,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620696600,
              end_at: 1620700200,
            },
            {
              begin_at: 1620702000,
              end_at: 1620705600,
            },
            {
              begin_at: 1620707400,
              end_at: 1620711000,
            },
            {
              begin_at: 1620712800,
              end_at: 1620716400,
            },
            {
              begin_at: 1620718200,
              end_at: 1620721800,
            },
            {
              begin_at: 1620723600,
              end_at: 1620727200,
            },
          ],
        },
        {
          start_of_day: 1620745200,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620783000,
              end_at: 1620786600,
            },
            {
              begin_at: 1620788400,
              end_at: 1620792000,
            },
            {
              begin_at: 1620793800,
              end_at: 1620797400,
            },
            {
              begin_at: 1620799200,
              end_at: 1620802800,
            },
            {
              begin_at: 1620804600,
              end_at: 1620808200,
            },
            {
              begin_at: 1620810000,
              end_at: 1620813600,
            },
          ],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210510, is_ignore_schedule:false, is_ignore_workhour:false', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210510',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: false,
        is_ignore_workhour: false,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620572400,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [],
        },
        {
          start_of_day: 1620658800,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [],
        },
        {
          start_of_day: 1620745200,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210511, is_ignore_schedule:true, is_ignore_workhour:true', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210511',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: true,
        is_ignore_workhour: true,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620658800,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620658800,
              end_at: 1620662400,
            },
            {
              begin_at: 1620664200,
              end_at: 1620667800,
            },
            {
              begin_at: 1620669600,
              end_at: 1620673200,
            },
            {
              begin_at: 1620675000,
              end_at: 1620678600,
            },
            {
              begin_at: 1620680400,
              end_at: 1620684000,
            },
            {
              begin_at: 1620685800,
              end_at: 1620689400,
            },
            {
              begin_at: 1620691200,
              end_at: 1620694800,
            },
            {
              begin_at: 1620696600,
              end_at: 1620700200,
            },
            {
              begin_at: 1620702000,
              end_at: 1620705600,
            },
            {
              begin_at: 1620707400,
              end_at: 1620711000,
            },
            {
              begin_at: 1620712800,
              end_at: 1620716400,
            },
            {
              begin_at: 1620718200,
              end_at: 1620721800,
            },
            {
              begin_at: 1620723600,
              end_at: 1620727200,
            },
            {
              begin_at: 1620729000,
              end_at: 1620732600,
            },
            {
              begin_at: 1620734400,
              end_at: 1620738000,
            },
            {
              begin_at: 1620739800,
              end_at: 1620743400,
            },
          ],
        },
        {
          start_of_day: 1620745200,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620745200,
              end_at: 1620748800,
            },
            {
              begin_at: 1620750600,
              end_at: 1620754200,
            },
            {
              begin_at: 1620756000,
              end_at: 1620759600,
            },
            {
              begin_at: 1620761400,
              end_at: 1620765000,
            },
            {
              begin_at: 1620766800,
              end_at: 1620770400,
            },
            {
              begin_at: 1620772200,
              end_at: 1620775800,
            },
            {
              begin_at: 1620777600,
              end_at: 1620781200,
            },
            {
              begin_at: 1620783000,
              end_at: 1620786600,
            },
            {
              begin_at: 1620788400,
              end_at: 1620792000,
            },
            {
              begin_at: 1620793800,
              end_at: 1620797400,
            },
            {
              begin_at: 1620799200,
              end_at: 1620802800,
            },
            {
              begin_at: 1620804600,
              end_at: 1620808200,
            },
            {
              begin_at: 1620810000,
              end_at: 1620813600,
            },
            {
              begin_at: 1620815400,
              end_at: 1620819000,
            },
            {
              begin_at: 1620820800,
              end_at: 1620824400,
            },
            {
              begin_at: 1620826200,
              end_at: 1620829800,
            },
          ],
        },
        {
          start_of_day: 1620831600,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620831600,
              end_at: 1620835200,
            },
            {
              begin_at: 1620837000,
              end_at: 1620840600,
            },
            {
              begin_at: 1620842400,
              end_at: 1620846000,
            },
            {
              begin_at: 1620847800,
              end_at: 1620851400,
            },
            {
              begin_at: 1620853200,
              end_at: 1620856800,
            },
            {
              begin_at: 1620858600,
              end_at: 1620862200,
            },
            {
              begin_at: 1620864000,
              end_at: 1620867600,
            },
            {
              begin_at: 1620869400,
              end_at: 1620873000,
            },
            {
              begin_at: 1620874800,
              end_at: 1620878400,
            },
            {
              begin_at: 1620880200,
              end_at: 1620883800,
            },
            {
              begin_at: 1620885600,
              end_at: 1620889200,
            },
            {
              begin_at: 1620891000,
              end_at: 1620894600,
            },
            {
              begin_at: 1620896400,
              end_at: 1620900000,
            },
            {
              begin_at: 1620901800,
              end_at: 1620905400,
            },
            {
              begin_at: 1620907200,
              end_at: 1620910800,
            },
            {
              begin_at: 1620912600,
              end_at: 1620916200,
            },
          ],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210511, is_ignore_schedule:false, is_ignore_workhour:true', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210511',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: false,
        is_ignore_workhour: true,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620658800,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620658800,
              end_at: 1620662400,
            },
            {
              begin_at: 1620664200,
              end_at: 1620667800,
            },
            {
              begin_at: 1620669600,
              end_at: 1620673200,
            },
            {
              begin_at: 1620675000,
              end_at: 1620678600,
            },
            {
              begin_at: 1620680400,
              end_at: 1620684000,
            },
            {
              begin_at: 1620685800,
              end_at: 1620689400,
            },
            {
              begin_at: 1620691200,
              end_at: 1620694800,
            },
            {
              begin_at: 1620696600,
              end_at: 1620700200,
            },
            {
              begin_at: 1620702000,
              end_at: 1620705600,
            },
            {
              begin_at: 1620707400,
              end_at: 1620711000,
            },
            {
              begin_at: 1620712800,
              end_at: 1620716400,
            },
            {
              begin_at: 1620718200,
              end_at: 1620721800,
            },
            {
              begin_at: 1620723600,
              end_at: 1620727200,
            },
            {
              begin_at: 1620729000,
              end_at: 1620732600,
            },
            {
              begin_at: 1620734400,
              end_at: 1620738000,
            },
            {
              begin_at: 1620739800,
              end_at: 1620743400,
            },
          ],
        },
        {
          start_of_day: 1620745200,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620745200,
              end_at: 1620748800,
            },
            {
              begin_at: 1620750600,
              end_at: 1620754200,
            },
            {
              begin_at: 1620756000,
              end_at: 1620759600,
            },
            {
              begin_at: 1620761400,
              end_at: 1620765000,
            },
            {
              begin_at: 1620766800,
              end_at: 1620770400,
            },
            {
              begin_at: 1620772200,
              end_at: 1620775800,
            },
            {
              begin_at: 1620777600,
              end_at: 1620781200,
            },
            {
              begin_at: 1620783000,
              end_at: 1620786600,
            },
            {
              begin_at: 1620788400,
              end_at: 1620792000,
            },
            {
              begin_at: 1620793800,
              end_at: 1620797400,
            },
            {
              begin_at: 1620799200,
              end_at: 1620802800,
            },
            {
              begin_at: 1620804600,
              end_at: 1620808200,
            },
            {
              begin_at: 1620810000,
              end_at: 1620813600,
            },
            {
              begin_at: 1620815400,
              end_at: 1620819000,
            },
            {
              begin_at: 1620820800,
              end_at: 1620824400,
            },
            {
              begin_at: 1620826200,
              end_at: 1620829800,
            },
          ],
        },
        {
          start_of_day: 1620831600,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620831600,
              end_at: 1620835200,
            },
            {
              begin_at: 1620837000,
              end_at: 1620840600,
            },
            {
              begin_at: 1620842400,
              end_at: 1620846000,
            },
            {
              begin_at: 1620847800,
              end_at: 1620851400,
            },
            {
              begin_at: 1620853200,
              end_at: 1620856800,
            },
            {
              begin_at: 1620858600,
              end_at: 1620862200,
            },
            {
              begin_at: 1620864000,
              end_at: 1620867600,
            },
            {
              begin_at: 1620869400,
              end_at: 1620873000,
            },
            {
              begin_at: 1620874800,
              end_at: 1620878400,
            },
            {
              begin_at: 1620880200,
              end_at: 1620883800,
            },
            {
              begin_at: 1620885600,
              end_at: 1620889200,
            },
            {
              begin_at: 1620891000,
              end_at: 1620894600,
            },
            {
              begin_at: 1620896400,
              end_at: 1620900000,
            },
            {
              begin_at: 1620901800,
              end_at: 1620905400,
            },
            {
              begin_at: 1620907200,
              end_at: 1620910800,
            },
            {
              begin_at: 1620912600,
              end_at: 1620916200,
            },
          ],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210511, is_ignore_schedule:true, is_ignore_workhour:false', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210511',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: true,
        is_ignore_workhour: false,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620658800,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620696600,
              end_at: 1620700200,
            },
            {
              begin_at: 1620702000,
              end_at: 1620705600,
            },
            {
              begin_at: 1620707400,
              end_at: 1620711000,
            },
            {
              begin_at: 1620712800,
              end_at: 1620716400,
            },
            {
              begin_at: 1620718200,
              end_at: 1620721800,
            },
            {
              begin_at: 1620723600,
              end_at: 1620727200,
            },
          ],
        },
        {
          start_of_day: 1620745200,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620783000,
              end_at: 1620786600,
            },
            {
              begin_at: 1620788400,
              end_at: 1620792000,
            },
            {
              begin_at: 1620793800,
              end_at: 1620797400,
            },
            {
              begin_at: 1620799200,
              end_at: 1620802800,
            },
            {
              begin_at: 1620804600,
              end_at: 1620808200,
            },
            {
              begin_at: 1620810000,
              end_at: 1620813600,
            },
          ],
        },
        {
          start_of_day: 1620831600,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [
            {
              begin_at: 1620869400,
              end_at: 1620873000,
            },
            {
              begin_at: 1620874800,
              end_at: 1620878400,
            },
            {
              begin_at: 1620880200,
              end_at: 1620883800,
            },
            {
              begin_at: 1620885600,
              end_at: 1620889200,
            },
            {
              begin_at: 1620891000,
              end_at: 1620894600,
            },
            {
              begin_at: 1620896400,
              end_at: 1620900000,
            },
          ],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });

    it('20210511, is_ignore_schedule:false, is_ignore_workhour:false', async () => {
      const requestBody: RequestBody = {
        start_day_identifier: '20210511',
        days: 3,
        service_duration: 3600,
        timeslot_interval: 1800,
        is_ignore_schedule: false,
        is_ignore_workhour: false,
        timezone_identifier: 'Asia/Seoul',
      };

      const result: ResponseBody = await bookingService.getTimeSlots(
        requestBody,
      );

      const expectedResult: ResponseBody = [
        {
          start_of_day: 1620658800,
          day_modifier: 0,
          is_day_off: false,
          timeslots: [],
        },
        {
          start_of_day: 1620745200,
          day_modifier: 1,
          is_day_off: false,
          timeslots: [],
        },
        {
          start_of_day: 1620831600,
          day_modifier: 2,
          is_day_off: false,
          timeslots: [],
        },
      ];
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
