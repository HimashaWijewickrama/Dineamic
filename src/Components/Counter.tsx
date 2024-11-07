import {
  DeliveryDining,
  DinnerDining,
  Diversity1,
  Instagram,
} from "@mui/icons-material";

import { Container } from "@mui/material";
import { useEffect } from "react";
import "../Styles/Counter.css";
import { HomeSectionTitle } from "./HomeSectionTitle";

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
      <HomeSectionTitle homesectiontitle="Moments that Count" />

      <section className="counters">
        <Container className="container">
          <article>
            <Diversity1 sx={{ fontSize: 80 }} />
            <div className="counter" data-target="60000">
              0
            </div>
            <h6>
              Happy <br />
              Customers
            </h6>
          </article>
          <article>
            <DeliveryDining sx={{ fontSize: 80 }} />
            <div className="counter" data-target="15000">
              0
            </div>
            <h6>
              Successful <br />
              Orders
            </h6>
          </article>
          <article>
            <DinnerDining sx={{ fontSize: 80 }} />
            <div className="counter" data-target="9000">
              0
            </div>
            <h6>
              New <br />
              Products
            </h6>
          </article>
          <article>
            <Instagram sx={{ fontSize: 80 }} />
            <div className="counter" data-target="5000">
              0
            </div>
            <h6>
              Social Media
              <br />
              Followers
            </h6>
          </article>
        </Container>
      </section>
    </div>
  );
}
