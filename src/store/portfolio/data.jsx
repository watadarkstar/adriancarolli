import pentaimage1 from '../../assets/portfolio/penta1.jpg';
import pentaimage2 from '../../assets/portfolio/penta2.png';
import waveimage1 from '../../assets/portfolio/wave1.png';
import waveimage2 from '../../assets/portfolio/wave2.png';
import sparkgigimage1 from '../../assets/portfolio/sparkgig1.jpg';
import sparkgigimage2 from '../../assets/portfolio/sparkgig2.jpg';
import kikimage1 from '../../assets/portfolio/kik1.jpg';
import kikimage2 from '../../assets/portfolio/kik2.jpg';

export default {
  penta: {
    image1: pentaimage1,
    image2: pentaimage2,
    name: 'Penta Medical',
    description: 'Description coming soon...',
    link: '/portfolio/penta',
    website: 'http://pentamedical.ca/',
    roles: ['Lead Software Engineer', 'React Native', 'Product Management', 'User Experience Design'],
    caption: ['How do we provide better health care?',
      'Through a modality that is convenient',
      'With a focus on mobility.',
    ],
  },
  wave: {
    image1: waveimage1,
    image2: waveimage2,
    name: 'Wave Accounting',
    description: 'Description coming soon...',
    link: '/portfolio/wave',
    website: 'https://itunes.apple.com/us/app/receipts-by-wave/id619867797',
    roles: ['Agile Engineer', 'iOS'],
    caption: ['How do we make accounting easier?',
      'We allow people to take pictures of their receipts',
      'With a focus on their mobile experience.',
    ],
  },
  sparkgig: {
    image1: sparkgigimage1,
    image2: sparkgigimage2,
    name: 'SparkGig',
    description: 'Description coming soon...',
    link: '/portfolio/sparkgig',
    website: 'http://sparkgig.com',
    roles: ['CTO', 'Software Engineer', 'React + Angular', 'Management', 'User Experience Design'],
    caption: ['How do we make live entertainment accessible?',
      'We connect event hosts and performers',
      'Through an accessible marketplace.',
    ],
  },
  kik: {
    image1: kikimage1,
    image2: kikimage2,
    name: 'Kik Bots',
    description: 'Description coming soon...',
    link: '/portfolio/kik',
    website: 'https://kik.com',
    roles: ['Bot Developer', 'Python + Angular', 'Software Engineer'],
    caption: ['How do we easiliy configure chat bots?',
      'We allow users to configure chat engines',
      'And focus on the different use cases.',
    ],
  },
};
