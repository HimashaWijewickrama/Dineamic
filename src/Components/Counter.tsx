import React, { useEffect } from 'react';
import "../Styles/Counter.css";

export default function Counter() {
  useEffect(() => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
      // Ensure 'counter' is treated as an HTMLElement
      const updateCount = () => {
        const target = +(counter.getAttribute('data-target') || '0');
        const count = +(counter instanceof HTMLElement ? counter.innerText : '0');
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
    <div className='counter-section'>
      <section className="counters">
        <div className="container">
          <div>
            <i className="fab fa-youtube fa-4x"></i>
            <div className="counter" data-target="60000">0</div>
            <h3>Subscribers</h3>
          </div>
          <div>
            <i className="fab fa-twitter fa-4x"></i>
            <div className="counter" data-target="15000">0</div>
            <h3>Followers</h3>
          </div>
          <div>
            <i className="fab fa-facebook fa-4x"></i>
            <div className="counter" data-target="9000">0</div>
            <h3>Likes</h3>
          </div>
          <div>
            <i className="fab fa-linkedin fa-4x"></i>
            <div className="counter" data-target="5000">0</div>
            <h3>Connections</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
