import Image from 'next/image'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog,faMugSaucer } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { createClient } from 'pexels';
import { loadEnvConfig } from '@next/env'
import axios from 'axios'
import Link from 'next/link'

export default function Home({images, textColor} : any) {
  return (
    <>
      <Head>
        <title>2ERO.dev</title>
		    <meta name="keyword" content="2ERO, 2ero" />
		    <meta name="description" content="This is 2ERO's home" />
		    <meta name="author" content="2ERO" />
        <meta property="og:title" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="2ero.dev" />
        <meta property="og:description" content="2ERO's home" />
        <meta property="og:site_name" content="2ero.dev" />
        <meta property="og:image" content="https://2ero.dev/og-image.png" />
        <meta property="og:locale" content="ko_KR" />
      </Head>
      <div className="absolute w-full h-full -z-50">
        <img src={images.src.original} className="w-full h-full" alt="image"/>
      </div>
      <div className="absolute w-full h-full -z-40 bg-[url('../public/overlay-pattern.png')] bg-fixed bg-bottom-left bg-no-repeat ">
      </div>
      <div className="absolute w-full h-full -z-40 bg-[url('../public/overlay.svg'),url('../public/overlay-pattern.png')] bg-fixed bg-no-repeat bg-left bg-cover">
      </div>
      <main className={`flex w-screen h-screen flex-col justify-center items-center bg-transparent text-${textColor}`}>
        <h1 className="font-['Noto_Sans'] text-[2.6rem] font-bold uppercase">2ero</h1>
        <h4 className="pt-2 pb-4">PHP • Markup Language (Html, CSS)</h4>
        <div className="flex flex-row justify-center items-center text-center text-3xl">
          <a href="//velog.io/@z3ro2201" className={`m-2 p-2 w-14 h-14 border border-solid border-${textColor} rounded-full`}>
            <FontAwesomeIcon icon={faBlog}/>
          </a>
          <a href="//github.com/z3ro2201" className={`m-2 p-2 w-14 h-14 border border-solid border-${textColor} rounded-full`} target="_blank">
            <FontAwesomeIcon icon={faGithubAlt}/>
          </a>
          <a href="mailto:2ero.rcv@gmail.com" className={`m-2 p-2 w-14 h-14 border border-solid border-${textColor} rounded-full`} target="_blank">
            <FontAwesomeIcon icon={faEnvelope}/>
          </a>
          <a href="//dabang.2ero.dev" className={`m-2 p-2 w-14 h-14 border border-solid border-${textColor} rounded-full`} target="_blank">
            <FontAwesomeIcon icon={faMugSaucer}/>
          </a>
        </div>
      </main>
      <footer className={`py-2 px-4 w-screen fixed flex bottom-0 justify-between items-center z-1 text-${textColor}`}>
        <small>
          &copy; <span className="uppercase">2022-2023 2ero.dev</span>.
          &nbsp;Image by <a href="//pexels.com" target="_blank">pexcels.com</a>
        </small>
        <span className="text-xs">
          Photographer. <a href={images.url} className="underline decoration-dotted text-semibold" target="_blank">{images.photographer}</a>
        </span>
      </footer>
    </>
  )
}

export async function getServerSideProps(context:any) {
  const category = ['airport', 'sky', 'natural', 'water', 'sea', 'boat', 'cloudy', 'space', 'river', 'earth'];
  const getCategory:string = category[Math.floor(Math.random() * category.length)];
  const apiKey = process.env.NEXT_PUBLIC_PEXCELS_KEY;
  const apiUrl = process.env.NEXT_PUBLIC_PEXCELS_URL + getCategory;
  const headers = {
    Authorization: apiKey as string
  }
  const res = await fetch(apiUrl, {
    headers: headers
  }).then(response => response.json())
  .catch((error:any) => console.log('error'));

  const data = res.photos;
  const randomId = Math.floor(Math.random() * 10);
  const imageData = data[randomId];
  const textColor = getTextColorByBackgroundColor(imageData.avg_color);
  return {
    props : {
      images: data[randomId],
      textColor: textColor
    }
  }
}

/**
 * 
 * 글자 색상을 배경색상에 맞춰 변환
 * 
 * 참고: http://yoonbumtae.com/?p=2977
 * 
 */
function getTextColorByBackgroundColor(hexColor:any) {
  const c = hexColor.substring(1); // 색상 앞의 #를 제거함
  const rgb = parseInt(c, 16); // rrggbb를 10진수로 변환
  const r = (rgb >> 16) & 0xff; // red 추출
  const g = (rgb >> 8) & 0xff; // green 추출
  const b = (rgb >> 0) & 0xff; // blue 추출

  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709

  return luma < 127.5 ? "white" : "black"; // 글자색을 결정함
}