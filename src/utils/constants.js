export const COLLEGES = [
  { id: 'niet', name: 'NIET (Noida Institute of Engineering & Technology)', domain: 'niet.co.in', city: 'Greater Noida' },
  { id: 'gl_bajaj', name: 'GL Bajaj Institute of Technology & Management', domain: 'glbitm.ac.in', city: 'Greater Noida' },
  { id: 'galgotias', name: 'Galgotias College of Engineering & Technology', domain: 'galgotias.edu', city: 'Greater Noida' },
  { id: 'bennett', name: 'Bennett University', domain: 'bennett.edu.in', city: 'Greater Noida' },
  { id: 'akgec', name: 'Ajay Kumar Garg Engineering College (AKGEC)', domain: 'akgec.ac.in', city: 'Ghaziabad' },
  { id: 'other', name: 'Other Recognized College / University', domain: '', city: 'India' }
];

export const CATEGORIES = [
  { id: 'books', name: 'Books', icon: 'BookOpen', count: 42, description: 'Sem textbooks, notes & guides' },
  { id: 'calculators', name: 'Calculators', icon: 'Calculator', count: 18, description: 'Scientific & graphing calcs' },
  { id: 'lab-equipment', name: 'Lab Equipment', icon: 'FlaskConical', count: 27, description: 'ED kits, aprons, breadboards' },
  { id: 'electronics', name: 'Electronics', icon: 'Cpu', count: 35, description: 'Arduino, components, chargers' },
  { id: 'furniture', name: 'Furniture', icon: 'Armchair', count: 12, description: 'Study tables, chairs, organizers' },
  { id: 'cycles', name: 'Cycles', icon: 'Bike', count: 9, description: 'Campus commuter bicycles' },
  { id: 'pg-items', name: 'PG Items', icon: 'Home', count: 24, description: 'Kettles, mattresses, buckets' },
  { id: 'other', name: 'Other', icon: 'Package', count: 15, description: 'Stationery, bags & misc' }
];

export const CONDITIONS = [
  { value: 'Like New', label: 'Like New', description: 'Barely used, zero flaws' },
  { value: 'Excellent', label: 'Excellent', description: 'Minor cosmetic signs only' },
  { value: 'Good', label: 'Good', description: 'Functional and well-kept' },
  { value: 'Fair', label: 'Fair', description: 'Noticeable wear but works' }
];

export const LISTING_TYPES = [
  { value: 'Sale', label: 'Direct Sale' },
  { value: 'Exchange', label: 'Exchange / Swap' }
];

export const DEMO_FEATURED_LISTINGS = [
  {
    id: 'feat-1',
    title: 'Engineering Drawing Kit (Complete Set)',
    price: 350,
    category: 'Lab Equipment',
    condition: 'Good',
    listingType: 'Sale',
    pickupLocation: 'NIET Main Gate',
    distance: '1.2 km away',
    sellerName: 'Nikhil Sharma',
    sellerCollege: 'NIET',
    sellerRating: 4.7,
    verified: true,
    availability: 'Available',
    createdAt: '2026-09-12T10:30:00Z',
    description: 'Complete 1st year engineering drawing set with mini-drafter, sheet holder, set squares, and compass box. Used only for 2 semesters.',
    itemBadge: 'Drawing Kit'
  },
  {
    id: 'feat-2',
    title: 'Scientific Calculator Casio fx-991EX Classwiz',
    price: 700,
    category: 'Calculators',
    condition: 'Excellent',
    listingType: 'Sale',
    pickupLocation: 'Central Library Entrance',
    distance: '0.4 km away',
    sellerName: 'Priya Verma',
    sellerCollege: 'NIET',
    sellerRating: 4.9,
    verified: true,
    availability: 'Available',
    createdAt: '2026-09-14T08:15:00Z',
    description: 'Original Casio fx-991EX. Matrix, vector, complex calculations supported. Battery in great shape with original sliding protective cover.',
    itemBadge: 'Casio fx-991EX'
  },
  {
    id: 'feat-3',
    title: 'Data Structures & Algorithms in C/C++ (Reema Thareja)',
    price: 250,
    category: 'Books',
    condition: 'Good',
    listingType: 'Sale',
    pickupLocation: 'Canteen Block B',
    distance: '0.8 km away',
    sellerName: 'Aman Patel',
    sellerCollege: 'NIET',
    sellerRating: 4.8,
    verified: true,
    availability: 'Available',
    createdAt: '2026-09-13T14:20:00Z',
    description: 'Essential textbook for 3rd sem AKTU CSE syllabus. Neat pages, clean handwritten pencil notes included for end-term prep.',
    itemBadge: 'DSA Textbook'
  },
  {
    id: 'feat-4',
    title: 'Hero Sprint 26T Campus Geared Cycle',
    price: 3500,
    category: 'Cycles',
    condition: 'Good',
    listingType: 'Exchange',
    pickupLocation: 'Boys Hostel 2 Gate',
    distance: '0.3 km away',
    sellerName: 'Rahul Yadav',
    sellerCollege: 'NIET',
    sellerRating: 4.6,
    verified: true,
    availability: 'Available',
    createdAt: '2026-09-11T16:45:00Z',
    description: 'Smooth riding cycle with bell, wire lock, and mudguards. Perfect for hostellers commuting to morning classes. Willing to exchange for a monitor.',
    itemBadge: 'Campus Cycle'
  },
  {
    id: 'feat-5',
    title: 'Engineering Chemistry & Workshop Lab Coat (Size L)',
    price: 300,
    category: 'Lab Equipment',
    condition: 'Like New',
    listingType: 'Sale',
    pickupLocation: 'Mechanical Workshop Block',
    distance: '0.5 km away',
    sellerName: 'Sneha Roy',
    sellerCollege: 'NIET',
    sellerRating: 5.0,
    verified: true,
    availability: 'Available',
    createdAt: '2026-09-15T06:00:00Z',
    description: 'White pure cotton lab coat with deep pockets. Washed and ironed, no acid or oil stains. Worn only during 1st year chemistry lab sessions.',
    itemBadge: 'Lab Coat'
  },
  {
    id: 'feat-6',
    title: 'Arduino Uno R3 Starter Kit + Sensor Pack',
    price: 900,
    category: 'Electronics',
    condition: 'Good',
    listingType: 'Sale',
    pickupLocation: 'Tech Park Cafe',
    distance: '1.0 km away',
    sellerName: 'Devansh Dixit',
    sellerCollege: 'NIET',
    sellerRating: 4.9,
    verified: true,
    availability: 'Available',
    createdAt: '2026-09-14T11:10:00Z',
    description: 'Arduino Uno board with USB cable, breadboard, ultrasonic sensor, IR module, jumper wires, servo motor, and LEDs. Great for mini projects.',
    itemBadge: 'Arduino Uno R3'
  }
];

export const TRUST_PILLARS = [
  {
    icon: 'ShieldCheck',
    title: 'College Verified',
    description: 'Only enrolled students with valid college credentials can buy and sell on CampusSwap.'
  },
  {
    icon: 'MapPin',
    title: 'Nearby Students',
    description: 'Meet inside your campus or hostel gates. Zero delivery costs and zero courier waiting times.'
  },
  {
    icon: 'MessageSquareCheck',
    title: 'Secure Requests',
    description: 'Structured purchase and swap requests eliminate spam and preserve privacy.'
  },
  {
    icon: 'Star',
    title: 'Student Ratings',
    description: 'Transparent peer reviews and verified badges build trusted connections across all batches.'
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    icon: 'GraduationCap',
    title: 'Verify Your College',
    description: 'Register with your official student ID and college email to activate your verified account.'
  },
  {
    step: '02',
    icon: 'ShoppingBag',
    title: 'Find or List an Item',
    description: 'Browse campus deals or post your unused drafters, cycles, and books in under 60 seconds.'
  },
  {
    step: '03',
    icon: 'Send',
    title: 'Send a Request',
    description: 'Connect with a classmate, agree on price or exchange items, and lock the deal.'
  },
  {
    step: '04',
    icon: 'MapPin',
    title: 'Meet at Pickup Point',
    description: 'Meet safely at the campus main gate, library, or canteen for physical inspection and handover.'
  }
];
