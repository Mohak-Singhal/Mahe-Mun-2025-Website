import React, { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import MunStats from "../components/MunStats";
import { motion, useScroll, useTransform } from "framer-motion";
import ConferenceHighlights from "../components/ConferenceHighlights";
import HomeScreen from "../components/HomeScreen";
import Footer from "../components/Footer";
import { WavyText } from "../components/textanimation";

const LetterSectionGenSec = () => (
  <div className="relative min-h-screen">
    <div className="absolute inset-0 bg-[url('/sashmob.jpg')] sm:bg-[url('/gensec.jpg')] bg-cover rounded-4xl sm:rounded-t-[7%]  opacity-80 bg-center"></div>
    <div className="absolute inset-0 bg-gray-200 opacity-75 rounded-4xl sm:rounded-t-[7%] "></div>

    <div className="font-['Inter'] relative z-10 px-6 md:px-12 w-full max-w-6xl mx-auto">
      <WavyText
        className="mt-8 text-xl sm:text-4xl md:text-6xl lg:text-[60px] font-medium text-center md:text-left"
        text="Letter from the Secretary-General"
      />

      <p className="mt-6 text-gray-700 text-sm font-semibold text-justify">
        <strong>Dearest Delegates,</strong>
        <br />
        <br />
        It is with immense pride and honor that I welcome you all to the
        inaugural National Conference of{" "}
        <strong>MAHE Model United Nations</strong>, taking place in{" "}
        <strong>August 2025</strong>. This conference marks a monumental
        milestone in our journey—what began as a vision has now become a
        reality, with hundreds of delegates from across the country coming
        together to engage in rigorous debate, diplomacy, and collaboration.
        Leading a Secretariat and Organizing Committee of over 150 dedicated
        individuals, we are committed to delivering an unparalleled MUN
        experience, setting a new benchmark for excellence.
        <br />
        <br />
        My name is <strong>Pedaballe Sashreek Reddy</strong>, and I have the
        privilege of serving as your Secretary-General for{" "}
        <strong>MAHE MUN 2025</strong>. My journey in Model United Nations began
        seven years ago, and throughout my time as a delegate, Executive Board
        member, and organizer, I have found myself continually drawn to the
        transformative power of this activity. The moment I dreamt of for
        years—the honor of standing before you all, striking the gavel to open
        this prestigious conference—has finally arrived. Having already had the
        opportunity to do so for our January conference, I am now thrilled to
        present an even grander vision for August: a national-level conference
        that could become one of the largest MUNs in India.
        <br />
        <br />
        With <strong>15 dynamic committees</strong> designed to challenge and
        inspire, this conference is set to be nothing short of remarkable. We
        aim to foster a space where critical thinking meets diplomacy, where
        innovative solutions are born, and where lifelong friendships are
        forged. One of my friends from the MUN circuit once shared a simple yet
        profound sentiment:{" "}
        <em>
          "Learn one new thing and make one new friend by the end of this
          conference."
        </em>{" "}
        I echo these words to you all and encourage you to embrace this
        philosophy.
        <br />
        <br />
        Our mission at MAHE MUN is not just to host a conference but to create
        an experience—one that leaves every delegate more confident, more
        knowledgeable, and more inspired than when they arrived. I eagerly await
        the spirited discussions, the groundbreaking resolutions, and the bonds
        that will be built over the course of these intense yet rewarding days.
        <br />
        <br />
        Should you have any questions or require assistance, please do not
        hesitate to reach out. The entire Secretariat and I are here to ensure
        that you have an unforgettable experience at{" "}
        <strong>MAHE MUN 2025</strong>.
        <br />
        <br />
        Looking forward to welcoming you all to Manipal in August!
        <br />
        <br />
        <strong>With immense gratitude and anticipation,</strong>
        <br />
        <strong>Pedaballe Sashreek Reddy</strong>
        <br />
        <strong>Secretary-General & Vice President</strong>
        <br />
        <strong>MAHE Model United Nations 2025</strong>
        <br />
        <a
          href="mailto:pedaballe.mitmpl2023@learner.manipal.edu"
          className="text-blue-600 hover:underline"
        >
          pedaballe.mitmpl2023@learner.manipal.edu
        </a>
      </p>
    </div>
  </div>
);

const LetterSection = () => (
  <div className="relative min-h-screen">
    <div className="absolute inset-0 bg-[url('/riyamob.jpg')] sm:bg-[url('/riya.jpg')] bg-cover rounded-4xl sm:rounded-t-[7%] bg-center opacity-80"></div>
    <div className="absolute inset-0 bg-gray-200 opacity-75 rounded-4xl sm:rounded-t-[7%] "></div>

    <div className="relative z-10 px-6 md:px-12 w-full max-w-6xl mx-auto">
      <WavyText
        className="mt-8 text-[22px] sm:text-4xl md:text-6xl lg:text-[60px] font-medium text-center md:text-left"
        text="Letter from the President"
      />

      <p
        style={{ fontFamily: "Inter, sans-serif" }}
        className=" mt-6 text-gray-700 text-sm font-semibold text-justify"
      >
        <strong>Esteemed Delegates,</strong>
        <br />
        <br />
        Every great movement begins with an idea, a vision bold enough to
        challenge the status quo. MAHE Model United Nations 2025 is not just a
        conference—it is a powerhouse of intellect, diplomacy, and leadership.
        This August, as we bring together some of the sharpest minds from across
        the nation, we are not just debating policies; we are shaping the future
        of global discourse.
        <br />
        <br />I am <strong>Riya Singh</strong>, and I have the privilege of
        serving as your President for this landmark edition of MAHE MUN. My
        journey in public speaking, strategic leadership, and multifaceted
        management has taught me one fundamental truth: Excellence is never
        accidental—it is engineered. And this conference is a testament to that
        principle.
        <br />
        <br />
        Behind this grand endeavor stands a formidable team of individuals who
        bring their passion, dedication, and expertise to every aspect of this
        conference. The Board of Directors provides the strategic vision that
        drives MAHE MUN forward, while our 40+ Executive Board Members work
        relentlessly to ensure that every committee delivers the intensity and
        intellectual rigor that defines this conference. Alongside them, a 30+
        member Secretariat has spent countless hours shaping an event that goes
        beyond just debate—it is a true simulation of global diplomacy. And at
        the heart of it all, our 80+ Organizing Committee Members work
        tirelessly behind the scenes to make sure that every detail is executed
        with precision. Together, we are not just hosting an event; we are
        redefining what an MUN can be.
        <br />
        <br />
        With <strong>15 dynamic committees</strong>, this conference is designed
        to push boundaries, provoke thought, and create an environment where
        diplomacy thrives. Whether you find yourself negotiating peace, tackling
        pressing global crises, or drafting policies that could reshape the
        future, you will be stepping into a space that demands nothing less than
        excellence. Expect thought-provoking discussions, diplomatic
        breakthroughs, and resolutions that go beyond the ordinary. Whether you
        are here to challenge, collaborate, or champion a cause, one thing is
        certain—you will leave this conference transformed.
        <br />
        <br />
        As we prepare to welcome you to Manipal, I leave you with one thought:
        Leadership is not about speaking the loudest; it is about making the
        most impact. So step forward, engage fearlessly, and let this conference
        be the stage where your ideas take flight.
        <br />
        <br />
        The Secretariat and I stand ready to make this an unforgettable
        experience for you. Should you have any queries or need any assistance,
        please do not hesitate to reach out. I look forward to seeing each and
        every one of you bring your passion, intellect, and diplomatic prowess
        to MAHE MUN 2025.
        <br />
        <br />
        <strong>With ambition and anticipation,</strong>
        <br />
        <strong>Riya Singh</strong>
        <br />
        <strong>President</strong>
        <br />
        <strong>MAHE MUN Student Organization</strong>
        <br />
        <a
          href="mailto:riya.mcopsmpl2022@learner.manipal.edu"
          className="text-blue-600 hover:underline"
        >
          riya.mcopsmpl2022@learner.manipal.edu
        </a>
      </p>
    </div>
  </div>
);

// export default LetterSection;

const FullImage = ({ src }) => {
  // Get scroll progress
  const { scrollYProgress } = useScroll();

  // Scale image based on scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Zoom from 1x to 1.2x

  return (
    <div className="w-full h-screen overflow-hidden rounded-t-4xl sm:rounded-t-[7%]">
      <motion.img
        src={src}
        alt="Full View"
        className="w-full h-full object-cover"
        style={{ scale }}
      />
    </div>
  );
};

const sections = [
  {
    id: 1,
    content: <HomeScreen />,
    classname: "h-auto md:h-screen bg-cover bg-center",
    style: { backgroundImage: "url('/mahe2.png')" },
  },
  {
    id: 2,
    content: <LetterSection />,
    classname: "rounded-4xl sm:rounded-t-[7%] bg-gray-200 ",
  },
  {
    id: 3,
    content: <LetterSectionGenSec />,
    classname: "rounded-4xl sm:rounded-t-[7%] bg-gray-200 ",
  },
  {
    id: 4,
    content: <ConferenceHighlights />,
    classname: "rounded-4xl sm:rounded-[7%] bg-black h-auto",
  },
  {
    id: 5,
    content: <MunStats />,
    classname: "rounded-4xl sm:rounded-t-[7%] bg-[#f2eaea] h-auto  p-4 sm:p-8",
  },
  {
    id: 6,
    content: <FullImage src="/mun.jpg" />,
    classname: "rounded-t-4xl sm:rounded-t-[7%] h-auto md:h-screen",
  },
];

const Home = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen width changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define transformation values based on screen size
  const homeY = useTransform(scrollYProgress, [0, 0.1], ["0vh", "0vh"]);
  const letterY = useTransform(
    scrollYProgress,
    [0.01, 0.25],
    isMobile ? ["120vh", "-130vh"] : ["100vh", "-20vh"]
  );
  const letterY2 = useTransform(
    scrollYProgress,
    [0.25, 0.4],
    isMobile ? ["120vh", "-112vh"] : ["100vh", "-20vh"]
  );
  const confY = useTransform(
    scrollYProgress,
    [0.4, 0.55],
    isMobile ? ["140vh", "-105vh"] : ["100vh", "-50vh"]
  );
  const statsY = useTransform(
    scrollYProgress,
    [0.45, 0.8],
    isMobile ? ["140vh", "-1vh"] : ["100vh", "35vh"]
  );
  const imageY = useTransform(
    scrollYProgress,
    [0.39, 1],
    isMobile ? ["140vh", "39vh"] : ["100vh", "45vh"]
  );

  return (
    <div className="min-h-screen max-w-full bg-gradient-to-b from-gray-50 to-white">
      <ul className="list-none p-0 grid grid-cols-1 gap-0 pb-[45vh]">
        {sections.map((section, index) => {
          let translateY;
          switch (index) {
            case 0:
              translateY = homeY;
              break;
            case 1:
              translateY = letterY;
              break;
            case 2:
              translateY = letterY2;
              break;
            case 3:
              translateY = confY;
              break;
            case 4:
              translateY = statsY;
              break;
            case 5:
              translateY = imageY;
              break;
            default:
              translateY = "0vh";
          }

          return (
            <motion.li
              key={section.id}
              className="sticky top-0 flex justify-center"
              style={{ y: translateY }}
            >
              <div
                style={section.style}
                className={`shadow-xl flex flex-col w-full ${section.classname} text-black `}
              >
                {section.content}
              </div>
            </motion.li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};

export default Home;
