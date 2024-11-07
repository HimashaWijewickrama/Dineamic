import { Box } from "@mui/material";
import "../Styles/LandingPage.css";
import NavDownBtn from "./NavDownBtn";

export default function LandingPage() {
  return (
    <Box sx={{ flexGrow: 1 }} className="landing-page">
      <div className="body">
        <div className="overlay">
          <h1>
            Healthy Prepared Meals To Your
            <br />
            <span className="underlined underline-overflow">Door Steps</span>
            <br />
            <NavDownBtn />
          </h1>
        </div>

        <div className="text">
          <div className="wrapper">
            <div id="D" className="letter">
              D
            </div>
          </div>
          <div className="wrapper">
            <div id="I" className="letter">
              I
            </div>
          </div>
          <div className="wrapper">
            <div id="N" className="letter">
              N
            </div>
          </div>
          <div className="wrapper">
            <div id="E" className="letter">
              E
            </div>
          </div>
          <div className="wrapper">
            <div id="A" className="letter">
              A
            </div>
          </div>
          <div className="wrapper">
            <div id="M" className="letter">
              M
            </div>
          </div>
          <div className="wrapper">
            <div id="I" className="letter">
              I
            </div>
          </div>
          <div className="wrapper">
            <div id="C" className="letter">
              C
            </div>
          </div>
          <div className="wrapper">
            <div id="Dot" className="letter">
              .
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}
