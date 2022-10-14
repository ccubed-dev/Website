import React from "react";
import HiBear from "@assets/HiBear.png";
import outreach from "@assets/outreach.png";
import teams from "@assets/teams.jpg";
import education from "@assets/education.png";
import "./AboutSection.css";


export const AboutSection = () => {
   

    return (
        <div>
                
            <h1 className="who-are-we">Who Are We?</h1>
            <body className="lorem-ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id dolor ut nisi ullacorper ultricies. Suspendisse finibus metus eros, a eleifend nulla</body>
            <img className="bear" src ={HiBear} height={348} width={314}/>

            <img className="outreach" src ={outreach} height={157} width={153}/>
            <img className="teams" src ={teams} height={240} width={165}/>
            <img className="education" src ={education} height={200} width={250}/>
            
            <button className="social-button">CHECK OUR SOCIALS</button>
            <button className="team-button">MEET THE TEAM</button>
            <button className="partner-button">PARTNER PROGRAM</button>

            <div className="outreach-box" />
            <div className="member-box" />
            <div className="university-box" />

            <p className="outreach-TEXT">7.5k Outreach</p>
            <p className="team">39 Team Members</p>
            <p className="universities">15 Universities</p>

            
        </div>
    );
    
};