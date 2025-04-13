import React, { useEffect, useRef, useState } from "react";
import { Mail } from "lucide-react";
import "../styles/team.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const stats = [
  { number: 250, label: "Delegates" },
  { number: 25, label: "Executive Board Members" },
  { number: 50, label: "Organizers" },
  { number: 40, label: "Volunteers" },
];

const teamMembers = [
  {
    name: "Riya Singh",
    role: "President",
    img: "/team_mem_pics/president.jpg",
    linkedin:
      "https://www.linkedin.com/in/riya-singh-20ab61282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "riya.mcopsmpl2022@learner.manipal.edu",
  },
  {
    name: "Sashreek Reddy",
    role: "Vice President",
    img: "/team_mem_pics/vp.jpg",
    linkedin:
      "https://www.linkedin.com/in/sashreek-reddy-963681331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "pedaballe.mitmpl2023@learner.manipal.edu",
  },
  {
    name: "Siddhi Anand",
    role: "Director of External Affairs",
    img: "/team_mem_pics/external_affairs.jpg",
    linkedin:
      "https://www.linkedin.com/in/siddhi-anand-8677aa260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "Siddhi.docmpl2023@learner.manipal.edu",
  },
  {
    name: "Chhavi Mehta",
    role: "Director of Internal Affairs",
    img: "/team_mem_pics/internal_affairs.jpg",
    linkedin:
      "https://www.linkedin.com/in/chhavi-mehta-a73164243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "chhavi.mslsmpl2022@learner.manipal.edu",
  },
  {
    name: "Shweta Banerjee",
    role: "Director of Collaborations & Public Relations",
    img: "/team_mem_pics/collab_public.jpg",
    linkedin: "https://www.linkedin.com/in/shweta-banerjee-130b89225/",
    email: "shweta.mcodsmpl2022@learner.manipal.edu",
  },
  {
    name: "Ekansh Bansal",
    role: "Director of Finance & Technology",
    img: "/team_mem_pics/finance_tech.jpg",
    linkedin:
      "https://www.linkedin.com/in/ekansh-bansal-100848287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "ekansh.mitmpl2023@learner.manipal.edu",
  },
  {
    name: "Devansh Tandon",
    role: "Director of Management",
    img: "/team_mem_pics/management.jpg",
    linkedin:"https://www.linkedin.com/in/devanshtandon2003?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    email: "devansh.tandon1@learner.manipal.edu",
  },
  {
    name: "Mahalaksmy Venkataraman",
    role: "Director of Design",
    img: "/team_mem_pics/design.jpg",
    linkedin: "http://www.linkedin.com/in/mahasmy",
    email: "mahalakshmy.msapmpl2022@learner.manipal.edu",
  },
];

const webDevTeam = [
  { name: "Mohak Singhal", role: "USG Web Dev" },
  { name: "Krishna Anand" },
  { name: "Aaditya" },
  { name: "Twinkal Tomar" },
  { name: "Hemanth Rajvardhan" },
];

const otherTeams = [
  { name: "Charan", role: "Charge d'Affairs" },
  { name: "Sakshi Agarwal", role: "USG Vigilance" },
  { name: "Vanisha", role: "USG Sponsorship" },
  { name: "Parth Sharma", role: "USG Finance" },
  { name: "Ayushi Gupta", role: "USG Tech Support" },
  { name: "Mehul", role: "USG Logistics" },
  { name: "Satya", role: "USG Logistics" },
  { name: "Nikhil", role: "USG Hospitality" },
  { name: "Nelofer", role: "USG Venue Management" },
  { name: "Vansh Lohiya", role: "USG Collaboration" },
  { name: "Eashan Shetty", role: "USG Collaboration" },
  { name: "Mehak Khandelwal", role: "USG Marketing (Social Media)" },
  { name: "Garv Arora", role: "USG Public Relations and Development" },
  { name: "Shravya", role: "USG Graphics" },
  { name: "Ameena Bootawala", role: "USG Registrations" },
  { name: "Vaishnavi", role: "USG Feedback" },
  { name: "Dhruv Choudhary", role: "USG Research" },
  { name: "Venissa", role: "USG Cultural Affairs" },
  { name: "Deep Shetty", role: "USG Delegate Affairs" },
  { name: "A Gnanan", role: "USG Delegate Affairs" },
  { name: "Hardik Verma", role: "Head of PAV" },
  { name: "Koushik", role: "USG Photography" },
  { name: "Keshav", role: "USG Videography" },
  { name: "Ananya", role: "USG Content Writer" },
];

const Team = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [showAllMembers, setShowAllMembers] = useState(false);
  const observerRef = useRef(null);
  const initialVisibleMembers = 6;
  const toggleShowMembers = () => {
    setShowAllMembers(!showAllMembers);
  };
  const shouldShowButton =
    typeof window !== "undefined" &&
    window.innerWidth <= 768 &&
    otherTeams.length > initialVisibleMembers;

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [
              ...new Set([...prev, entry.target.dataset.index]),
            ]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".team-member");
    elements.forEach((el, index) => {
      el.dataset.index = index.toString();
      observerRef.current.observe(el);
    });

    return () => observerRef.current.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prevCounts) =>
        prevCounts.map((count, index) =>
          count < stats[index].number ? count + 5 : stats[index].number
        )
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar classname="text-white bg-black" />

      <div className="p-5 mt-22">
        <div className="header-container">
          <div>
            <h1 className="heading font-['Norwester']">Meet Our Team</h1>
            <div className="divider"></div>
          </div>
          <p className="description font-['Inter']">
            Our team consists of dedicated professionals who work tirelessly to
            bring the best experience. Meet the amazing people making it all
            happen!
          </p>
        </div>

        <div className="stats-container font-['Norwester']">
          {stats.map((stat, index) => (
            <div className="stat" key={index}>
              <h2 className="font-['Inter']">{counts[index]}+</h2>
              <div className="underline"></div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <h2 className="board_heading font-['Norwester']">Board of Directors</h2>
        <div className="first-row">
          {teamMembers.slice(0, 2).map((member, index) => (
            <div
              className={`team-member ${
                visibleCards.includes(index.toString()) ? "visible" : ""
              }`}
              key={index}
            >
              <div className="image-container">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="info font-['Inter']">
                <h3 className="name-email">{member.name}</h3>
                <p>{member.role}</p>
                <div className="icons-row">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/team_mem_pics/linkdin.png"
                      alt="LinkedIn"
                      className="icon-img"
                    />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid-container">
          {teamMembers.slice(2).map((member, index) => (
            <div
              className={`team-member ${
                visibleCards.includes((index + 2).toString()) ? "visible" : ""
              }`}
              key={index + 2}
            >
              <div className="image-container">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="info">
                <h3 className="name-email">{member.name}</h3>
                <p>{member.role}</p>
                <div className="icons-row">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/team_mem_pics/linkdin.png"
                      alt="LinkedIn"
                      className="icon-img"
                    />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mail size={21} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Team Members Section */}
        <div className="team-list-section">
          <h2 className="board_heading font-['Norwester']">Secretariat</h2>
          <div className={`members-grid ${showAllMembers ? "show-all" : ""}`}>
            {/* Always show all members on desktop, limited on mobile */}
            {typeof window !== "undefined" && window.innerWidth > 768
              ? otherTeams.map((member, index) => (
                  <div key={index} className="member-item">
                    <h3 className="member-name font-['Inter']">
                      {member.name}
                    </h3>
                    <p className="member-role font-['Inter']">{member.role}</p>
                  </div>
                ))
              : otherTeams
                  .slice(
                    0,
                    showAllMembers ? otherTeams.length : initialVisibleMembers
                  )
                  .map((member, index) => (
                    <div key={index} className="member-item">
                      <h3 className="member-name font-['Inter']">
                        {member.name}
                      </h3>
                      <p className="member-role font-['Inter']">
                        {member.role}
                      </p>
                    </div>
                  ))}
          </div>

          {shouldShowButton && (
            <div className="mobile-only">
              <button onClick={toggleShowMembers} className="show-more-button">
                {showAllMembers
                  ? "Show Less"
                  : `Show More (+${otherTeams.length - initialVisibleMembers})`}
              </button>
            </div>
          )}
        </div>

        {/* Web Development Team Section */}
        <div className="team-list-section">
          <h2 className="board_heading font-['Norwester']">
            WEB DEVELOPMENT TEAM
          </h2>

          {/* Centered Mohak Singhal */}
          <div className="centered-member">
            <h3 className="member-name font-['Inter']">Mohak Singhal</h3>
            <p className="member-role font-['Inter']">USG Web Dev</p>
          </div>

          {/* Team members row/column */}
          <div className="webdev-members-container">
            {webDevTeam
              .filter((member) => member.name !== "Mohak Singhal")
              .map((member, index) => (
                <div key={index} className="webdev-member">
                  <h3 className="webdev-name font-['Inter']">{member.name}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
