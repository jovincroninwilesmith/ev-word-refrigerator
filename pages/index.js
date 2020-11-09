import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const listOne = [
    'Spotted',
    'Sparkly',
    'Rainbow',
    'Poisonous',
    'Fiery',
    'Herbs',
    'Floral',
    'Eyes',
    'Crawly',
    'Long Wiggly',
    'Airborne',
    'Sprinkle',
    'Grid',
    'Cosmic',
    'Botanical',
    'Twin',
    'Sweet',
    'Sharp',
    'Cozy',
    'Semi Circle',
    'Melt',
    'Floral',
    'Palm',
    'Dreamy',
    'Milky',
    'Electric',
    'Jagged'
  ];
  const listTwo = [
    'Sneakies',
    'Feathered',
    'Cropped',
    'Fishnets',
    'Duster',
    'Overcoat',
    'Puffy Jacket',
    'Sun Hat',
    'Bikini',
    'Turtleneck',
    'Thigh Highs',
    'Coverall',
    'Jumpsuit',
    'Masked',
    'Big Sleeves',
    'Long Sleeves',
    'Bedroom',
    'Backpack',
    'Fur',
    'Dad Shirt',
    'Shoulder Pads',
    'Mens Wear',
    'Big Earrings'
  ];
  const listThree = [
    'Wig',
    'Curly',
    'Up',
    'Braid',
    'Bun(s)',
    'Pigtails',
    'Windblown',
    'Poofy',
    'Bangs',
    'White',
    'Spiked',
    'Not Hair',
    'Halo',
    'Slick',
    'Accessorized',
    'Wavy',
    'Looong',
    'Alt',
    'Frizzy'
  ];

  let optionOne = listOne[Math.floor(Math.random() * listOne.length)];
  let optionTwo = listTwo[Math.floor(Math.random() * listTwo.length)];
  let optionThree = listThree[Math.floor(Math.random() * listThree.length)];

  const [blurb, setBlurb] = useState(`${optionOne} + ${optionTwo} + ${optionThree}`);

  const clickFunction = () => {
    optionOne = listOne[Math.floor(Math.random() * listOne.length)];
    optionTwo = listTwo[Math.floor(Math.random() * listTwo.length)];
    optionThree = listThree[Math.floor(Math.random() * listThree.length)];
    setBlurb(`${optionOne} + ${optionTwo} + ${optionThree}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Elyse Vulture Word Refrigerator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>What's up, Elyse!</h1>

        <p className={styles.description}>Time to get cracking on some new art. 🔥🔥🔥</p>

        <div className={styles.grid}>
          <a onClick={() => clickFunction()} className={styles.card}>
            <h3>🥰 Today's topic 🥰</h3>
            <h3 className={styles.prompt}>{blurb}</h3>
            <p>If this prompt sucks 🤮🤮🤮, just click this area.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
