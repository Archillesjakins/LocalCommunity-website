import { Button } from "@mui/material";
import "./ContentWrapper.css";

const ContentWrapper = () => {
  return (
    <section className="content-wrapper">
      <div className="visuals-parent">
        <img
          className="visuals-icon"
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className="image-carousel">
          <img
            className="images-icon"
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className="images-icon1"
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className="images-icon2"
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className="images-icon3"
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className="images">
            <img
              className="primary-image-icon"
              alt=""
              src="/primary-image@2x.png"
            />
            <img
              className="secondary-image-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame-group">
        <div className="frame-container">
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="brightwoods-cabin-parent">
                <h2 className="brightwoods-cabin">Brightwoods Cabin</h2>
                <div className="bridlepath-ontario-canada">
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className="heart-icon1"
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className="property-features">
              <div className="rating-summary">
                <div className="average-rating">5.0</div>
                <img className="star-icon1" alt="" src="/vector-1.svg" />
              </div>
              <div className="review-count">
                <div className="reviews">200 Reviews</div>
              </div>
            </div>
          </div>
          <div className="welcome-to-our">{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className="booking">
          <div className="frame-parent2">
            <div className="price-parent">
              <b className="price1">$658</b>
              <div className="nightly-rate">
                <div className="night1">/night</div>
              </div>
            </div>
            <div className="recommendation">
              <div className="trend">
                <div className="icontrend">
                  <div className="icon-parent">
                    <img className="icon" alt="" src="/icon.svg" />
                    <div className="details-background" />
                  </div>
                </div>
                <div className="trending-information">
                  <div className="best-time-to">Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="search-flights-button1"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className="hosted-by-parent">
          <div className="hosted-by">Hosted by:</div>
          <div className="host-image-parent">
            <img
              className="host-image-icon"
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className="condition-splitter">
              <div className="michelle-ward">Michelle Ward</div>
              <div className="joined-in-may">Joined in May 2021</div>
            </div>
            <button className="status">
              <img className="status-icon" alt="" src="/vector-2.svg" />
              <div className="superhost1">Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWrapper;
