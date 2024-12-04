import React from "react";
import retroPcs from "../../assets/images/image-retro-pcs.jpg"
import topLaptops from "../../assets/images/image-top-laptops.jpg"
import gamingGrowth from "../../assets/images/image-gaming-growth.jpg"

function Footer() {
  return (
    <footer className="row p-2 mt-5">
      <article className="col-lg-4">
        <figure className="d-flex gap-2 gap-lg-3">
          <img src={retroPcs} alt="image-retro-pcs" />
          <div>
            <span>01</span>
            <p>Reviving Retro PCs</p>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </figure>
      </article>

      <article className="col-lg-4">
        <figure className="d-flex gap-2 gap-lg-3">
          <img src={topLaptops} alt="image-top-laptops" />
          <div>
            <span>02</span>
            <p>Top 10 Laptops of 2022</p>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </figure>
      </article>

      <article className="col-lg-4">
        <figure className="d-flex gap-2 gap-lg-3">
          <img src={gamingGrowth} alt="image-gamimg-growth" />
          <div>
            <span>03</span>
            <p>The Growth of Gaming</p>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </figure>
      </article>

    </footer>
  );
};

export { Footer };

