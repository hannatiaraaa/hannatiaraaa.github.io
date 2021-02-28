import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

// image
import sweethome from "./assets/images/sweethome.png";
import sweethomeImage from "./assets/images/sweethomeImage.png";
import movE from "./assets/images/movE.png";
import movEImage from "./assets/images/movEImage.png";
import instagram from "./assets/images/instagram.png";
import instagramImage from "./assets/images/instagramImage.png";
import movlix from "./assets/images/movlix.png";
import movlixImage from "./assets/images/movlixImage.png";

import "./App.css";

import ItemCard from "./components/ItemCard";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100vw",
    height: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Box container className={classes.root}>
        <ItemCard
          ava={sweethome}
          title="sweethome"
          subtitle="4 weeks (on process)"
          content="A mobile application for interior design service with booking appointment and payment experiences equipped with API from backend (using redux saga)."
          image={sweethomeImage}
          href="https://gitlab.com/glints-academy-batch-10/sweethome/react-native"
        />

        <ItemCard
          ava={movE}
          title="movE"
          subtitle="1 week"
          content="A movie application for mobile that we can find interesting informations and reviews relating to the popular movie based on its genre with API from backend and TMDB (using redux saga)."
          image={movEImage}
          href="https://gitlab.com/binar-10-mini-project/team-e/team-e-react-native"
        />

        <ItemCard
          ava={instagram}
          title="Instagram Clone"
          content="A clone of icons, splash screen, landing page, and login screen of the Instagram mobile application."
          image={instagramImage}
          href="https://github.com/hannatiaraaa/Instagram-Clone"
        />

        <ItemCard
          ava={movlix}
          title="MOVLIX"
          content="A mobile movie's application with API from The Movie Database (using redux thunk)."
          image={movlixImage}
          href="https://github.com/hannatiaraaa/Movie-app"
        />

        <ItemCard
          logo={false}
          ava="T"
          title="To-do List Demo"
          content="A web application for to-do list with filter, add, check list, and delete features using create-react-app."
          collapse={false}
          href="https://github.com/hannatiaraaa/React-todo-list-demo"
        />

        <ItemCard
          logo={false}
          ava="P"
          title="Profile Screen"
          content="A single page mobile application for profile based on Vishnu Prasad Mockup Design."
          collapse={false}
          href="https://github.com/hannatiaraaa/Profile-Page"
        />

        <ItemCard
          logo={false}
          ava="F"
          title="Feedback Modal Demo"
          content="A web application to submit feedback with modal using create-react-app."
          collapse={false}
          href="https://github.com/hannatiaraaa/React-feedback-modal"
        />

        <ItemCard
          logo={false}
          ava="L"
          title="Landing Profile Page"
          content="A single page web application for profile introduction."
          collapse={false}
          href="https://github.com/hannatiaraaa/Landing-Page"
        />

        <ItemCard
          logo={false}
          ava="T"
          title="TravelOke"
          content="A hypothetical startup website that offers the ease of searching for various facilities (including best travel guides/agents) to traveling all over the world (using pure HTML, CSS, and Vanilla JavaScript)."
          collapse={false}
          href="https://github.com/hannatiaraaa/TravelOke"
        />

        <ItemCard
          logo={false}
          ava="R"
          title="Ruan6"
          content="A hypothetical startup website that offers an online educational platform for those who are more encouraged to study from her/his room anywhere and any time (using pure HTML and CSS)."
          collapse={false}
          href="https://github.com/hannatiaraaa/Ruan6"
        />
      </Box>
    </div>
  );
}

export default App;
