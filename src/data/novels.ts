export interface Novel {
  id: number;
  title: string;
  author: string;
  cover: string;
  rating: number;
  category: string;
  chapters: number;
  views: number;
  lastUpdated: string;
  description?: string;
}

export const novels: Record<string, Novel[]> = {
  'นิยายรัก': [
    {
      id: 1,
      title: '(ตี E-book) วัดความเพี้ยน(รัก) เอามั้ย?',
      author: 'สลัช',
      cover: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7',
      rating: 4.5,
      category: 'นิยายรัก',
      chapters: 15,
      views: 32200,
      lastUpdated: '2024-03-15',
      description: 'เรื่องราวความรักที่แสนจะวุ่นวายและน่าติดตาม'
    },
    {
      id: 2,
      title: 'ที่นี่มีใครรอ [เจ้านายใจดี]',
      author: 'พราวพิมล',
      cover: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954',
      rating: 4.7,
      category: 'นิยายรัก',
      chapters: 20,
      views: 22500,
      lastUpdated: '2024-03-14'
    },
    {
      id: 3,
      title: 'สามีในชายคาเดียวกัน',
      author: 'พิลลา',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
      rating: 4.6,
      category: 'นิยายรัก',
      chapters: 25,
      views: 11000,
      lastUpdated: '2024-03-13'
    },
    {
      id: 4,
      title: 'อย่าปล่อยให้หลุดมือ',
      author: 'วนิดา',
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
      rating: 4.4,
      category: 'นิยายรัก',
      chapters: 18,
      views: 62000,
      lastUpdated: '2024-03-12'
    },
    {
      id: 5,
      title: 'เมื่อฉันกลายเป็นนางร้ายที่คนไม่รัก',
      author: 'NaBee-KP',
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
      rating: 4.8,
      category: 'นิยายรัก',
      chapters: 22,
      views: 39000,
      lastUpdated: '2024-03-11'
    }
  ],
  'นิยายโรมานซ์': [
    {
      id: 101,
      title: 'Secret love! รักหรือความลับที่ซ่อนอยู่',
      author: 'RISSIE_P',
      cover: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96',
      rating: 4.8,
      category: 'นิยายโรมานซ์',
      chapters: 12,
      views: 15800,
      lastUpdated: '2024-03-13'
    },
    {
      id: 102,
      title: 'เล่ห์รักพ่ายใจ',
      author: 'ไลลาเนริน',
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
      rating: 4.6,
      category: 'นิยายโรมานซ์',
      chapters: 15,
      views: 14000,
      lastUpdated: '2024-03-12'
    },
    {
      id: 103,
      title: 'คนของคุณหัวหน้า',
      author: 'ตะวัน',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
      rating: 4.7,
      category: 'นิยายโรมานซ์',
      chapters: 10,
      views: 78000,
      lastUpdated: '2024-03-11'
    },
    {
      id: 104,
      title: 'พี่รอนะ | Devil บูชารัก',
      author: 'เจนจิรา',
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
      rating: 4.5,
      category: 'นิยายโรมานซ์',
      chapters: 9,
      views: 56000,
      lastUpdated: '2024-03-10'
    },
    {
      id: 105,
      title: 'หมอหน้าร้ายตะมุตะมิ',
      author: 'นางสาวพิมพ์มะขาม',
      cover: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7',
      rating: 4.9,
      category: 'นิยายโรมานซ์',
      chapters: 11,
      views: 46000,
      lastUpdated: '2024-03-09'
    }
  ],
  'นิยายรักวัยรุ่น': [
    {
      id: 201,
      title: 'First Love รักแรกของหัวใจ',
      author: 'ดวงดาว',
      cover: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954',
      rating: 4.6,
      category: 'นิยายรักวัยรุ่น',
      chapters: 20,
      views: 25600,
      lastUpdated: '2024-03-12'
    },
    {
      id: 202,
      title: 'รักวุ่นๆ วัยเรียน',
      author: 'น้ำหวาน',
      cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765',
      rating: 4.5,
      category: 'นิยายรักวัยรุ่น',
      chapters: 18,
      views: 23400,
      lastUpdated: '2024-03-11'
    },
    {
      id: 203,
      title: 'ความรักในรั้วมหาลัย',
      author: 'พิมพ์ใจ',
      cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
      rating: 4.7,
      category: 'นิยายรักวัยรุ่น',
      chapters: 15,
      views: 28900,
      lastUpdated: '2024-03-10'
    },
    {
      id: 204,
      title: 'รักซ่อนใจนายตัวร้าย',
      author: 'แก้วตา',
      cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353',
      rating: 4.8,
      category: 'นิยายรักวัยรุ่น',
      chapters: 22,
      views: 31200,
      lastUpdated: '2024-03-09'
    },
    {
      id: 205,
      title: 'หัวใจวัยซน',
      author: 'ใบเตย',
      cover: 'https://images.unsplash.com/photo-1551269901-5c5e14c25df7',
      rating: 4.4,
      category: 'นิยายรักวัยรุ่น',
      chapters: 16,
      views: 27800,
      lastUpdated: '2024-03-08'
    }
  ]
};

// Helper function to get novel by ID
export function getNovelById(id: number): Novel | undefined {
  for (const category of Object.values(novels)) {
    const novel = category.find(n => n.id === id);
    if (novel) return novel;
  }
  return undefined;
}