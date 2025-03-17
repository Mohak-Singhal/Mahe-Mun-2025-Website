import React, { useEffect, useRef, useState } from "react";
import { Linkedin } from "lucide-react";
import "../styles/team.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
    { name: "Riya Singh", role: "President", img: "/team_mem_pics/president.jpg", linkedin: "#" },
    { name: "Sashreek Reddy", role: "Vice President", img: "/team_mem_pics/vp.jpg", linkedin: "#" },
    { name: "Siddhi Anand", role: "Director of External Affairs", img: "/team_mem_pics/external_affairs.jpg", linkedin: "#" },
    { name: "Chhavi Mehta", role: "Director of Internal Affairs", img: "/team_mem_pics/internal_affairs.jpg", linkedin: "#" },
    { name: "Shweta Banerjee", role: "Director of Collaborations & Public Relations", img: "/team_mem_pics/collab_public.jpg", linkedin: "#" },
    { name: "Ekansh Bansal", role: "Director of Finance & Technology", img: "/team_mem_pics/finance_tech.jpg", linkedin: "#" },
    { name: "Devansh Tandon", role: "Director of Management", img: "/team_mem_pics/management.jpg", linkedin: "#" },
    { name: "Mahalakshmi Venkataraman", role: "Director of Design", img: "/team_mem_pics/design.jpg", linkedin: "#" }
];

const Team = () => {
    const [visibleCards, setVisibleCards] = useState([]);

    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleCards((prev) => [...new Set([...prev, entry.target.dataset.index])]);
                    }
                });
            },
            { threshold: 0.3 } // Reduce threshold to make sure all members trigger animation
        );
    
        const elements = document.querySelectorAll(".team-member");
        elements.forEach((el, index) => {
            el.dataset.index = index.toString(); // Ensure index is a string
            observerRef.current.observe(el);
        });
    
        return () => observerRef.current.disconnect();
    }, []);
    

    return (
      <>
        <div className="p-5">
          <Navbar classname="text-black"/>
            <div className="header-container ">
                <div>
                    <h1 className="heading">Meet Our Team</h1>
                    <div className="divider"></div>
                </div>
                <p className="description">
                    Our team consists of dedicated professionals who work tirelessly to bring the best
                    experience. Meet the amazing people making it all happen!
                </p>
            </div>

            <div className="team-container">
                {teamMembers.map((member, index) => (
                    <div 
                        className={`team-member ${visibleCards.includes(index.toString()) ? "visible" : ""}`} 
                        key={index}
                    >
                        <div className="image-container">
                            <img src={member.img} alt={member.name} />
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
                                <Linkedin size={20} />
                            </a>
                        </div>
                        <div className="info">
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
        <Footer/>
        </>
    );
};

export default Team;
