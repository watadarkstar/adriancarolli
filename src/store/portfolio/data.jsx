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
    description: 'Penta Medical is developing a wearable device that makes the treatment of soft tissue injuries more convenient. My role was to lead the development of their Android and iOS app, which connects to the wearable device via Bluetooth. In three months, I successfully launched the app on the Android and iOS store.',
    link: '/portfolio/penta',
    website: 'http://pentamedical.ca/',
    roles: ['Lead Software Engineer', 'React Native', 'Product Management', 'User Experience Design'],
    caption: ['How do we provide better health care?',
      'Through a modality that is convenient',
      'with a focus on mobility.',
    ],
  },
  wave: {
    image1: waveimage1,
    image2: waveimage2,
    name: 'Wave Accounting',
    description: `Just snap a photo of your receipts, invoices or bills. Receipts by Wave digitizes (OCR) and imports them directly into your Wave account. Never face a wallet, purse or shoebox full of receipts again. Your finances are always up to date and correct.

My role in the project was as an Agile Engineer, I worked on the iOS app at Xtreme Labs. Xtreme Labs leads the world's biggest brands in creating award-winning mobile products.
`,
    link: '/portfolio/wave',
    website: 'https://itunes.apple.com/us/app/receipts-by-wave/id619867797',
    roles: ['Agile Engineer', 'iOS'],
    caption: ['How do we make accounting easier?',
      'We allow people to take pictures of their receipts',
      'with a focus on their mobile experience.',
    ],
  },
  sparkgig: {
    image1: sparkgigimage1,
    image2: sparkgigimage2,
    name: 'SparkGig',
    description: 'SparkGig is an online marketplace to bring live performance into everyday life. SparkGig believes that a product is only as good as the number of performers and event hosts gaining value from it. As a key leader (CTO) of our team I was responsible for web development, product growth, ongoing customer research, product development and business development.',
    link: '/portfolio/sparkgig',
    website: 'http://sparkgig.com',
    roles: ['CTO', 'Software Engineer', 'React + Angular', 'Management', 'User Experience Design'],
    caption: ['How do we make live entertainment accessible?',
      'We connect event hosts and performers',
      'through an accessible marketplace.',
    ],
  },
  kik: {
    image1: kikimage1,
    image2: kikimage2,
    name: 'Kik Bots',
    description: `First there were websites, then there were apps. Now, there are bots. With chat bots, you can reach consumers in fun, useful, and meaningful ways in an environment that presents the least friction possible. There’s nothing to download, no icons to add to the homescreen, and no memory hogging. And on Kik, your bot could have direct access to more than 300 million registered users.
    
    My role at Kik was as a Bot Developer. I worked on the tools that power their chat bots, more specifically the chat engine. There were two engines at the time: the keyword and custom chat engine.
    `,
    link: '/portfolio/kik',
    website: 'https://kik.com',
    roles: ['Bot Developer', 'Python + Angular', 'Software Engineer'],
    caption: ['How do we easiliy configure chat bots?',
      'We allow users to configure chat engines',
      'and focus on the different use cases.',
    ],
  },
};
