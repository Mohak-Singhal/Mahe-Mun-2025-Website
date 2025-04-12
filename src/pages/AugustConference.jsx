import React, { useState, useEffect } from 'react';
import './AugustConference.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const conferenceDetails = {
  name: 'August Conference 2025',
  venue: 'Mahe University',
  dates: 'August 15 - August 17, 2025',
  cashPool: 'Over 1 Lakh',
  moreDetails:
    'This conference brings together delegates from across the country to discuss global issues, promote cultural exchange, and foster leadership. It features multiple tiers of committees with dedicated agendas, executive boards, and dynamic debates.',
};

const committeesData = [
  {
    tier: 'Tier 1 - Expert Level (Recommended for Pro Delegates)',
    committees: [
      {
        name: 'WHSR',
        fullForm: 'White House Situation Room',
        logo: '/committees_images/whsr.png',
        agenda:
          'America Under Attack – The 9/11 Crisis Response (Freeze Date: September 11, 2001, 10:30 AM EST).',
        eb: [
          { designation: 'Chairperson', name: 'Abhay Nair' },
          { designation: 'Vice-Chairperson', name: 'Devansh Agarwal' },
          { designation: 'Rapporteur', name: 'Taniha Alpha Fernandes' },
        ],
        label: 'Zero Hour',
        backgroundGuide: '/pdfs/whsr.pdf',
        subInfo: 'Crisis Committee, National Security',
        frontImage: '/committees_images/whsr_front.jpg',
        backImage: '/committees_images/whsr_back.jpg',
        customClass: 'whsr-card'
      },
      {
        name: 'INTERPOL',
        fullForm: 'International Criminal Police Organization',
        logo: '/committees_images/interpol.png',
        agenda:
          'The Escalation of Organized Crime in Military, Political, and Cyber Spheres with a Critical Analysis and special emphasis on Narco Dollars and the Rise of the Sinaloa Cartel.',
        eb: [
          { designation: 'Chairperson', name: 'Ryan Gupta' },
          { designation: 'Vice-Chairperson', name: 'Harshvardan Kalra' },
          { designation: 'Rapporteur', name: 'Gouri Naik' },
        ],
        backgroundGuide: '/pdfs/interpol.pdf',
        subInfo: 'General Committee, Law Enforcement',
        frontImage: '/committees_images/interpol_front.jpg',
        backImage: '/committees_images/interpol_back.jpg',
      },
      {
        name: 'UNSC',
        fullForm: 'United Nations Security Council',
        logo: '/committees_images/unsc.png',
        agenda:
          'Navigating the Red Sea Crisis – Addressing Maritime Security, Regional Stability, and Global Trade Disruptions.',
        eb: [
          { designation: 'Chairperson', name: 'Parth Vij' },
          { designation: 'Vice-Chairperson', name: 'Alpesh Abhijit Chowdhury' },
        ],
        backgroundGuide: '/pdfs/unsc.pdf',
        subInfo: 'General Committee, Security',
        frontImage: '/committees_images/unsc_front.jpg',
        backImage: '/committees_images/unsc_back.jpg',
      },
      {
        name: 'NATO',
        fullForm: 'North Atlantic Treaty Organization',
        logo: '/committees_images/nato.png',
        agenda:
          "Assessing NATO's long-term deterrence and defense posture in the context of the Russia-Ukraine war and its implications for Euro-Atlantic security.",
        eb: [
          { designation: 'Chairperson', name: 'Ritankar Mallick' },
          { designation: 'Vice-Chairperson', name: 'Krish Gandhi' },
          { designation: 'Rapporteur', name: 'Varanasi Naga Akhil' },
        ],
        backgroundGuide: '/pdfs/nato.pdf',
        subInfo: 'General Committee, Security & Defense',
        frontImage: '/committees_images/nato_front.jpg',
        backImage: '/committees_images/nato_back.jpg',
      },
      {
        name: 'WHO',
        fullForm: 'World Health Organization',
        logo: '/committees_images/who.png',
        agenda:
          'Strengthening Global Health Security and Enhancing International Preparedness and Response to Pandemics.',
        eb: [
          { designation: 'Chairperson', name: 'Srinavith Srinath' },
          { designation: 'Co-Chairperson', name: 'Advika Anand' },
          { designation: 'Rapporteur', name: 'Srilakshmi Badri Seshadri' },
        ],
        backgroundGuide: '/pdfs/who.pdf',
        subInfo: 'General-Crisis Hybrid Committee, Global Health & Emergency Response',
        frontImage: '/committees_images/who_front.jpg',
        backImage: '/committees_images/who_back.jpg',
      },
    ],
  },
  {
    tier: 'Tier 2 - Intermediate Level (Recommended for Amateur Delegates)',
    committees: [
      {
        name: 'CCC',
        fullForm: 'Continuous Crisis Committee',
        logo: '/committees_images/ccc.png',
        agenda: 'Classified.',
        eb: [
          { designation: 'Chairperson', name: 'Arihant Khaitan' },
          { designation: 'Vice-Chairperson', name: 'Bedobrata Saikia' },
          { designation: 'Rapporteur', name: 'ShreeVatsank Gajjala' },
        ],
        backgroundGuide: '/pdfs/ccc.pdf',
        subInfo: 'Crisis Committee, Historical-Political',
        frontImage: '/committees_images/ccc_front.jpg',
        backImage: '/committees_images/ccc_back.jpg',
      },
      {
        name: 'ECOFIN',
        fullForm: 'Economic and Financial Affairs Council',
        logo: '/committees_images/ecofin.png',
        agenda:
          'Addressing Illicit Financial Flows: Strengthening International Cooperation to Combat Tax Evasion and Money Laundering.',
        eb: [
          { designation: 'Chairperson', name: 'Tanay Shankarikoppa' },
          { designation: 'Vice-Chairperson', name: 'Arsaanth Baskar' },
          { designation: 'Rapporteur', name: 'Shreyansh Giri' },
        ],
        backgroundGuide: '/pdfs/ecofin.pdf',
        subInfo: 'General Committee, Economics & Finance',
        frontImage: '/committees_images/ecofin_front.jpg',
        backImage: '/committees_images/ecofin_back.jpg',
      },
      {
        name: 'IPM',
        fullForm: 'International Press Meet',
        logo: '/committees_images/ipm.png',
        agenda: 'Fostering Journalistic Integrity and Media Freedom.',
        eb: [
          { designation: 'Chairperson', name: 'Shaurya Kumar' },
          { designation: 'Vice-Chairperson', name: 'Ekansh Bansal' },
        ],
        backgroundGuide: '/pdfs/ipm.pdf',
        subInfo: 'Press Committee, Journalism & Media',
        frontImage: '/committees_images/ipm_front.jpg',
        backImage: '/committees_images/ipm_back.jpg',
      },
      {
        name: 'LS',
        fullForm: 'Lok Sabha',
        logo: '/committees_images/lok_sabha.png',
        agenda:
          'Evaluating new tax policies and growing concern about unemployment,poverty and economy (surprise real life case study based agenda will be added on basis on current trending situation or problem at that time ).',
        eb: [
          { designation: 'Chairperson', name: 'Aansh Malkan' },
          { designation: 'Vice-Chairperson', name: 'Goonj Rep' },
          { designation: 'Rapporteur', name: 'Goonj Rep' },
        ],
        backgroundGuide: '/pdfs/lok_sabha.pdf',
        subInfo: 'Indian General Committee, Governance & Policy',
        frontImage: '/committees_images/ls_front.jpg',
        backImage: '/committees_images/ls_back.jpg',
      },
      {
        name: 'UNFCCC',
        fullForm: 'United Nations Framework Convention on Climate Change',
        logo: '/committees_images/unfccc.png',
        agenda:
          'Examining the Efficacy of Accountability Framework Within the Paris Agreement to Strengthen International Climate Governance.',
        eb: [
          { designation: 'Chairperson', name: 'Aakash Sai Natarajan Gokulnath' },
          { designation: 'Vice-Chairperson', name: 'Aadya Sinha' },
          { designation: 'Rapporteur', name: 'Anamay Tripathy' },
        ],
        backgroundGuide: '/pdfs/unfccc.pdf',
        subInfo: 'General Committee, Climate & Sustainability',
        frontImage: '/committees_images/unfccc_back.jpg',
        backImage: '/committees_images/unfccc_front.jpg',
      },
    ],
  },
  {
    tier: 'Tier 3 - Beginner Level (Recommended for Rookie Delegates)',
    committees: [
      {
        name: 'ICJ',
        fullForm: 'International Court of Justice',
        logo: '/committees_images/icj.png',
        agenda:
          'Application of the Convention on the Prevention and Punishment of the Crime of Genocide in the Gaza Strip (South Africa vs Israel).',
        eb: [
          { designation: 'Chairperson', name: 'Arnav Kapoor' },
          { designation: 'Vice-Chairperson', name: 'Akshiti Banerjee' },
          { designation: 'Rapporteur', name: 'Anushka Sarkar' },
        ],
        label: 'Case',
        backgroundGuide: '/pdfs/icj.pdf',
        subInfo: 'Judicial Committee, International Law',
        frontImage: '/committees_images/icj_front.jpg',
        backImage: '/committees_images/icj_back.jpg',
      },
      {
        name: 'UNGA:DISEC',
        fullForm:
          'United Nations General Assembly: Disarmament and International Security Committee',
        logo: '/committees_images/unga_disec.png',
        agenda:
          'Reviewing the international framework on Post-conflict reconciliation with special emphasis on role of peacekeeping operations and role of non-state actors.',
        eb: [
          { designation: 'Chairperson', name: 'Parth Agarwal' },
          { designation: 'Vice-Chairperson', name: 'Vedant Sunil Ghongade' },
          { designation: 'Rapporteur', name: 'Shruthi Andra' },
        ],
        backgroundGuide: '/pdfs/unga_disec.pdf',
        subInfo: 'General Committee, Peace & Security',
        frontImage: '/committees_images/unga_disec_front.jpg',
        backImage: '/committees_images/unga_disec_back.jpg',
      },
      {
        name: 'FGF',
        fullForm: 'Fortune Global Forum',
        logo: '/committees_images/fgf.png',
        agenda:
          'Evaluating Corporate Strategies Amid AI Disruption and Economic Shifts: Navigating the Asia-BRICS-West Power Struggle and the Developed-Developing Divide.',
        eb: [
          { designation: 'Chairperson', name: 'Nihar Madhekar' },
          { designation: 'Vice-Chairperson', name: 'Aparna J S' },
          { designation: 'Rapporteur', name: 'Suhani Harit' },
        ],
        backgroundGuide: '/pdfs/fgf.pdf',
        subInfo: 'General Committee, Business & Geopolitics',
        frontImage: '/committees_images/fgf_front.jpg',
        backImage: '/committees_images/fgf_back.jpg',
      },
      {
        name: 'MOM',
        fullForm: 'Ministry of Magic',
        logo: '/committees_images/mom.png',
        agenda:
          'Deliberation on the Rights and Status of Muggle-Born Wizards and Magical Creatures: Legal Protections and Ethical Challenges.',
        eb: [
          { designation: 'Chairperson', name: 'Vaibhav Chaitanya' },
          { designation: 'Vice-Chairperson', name: 'Dhriti Reddy Kourla' },
        ],
        backgroundGuide: '/pdfs/mom.pdf',
        subInfo: 'Fictional Committee, Harry potter & Wizard Affairs',
        frontImage: '/committees_images/mom_front.jpg',
        backImage: '/committees_images/mom_back.jpg',
      },
      {
        name: 'INCOSPAR',
        fullForm: 'Indian National Committee for Space Research',
        logo: '/committees_images/incospar.png',
        agenda:
          'Examining INCOSPAR’s Scientific and Diplomatic Challenges Amidst the Cold War and Its Pursuit of an Independent Space Program in the Global Space Race.',
        eb: [
          { designation: 'Co-Chairperson', name: 'Dhruv Shankar Banerjee' },
          { designation: 'Co-Chairperson', name: 'Sushmita Solanki' },
        ],
        backgroundGuide: '/pdfs/incospar.pdf',
        subInfo: ' Historic Committee, Science & Diplomacy',
        frontImage: '/committees_images/incospar_front.jpg',
        backImage: '/committees_images/incospar_back.jpg',
      },
    ],
  },
];

const CommitteeCard = ({ committee }) => {
  const [flipped, setFlipped] = useState(false);
  const toggleFlip = () => setFlipped(!flipped);

    // // fallback image paths
    // const defaultFrontImage = '/images/default-front.jpg';
    // const defaultBackImage = '/images/default-back.jpg';
  
    // // Use the images from the committee data if available
    // const frontImage = committee.frontImage || defaultFrontImage;
    // const backImage = committee.backImage || defaultBackImage;

    const frontImage = committee.frontImage ;
    const backImage = committee.backImage ;

  return (
    <div
      className={`committee-card ${flipped ? 'flipped' : ''} ${committee.customClass || ''}`}
      onClick={toggleFlip}
    >
      <div className="flip-card-inner">
        {/* Front face */}
        <div 
          className="flip-card-front"
          style={{ backgroundImage: `url(${frontImage})` }}
        >
          <div className="overlay-layer" />
          <div className="committee-front-container">
            <div className="committee-logo-container">
              <img
                src={committee.logo}
                alt={`${committee.name} Logo`}
                className="committee-logo"
              />
            </div>
            <div className="committee-text-container">
              <h4 className="committee-name">{committee.name}</h4>
              <p className="committee-fullform">{committee.fullForm}</p>
              {committee.subInfo && (
                <p className="committee-subinfo">{`${committee.subInfo}`}</p>
              )}
            </div>
          </div>
        </div>

        {/* Back face */}
        <div 
          className="flip-card-back"
          style={{ backgroundImage: `url(${backImage})` }}
        >
          <div className="overlay-layer" />
          <div className="flip-card-back-content">
            {committee.name !== 'IPM' && (
              <p className="committee-agenda">
                <strong>{committee.label ? `${committee.label}:` : 'Agenda:'}</strong> {committee.agenda}
              </p>
            )}

            <div className="committee-eb">
              {committee.eb &&
                committee.eb.map((member, i) => (
                  <div key={i} className="committee-eb-member">
                    <strong>{member.designation}</strong>: {member.name}
                  </div>
                ))}
            </div>
          </div>

          {/* bg guide button */}
          <a
            href={committee.backgroundGuide || '/pdfs/default_background.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            className="background-guide-btn"
          >
            Background Guide
          </a>
        </div>
      </div>
    </div>
  );
};

const AugustConference = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredData = committeesData
    .map((tier) => ({
      ...tier,
      committees: tier.committees.filter(
        (committee) =>
          committee.name.toLowerCase().includes(searchTerm) ||
          committee.fullForm.toLowerCase().includes(searchTerm) ||
          committee.agenda.toLowerCase().includes(searchTerm)
      ),
    }))
    .filter((tier) => tier.committees.length > 0);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar classname="text-white bg-black" />
      <div className="aug-conference-page mt-26">
        <section className="conference-details">
          <h1>{conferenceDetails.name}</h1>
          <p className="fade-animation delay-1">
            <strong>Venue:</strong> {conferenceDetails.venue}
          </p>
          <p className="fade-animation delay-2">
            <strong>Dates:</strong> {conferenceDetails.dates}
          </p>
          <p className="fade-animation delay-3">
            <strong>Cash Pool:</strong> {conferenceDetails.cashPool}
          </p>
          <p className="fade-animation delay-4 more-details">{conferenceDetails.moreDetails}</p>
        </section>

        <section className="search-section">
          <input
            type="text"
            placeholder="Search Committees..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
        </section>

        <section className="committees-section">
          <h2 className="section-title">Committees</h2>
          {filteredData.map((tierData, index) => (
            <div key={index} className="tier-section">
              <h3 className="tier-title">{tierData.tier}</h3>
              <div className="committees-grid">
                {tierData.committees.map((committee, idx) => (
                  <CommitteeCard key={idx} committee={committee} />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
      {showScroll && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
      <Footer />
    </>
  );
};

export default AugustConference;