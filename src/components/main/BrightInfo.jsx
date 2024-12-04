import React from "react";
import imageWebMobile from "../../assets/images/image-web-3-mobile.jpg"
import imageWebDesktop from "../../assets/images/image-web-3-desktop.jpg"

function BrightInfo() {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <img className="d-lg-none img-mobile" src={imageWebMobile} alt="image-mobile" />
            <img className="d-none d-lg-flex img-desktop " src={imageWebDesktop} alt="image-desktop" />
            <div className="d-lg-flex gap-5">
              <div className="col">
                <h2 className="title-bright">The Bright <br /> future of Web 3.0?</h2>
              </div>
              <div className="col">
                <p className="info-bright pe-lg-5">
                  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling it promise?
                </p>
                <a href="#" className="link-bright">Read More</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mt-5 py-3 px-3  mt-lg-0 p-lg-4 content-new">
          <h2>New</h2>
          <article>
            <p>Hydrogen VS Electric Cars</p>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article>
            <p>The Downsides of AI Artistry</p>
            <p>What are the possible adverse effects of on-demand AI image generation?</p>
          </article>
          <article>
            <p>Is VC Funding Drying Up?</p>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
          </article>
        </div>

      </div>
    </section>

  );
};

export { BrightInfo };