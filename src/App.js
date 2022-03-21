import { React, useState, useEffect } from "react";
import "./App.css";
import spardle1 from "./images/spardle1.png";
import spardle2 from "./images/spardle2.png";
import spardle3 from "./images/spardle3.png";
import spardle4 from "./images/spardle4.png";
import tutoryall from "./images/tutoryall.png";
import night1 from "./images/night knight 1.png";
import night2 from "./images/night knight 2.png";
import headline from "./images/headline.png";

let projectData = [
  {
    header: "Spardle!",
    link: "https://spardle.com/",
    description:
      "A competitive word game allowing players to engage in competitive Wordle with over 3000 players to date. Uses multiplayer synchronous logic using a socket.io framework with a logic handling React and CSS frontend.",
    images: [spardle1, spardle2, spardle3, spardle4],
  },
  {
    header: "TutorY'all",
    link: "https://tutoryall.com/",
    description:
      "A platform aiming to expedite the learning process and flatten the learning curve. A centralized database allowing students to receive help through pointed, student-curated videos.",
    images: [tutoryall],
  },
  {
    header: "skrrt",
    link: "https://chrome.google.com/webstore/detail/skrrt/pcmfiacmejoglhfecoohecogigibelea",
    description:
      "An extension that centralizes commonly used apps and minimizes time on the new tab.	Features rearrangeable and customizable panels such as a to-do list, personalized news feed, notepad, top visited sites, and more.",
    images: ["https://www.loom.com/embed/7a4df7fe39954511ad5260afe4b2204d"],
  },
];

let allData = [
  {
    header: "Spardle!",
    link: "https://spardle.com/",
    description:
      "A competitive word game allowing players to engage in competitive Wordle with over 3000 players to date. Uses multiplayer synchronous logic using a socket.io framework with a logic handling React and CSS frontend.",
    images: [spardle1, spardle2, spardle3, spardle4],
  },
  {
    header: "TutorY'all",
    link: "https://tutoryall.com/",
    description:
      "A platform aiming to expedite the learning process and flatten the learning curve. A centralized database allowing students to receive help through pointed, student-curated videos.",
    images: [tutoryall],
  },
  {
    header: "skrrt",
    link: "https://chrome.google.com/webstore/detail/skrrt/pcmfiacmejoglhfecoohecogigibelea",
    description:
      "An extension that centralizes commonly used apps and minimizes time on the new tab.	Features rearrangeable and customizable panels such as a to-do list, personalized news feed, notepad, top visited sites, and more.",
    images: ["https://www.loom.com/embed/7a4df7fe39954511ad5260afe4b2204d"],
  },
  {
    header: "arcade-chatroom",
    link: "https://warm-ravine-86373.herokuapp.com/",
    description:
      "Arcade Chatroom replicates the social environment of Club Penguin. It was built with socket.io + designed on Figma. It features custom lobbies, real time-music sharing - most importantly, donut fights. I created this to stay connected with friends over quarantine.",
    images: ["https://www.loom.com/embed/45ffc35a1f654d97bc555ad3f99524b8"],
  },
  {
    header: "Headline",
    link: "https://headline1.netlify.app/",
    description:
      "An online editor for making websites using Markdown text.",
    images: [headline],
  },
  {
    header: "Night Knight",
    link: "https://night--knight.glitch.me/",
    description:
      "A 2D retro-style shooter inspired by the Binding of Isaac and Enter the Gungeon. A minimalistic game using a custom made game engine.",
    images: [night1, night2],
  },
];

let gameData = [
  {
    header: "arcade-chatroom",
    link: "https://warm-ravine-86373.herokuapp.com/",
    description:
      "Arcade Chatroom replicates the social environment of Club Penguin. It was built with socket.io + designed on Figma. It features custom lobbies, real time-music sharing - most importantly, donut fights. I created this to stay connected with friends over quarantine.",
    images: ["https://www.loom.com/embed/45ffc35a1f654d97bc555ad3f99524b8"],
  },
  {
    header: "Spardle!",
    link: "https://spardle.com/",
    description:
      "A competitive word game allowing players to engage in competitive Wordle with over 3000 players to date. Uses multiplayer synchronous logic using a socket.io framework with a logic handling React and CSS frontend.",
    images: [spardle1, spardle2, spardle3, spardle4],
  },
  {
    header: "Night Knight",
    link: "https://night--knight.glitch.me/",
    description:
      "A 2D retro-style shooter inspired by the Binding of Isaac and Enter the Gungeon. A minimalistic game using a custom made game engine.",
    images: [night1, night2],
  },
];

function App() {
  const [counter, setCounter] = useState(0);
  const [imageCounter, setImageCounter] = useState(0);
  const [title, setTitle] = useState("Projects");
  const [header, setHeader] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(projectData[0].images[0]);
  const [animationEnded, setAnimationEnded] = useState(true);

  useEffect(() => {
    setHeader(projectData[0].header);
    setLink(projectData[0].link);
    setDescription(projectData[0].description);
    setImage(projectData[0].images[0]);
  }, []);

  function setGameData() {
    projectData = gameData;
    setHeader(projectData[0].header);
    setLink(projectData[0].link);
    setDescription(projectData[0].description);
    setImage(projectData[0].images[0]);
    setTitle("Games");
  }

  function setAllData() {
    projectData = allData;
    setHeader(projectData[0].header);
    setLink(projectData[0].link);
    setDescription(projectData[0].description);
    setImage(projectData[0].images[0]);
    setTitle("Projects");
  }

  function updateProjectData(direction) {
    if (!animationEnded) {
      return;
    }
    setAnimationEnded(false);
    setTimeout(() => {
      setAnimationEnded(true);
    }, 1000);
    setImageCounter(0);
    if (direction === "right" && counter < projectData.length - 1) {
      document.getElementById("text-container").classList.remove("fadeIn");
      document.getElementById("image-container").classList.remove("fadeIn");
      document.getElementById("text-container").classList.add("fadeOut");
      document.getElementById("image-container").classList.add("fadeOut");
      setTimeout(() => {
        let i = counter + 1;
        setHeader(projectData[i].header);
        setLink(projectData[i].link);
        setDescription(projectData[i].description);
        setImage(projectData[i].images[0]);
        setCounter(counter + 1);
        document.getElementById("text-container").classList.remove("fadeOut");
        document.getElementById("image-container").classList.remove("fadeOut");
        document.getElementById("text-container").classList.add("fadeIn");
        document.getElementById("image-container").classList.add("fadeIn");
      }, 500);
    } else if (direction === "left" && counter > 0) {
      document.getElementById("text-container").classList.remove("fadeIn");
      document.getElementById("image-container").classList.remove("fadeIn");
      document.getElementById("text-container").classList.add("fadeOut");
      document.getElementById("image-container").classList.add("fadeOut");
      setTimeout(() => {
        let i = counter - 1;
        setCounter(counter - 1);
        setHeader(projectData[i].header);
        setLink(projectData[i].link);
        setDescription(projectData[i].description);
        setImage(projectData[i].images[0]);
        setCounter(counter - 1);
        document.getElementById("text-container").classList.remove("fadeOut");
        document.getElementById("image-container").classList.remove("fadeOut");
        document.getElementById("text-container").classList.add("fadeIn");
        document.getElementById("image-container").classList.add("fadeIn");
      }, 500);
    } else {
      document.getElementById("text-container").classList.remove("fadeIn");
      document.getElementById("image-container").classList.remove("fadeIn");
      document.getElementById("text-container").classList.add("fadeOut");
      document.getElementById("image-container").classList.add("fadeOut");
      setTimeout(() => {
        setCounter(0);
        setHeader(projectData[0].header);
        setLink(projectData[0].link);
        setDescription(projectData[0].description);
        setImage(projectData[0].images[0]);
        setCounter(0);
        document.getElementById("text-container").classList.remove("fadeOut");
        document.getElementById("image-container").classList.remove("fadeOut");
        document.getElementById("text-container").classList.add("fadeIn");
        document.getElementById("image-container").classList.add("fadeIn");
      }, 500);
    }
  }

  function updateImage(direction) {
    if (!animationEnded) {
      return;
    }
    setAnimationEnded(false);
    setTimeout(() => {
      setAnimationEnded(true);
    }, 1000);
    if (
      direction === "right" &&
      imageCounter < projectData[counter].images.length - 1
    ) {
      document.getElementById("image-container").classList.remove("fadeIn");
      document.getElementById("image-container").classList.add("fadeOut");
      setTimeout(() => {
        let i = imageCounter + 1;
        setImageCounter(i);
        setImage(projectData[counter].images[i]);
        document.getElementById("image-container").classList.remove("fadeOut");
        document.getElementById("image-container").classList.add("fadeIn");
      }, 500);
    } else if (direction === "left" && imageCounter > 0) {
      document.getElementById("image-container").classList.remove("fadeIn");
      document.getElementById("image-container").classList.add("fadeOut");
      setTimeout(() => {
        let i = imageCounter - 1;
        setImageCounter(i);
        setImage(projectData[counter].images[i]);
        document.getElementById("image-container").classList.remove("fadeOut");
        document.getElementById("image-container").classList.add("fadeIn");
      }, 500);
    }
  }

  return (
    <div className="container">
      <div className="joke-text" id="joke-text">
        Click here to check out my personal website!
      </div>
      <div className="joke-text-follow" id="joke-text-follow">
        Haha, you're already on it! But do check out my video NFT collection by
        clicking{" "}
        <button
          style={{ border: "none", padding: "5px", cursor: "pointer" }}
          onClick={() => {
            document.getElementById("rick-roll").style.display = "block";
            document.getElementById("rick-roll").src = document.getElementById("rick-roll").src + "&autoplay=1";
            document.getElementById("joke-text-close").style.display = "block";
          }}
        >
          here
        </button>
        <iframe
          className="rick-roll"
          id="rick-roll"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p id="joke-text-close">Gotem! I did say I liked jokes. (You can click <button onClick={() => {document.getElementById("joke-text").style.display = "none"; 
        document.getElementById("joke-text-follow").style.display = "none";
        document.getElementById("joke-text-follow").innerHTML = "";}}>here</button> to close the video.</p>
      </div>
      <h1 className="title">{title}</h1>
      <div className="text-container" id="text-container">
        <h1>{header}</h1>
        <p>{description}</p>
        <a href={link} target="_blank">
          Check out {header}
        </a>
      </div>
      <div className="image-container" id="image-container">
        {image.includes("embed") ? (
          <iframe
            className="project-image"
            src={image}
            frameBorder="0"
            allowFullScreen
            style={{ position: "absolute", left: 0, width: "100%" }}
          ></iframe>
        ) : (
          <img src={image} className="project-image" />
        )}
        <img
          onClick={() => {
            updateImage("left");
          }}
          src="https://www.pngitem.com/pimgs/m/244-2446737_modern-arrow-png-transparent-png.png"
          className="left-controls"
        />
        <img
          onClick={() => {
            updateImage("right");
          }}
          src="https://www.pngitem.com/pimgs/m/244-2446737_modern-arrow-png-transparent-png.png"
          className="right-controls"
        />
      </div>
      <img
        onClick={() => {
          updateProjectData("left");
        }}
        src="https://www.pngitem.com/pimgs/m/244-2446737_modern-arrow-png-transparent-png.png"
        className="left-controls"
      />
      <img
        onClick={() => {
          updateProjectData("right");
        }}
        src="https://www.pngitem.com/pimgs/m/244-2446737_modern-arrow-png-transparent-png.png"
        className="right-controls"
      />
      <div className="modal-dark" id="modal-dark">
        <div className="modal">
          <h1>Hi! I'm Kyle Macasilli-Tan, but you can just call me M-T.</h1>
          <p>
            I'm a 16 (soon to be 17!) year old junior in high school living in
            Cincinnati, Ohio. I have a passion for programming, and in my free
            time I play soccer, produce music, and play video games. I also like jokes (important!).
          </p>
          <p>
            I'm also currently looking for an internship, so if you could send
            any offers my way it would be much appreciated! My email is
            kylemacasillitan@gmail.com and my LinkedIn and resume can be found on the sidebar in the following page.
          </p>
          <div
            className="close-modal"
            onClick={() => {
              document.getElementById("modal-dark").classList.add("fadeModal");
              setTimeout(() => {
                document.getElementById("modal-dark").style.display = "none";
                document.getElementById("open-sidebar").style.display = "block";
              }, 1000);
            }}
          >
            Click here to check out some stuff I've been working on ;)
          </div>
        </div>
      </div>
      <p id="open-sidebar" className="open-sidebar">
        ^<br />
        hover to open sidebar
      </p>
      <div className="sidebar">
        <div
        onClick={() => {
          setAllData();
        }}>
          <p className="sidebar-list-text">Projects</p>
        </div>
        <div
          onClick={() => {
            setGameData();
          }}
        >
          <p className="sidebar-list-text">Games</p>
        </div>
        <div>
          <a href="https://github.com/kylemtan" target="_blank"><p className="sidebar-list-text" >Github</p></a>
        </div>
        <div>
          <a href="https://twitter.com/kylemtan" target="_blank"><p className="sidebar-list-text" >Twitter</p></a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/ethan-kyle-macasilli-tan-6503a1226/" target="_blank"><p className="sidebar-list-text">LinkedIn</p></a>
        </div>
      </div>
    </div>
  );
}

export default App;
