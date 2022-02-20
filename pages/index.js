import Header from "../components/Header"
import styles from "../styles/Home.module.css"
import Image from "next/image"
import Masonry from "react-masonry-css"
import MobileHeader from "../components/MobileHeader"
import Head from "next/head"
import { useState, useCallback, useEffect } from "react"
import { BsInstagram } from "react-icons/bs"
import { MdCall } from "react-icons/md"
import Link from "next/link"
import client from "../sanity"

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false)

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true)
    } else {
      setTargetReached(false)
    }
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`)
    media.addListener(updateTarget)

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true)
    }

    return () => media.removeListener(updateTarget)
  }, [])

  return targetReached
}

export default function Home({ heroTitle, photos, heroSubtitle, about }) {
  const breakpoint = {
    default: 4,
    1100: 2,
    700: 1,
  }

  console.log(heroTitle, photos, heroSubtitle, about)

  const isBreakpoint = useMediaQuery(900)

  const images = [
    "1.jpg",
    "2.jpg",
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
        <title>Sophie</title>

        <meta name='description' content='portfolio model kenya sophia' />
      </Head>
      {isBreakpoint && <MobileHeader />}
      {!isBreakpoint && <Header />}

      {/* Hero */}
      <section className={styles.hero} id='home'>
        <div className={styles.heroContent}>
          <article>
            <p>{heroSubtitle?.herosubtitle}</p>
            <h2>{heroTitle?.herotitle}</h2>
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
            {photos.length > 0 &&
              photos?.map((photo) => (
                <div key={photo.photodetails} className={styles.galleryImage}>
                  <div className={styles.imagewrapper}>
                    <Image
                      src={`${photo.image.asset.url}`}
                      width={150}
                      height={150}
                      layout='responsive'
                      objectFit='cover'
                      alt={photo.photodetails}
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
          <p>{about?.about}</p>

          <button>
            <a href='mailto:obatjael@gmail.com'>Talk to me now</a>
          </button>
          <div className={styles.contactIcons}>
            <Link href='https://www.instagram.com/sophie_jael_/?hl=en'>
              <a>
                <BsInstagram />
              </a>
            </Link>
            <Link href='https://www.instagram.com/sophie_jael_/?hl=en'>
              <a>
                <MdCall />
                <span> 0781969555/0798667464</span>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  const heroSubtitle = await client.fetch(
    `*[_type == "herosubtitle"\][0]{
      herosubtitle
    }`
  )
  const heroTitle = await client.fetch(
    `*[_type == "herotitle"\][0]{
      herotitle
    }`
  )
  const about = await client.fetch(
    `*[_type == "about"\][0]{
      about
    }`
  )

  const photos = await client.fetch(`*[_type == "photos"\]{
    photodetails,
    image{
      asset ->{
        url,

      },
      alt
    }
  }`)

  return {
    props: { heroTitle, photos, heroSubtitle, about },
  }
}
