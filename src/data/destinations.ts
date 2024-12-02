export interface Destination {
  id: string;
  name: string;
  description: string;
  category: 'historical' | 'natural' | 'religious' | 'cultural' | 'adventures';
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
  {
    id: '4',
    name: 'Pachmarhi',
    description: 'The only hill station in Madhya Pradesh, known for its lush greenery and waterfalls.',
    category: 'natural',
    location: 'Pachmarhi, Hoshangabad District, Madhya Pradesh',
    image:
      'https://s3.india.com/wp-content/uploads/2024/08/Top-8-Adrenaline-Pumping-Adventures-In-Pachmarhi-Of-Madhya-Pradesh.jpg',
    openingHours: 'Open 24 hours',
    bestTime: 'October to June',
    entryFee: 'Free',
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Kanha National Park',
    description:
      'Famous for its wildlife and as a tiger reserve, offering stunning landscapes and diverse flora and fauna.',
    category: 'natural',
    location: 'Kanha, Mandla District, Madhya Pradesh',
    image:
      'https://www.visittnt.com/images/wildlife/national-park/kanha-national-park.jpg', 
    openingHours: '6:00 AM - 12:00 PM, 3:00 PM - 6:00 PM',
    bestTime: 'October to June',
    entryFee: '₹1500 for Indians, ₹5000 for foreigners (jeep safari)',
    rating: 4.8,
  },
  {
   id: '6',
    name: 'Patalpani Waterfall',
    description: 'A scenic waterfall located near Indore, popular for trekking and picnics.',
    category: 'natural',
    location: 'Patalpani, Indore District, Madhya Pradesh',
    image:
      'https://travelophia.com/wp-content/uploads/2023/05/image_13-StVn9-1Rv-transformed.png.webp', // Fixed URL
    openingHours: 'Open 24 hours',
    bestTime: 'July to September',
    entryFee: 'Free',
    rating: 4.3,
  },
  {
    id: '7',
    name: 'Taj-ul-Masjid',
    description:
      'One of the largest mosques in India, known for its stunning Mughal architecture and beautiful domes.',
    category: 'religious',
    location: 'Bhopal, Madhya Pradesh',
    image:
      'https://i.pinimg.com/originals/8b/1e/ae/8b1eae57419ea423fd49bf056afaf467.jpg',
    openingHours: '5:00 AM - 10:00 PM',
    bestTime: 'October to March',
    entryFee: 'Free',
    rating: 4.7,
  },
  {
    id: '8',
    name: 'Gwalior Fort',
    description:
      "A historic hill fort known for its stunning architecture and rich history, often referred to as the 'pearl among fortresses'.",
    category: 'historical',
    location: 'Gwalior, Madhya Pradesh',
    image:
      'https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/Best-Time-To-Visit-Gwalior-fort--b2b296.jpg',
    openingHours: '6:00 AM - 6:00 PM',
    bestTime: 'October to March',
    entryFee: '₹20 for Indians, ₹200 for foreigners',
    rating: 4.6,
  },
  {
    id: '9',
    name: 'Bhedaghat',
    description:
      'Famous for its stunning marble rocks and the Dhuandhar Waterfall, a popular spot for boating and photography.',
    category: 'natural',
    location: 'Bhedaghat, Jabalpur District, Madhya Pradesh',
    image:
      'https://newandolder.com/wp-content/uploads/2021/07/bhdeghat-banner.jpg',
    openingHours: '6:00 AM - 6:00 PM',
    bestTime: 'October to March',
    entryFee: '₹10 for Indians, ₹100 for foreigners (boating extra)',
    rating: 4.5,
  },
  {
    id: '10',
    name: 'Bhimbetka Rock Shelters',
    description: 'A UNESCO World Heritage site featuring prehistoric cave paintings and cultural significance.',
    category: 'cultural',
    location: 'Raisen District, Madhya Pradesh',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4THDYqGNyY1gPtmdvQDN2lzgru0NL8H2Ng&s',
    openingHours: '6:30 AM - 5:30 PM',
    bestTime: 'October to March',
    entryFee: '₹25 for Indians, ₹500 for foreigners',
    rating: 4.7,
  },
  {
    id: '11',
    name: 'Chitrakoot',
    description: 'A culturally rich pilgrimage town, known for its significance in the Ramayana and temples.',
    category: 'cultural',
    location: 'Chitrakoot District, Madhya Pradesh',
    image: 'https://mpholidays.in/destinations/images/p4.jpg',
    openingHours: 'Open 24 hours',
    bestTime: 'October to March',
    entryFee: 'Free',
    rating: 4.6,
  },
  {
    id: '12',
    name: 'Marble Rock Boating Adventure',
    description: 'Experience thrilling boating in the gorge surrounded by stunning marble rocks.',
    category: 'adventures',
    location: 'Bhedaghat, Jabalpur District, Madhya Pradesh',
    image: 'https://ebnw.net/wp-content/uploads/2022/03/Bedagat.jpg',
    openingHours: '9:00 AM - 5:00 PM',
    bestTime: 'October to March',
    entryFee: '₹10 for Indians, ₹100 for foreigners (boating extra)',
    rating: 4.5,
  },
  {
    id: '13',
    name: 'Tawa Reservoir',
    description: 'A serene reservoir offering boating, fishing, and water-based adventures.',
    category: 'adventures',
    location: 'Hoshangabad District, Madhya Pradesh',
    image: 'https://www.mptourism.com/webimg/tawa-dam.jpg',
    openingHours: '9:00 AM - 6:00 PM',
    bestTime: 'October to March',
    entryFee: '₹50 per person (boating charges extra)',
    rating: 4.4,
  },
  {
    id: '14',
    name: 'Maheshwar Ghats and Handloom Weaving',
    description: 'A cultural hotspot known for its ghats and the famous Maheshwari sarees.',
    category: 'cultural',
    location: 'Maheshwar, Khargone District, Madhya Pradesh',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Maheshwar_Ghats.jpg',
    openingHours: '6:00 AM - 8:00 PM',
    bestTime: 'October to March',
    entryFee: 'Free',
    rating: 4.7,
  },
  {
    id: '15',
    name: 'Raneh Falls Canyon Trek',
    description: 'An adventurous trek to explore the volcanic rock formations and waterfall.',
    category: 'adventures',
    location: 'Khajuraho, Madhya Pradesh',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Raneh_Falls.jpg',
    openingHours: '6:00 AM - 6:00 PM',
    bestTime: 'July to March',
    entryFee: '₹50 per person',
    rating: 4.6,
  },
  {
    id: '16',
    name: 'Kailash Temple',
    description: 'A historic temple carved from a single rock, dedicated to Lord Shiva, located in Ellora Caves.',
    category: 'religious',
    location: 'Ellora, Maharashtra',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Kailasa_Temple_02.jpg',
    openingHours: '9:00 AM - 5:00 PM',
    bestTime: 'October to March',
    entryFee: '₹40 for Indians, ₹600 for foreigners',
    rating: 4.8,
  },
  {
    id: '17',
    name: 'Omkareshwar Temple',
    description: 'A sacred Hindu temple dedicated to Lord Shiva, situated on an island in the Narmada River.',
    category: 'religious',
    location: 'Omkareshwar, Khandwa District, Madhya Pradesh',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Omkareswar_Jyotirlinga.jpg',
    openingHours: '6:00 AM - 8:00 PM',
    bestTime: 'October to March',
    entryFee: 'Free',
    rating: 4.7,
  },
  {
    id: '18',
    name: 'Mahakaleshwar Temple',
    description: 'One of the twelve Jyotirlingas of Lord Shiva, a major pilgrimage site located in Ujjain.',
    category: 'religious',
    location: 'Ujjain, Madhya Pradesh',
    image: 'https://www.mptourism.com/web/image/catalog/Blog%20Image/Mahakal-ujjain1.jpg',
    openingHours: '5:00 AM - 11:00 PM',
    bestTime: 'September to March',
    entryFee: 'Free',
    rating: 4.9,
  }  
];
