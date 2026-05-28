import {
  MapPin,
  Globe,
  BookOpen,
  HeartHandshake,
  Mountain,
  Check,
  Mail,
  Phone,
  ChevronDown,
  Facebook,
  Instagram,
  Youtube,
  X,
  PlayIcon,

} from 'lucide-react';

import './button.css';
import { MdOutlineStar } from "react-icons/md";
import banner from './assets/herobanner.jpg';
import logo from './assets/Footer/Main Logo.png';
import mainlogo from './assets/Main Logo (1).png';
import americalogo from './assets/Footer/Frame 26.png';
import grandparents from './assets/grandparents.jpeg';
import families from './assets/families.jpeg';
import teachers from './assets/teachers.jpeg';
import parents from './assets/parents.png';
import montlystatebox from './assets/our50/a monthly state box.png';
import zoomamerica from './assets/our50/zoom across america.png';
import connectingfamilies from './assets/our50/connecting families.png';
import founderspark from './assets/our50/founder park across america.png';
import givebacktogether from './assets/our50/give back together.png';

import packedwithpurpose from './assets/Packed with purpose section/packed with purpose.png';
import carveleft from './assets/founder park/founders carve.png';
import carveright from './assets/Packed with purpose section/curveright.png';
import jounrneycontinuous from './assets/journey continues/journey continuous.png';

import rightsideimage from './assets/journey continues/rightsideimage.png';
import leftsideimage from './assets/journey continues/leftsideimage.png';

import icon1 from './assets/our50/icon 1.png';
import icon2 from './assets/our50/icon 2.png';
import icon3 from './assets/our50/icon 3.png';
import icon4 from './assets/our50/icon 4.png';
import icon5 from './assets/our50/icon 5.png';

import tag1976 from './assets/inspired by a real family section/1976.png';
import tag1997 from './assets/inspired by a real family section/1976 tag.png';
import tag1996tag from './assets/inspired by a real family section/1996-1997 tag.png';
import tag1996 from './assets/inspired by a real family section/1996-1997.png';
import tag1998tag from './assets/inspired by a real family section/1998 tag.png';
import tag1998 from './assets/inspired by a real family section/1998.png';

import badge from './assets/journey continues/badge.png';
import map from './assets/map.png';
import love from './assets/love.png';

import bestvalue from './assets/best-value.png';

import email from './assets/email.png';

import x from './assets/x.png';
import fb from './assets/fb.png';
import youtube from './assets/youtube.png';
import insta from './assets/insta.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const features = [
  {
    id: 1,
    title: 'A MONTHLY\nSTATE BOX',
    icon: icon1,
    // color: 'bg-[#07133d]',
    borderColor: 'hover:border-[#07133d]',
    titleColor: 'text-[#07133d]',
    description:
      'Inside find stories, maps, STATE EXPLORER CARDS, collectible stickers, state-focused treats, activities, keepsakes, attraction coupons and a REAL piece of each state!',
    image: montlystatebox,
  },
  {
    id: 2,
    title: 'ZOOM ACROSS\nAMERICA',
    icon: icon2,
    // color: 'bg-[#a51414]',
    borderColor: 'hover:border-[#a51414]',
    titleColor: 'text-[#a51414]',
    description:
      'Monthly live Zoom sessions where kids meet other kids from the featured state and ask questions about their state.',
    image: zoomamerica,
  },
  {
    id: 3,
    title: 'CONNECTING FAMILIES.\nBUILDING A LEGACY.',
    icon: icon3,
    // color: 'bg-[#5c7f2b]',
    borderColor: 'hover:border-[#5c7f2b]',
    titleColor: 'text-[#5c7f2b]',
    description:
      'The goal is to help families share meaningful conversations and experiences about America during this birthday year that kids will remember — and pass on tomorrow.',
    image: connectingfamilies,
  },
  {
    id: 4,
    title: 'GIVE BACK\nTOGETHER',
    icon: icon4,
    // color: 'bg-[#2f5f85]',
    borderColor: 'hover:border-[#2f5f85]',
    titleColor: 'text-[#2f5f85]',
    description:
      'The opportunity to help with OUR50.com Volunteer Projects and Acts of Kindness, geared to inspire youngsters and strengthen communities. Volunteering can be lots of fun!',
    image: givebacktogether,
  },
  {
    id: 5,
    title: 'FOUNDERS PARKS\nACROSS AMERICA',
    icon: icon5,
    // color: 'bg-[#5d2d72]',
    borderColor: 'hover:border-[#5d2d72]',
    titleColor: 'text-[#5d2d72]',
    description:
      'Be part of building a REAL PARK! Memberships support the goal of creating small parks across America with plaques honoring FOUNDING KIDS! The first will be in Florida — with hopefully many more in the future.',
    image: founderspark,
  },
];


const cards = [
  {
    title: "Grandparents",
    description:
      "A meaningful gift that sparks connection, learning, and memories that last a lifetime.",
    image: grandparents,
  },
  {
    title: "Homeschool Families",
    description:
      "Perfect for homeschoolers inspired by a real family who homeschooled their children while on the road traveling America.",
    image: families,
  },
  {
    title: "Teachers",
    description:
      "Engaging, standards-friendly resources that bring America’s states, stories, and communities to life in the classroom.",
    image: teachers,
  },
  {
    title: "Parents",
    description:
      "A chance to reconnect with your children through your own memories, road trips, traditions, and stories of America when you were growing up.",
    image: parents,
  },
];

const journeys = [
  {
    year: "1976",
    yearBg: "bg-[#1d2a44]", // Navy
    title: "THE FIRST JOURNEY",
    titleColor: "text-[#1d2a44]",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&auto=format&fit=crop&q=60", alt: "The First Journey 1976",
    paragraphs: [
      <>During America's Bicentennial, Marlene Smith-Graham, then a teenager, and her family worked their way through all 50 states.</>,
      <>It was a celebratory idea dreamed up by her Colombian-born mother, who wanted her children to appreciate the opportunities and freedoms America had given their family. Their journey was featured in newspapers and other media outlets across the country, earning them the nickname: <span className="text-[#a61911] font-bold">"The Bicentennial Family."</span></>
    ]
  },
  {
    year: "1996-1997",
    yearBg: "bg-[#a61911]", // Red
    title: "AMERICA'S FIRST INTERNET REALITY FAMILY",
    titleColor: "text-[#a61911]",
    image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&auto=format&fit=crop&q=60", // Replace with actual "Internet Reality Family" van image
    alt: "America's First Internet Reality Family",
    paragraphs: [
      <>Before social media and reality TV &ndash; when pay phones, dial-up internet, and no GPS were the norm &ndash; Marlene set out again to visit all 50 states, this time with HER family. A longtime journalist, she shared daily reports typed on a borrowed computer and uploaded without photos by an early internet provider.</>,
      <>Families and teachers across America, discovering this new thing called the internet, soon began following their journey online; and communities welcomed them into homes, schools, and local traditions. Media outlets in the U.S. and abroad began calling them <span className="text-[#a61911] font-bold">"America's Family,"</span> &ndash; a "Reality family" before reality TV existed as we now know it. They later appeared on national television, and the journey became the book HEADFIRST INTO AMERICA.</>
    ]
  },
  {
    year: "1998",
    yearBg: "bg-[#385e38]", // Green
    title: "THE VOLUNTEERISM JOURNEY",
    titleColor: "text-[#385e38]",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&auto=format&fit=crop&q=60", // Replace with actual "Volunteerism Journey" image
    alt: "The Volunteerism Journey 1998",
    paragraphs: [
      <>Inspired by the people who followed their travels online and the thousands of emails they received, the Graham family set out again&mdash;this time focused on volunteerism and giving back across America.</>,
      <>The journey became about more than seeing the country.</>,
      <>It became about experiencing communities, celebrating kindness, encouraging volunteerism and reconnecting people.</>
    ]
  }
];

const categories = [
  {
    title: "GRANDPARENTS",
    description: "A meaningful gift that sparks connection, learning, and memories that last a lifetime.",
    // Using solid fallback stock images. Replace these with your actual localized image paths.
    image: "https://images.unsplash.com/photo-1534437430931-18e4b868e6f1?w=500&auto=format&fit=crop&q=80",
    alt: "Grandparents"
  },
  {
    title: "HOMESCHOOL FAMILIES",
    description: "Perfect for homeschoolers inspired by a real family who homeschooled their children while on the road traveling America.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=500&auto=format&fit=crop&q=80",
    alt: "Homeschool Families"
  },
  {
    title: "TEACHERS",
    description: "Engaging, standards-friendly resources that bring America's states, stories, and communities to life in the classroom.",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&auto=format&fit=crop&q=80",
    alt: "Teachers"
  },
  {
    title: "PARENTS",
    description: "A chance to reconnect with your children through your own memories, road trips, traditions, and stories of America when you were growing up.",
    image: "https://images.unsplash.com/photo-1536640717440-e91544798369?w=500&auto=format&fit=crop&q=80",
    alt: "Parents"
  }
];

export default function App() {
  return (
    <main className="w-full overflow-hidden bg-[#F5ECE3]">
      {/* hero section */}

      <section className="w-full overflow-hidden leading-tight min-h-[260px] sm:min-h-[420px] lg:min-h-[600px]">
        <div className="relative w-full">

          {/* BACKGROUND IMAGE */}
          <img
            src={banner}
            alt="Children around a USA map at Founders Park"
            className="w-full h-auto object-cover select-none"
          />

          {/* CONTENT */}
          <div className="absolute bottom-5 xs:bottom-6 sm:bottom-8 lg:bottom-10 inset-0 z-20 flex flex-row items-end w-full">

            {/* LEFT SIDE */}
            <div
              className="
          w-[42%] sm:w-[50%] md:w-[50%] lg:w-[31%]

          px-2 sm:px-5 md:px-5 lg:px-7
          pb-2 sm:pb-6 md:pb-6 lg:pb-8
        "
            >

              {/* button */}
              {/* <div
                className="
    flex flex-row sm:flex-row md:flex-row
    gap-1 sm:gap-2 md:gap-2 sm:mt-5 sm:pt-5
    w-fit max-w-full
  "
              >

                <button
                  className="
      flex items-center justify-center gap-1

      bg-[#0F172A]
      font-opensans
      text-white
      font-semibold
      uppercase
      tracking-wider

      text-[5px]
      sm:text-[8px]
      md:text-[8px]
      lg:text-[14.48px]

      py-[3px]
      sm:py-1
      md:py-1
      lg:py-2

      px-[4px]
      sm:px-3
      md:px-3
      lg:px-4

      rounded
      shadow-lg
      hover:bg-black
      transition-all duration-300

      min-h-[20px]
      sm:min-h-[34px]
      md:min-h-[34px]
      lg:min-h-[44px]

      whitespace-nowrap
    "
                >
                  <img
                    src={email}
                    alt="Email"
                    className="
        w-[8px]
        sm:w-[12px]
        md:w-[12px]
        lg:w-[20px]

        mx-[2px]
        sm:mx-2
        md:mx-2

        bg-white
        h-auto
      "
                  />

                  <span className="leading-none">
                    Join the Early list
                  </span>
                </button>

                <a
                  href="https://web.archive.org/web/20001205114700/http://www.usatrip.org/"
                  className="
      flex items-center justify-center gap-1

      bg-white
      text-[#0F172A]
      font-opensans
      border border-[#0F172A] sm:border-2 md:border-2
      font-bold
      uppercase
      tracking-wider

      text-[5px]
      sm:text-[8px]
      md:text-[8px]
      lg:text-[14.48px]

      py-[3px]
      sm:py-1
      md:py-1
      lg:py-2

      px-[4px]
      sm:px-3
      md:px-3
      lg:px-4

      rounded
      shadow-lg
      hover:bg-slate-100
      transition-all duration-300

      min-h-[20px]
      sm:min-h-[34px]
      md:min-h-[34px]
      lg:min-h-[44px]

      whitespace-nowrap
    "
                >
                  <PlayIcon
                    size={6}
                    className="
        w-[10px] h-[10px]
        sm:w-[16px] sm:h-[16px]
        md:w-[16px] md:h-[16px]
        lg:w-[28px] lg:h-[28px]

        bg-[#0D152F]
        rounded-full
        p-[2px]
        sm:p-1
        md:p-1

        text-white
      "
                    fill="white"
                  />

                  <span className="leading-none">
                    Watch the Story
                  </span>
                </a>

              </div>  */}

              {/* CONTENT */}
              <div
                className="
    absolute
    inset-0
    z-20

    flex
    items-end

    w-full
    h-full

    overflow-hidden
  "
              >

                {/* LEFT SIDE */}
                <div
                  className="
      w-[42%]
      sm:w-[50%]
      md:w-[50%]
      lg:w-[31%]

      px-2
      sm:px-5
      md:px-5
      lg:px-10

      pb-2
      sm:pb-4
      md:pb-6
      lg:pb-20

      self-end

      flex
      items-end
      justify-center
    "
                >

                  <div
                    className="
        flex flex-row
        items-center

        gap-[2px]
        sm:gap-2

        w-fit
        max-w-full

        flex-nowrap
      "
                  >

                    {/* FIRST BUTTON */}
                    <button
                      className="
          flex items-center justify-center

          gap-[2px]
          sm:gap-1

          bg-[#0F172A]
          text-white

          font-opensans
          font-semibold
          uppercase
          tracking-wide

          rounded
          shadow-lg

          transition-all duration-300
          hover:bg-black

          whitespace-nowrap
          flex-shrink-0

          text-[4px]
          sm:text-[8px]
          md:text-[8px]
          lg:text-[11px]

          px-[3px]
          sm:px-2
          md:px-2
          lg:px-3

          py-[2px]
          sm:py-[4px]
          md:py-[4px]
          lg:py-[6px]

          min-h-[18px]
          sm:min-h-[28px]
          md:min-h-[28px]
          lg:min-h-[36px]
        "
                    >

                      <img
                        src={email}
                        alt="Email"
                        className="
            w-[7px]
            h-auto

            sm:w-[10px]
            md:w-[10px]
            lg:w-[16px]

            bg-white
            flex-shrink-0
          "
                      />

                      <span className="leading-none">
                        Join the Early list
                      </span>

                    </button>

                    {/* SECOND BUTTON */}
                    <a
                      href="https://web.archive.org/web/20001205114700/http://www.usatrip.org/"
                      className="
          flex items-center justify-center

          gap-[2px]
          sm:gap-1

          bg-white
          text-[#0F172A]

          border border-[#0F172A]
          sm:border-2

          font-opensans
          font-bold
          uppercase
          tracking-wide

          rounded
          shadow-lg

          transition-all duration-300
          hover:bg-slate-100

          whitespace-nowrap
          flex-shrink-0

          text-[4px]
          sm:text-[8px]
          md:text-[8px]
          lg:text-[11px]

          px-[3px]
          sm:px-2
          md:px-2
          lg:px-3

          py-[2px]
          sm:py-[4px]
          md:py-[4px]
          lg:py-[6px]

          min-h-[18px]
          sm:min-h-[28px]
          md:min-h-[28px]
          lg:min-h-[36px]
        "
                    >

                      <PlayIcon
                        className="
            w-[8px]
            h-[8px]

            sm:w-[14px]
            sm:h-[14px]

            md:w-[14px]
            md:h-[14px]

            lg:w-[20px]
            lg:h-[20px]

            bg-[#0D152F]
            rounded-full

            text-white

            p-[1px]
            sm:p-1

            flex-shrink-0
          "
                        fill="white"
                      />

                      <span className="leading-none">
                        Watch the Story
                      </span>

                    </a>

                  </div>

                </div>

              </div>


            </div>

            {/* RIGHT SIDE EMPTY SPACE */}
            <div className="flex-1" />

          </div>



        </div>
      </section>

  
      {/* second section */}
      <section className="w-full bg-[#f7f2eb] min-h-[562px] mt-[45px] overflow-hidden">

        <div className="mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14 md:mb-16">
            <h2 className="font-bebas pt-5 font-normal  flex items-center justify-center sm:text-[38px] text-[30px] md:text-[47.22px] tracking-normal">
              <MdOutlineStar size={28} className="text-[#951A1D]" />
              <span className="px-[12px]">WHAT IS OUR50.COM?</span>
              <MdOutlineStar size={28} className="text-[#951A1D]" />
            </h2>

            <p className="font-roboto font-bold text-[13px] sm:text-[15px] md:text-[18px] text-[#951A1D]">
              A monthly American experience that brings states, stories,
              traditions, and connections to life!
            </p>

            <p className="mt-2 text-[#09153f] text-[13px] sm:text-[15px] md:text-[18px] font-roboto font-bold uppercase">
              Your Membership Includes ...
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-10 items-stretch">

            {features.map((item) => (

              <div key={item.id} className="relative h-[420px]">

                {/* ICON */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-30">
                  <div className="w-[60px] h-[60px] sm:w-[71px] sm:h-[71px] rounded-full flex items-center justify-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-full h-full object-containf"
                    />
                  </div>
                </div>

                {/* CARD */}
                <div
                  className={`h-full bg-[#f8f4ee] border border-[#d8d2ca] rounded-xl overflow-hidden shadow-md flex flex-col hover:shadow-xl ${item.borderColor}`}
                >

                  {/* CONTENT (fixed area) */}
                  <div className="pt-12 text-center flex flex-col flex-1">

                    <h3
                      className={`font-bebas uppercase px-3 text-[18px] sm:text-[22px] md:text-[29.33px] leading-[100%] whitespace-pre-line ${item.titleColor}`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 font-roboto px-2 md:px-5 font-bold text-[12px] sm:text-[13px] leading-[1.25] text-[#1f1f1f] flex-1">
                      {item.description}
                    </p>

                  </div>

                  {/* IMAGE (fixed height) */}
                  <div className="w-full h-[200px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-fill"
                    />
                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* third section */}
      <div className="w-full bg-[#f6efe5] py-8 px-4 md:px-5 font-serif antialiased select-none">

        {/* --- TOP HEADER --- */}

        <div className="text-center max-w-7xl mx-auto mb-6 flex flex-col items-center py-7">

          <h2 className="font-bebas  text-[16px] md:text-[35px] lg:text-[47.22px] font-normal  text-[#0D152F] flex items-center justify-center whitespace-nowrap">
            <MdOutlineStar size={28} className="text-[#951A1D]" />
          <span className="px-[12px]">INSPIRED BY A REAL FAMILY. REAL JOURNEYS. REAL IMPACT.</span>
          <MdOutlineStar size={28} className="text-[#951A1D]" />
          </h2>

          <p className="text-[#951A1D] font-roboto font-bold mt-2 text-[14px] md:text-[16px] lg:text-[18px] tracking-normal">
  This story is America's story — three unforgettable
  <br className="block md:hidden" />
   journeys that started a movement.
</p>

        </div>
        {/* --- THREE COLUMNS CONTAINER --- */}
        <div className=" grid grid-cols-1 lg:grid-cols-3 gap-2 md:gap-5 lg:gap-10">

          {/* ================= COLUMN 1 ================= */}
          <div className="bg-white rounded-xl w-full  shadow-[0_3px_12px_rgba(0,0,0,0.06)] p-4 flex flex-col h-full border-b-4 border-transparent hover:border-[#0D152E] transition-colors duration-300">

            <div className="flex flex-col flex-grow">
              {/* Header */}
              <div className="flex items-center justify-center text-center gap-5 my-2">
                <div>
                  <img src={tag1997} alt="1997 Journey" className='w-[80px] h-[70px]' />
                </div>
                <div className='flex flex-col items-center justify-between gap-2'>
                  <h3 className="font-bebas pb-2 font-normal text-[32.82px] leading-[100%] tracking-normal text-center">
                    THE FIRST JOURNEY
                  </h3>
                  {/* Divider */}
                  <div className="relative w-full flex items-center justify-center mt-3">
                    <div className="w-full border-t border-[#e2938f]"></div>

                    <div className="absolute bg-white px-2 flex gap-1 text-[9px] text-[#a81c14]">
                      <span className="scale-75 text-[#0D152F]">★</span>
                      <span className="text-xs -mt-0.5 font-bold">★</span>
                      <span className="scale-75 text-[#0D152F]">★</span>
                    </div>

                  </div>
                </div>
              </div>



              {/* Content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 items-start flex-grow">

                {/* Image */}
                <div className=" p-1 bg-white shadow-sm w-full h-[328px]">
                  <img
                    src={tag1976}
                    alt="1976 Journey"
                    className="w-full h-full object-cover "
                  />
                </div>

                {/* Text */}
                <div className="text-[12.39px] md:text-[16px] lg:text-[18px] font-normal text-gray-900 font-roboto  space-y-1.5">

                  <p>
                    During America's Bicentennial, Marlene Smith-Graham, then a teenager, and her family worked their way through all 50 states.
                  </p>

                  <p className="">
                    It was a celebratory idea dreamed up by her Colombian-born mother, who wanted her children to appreciate the opportunities and freedoms America had given their family.
                    Their journey earned them the nickname: <br />
                    <span className="text-[#a81c14] font-bold">
                      {" "}“The Bicentennial Family.”
                    </span>

                  </p>


                  
                </div>
              </div>

            </div>

                <div className="mt-3 flex justify-end">
                    <a
                      href="https://web.archive.org/web/20001205114700/http://www.usatrip.org/"
                      target="_blank"
                      className="relative overflow-hidden bg-[#a81c14] text-white text-[11px] font-bold px-3 py-1 md:px-5 md:py-2 rounded shadow-sm group"
                    >
                      {/* Hover Overlay */}
                      <span className="absolute inset-0 bg-[#0D152F] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>

                      {/* Button Text */}
                      <span className="relative z-10">
                        Read More
                      </span>
                    </a>
                  </div>
          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="bg-white w-full rounded-xl  p-3 md:p-5 flex flex-col h-full shadow-sm border-b-4 border-transparent hover:border-[#b32017] transition-colors duration-300">

            {/* KEEPING SECOND CARD UNCHANGED */}

            {/* TOP HEADER */}
            <div className="flex items-start justify-center gap-5 mb-3">

              {/* Ribbon */}
              <div className="relative flex items-center justify-center w-[100px] h-[70px]">

                {/* Background Shape */}

                <div className=" p-1 bg-white shadow-sm h-full">
                  <img
                    src={tag1996tag}
                    alt="1996-1997 Journey"
                    className="w-[98px] h-[57px] object-cover"
                  />
                </div>
              </div>

              {/* Title */}
              <div className="pt-1">
                <h3 className="text-[19.84px]  font-bebas  uppercase text-[#b32017] leading-[100%] font-normal tracking-normal text-left">
                  America's First
                  <br />
                  <span className="text-[19.84px]font-bebas pb-2 font-normal text-[32.82px] leading-[100%] tracking-normal font-bebas"> Internet Reality Family</span>
                </h3>

                {/* Underline */}

                <div className="relative w-full flex items-center justify-center my-2">
                  <div className="w-full border-t border-[#e2938f]"></div>

                  <div className="absolute bg-white px-2 flex gap-1 text-[9px] text-[#a81c14]">
                    <span className="scale-75 text-[#0D152F]">★</span>
                    <span className="text-xs -mt-0.5 font-bold">★</span>
                    <span className="scale-75 text-[#0D152F]">★</span>
                  </div>
                </div>



              </div>
            </div>

            {/* IMAGE + RIGHT TEXT */}
            <div className="md:flex gap-3 items-start">

              {/* IMAGE SECTION */}
              <div className="w-full md:w-[48%] shrink-0 bg-white p-1 shadow-sm">

                <img
                  src={tag1996}
                  alt="Van Journey"
                  className="w-full h-full object-cover border border-gray-300"
                />

                {/* Tiny Links */}

              </div>

              {/* RIGHT TEXT */}
              <div className="w-full md:w-[52%] text-[12.39px] md:text-[16px] lg:text-[16px] font-normal  text-black font-roboto space-y-2">

                <p>
                  Before social media and reality TV
                  when pay phones, dial-up internet,
                  and no GPS were the norm —
                  Marlene set out again to visit all 50 states,
                  this time with HER family.
                  A longtime journalist, she shared daily reports
                  typed on a borrowed computer and uploaded
                  without photos by an early internet provider.
                  Families and teachers across America,
                  discovering this new thing called the internet, <br />

                </p>


              </div>
            </div>

            {/* BOTTOM TEXT */}
            <div className="mt-1 ps-2 text-[12.39px] md:text-[14px] font-normal text-black font-robooto  flex-grow">



              <p>
                soon began following their journey online;
                and communities welcomed them into homes,
                schools, and local traditions.
                Media outlets in the U.S. and abroad began
                calling them
                <span className="text-[#b32017] font-bold">
                  {" "}“America's Family,”
                </span>
                — a “Reality family” before reality TV existed
                as we now know it.
              </p>

              <p>
                They later appeared on national television,
                and the journey became the book

                HEADFIRST INTO AMERICA.

              </p>
            </div>

            {/* BUTTON */}
            <div className=" flex justify-end">
              <a
                href="https://web.archive.org/web/20001205114700/http://www.usatrip.org/"
                target="_blank"
                className="relative overflow-hidden bg-[#a81c14] text-white text-[11px] font-bold px-3 py-1 md:px-5 md:py-2 rounded shadow-sm group"
              >
                {/* Hover Overlay */}
                <span className="absolute inset-0 bg-[#0D152F] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>

                {/* Button Text */}
                <span className="relative z-10">
                  Read More
                </span>
              </a>
            </div>
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="bg-white w-full rounded-xl shadow-[0_3px_12px_rgba(0,0,0,0.06)] p-4 flex flex-col h-full border-b-4 border-transparent hover:border-[#3b5e32] transition-colors duration-300">

            <div className="flex flex-col flex-grow">

              {/* Header */}
              <div className="flex items-center justify-center gap-3 my-2">


                <div className="flex items-start gap-3 mb-3">

                  {/* Ribbon */}

                  <div className=" bg-white shadow-sm h-full">
                    <img
                      src={tag1998tag}
                      alt="1998 Volunteerism"
                      className="w-[80px] h-[72px] object-cover "
                    />

                  </div>

                  {/* Title */}
                  <div className="pt-1">
                    <h3 className="text-[31.47px]  uppercase text-[#3b5e32] font-normal font-bebas leading-[100%] tracking-normal text-left">
                      THE VOLUNTEERISM JOURNEY

                    </h3>

                    {/* Underline */}
                    <div className="relative w-full flex items-center justify-center mt-4">
                      <div className="w-full border-t border-[#e2938f]"></div>

                      <div className="absolute bg-white px-2 flex gap-1 text-[9px] text-[#a81c14]">
                        <span className="scale-75 text-[#0D152F]">★</span>
                        <span className="text-xs -mt-0.5 font-bold">★</span>
                        <span className="scale-75 text-[#0D152F]">★</span>
                      </div>
                    </div>
                  </div>
                </div>


              </div>



              {/* Content */}
              <div className="md:flex md:flex-row gap-2 mt-3 items-start flex-grow">

                {/* Sidebar */}
                <div className="w-full md:w-[50%] flex flex-row  p-0.5 bg-white shadow-sm shrink-0 items-stretch">



                  <div className=" flex flex-col justify-between bg-white pl-0.5 w-full h-[310px]">

                    <img
                      src={tag1998}
                      alt="1998 Volunteerism"
                      className="w-full h-full object-cover"
                    />


                  </div>
                </div>

                {/* Text */}
                <div className="text-[12.39px] md:text-[16px] lg:text-[17px] font-normal text-gray-900 font-roboto  space-y-1.5">

                  <p>
                    Inspired by the people who followed their travels online and the thousands of emails they received, the Graham family set out again—this time focused on volunteerism and giving back across America.
                  </p>

                  <p>
                    The journey became about more than seeing the country.
                  </p>

                  <p>
                    It became about experiencing communities, celebrating kindness, encouraging volunteerism and reconnecting people.
                  </p>
                  
                </div>
              </div>
                <div className="mt-3 flex justify-end">
                      <a
                        href="https://web.archive.org/web/20001205114700/http://www.usatrip.org/"
                        target="_blank"
                        className="relative overflow-hidden bg-[#a81c14] text-white text-[11px] font-bold px-3 py-1 md:px-5 md:py-2 rounded shadow-sm group"
                      >
                        {/* Hover Overlay */}
                        <span className="absolute inset-0 bg-[#0D152F] translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></span>

                        {/* Button Text */}
                        <span className="relative z-10">
                          Read More
                        </span>
                      </a>
                    </div>
            </div>

            {/* Footer */}
          </div>
        </div>
      </div>


        {/* Fourth Section - Journey Continues */}
<section className="w-full py-4 sm:py-6 px-2 sm:px-4 overflow-hidden">
  <div className="overflow-hidden rounded-[14px] lg:rounded-[18px] border border-[#4F6625]">

    <div className="flex flex-col lg:flex-row">

      {/* LEFT — RV Photo */}
      <div className="w-full lg:w-[45%] flex-shrink-0">
        <img
          src={leftsideimage}
          alt="OUR50 RV on the road"
          className="w-full h-[260px] lg:h-full object-cover object-center block"
        />
      </div>

      {/* RIGHT — Content Panel */}
      <div
        className="w-full lg:w-[55%] relative flex flex-col justify-between overflow-hidden"
      >

        {/* Background Image */}
        <img
          src={rightsideimage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-right  pointer-events-none select-none"
        />

        {/* TEXT CONTENT */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-5 sm:pt-6 lg:pt-8 pb-3 sm:pb-4">

         

          {/* Heading */}
          <h2
            className="
              text-base md:text-xl lg:text-5xl
              font-extrabold text-[#0D152F] uppercase
              tracking-wide mb-2 sm:mb-3
              pr-16 sm:pr-20
              font-bebas
              pt-10
            "

          >
            The Journey Continues
          </h2>

          {/* Paragraphs */}
          <p className="text-[11px] font-roboto sm:text-[16px] lg:text-[24px] lg:pr-10 text-gray-700 mb-3 lg:mb-7">
            In the months after launch, members of the OUR50.com family will once again hit the
            road—visiting communities, schools, festivals, events, and local gatherings to
            celebrate what still connects us as Americans.
          </p>

          <p className="text-[11px] font-roboto sm:text-[16px] lg:text-[24px] lg:pr-10 text-gray-700  mb-3 lg:mb-7">
            Throughout the year and beyond, OUR50 plans to highlight the people, places,
            traditions, and stories that still bring us together.
          </p>

          <p className="text-[11px] font-roboto sm:text-[16px] lg:text-[24px]  text-[#951A1D]  mb-3 lg:mb-7">
            We're not just exploring America. We're celebrating what still connects us.
            <br />
            And reminding each other that we are more alike than different.
          </p>
        </div>

        {/* CONTACT BOX */}
        <div
          className="
            relative z-10
            mx-3 sm:mx-4 lg:mx-5
            mb-3 sm:mb-4 lg:mb-5
            rounded-xl
            px-3 sm:px-5
            py-3 sm:py-4
            text-white
          "
        >

          {/* Title */}
          <h3 className="text-[12px] sm:text-[18px] lg:text-[36px] font-bold text-center font-bebas text-[#0D152F] uppercase  mb-0.5">
            We'd Love to Hear From You!
          </h3>

          <p className="text-[10px] sm:text-[11px] lg:text-base text-[#0D152F] text-center mb-2 sm:mb-3">
            Questions, comments, or suggestions?
          </p>

          {/* Divider */}
          <div className="w-[80%] mx-auto flex items-center gap-2 mb-2 sm:mb-3 ">
            <div className="flex-1 h-px w-[100px] bg-[#951A1D] mt-2" />

            <span className="text-[#951A1D] font-patrick text-[9px] sm:text-[10px] md:text-2xl tracking-widest font-semibold whitespace-nowrap">
              ★ Please contact us at ★
            </span>

            <div className="flex-1 h-px w-[100px] bg-[#951A1D] mt-2" />
          </div>

         {/* CONTACT BUTTONS */}
<div className="flex flex-row items-center justify-center gap-3 mt-6">

  {/* EMAIL */}
  <a
    href="mailto:info@our50.com"
    className="
      flex items-center gap-3
      bg-[#F5F1EB]
      border border-[#E5DED5]
      rounded-full
      px-5 py-3
      shadow-sm
      hover:shadow-md
      transition-all duration-300
      min-w-[180px]
    "
  >
    {/* ICON */}
    <div className="w-10 h-10 rounded-full bg-[#951A1D] flex items-center justify-center flex-shrink-0">
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>

    {/* TEXT */}
    <div className="leading-tight">
      <p className="text-[10px] font-bold uppercase tracking-wide text-[#951A1D]">
        Email Us
      </p>

      <p className="text-[11px] sm:text-[12px] font-semibold text-[#222]">
        info@our50.com
      </p>
    </div>
  </a>

  {/* CALL */}
  <a
    href="tel:2798219008"
    className="
      flex items-center gap-3
      bg-[#F5F1EB]
      border border-[#E5DED5]
      rounded-full
      px-5 py-3
      shadow-sm
      hover:shadow-md
      transition-all duration-300
      min-w-[180px]
    "
  >
    {/* ICON */}
    <div className="w-10 h-10 rounded-full bg-[#951A1D] flex items-center justify-center flex-shrink-0">
      <svg
        className="w-5 h-5 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </div>

    {/* TEXT */}
    <div className="leading-tight">
      <p className="text-[10px] font-bold uppercase tracking-wide text-[#951A1D]">
        Call Us
      </p>

      <p className="text-[11px] sm:text-[12px] font-semibold text-[#222]">
        (239) 821-9008
      </p>
    </div>
  </a>

</div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section>
        <div className="bg-[#efe8de] min-h-screen flex items-center justify-center px-4 py-10">
          <div className=" w-full grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Left Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative border hover:border-[#4F6625] hover:shadow-[0_12px_35px_rgba(140,31,47,0.18)] transition-all duration-300">

              {/* IMAGE */}
              <img
                src={founderspark}
                alt="Founders Park"
                className="w-full h-[360px] object-cover"
              />

              {/* FIXED CURVE */}
              <div className="absolute bottom-0 right-0 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[245px] z-0 pointer-events-none">
                <img
                  src={carveleft}
                  alt="curve"
                  className="w-full h-auto block"
                />
              </div>

              {/* CONTENT */}
              <div className="px-1 md:px-8 py-7 relative z-10">

                {/* Title */}
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className="text-[#8c1f2f] text-xl">★</span>

                  <h2 className="text-[#1f2a44] font-bebas text-[30px] md:text-[43px] font-extrabold uppercase tracking-wide">
                    Founders Parks
                  </h2>

                  <span className="text-[#8c1f2f] text-xl">★</span>
                </div>

                {/* Description */}
                <div className="space-y-5 text-black text-[15px] md:text-[18px] lg:text-[24px]  pe-7 font-normal">

                  <p className="font-roboto">
                    OUR50.com’s long-term vision is not only to help young people learn about America, but also to create modest Founders Parks across the country. Founding members and families will be honored on plaques, giving them a special place to visit for years to come – and today’s youngsters may one day bring their own children and grandchildren there.
                  </p>

                  <p className="font-roboto">
                    The first park will be built somewhere in Florida; and the goal is for young people to feel they helped build it. It’s not just a park – it’s their pak! And hopefully with your membership help, we can build many more in the future!
                  </p>

                </div>

                {/* Footer */}
                <div className="mt-10 flex  items-center text-center justify-center gap-3 text-[#6f7b4b] font-semibold">
                  <img src={map} alt='map' className="w-[34px] h-[34px]" />

                  <p className="text-[15px] md:text-[18px] lg:text-[24px]">Our first park will be built somewhere in Florida.</p>
                </div>

              </div>
            </div>


            {/* Right Card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm relative border hover:border-[#4F6625] hover:shadow-[0_12px_35px_rgba(140,31,47,0.18)] transition-all duration-300">

              {/* IMAGE */}
              <img
                src={packedwithpurpose}
                alt="Packed with purpose"
                className="w-full h-[360px] object-cover"
              />

              {/* FIXED CURVE */}
              <div className="absolute bottom-0 left-0 w-[140px] sm:w-[180px] md:w-[220px] lg:w-[245px] z-0 pointer-events-none">
                <img
                  src={carveright}
                  alt="curve"
                  className="w-full h-auto block"
                />
              </div>

              {/* CONTENT */}
              <div className="px-2 md:px-8 pt-8 pb-14  relative z-10">

                {/* Title */}
                <div className="flex items-center justify-center gap-1 md:gap-3 ">
                  <span className="text-[#8c1f2f] text-xl">★</span>

                  <h2 className="text-[#1f2a44] font-bebas text-[30px] md:text-[43px] font-extrabold uppercase tracking-wide">
                    Packed With Purpose
                  </h2>

                  <span className="text-[#8c1f2f] text-xl">★</span>
                </div>

                {/* Subtitle */}
                <p className="text-center text-[#466D3B] text-sm md:text-base lg:text-[18px] font-semibold mb-6">
                  Reusing Boxes. Reducing Waste. Continuing the Journey.
                </p>

                {/* Description */}
                <div className="space-y-5 px-4 text-[15px] md:text-[18px] lg:text-[24px] text-[#444]   font-normal">

                  <p className="font-roboto ">
                    Every box we ship carries more than products—it carries our promise to protect the planet and strengthen communities.
                  </p>

                  <p className="font-roboto">
                    OUR50.com plans to use “reclaimed” and “used” shipping boxes and fillers whenever possible as part of our commitment to reducing waste and giving materials a second life. A Used Box has already had a journey. Now it becomes part of yours.
                  </p>

                </div>
                <br /> <br />
                {/* Footer */}
                <div className="mt-10 flex justify-center items-center gap-3 ps-4 text-[#6f7b4b] ">
                  <img src={love} alt='map' className="w-[31px] h-[27px]" />

                  <p className="font-roboto  text-[15px] md:text-[18px] lg:text-[24px]">
                    Thank you for supporting a movement that makes a difference.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* sixth section */}
      <section className="bg-[#efe8de] py-10 sm:py-12 lg:py-16 px-4">
        <div className="">

          {/* Heading */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 sm:mb-10">
            <span className="text-[#9b1c1f] text-lg sm:text-xl">★</span>

            <h2 className="text-[#0D152F] font-bebas uppercase font-normal tracking-wide text-xl sm:text-3xl lg:text-[46px] text-center">
              Perfect For
            </h2>

            <span className="text-[#9b1c1f] text-lg sm:text-xl">★</span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-5">

            {cards.map((card, index) => (
              <div
                key={index}
                className=" border border-[#9f9b95] rounded-xl overflow-hidden flex flex-col h-full shadow-sm"
              >

                {/* Content */}
                <div className="px-4 sm:px-5 pt-5 sm:pt-6 pb-4 text-center flex flex-col flex-grow">

                  <h3 className="text-[#0D152F] font-bebas uppercase font-normal text-xl sm:text-2xl lg:text-[36px] leading-tight mb-3 sm:mb-4">
                    {card.title}
                  </h3>

                  <p className="text-[#1c1c1c] px-5 font-roboto text-center text-[18px] sm:text-[15px] md:text-[17px] font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Image (RECTANGULAR + SMALLER) */}
                <div >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full object-cover rounded-md"
                  />
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* seventh section */}
      <section className="bg-[#efe8de]  lg:pb-15 px-4 overflow-hidden">
        <div className="">

          {/* Heading */}
          <div className="text-center mb-10 lg:mb-14">
            <div className="flex items-center justify-center gap-3 mb-2 flex-wrap">
              <span className="text-[#a51d21] text-lg sm:text-xl">★</span>

              <h2 className="text-[#0D152F] font-bebas  uppercase font-normal tracking-wide text-2xl sm:text-4xl lg:text-[47px] leading-none text-center">
                Be A Part Of This Movement
              </h2>

              <span className="text-[#951A1D] text-lg sm:text-xl">★</span>
            </div>

            <p className="text-[#a51d21] font-bold font-opensans text-[16] sm:text-base">
              Help launch a new American journey!
            </p>
          </div>


          {/* Cards Section */}
          <div className="grid grid-cols-1 xl:grid-cols-[1.7fr_1.1fr] gap-10 items-stretch border-red-500 ">

            {/* LEFT SIDE - CARD 1 & 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 rounded-xl gap-x-12 gap-y-8 items-stretch">

              {/* ========================= */}
              {/* Card 1 */}
              {/* ========================= */}
              <div className="bg-[#f7f3ee] border-2 border-[#b8b1aa] rounded-xl relative flex flex-col h-full shadow-sm hover:border-[#a51d21] hover:shadow-2xl transition-all duration-300">

                {/* Top Bar */}
                <div className="bg-[#a51d21] rounded-t-xl text-white text-center py-2 px-4">
                  <h3 className="uppercase font-roboto font-semibold text-[20px]">
                    Founding Family Pricing
                  </h3>

                  <p className="text-[15px] font-roboto font-normal">
                    Founding Families Save!
                  </p>
                </div>

                {/* Badge */}
                <div className="absolute top-[99px] right-[-5px] md:right-[-43px] z-20">
                  <img
                    src={bestvalue}
                    alt="Best Value"
                    className="w-[85px] h-[85px] object-contain"
                  />
                </div>

                {/* Body */}
                <div className="p-6 bg-white rounded-b-xl flex flex-col flex-1">

                  {/* Price */}
                  <div className="text-center mb-5 flex items-start justify-center leading-none">

                    <span className="text-[#a51d21] font-bebas text-[25px] mr-1">
                      $
                    </span>

                    <div className="relative">
                      <span className="text-[#a51d21] font-bebas text-[62px] leading-[0.8]">
                        24
                      </span>

                      <span className="absolute -top-1 -right-8 text-[#a51d21] font-bebas text-[25px]">
                        99
                      </span>
                    </div>

                    <div className="flex flex-col items-start ml-1 mt-4">
                      <span className="text-black font-roboto text-[25px] font-medium">
                        /month
                      </span>
                    </div>

                  </div>

                  {/* Features */}
                  <ul className="space-y-1 flex-1 font-medium">
                    {[
                      "Lock in Founding Price",
                      "First access to boxes & experiences",
                      "Founding member welcome gifts",
                      "Access to Zoom sessions",
                      "Help shape the journey",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#222]">
                        <Check
                          size={22}
                          strokeWidth={3}
                          className="text-[#a51d21] mt-[2px]"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* BUTTON */}
                  <button className="relative w-full font-roboto text-[16px] font-semibold uppercase py-2 rounded overflow-hidden group text-white">

                    {/* base color */}
                    <span className="absolute inset-0 bg-[#a51d21]"></span>

                    {/* hover fill */}
                    <span className="absolute inset-0 bg-[#0d173d] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300"></span>

                    {/* text */}
                    <span className="relative z-10">
                      Join The Early List
                    </span>

                  </button>

                </div>
              </div>

              {/* ========================= */}
              {/* Card 2 */}
              {/* ========================= */}
              <div className="bg-[#f7f3ee] border-2 border-[#b8b1aa] rounded-xl flex flex-col h-full shadow-sm hover:border-[#0d173d] hover:shadow-2xl transition-colors duration-300">

                {/* Top Bar */}
                <div className="bg-[#0d173d] rounded-t-xl text-white text-center py-3 px-4">
                  <h3 className="uppercase font-roboto font-semibold text-[20px]">
                    Regular Pricing
                  </h3>

                  <p className="text-[15px] font-roboto font-normal opacity-90">
                    Starting October 2026
                  </p>
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">

                  {/* PRICE */}
                  <div className="text-center mb-5 flex items-start justify-center leading-none">

                    {/* Dollar */}
                    <span className="text-[#0d173d] font-bebas font-normal text-[25px]  mr-1">
                      $
                    </span>

                    {/* Main Price */}
                    <div className="relative">
                      <span className="text-[#0d173d] font-bebas font-normal text-[62px] leading-[0.8]">
                        29
                      </span>

                      {/* 99 */}
                      <span className="absolute -top-1 -right-8 text-[#111] font-bebas text-[25px] font-normal leading-none">
                        99
                      </span>
                    </div>

                    {/* Month */}
                    <div className="flex flex-col items-start ml-1 mt-4">
                      <span className="text-black font-roboto text-[25px] font-medium leading-none mt-1">
                        /month
                      </span>
                    </div>

                  </div>

                  {/* FEATURES */}
                  <ul className="space-y-2 font-medium flex-1">
                    {[
                      "Monthly State Box",
                      "Zoom Across America",
                      "Community & Give Back Projects",
                      "Ongoing Member Perks",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[#222] text-sm sm:text-base"
                      >
                        <Check
                          strokeWidth={3}
                          size={18}
                          className="text-[#0d173d] mt-[2px] shrink-0"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* BUTTON */}
                  <button className="relative w-full font-roboto text-[16px] font-semibold uppercase py-2 rounded overflow-hidden group text-white">

                    {/* base color */}
                    <span className="absolute inset-0 bg-[#0d173d]"></span>

                    {/* hover fill */}
                    <span className="absolute inset-0 bg-[#a51d21] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300"></span>

                    {/* text */}
                    <span className="relative z-10">
                      Join The Early List
                    </span>

                  </button>

                </div>
              </div>

            </div>

            {/* ========================= */}
            {/* FORM CARD */}
            {/* ========================= */}
            <div className="bg-white rounded-xl px-4 pt-4 shadow-sm h-full flex flex-col">

              <h3 className="text-[#0d173d] font-caveat text-[36px] leading-none my-3">
                Join the Early List
              </h3>

              <p className="text-[#555] font-roboto text-[13px] mb-3">
                Be among the first families to help shape OUR50.
              </p>

              <form className="space-y-2.5 p-4 rounded flex flex-col flex-1">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    className="border border-[1.5px] border-gray-400 px-3 py-[8px] text-[13px] rounded"
                    placeholder="First Name"
                  />

                  <input
                    className="border border-[1.5px] border-gray-400 px-3 py-[8px] text-[13px] rounded"
                    placeholder="Last Name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <input
                    className="border border-[1.5px] border-gray-400 px-3 py-[8px] text-[13px] rounded"
                    placeholder="Email"
                  />

                  <input
                    className="border border-[1.5px] border-gray-400 px-3 py-[8px] text-[13px] rounded"
                    placeholder="Phone"
                  />
                </div>

                <div className="relative">
                  <select className="w-full border border-[1.5px] border-gray-400 px-3 py-[6px] text-[13px] rounded text-[#666]">
                    <option>Your State</option>
                  </select>
                </div>

                <label className="flex py-3 items-start gap-2 text-xs text-[#444]">
                  <input type="checkbox" className="mt-[2px]" />

                  <span className="text-[14px] font-roboto">
                    I’d like information about hosting OUR50 events.
                  </span>
                </label>

                <div className="mt-auto">

                  {/* BUTTON */}
                  <button className="relative w-full font-roboto text-[16px] font-semibold uppercase py-2 rounded overflow-hidden group text-white">

                    {/* base color */}
                    <span className="absolute inset-0 bg-[#a51d21]"></span>

                    {/* hover fill */}
                    <span className="absolute inset-0 bg-[#0d173d] scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-300"></span>

                    {/* text */}
                    <span className="relative z-10 font-medium text-[15.38px] font-roboto">
                      Yes! Add Me To The Early List
                    </span>

                  </button>

                  <p className="text-[14.74px] text-[#555] font-roboto mt-3">
                    No payment required. Founding members will receive early updates,
                    previews, and launch opportunities.
                  </p>

                </div>

              </form>
            </div>

          </div>

          {/* ========================= */}
          {/* Contact Section */}
          {/* ========================= */}


          {/* another secion */}

          <div className="text-center my-10 border lg:mt-20 flex flex-col items-center justify-center gap-3">

            <h2 className="text-[#0D152F] uppercase font-normal font-bebas  text-3xl sm:text-4xl lg:text-[49.36px] leading-tight">
              We’d Love To Hear From You!
            </h2>

            <p className="text-[#222] text-[20.04px] font-normal font-roboto sm:text-2xl">
              Questions, comments, or suggestions?
            </p>
                   
            {/* Divider */}
            <div className="flex items-center justify-center gap-4 mt-3 my-2">
              <div className="h-[1px] bg-[#b95b5d] w-14 sm:w-28"></div>

              <div className="flex items-center gap-2 text-[#a51d21]">
                <span>★</span>

                <p className="font-patrick text-xl sm:text-2xl">
                  Please contact us at
                </p>

                <span>★</span>
              </div>

              <div className="h-[1px] bg-[#b95b5d] w-14 sm:w-28"></div>
            </div>

            {/* Contact Box */}

            <div className="mt-3 sm:mt-5 flex items-center justify-center">

              <div className="bg-white rounded-full flex items-center justify-between px-5 sm:px-6 py-5 shadow-sm w-full md:w-[390px] h-[70px]">

                {/* EMAIL */}
                <div className="flex items-center gap-2 sm:gap-3">

                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#a61d1d] flex items-center justify-center text-white">
                    <Mail size={16} />
                  </div>

                  <div className="text-left leading-tight">
                    <p className="font-bebas text-[#a61d1d] uppercase text-[10px] sm:text-[11px] lg:text-[24px]">
                      EMAIL US
                    </p>
                    <p className="text-[#1b1b1b] text-[10px] sm:text-[11px] lg:text-[13px] font-bold">
                      info@OUR50.com
                    </p>
                  </div>

                </div>

                {/* Divider */}
                <div className="w-[1px] h-10 bg-gray-300 mx-2"></div>

                {/* PHONE */}
                <div className="flex items-center gap-2 sm:gap-3">

                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#a61d1d] flex items-center justify-center text-white">
                    <Phone size={16} />
                  </div>

                  <div className="text-left leading-tight">
                    <p className="font-bebas text-[#a61d1d] uppercase text-[10px] sm:text-[11px] lg:text-[24px]">
                      CALL US
                    </p>
                    <p className="font-roboto text-[10px] sm:text-[11px] lg:text-[13px] font-bold">
                      (239) 821-9008
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
      </section>

      {/* Footer section */}
      <footer className="bg-[#071133] border-t-2 border-[#b51f24]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Main Footer */}
          <div className="flex flex-col lg:flex-row items-center justify-between ">

            {/* Left Logo Section */}
            <div className="text-center lg:text-center flex flex-col items-center  w-[291px] gap-2">

              <img src={logo} alt='OUR50 Logo' className='w-[220.58px] h-[65.16px] ' />


              <p className="text-white font-roboto font-normal text-[12px] sm:text-xs uppercase leading-relaxed mt-2 max-w-[290px]">
                More than a box, more than a journey.
                <br />
                A movement to celebrate what connects us.
              </p>

              <p className="text-white  font-roboto font-normal text-[12px] sm:text-xs mt-3">
                Built from real journeys across America.
              </p>
            </div>

            {/* Social Section */}
            <div className="flex flex-col items-center">
              <p className="text-white uppercase font-roboto font-medium text-[16px] tracking-wide mb-4">
                Follow Our Journey
              </p>



              <div className="flex items-center gap-8">

                {/* Facebook */}
                <a
                  href="/"
                  className=" border-2 border-white rounded-full flex items-center px-2 py-2 justify-center text-[#071133] hover:bg-[#071133] hover:text-white transition-all duration-300"
                >

                  <FontAwesomeIcon icon={faFacebookF} className='text-white w-[19.99px] h-[20px] ' />
                </a>

                {/* Instagram */}
                <a
                  href="/"
                  className="border-2 border-white rounded-full px-2 py-2 flex items-center justify-center text-[#071133] hover:bg-[#071133] hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faInstagram} className='text-white  w-[19.99px] h-[20px] ' />
                </a>

                {/* X */}
                <a
                  href="/"
                  className="border-2 border-white rounded-full px-2 py-2 flex items-center justify-center text-[#071133] hover:bg-[#071133] hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faXTwitter} className='text-white w-[19.99px] h-[20px] ' />
                </a>

                {/* YouTube */}
                <a
                  href="/"
                  className="border-2 border-white rounded-full px-2 py-2 flex items-center justify-center text-[#071133] hover:bg-[#071133] hover:text-white transition-all duration-300"
                >
                  <FontAwesomeIcon icon={faYoutube} className='text-white w-[19.99px] h-[20px] ' />
                </a>

              </div>
            </div>

            {/* Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-center">
              <a
                href="/contact"
                className="text-white text-[16px] font-roboto font-normal uppercase"
              >
                Contact Us
              </a>

              <a
                href="/privacy-policy"
                className="text-white  text-[16px] font-roboto font-normal uppercase "
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="text-white text-[16px] font-roboto font-normal uppercase "
              >
                Terms
              </a>
            </div>

            {/* Right Logo */}
            <div className="text-center">
              <img src={americalogo} alt='america Logo' className='w-[138px] h-[100px]' />
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}
