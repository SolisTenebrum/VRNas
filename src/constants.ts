// Service section icons
import serviceIconOne from './assets/icons/4.svg';
import serviceIconTwo from './assets/icons/5.svg';
import serviceIconThree from './assets/icons/6.svg';
import serviceIconFour from './assets/icons/7.svg';
import serviceIconFive from './assets/icons/8.svg';
import serviceIconSix from './assets/icons/9.svg';

// Footer contact icons
import locationIcon from './assets/icons/location-icon.svg';
import messageIcon from './assets/icons/message-icon.svg';
import callIcon from './assets/icons/call-icon.svg';

// Footer social icons
import twitterIcon from './assets/logos/logo-twitter.svg';
import facebookIcon from './assets/logos/logo-fb.svg';
import instagramIcon from './assets/logos/logo-instagram.svg';
import githubIcon from './assets/logos/logo-github.svg';

// Article images
import articleBigImageOne from './assets/article-images/article-image-big-one.png';
import articleBigImageTwo from './assets/article-images/article-image-big-two.png';
import articleBigImageThree from './assets/article-images/article-image-big-three.png';
import articleBigImageFour from './assets/article-images/article-image-big-four.png';
import articleSmallImageOne from './assets/article-images/article-image-small-one.png';
import articleSmallImageTwo from './assets/article-images/article-image-small-two.png';
import articleSmallImageThree from './assets/article-images/article-image-small-three.png';
import articleSmallImageFour from './assets/article-images/article-image-small-four.png';

// Service section cards
const serviceCards = [
  {
    icon: serviceIconOne,
    title: 'VR Development',
    text: `From concept to creation, our team of VR developers will bring your vision to life.`,
    button: 'LEARN MORE',
  },
  {
    icon: serviceIconTwo,
    title: 'VR Design',
    text: `Our talented VR designers will create immersive and engaging environments that will captivate your
       audience.`,
    button: 'LEARN MORE',
  },
  {
    icon: serviceIconThree,
    title: 'VR Consulting',
    text: `Our VR consultants will work with you to ensure that your VR experience meets your goals and exceeds
       your expectations.`,
    button: 'LEARN MORE',
  },
  {
    icon: serviceIconFour,
    title: 'VR Games',
    text: `We offer a wide selection of VR games that are suitable for players of all ages and skill levels.`,
    button: 'LEARN MORE',
  },
  {
    icon: serviceIconFive,
    title: 'VR Events',
    text: `Make your next event unforgettable with our VR event services.`,
    button: 'LEARN MORE',
  },
  {
    icon: serviceIconSix,
    title: 'VR Entertainment',
    text: `Create a VR escape room, or offer VR experiences at a theme park, we have the expertise and experience
       to make it happen.`,
    button: 'LEARN MORE',
  },
];

// Footer social icons
const socialLogos = [
  {
    icon: twitterIcon,
    link: '/',
  },
  {
    icon: facebookIcon,
    link: '/',
  },
  {
    icon: instagramIcon,
    link: '/',
  },
  {
    icon: githubIcon,
    link: '/',
  },
];

// Footer links
const quickLinks = [
  {
    linkText: 'Home',
    link: '/',
  },
  {
    linkText: 'Pricing plan',
    link: '/',
  },
  {
    linkText: 'Service',
    link: '/',
  },
  {
    linkText: 'Blog',
    link: '/',
  },
  {
    linkText: 'Our team',
    link: '/',
  },
];

const supportLinks = [
  {
    linkText: 'About us',
    link: '/',
  },
  {
    linkText: 'Contact us',
    link: '/',
  },
  {
    linkText: 'FAQ',
    link: '/',
  },
  {
    linkText: 'Terms & Conditions',
    link: '/',
  },
  {
    linkText: 'Privacy Policy',
    link: '/',
  },
];

const contactLinks = [
  {
    linkText: 'Tanjung Sari Street no.48, Pontianak City',
    link: '/',
    icon: locationIcon,
  },
  {
    linkText: 'Support@VRNas.com',
    link: '/',
    icon: messageIcon,
  },
  {
    linkText: '+123 456 7890',
    link: '/',
    icon: callIcon,
  },
];

// Article section cards
const smallArticles = [
  {
    image: articleSmallImageOne,
    span: 'VR Education',
    title: 'The Future of Education: How VR is Revolutionizing the Classroom',
  },
  {
    image: articleSmallImageTwo,
    span: 'VR Architecture',
    title: 'Bringing Designs to Life: How VR is Changing Architecture',
  },
  {
    image: articleSmallImageThree,
    span: 'VR Entertainment',
    title: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
  },
  {
    image: articleSmallImageFour,
    span: 'VR Event',
    title: 'Exploring New Worlds: The Benefits of VR Travel',
  },
];

const bigArticles = [
  {
    image: articleBigImageOne,
    span: 'VR Games',
    title: 'Entertainment Goes Virtual: The Rise of VR Gaming',
  },
  // {
  //   image: articleBigImageTwo,
  //   span: 'VR Event',
  //   title: 'Making Events Memorable: The Power of VR for Corporate and Special Occasions',
  // },
  // {
  //   image: articleBigImageThree,
  //   span: 'VR Games',
  //   title: 'Entertainment Goes Virtual: The Rise of VR Gaming',
  // },
  // {
  //   image: articleBigImageFour,
  //   span: 'VR Education',
  //   title: 'The Future of Education: How VR is Revolutionizing the Classroom',
  // },
]

export { serviceCards, quickLinks, supportLinks, contactLinks, socialLogos, smallArticles, bigArticles };
