import React from "react";

const ScrollEffect = () => {
  return (
    <div >
      <div aria-hidden="true" class="scroll-button z-3 ">
        <div class="button">
          <div class="scroll-icon rotate">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="17"
              viewBox="0 0 11 17"
              focusable="false"
              tabindex="-1"
              class="icon"
            >
              <path
                fill-rule="evenodd"
                d="M5.5 0C8.533 0 11 2.727 11 6.08v4.86C11 14.28 8.533 17 5.5 17S0 14.273 0 10.92V6.08C0 2.726 2.467 0 5.5 0zm0 1C3.019 1 1 3.26 1 6.038v4.924C1 13.74 3.019 16 5.5 16s4.5-2.252 4.5-5.02V6.039C10 3.26 7.981 1 5.5 1zm0 3c.276 0 .5.244.5.545v1.91c0 .3-.224.545-.5.545S5 6.756 5 6.455v-1.91c0-.3.224-.545.5-.545z"
              ></path>
            </svg>
          </div>
          <span class="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </div>
  );
};

export default ScrollEffect;
