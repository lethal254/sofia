import Header from "../components/Header"
import styles from "../styles/Home.module.css"
import Image from "next/image"
import Masonry from "react-masonry-css"
import { useMediaQuery } from "react-responsive"
import MobileHeader from "../components/MobileHeader"
import Head from "next/head"

export default function Home() {
  const breakpoint = {
    default: 4,
    1100: 2,
    700: 1,
  }

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 900px)" })

  const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
  ]

  return (
    <div className={styles.home}>
      <Head>
        <title>Sophia</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' content='portfolio model kenya sophia' />
      </Head>
      {isTabletOrMobile ? <MobileHeader /> : <Header />}

      {/* Hero */}
      <section className={styles.hero} id='home'>
        <div className={styles.heroContent}>
          <article>
            <p>Model, Writer</p>
            <h2>Commercial and brand model.</h2>
            <button>
              <a href='mailto:obatjael@gmail.com'>Hire me</a>
            </button>
          </article>
          <div className={styles.heroImage}>
            <Image
              src='/heroimage2.png'
              width={150}
              height={150}
              layout='responsive'
              objectFit='cover'
              alt='Sofia'
            />
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className={styles.projects} id='gallery'>
        <div className={styles.projectsContent}>
          <h3>Gallery</h3>
          <Masonry
            breakpointCols={breakpoint}
            className='my-masonry-grid'
            columnClassName='my-masonry-grid_column'>
            {images.map((image) => (
              <div key={image} className={styles.galleryImage}>
                <div className={styles.imagewrapper}>
                  <Image
                    src={`/${image}`}
                    width={150}
                    height={150}
                    layout='responsive'
                    objectFit='cover'
                    alt='Sofia'
                  />
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </section>
      <section className={styles.contact} id='contact'>
        <div className={styles.contactContent}>
          <h4>About me.</h4>
          <p>
            I am Sophie Jael, a model and writer. For the past three years I
            have been the brand ambassador at Pritt Events Limited. Besides that
            I have the pleasure to have modeled at Tuvibe high fashion modeling
            event and Ere Nouvelle Beauty Salon. I have interests in commercial
            and brand modeling. I am passionate about fashion. I am currently
            looking for opportunities that would enhance my skills
          </p>
          <button>
            <a href='mailto:obatjael@gmail.com'>Talk to me now</a>
          </button>
        </div>
      </section>
    </div>
  )
}
