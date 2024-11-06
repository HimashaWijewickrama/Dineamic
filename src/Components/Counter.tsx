import { useEffect } from "react";
import "../Styles/Counter.css";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import InstagramIcon from '@mui/icons-material/Instagram';
import { HomeSectionTitle } from "./HomeSectionTitle";
import { Divider } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export default function Counter() {
  useEffect(() => {
    const counters = document.querySelectorAll(".counter");
    const speed = 200;

    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +(counter.getAttribute("data-target") || "0");
        const count = +(counter instanceof HTMLElement
          ? counter.innerText
          : "0");
        const inc = target / speed;

        if (count < target) {
          if (counter instanceof HTMLElement) {
            counter.innerText = Math.ceil(count + inc).toString();
          }
          setTimeout(updateCount, 1);
        } else {
          if (counter instanceof HTMLElement) {
            counter.innerText = target.toString();
          }
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className="counter-section">
<HomeSectionTitle homesectiontitle="Moments that Count"/>
      <section className="counters">
        <div className="container">
          <article>
            <Diversity1Icon sx={{ fontSize: 50 }}/>
            <div className="counter" data-target="60000">
              0
            </div>
            <h6>
              Happy <br />
              Customers
            </h6>
          </article>
          <article>
            <DeliveryDiningIcon sx={{ fontSize: 50 }}/>
            <div className="counter" data-target="15000">
              0
            </div>
            <h6>
              Successful <br />
              Orders
            </h6>
          </article>
          <article>
            <DinnerDiningIcon sx={{ fontSize: 50 }}/>
            <div className="counter" data-target="9000">
              0
            </div>
            <h6>
              New <br />
              Products
            </h6>
          </article>
          <article>
            <InstagramIcon sx={{ fontSize: 50 }}/>
            <div className="counter" data-target="5000">
              0
            </div>
            <h6>
              Social <br />
              Likes
            </h6>
          </article>
        </div>
      </section>
    </div>
  );
}
