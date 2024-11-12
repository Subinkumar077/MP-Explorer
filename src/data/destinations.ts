export interface Destination {
  id: string;
  name: string;
  description: string;
  category: 'historical' | 'natural' | 'religious' | 'cultural';
  location: string;
  image: string;
  openingHours: string;
  bestTime: string;
  entryFee: string;
  rating: number;
}

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Khajuraho Temples',
    description:
      'A UNESCO World Heritage site known for its intricate sculptures and Nagara-style architectural symbolism.',
    category: 'historical',
    location: 'Khajuraho, Chhatarpur District, Madhya Pradesh',
    image:
      'https://media.istockphoto.com/id/520838006/photo/famous-temples-of-khajuraho.jpg?s=612x612&w=0&k=20&c=Q4YDdXoUpQ6SC5HKv7-P7fzzBL2sS2koRSxvrBoR9SI=',
    openingHours: '6:00 AM - 6:00 PM',
    bestTime: 'October to March',
    entryFee: '₹40 for Indians, ₹600 for foreigners',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Bandhavgarh National Park',
    description:
      'Famous for its high density of Bengal tigers and diverse wildlife in their natural habitat.',
    category: 'natural',
    location: 'Umaria District, Madhya Pradesh',
    image:
      'https://vajiram-prod.s3.ap-south-1.amazonaws.com/Bandhavgarh_National_Park_97129d0357.jpg',
    openingHours: '6:30 AM - 11:00 AM, 2:30 PM - 6:00 PM',
    bestTime: 'October to June',
    entryFee: '₹1500 for Indians, ₹3000 for foreigners',
    rating: 4.7,
  },
  {
    id: '3',
    name: 'Sanchi Stupa',
    description:
      'Ancient Buddhist monuments and a UNESCO World Heritage site featuring remarkable Buddhist art.',
    category: 'historical',
    location: 'Sanchi Town, Raisen District, Madhya Pradesh',
    image:
      'https://imgcld.yatra.com/holiday-india/image/upload/t_yt_blog_c_fill_q_auto:good_f_auto_w_800_h_500/v1441881605/blog/The_Sanchi_Stupas.jpg',
    openingHours: 'Sunrise to Sunset',
    bestTime: 'July to March',
    entryFee: '₹30 for Indians, ₹500 for foreigners',
    rating: 4.6,
  },
];
