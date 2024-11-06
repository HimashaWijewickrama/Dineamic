import { Box } from "@mui/material";
import "../Styles/LandingPage.css";
import NavDownBtn from "./NavDownBtn";

export default function LandingPage() {
  return (
    <Box sx={{ flexGrow: 1 }} className="landing-page">
      <div className="body">
        <div className="overlay">
          <h1>
            <span className="underlined underline-mask">Healthy </span>
            <br />
            <span className="underlined underline-clip">Prepared Meals </span>
            <br />
            To Your
            <br />
            <span
              className="underlined underline-overflow"
              style={{ textAlign: "center" }}
            >
              Door Step
            </span><br/>
            <NavDownBtn/>
          </h1>
      
        </div>

        <div className="text">
          <div className="wrapper">
            <div id="L" className="letter">
              D
            </div>
            {/* <div className="shadow">D</div> */}
          </div>
          <div className="wrapper">
            <div id="I" className="letter">
              I
            </div>
            {/* <div className="shadow">I</div> */}
          </div>
          <div className="wrapper">
            <div id="G" className="letter">
              N
            </div>
            {/* <div className="shadow">N</div> */}
          </div>
          <div className="wrapper">
            <div id="H" className="letter">
              E
            </div>
            {/* <div className="shadow">E</div> */}
          </div>
          <div className="wrapper">
            <div id="T" className="letter">
              A
            </div>
            {/* <div className="shadow">A</div> */}
          </div>
          <div className="wrapper">
            <div id="N" className="letter">
              M
            </div>
            {/* <div className="shadow">M</div> */}
          </div>
          <div className="wrapper">
            <div id="E" className="letter">
              I
            </div>
            {/* <div className="shadow">I</div> */}
          </div>
          <div className="wrapper">
            <div id="S" className="letter">
              C
            </div>
            {/* <div className="shadow">C</div> */}
          </div>
          <div className="wrapper">
            <div id="Stwo" className="letter">
              .
            </div>
            {/* <div className="shadow">.</div> */}
          </div>
        </div>
      </div>
    </Box>
  );
}
