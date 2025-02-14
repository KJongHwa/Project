import { GatheringDto } from '@/types/gathering.types';

export const mockGatherings: GatheringDto['get'][] = [
  {
    gatheringId: 1,
    userId: 101,
    name: '코드를 그려드립니다',
    location: 'gangnam',
    themeName: '마음을 그려그립니다',
    image: 'https://xdungeon.net/file/theme/11/11_6145641280.jpg',
    level: 'low',
    genre: 'fantasy',
    playtime: 60,
    map: '서울 강남구 강남대로84길 33, 대우디오빌플러스 B1',
    dateTime: '2025-01-29T18:30:00.000Z',
    registrationEnd: '2025-01-14T23:59:59.000Z',
    capacity: 4,
    participantCount: 2,
    isCanceled: false,
  },
  {
    gatheringId: 2,
    userId: 102,
    name: 'And I met Error',
    location: 'hongdae',
    themeName: 'And I met E',
    image: 'https://xdungeon.net/file/theme/18/18_5563125084.png',
    level: 'middle',
    genre: 'fantasy',
    playtime: 60,
    map: '서울 마포구 와우산로29길 21, 3층',
    dateTime: '2025-01-22T18:00:00.000Z',
    registrationEnd: '2025-01-21T12:59:59.000Z',
    capacity: 6,
    participantCount: 1,
    isCanceled: true,
  },
  {
    gatheringId: 3,
    userId: 103,
    name: '13동 안살아서 다행이다',
    location: 'geondae',
    themeName: 'B아파트 13동 1313',
    image:
      'https://i.postimg.cc/B6ktkgKh/theme-Kakao-Talk-Photo-2019-03-05-17-11-51-4-B-13-1313.jpg',
    level: 'high',
    genre: 'horror',
    playtime: 60,
    map: '서울 광진구 아차산로 192 지하1층',
    dateTime: '2025-01-25T13:00:00.000Z',
    registrationEnd: '2025-01-24T23:59:59.000Z',
    capacity: 5,
    participantCount: 3,
    isCanceled: true,
  },
];
