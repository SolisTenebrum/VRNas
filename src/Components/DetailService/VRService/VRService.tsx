import { useState } from 'react';
import styles from './VRService.module.css';
import { clsx as cn } from 'clsx';

const vrServicesText = [
  {
    subtitle: 'SERVICE',
    title: 'VR Development',
    text: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus
            diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.`,
      `Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
            Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.`,
      `Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc
            egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis
            ligula lacinia aliquet. Mauris ipsum.`,
      `Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed
            lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla
            facilisi.`,
    ],
    listTitle: 'Excepteur aute tempor nostrud labore irure:',
    listItems: [
      'Lorem ipsum dolor sit amet',
      'consectetur adipiscing elit',
      'Vestibulum convallis fermentum',
      'Praesent dapibus orci eget',
      'Phasellus nec lacus scelerisque',
      'Donec ullamcorper nunc ac',
    ],
  },
  {
    subtitle: 'SERVICE',
    title: 'VR Games',
    text: [
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales elementum mi, nec cursus dui. 
            Aliquam eget purus euismod, tristique arcu vel, scelerisque lectus. Vivamus tempor ut turpis et cursus.`,
      `Sed auctor justo id vehicula consequat. Morbi ac odio eu orci tincidunt fermentum. Aenean ultricies ligula et 
            libero tristique, eget hendrerit purus laoreet. Donec sagittis mi nec nulla eleifend, in sollicitudin 
            urna placerat.`,
      `Integer convallis quam ut nisi fringilla varius. Cras dignissim, libero ac egestas efficitur, eros libero 
            consequat urna, id tristique massa ipsum ac felis. Suspendisse nec ligula quis felis imperdiet egestas.`,
      `Mauris facilisis nunc ut turpis consectetur viverra. Curabitur non eros auctor, ultricies turpis non, 
            interdum erat. Sed imperdiet purus sit amet purus interdum, at tincidunt arcu ultricies.`,
    ],
    listTitle: 'Consectetur voluptate sint dolore eiusmod:',
    listItems: [
      'Nulla facilisi. Cras ac eros',
      'Integer vehicula sapien sed',
      'Ut tempor nisl sit amet',
      'Curabitur venenatis ipsum in',
      'Suspendisse sollicitudin metus nec',
      'Proin sodales mauris nec',
    ],
  },
  {
    subtitle: 'SERVICE',
    title: 'VR Events',
    text: [
      `Cras vel arcu in lacus venenatis aliquet ac sed eros. Nam ac lacus tempor, auctor urna nec, malesuada nunc. 
            Vivamus venenatis dolor vitae libero hendrerit, in tincidunt velit posuere.`,
      `Etiam faucibus arcu nec metus scelerisque, quis posuere libero scelerisque. Curabitur fringilla risus et 
            velit facilisis tincidunt. Nam ac ante in nisi tempus iaculis. Fusce nec mi id metus luctus ullamcorper.`,
      `Donec ac dolor sit amet arcu interdum efficitur. Vivamus imperdiet purus et tellus commodo, non dignissim 
            dolor blandit. In et nulla sed felis faucibus blandit non id nisi. Mauris tristique felis at nisi bibendum, 
            ut dignissim sem dignissim.`,
      `Morbi consequat arcu et felis aliquet, sit amet dignissim elit ultrices. Suspendisse potenti. Donec vehicula 
            erat vel ex viverra interdum. Aliquam posuere quam id dolor pharetra, sit amet varius orci tincidunt.`,
    ],
    listTitle: 'Proident incididunt labore sunt eiusmod:',
    listItems: [
      'Etiam tristique libero ac',
      'Sed id felis tincidunt',
      'Donec ut lectus non arcu',
      'Mauris laoreet lorem nec',
      'Aliquam scelerisque lorem ac',
      'Fusce malesuada lectus sit',
    ],
  },
  {
    subtitle: 'SERVICE',
    title: 'VR Design',
    text: [
      `At our VR design service, we specialize in creating immersive and engaging virtual reality experiences that
            transport your audience to a whole new world. Our team of experienced designers and developers work together
            to create VR experiences that are not only visually stunning but also interactive and user-friendly.`,
      `We take a collaborative approach to our VR design process, working closely with you to understand your
            specific needs and goals. Whether you're looking to create a VR training program, a marketing campaign, or a
            game, we can help you bring your idealife.`,
      `We use the latest VR technologies and software to create immersive experiences that are fully customized to
            your brand and message. We understand that every project is unique, and we work closely with you to ensure
            that we create a VR experience that perfectly matches your vision.`,
      `At our VR design service, we are committed to delivering high-quality VR experiences that engage, educate,
            and inspire your audience. Contact us today to discuss how we can help bring your ideas to life with our VR
            design services.`,
    ],
    listTitle: 'Our VR design services include:',
    listItems: [
      'Concept development and ideation',
      'Storyboarding and scriptwriting',
      '3D modeling and animation',
      'User interface design and development',
      'Sound design and effects',
      'Quality assurance testing and optimization',
    ],
  },
  {
    subtitle: 'SERVICE',
    title: 'VR Consulting',
    text: [
      `Suspendisse at orci euismod, tincidunt libero ac, suscipit sem. Vestibulum nec nisl eu arcu facilisis sodales 
            vitae ut urna. Fusce et ante nec arcu auctor malesuada sit amet eget odio.`,
      `Proin non dui vitae mauris fermentum pretium. Sed id nisl vel nisi sodales aliquet non et eros. Quisque porta 
            elit sit amet odio dapibus, vel finibus mauris gravida. Praesent vel tortor sed ipsum facilisis iaculis.`,
      `Aliquam faucibus tortor eu nisi laoreet, sit amet dictum arcu fermentum. Cras sit amet metus at lorem 
            vulputate hendrerit nec in dui. Integer pretium libero eget libero ultricies lobortis.`,
      `Pellentesque sollicitudin nunc at tellus sollicitudin, ut vestibulum libero vehicula. Cras ut quam ut purus 
            suscipit tincidunt. Nam nec ante nec eros vehicula fermentum a nec elit. Sed ac lorem nec augue gravida 
            efficitur.`,
    ],
    listTitle: 'Id eiusmod nulla aliquip magna veniam sit ex:',
    listItems: [
      'Phasellus imperdiet velit a',
      'Vestibulum ante ipsum primis',
      'Nam vitae elit in lacus',
      'Morbi viverra lacus id orci',
      'Duis consectetur augue sit',
      'In sit amet dolor vehicula',
    ],
  },
  {
    subtitle: 'SERVICE',
    title: 'VR Entertainment',
    text: [
      `Phasellus et felis ut tortor suscipit porttitor non vel ligula. Nulla et justo ut nunc venenatis ullamcorper 
            at at nisi. Nam sagittis orci sed nisl fermentum, vel gravida mi iaculis. Duis vulputate est sit amet quam 
            tincidunt, sed scelerisque massa interdum.`,
      `Nulla a neque in felis dictum dignissim non at libero. In consectetur leo ut sem viverra malesuada. Cras quis 
            augue vitae nisl vestibulum sodales ut eu libero.`,
      `Sed tristique libero nec justo lacinia, a pharetra odio malesuada. Vivamus nec nisl vel odio lacinia dictum. 
            Integer tristique tortor in nibh molestie, et condimentum lectus viverra.`,
      `Vivamus sagittis nisi a dui rhoncus, at fermentum nulla dignissim. Cras malesuada arcu sed dui pharetra, 
            quis congue libero laoreet. Integer nec sapien vel augue suscipit dapibus at a ligula. Sed vel metus vel 
            odio condimentum vehicula.`,
    ],
    listTitle: 'Elit culpa labore in dolor quis eiusmod:',
    listItems: [
      'Pellentesque tristique magna quis',
      'Nulla eget neque tincidunt',
      'Nunc efficitur sapien eu',
      'Aliquam auctor arcu eget',
      'Vestibulum sed felis in libero',
      'Quisque vehicula dui ut',
    ],
  },
  {
    subtitle: 'SERVICE',
    title: 'Client Testimony',
    text: [
      `Mauris et neque ac elit volutpat ultricies. Ut vulputate est ut purus cursus, in malesuada turpis ultrices. 
            Phasellus vel eros sit amet nunc tincidunt ultricies vel quis dui.`,
      `Duis malesuada nisi et turpis convallis, in luctus risus vehicula. Nunc sed lacus sit amet augue fermentum 
            cursus. Nulla facilisi. Morbi et nunc nec tortor tincidunt tempus id vel lorem.`,
      `Donec ultricies quam ac urna tristique, a scelerisque orci vehicula. Vivamus pharetra augue non nulla 
            efficitur, eget iaculis sem ullamcorper. Phasellus auctor odio sit amet sapien lacinia vehicula.`,
      `Sed volutpat ligula non turpis fermentum, vel tempus libero convallis. Phasellus egestas dolor sit amet 
            ligula malesuada, at congue velit sodales. Ut fermentum leo vel neque pulvinar, in scelerisque quam 
            pellentesque.`,
    ],
    listTitle: 'Minim sunt aliqua ex ex:',
    listItems: [
      'Aenean dictum erat id',
      'Donec pharetra purus nec',
      'Cras vel nulla at arcu',
      'Ut fermentum ligula eu',
      'Vivamus aliquet turpis et',
      'Nam vulputate lacus sed',
    ],
  },
];

interface ServiceTextProps {
  subtitle: string;
  title: string;
  text: string[];
  listTitle: string;
  listItems: string[];
}

const ServiceText = ({ subtitle, title, text, listTitle, listItems }: ServiceTextProps) => {
  return (
    <>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{text[0]}</p>
      <p className={styles.text}>{text[1]}</p>
      <div className={styles.listContainer}>
        <h3 className={styles.listTitle}>{listTitle}</h3>
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <p className={styles.text}>{text[2]}</p>
      <p className={styles.text}>{text[3]}</p>
      <button className={styles.button}>CONTACT US</button>
    </>
  );
};

const VRService = () => {
  const [activeService, setActiveService] = useState<number>(3);

  return (
    <section className={styles.vrService}>
      <div className={styles.container}>
        <div className={styles.circlesBackground}>
          <div className={styles.circles}>
            <div
              className={cn(styles.circle, styles.circleOne, { [styles.circleActive]: activeService === 0 })}
              onClick={() => setActiveService(0)}
            >
              <p className={styles.circleText}>VR Development</p>
            </div>
            <div
              className={cn(styles.circle, styles.circleTwo, { [styles.circleActive]: activeService === 1 })}
              onClick={() => setActiveService(1)}
            >
              <p className={styles.circleText}>VR Games</p>
            </div>
            <div
              className={cn(styles.circle, styles.circleThree, { [styles.circleActive]: activeService === 2 })}
              onClick={() => setActiveService(2)}
            >
              <p className={styles.circleText}>VR Events</p>
            </div>
            <div
              className={cn(styles.circle, styles.circleFour, { [styles.circleActive]: activeService === 3 })}
              onClick={() => setActiveService(3)}
            >
              <p className={styles.circleText}>VR Design</p>
            </div>
            <div
              className={cn(styles.circle, styles.circleFive, { [styles.circleActive]: activeService === 4 })}
              onClick={() => setActiveService(4)}
            >
              <p className={styles.circleText}>VR Consulting</p>
            </div>
            <div
              className={cn(styles.circle, styles.circleSix, { [styles.circleActive]: activeService === 5 })}
              onClick={() => setActiveService(5)}
            >
              <p className={styles.circleText}>VR Entertainment</p>
            </div>
            <div
              className={cn(styles.circle, styles.circleSeven, { [styles.circleActive]: activeService === 6 })}
              onClick={() => setActiveService(6)}
            >
              <p className={styles.circleText}>Client Testimony</p>
            </div>
          </div>
        </div>
        <div className={styles.textContainer}>
          <ServiceText {...vrServicesText[activeService]} />
        </div>
      </div>
    </section>
  );
};

export default VRService;
