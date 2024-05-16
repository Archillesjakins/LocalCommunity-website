import { useMemo } from "react";
import "./ListingItem.css";

const ListingItem = ({
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
  propPadding,
  propFlex,
  propDisplay2,
  propMinWidth2,
  onListingItemContainerClick,
  superhostIcon,
  heartIcon,
  starIcon,
  trendIcon,
  listingItemFlex,
}) => {
  const listingTitleStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const listingSubtitleStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const bottomContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const pricePerNightStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const priceChartStyle = useMemo(() => {
    return {
      display: propDisplay2,
      minWidth: propMinWidth2,
    };
  }, [propDisplay2, propMinWidth2]);

  const listingItemStyle = useMemo(() => {
    return {
      flex: listingItemFlex,
    };
  }, [listingItemFlex]);

  return (
    <div
      className="listing-item"
      onClick={onListingItemContainerClick}
      style={listingItemStyle}
    >
      <img className="listing-image-icon" alt="" src={listingImage} />
      <div className="superhost-tag">
        <img className="superhost-icon" alt="" src={superhostIcon} />
        <div className="superhost">Superhost</div>
      </div>
      <div className="wrapper-heart-icon">
        <img className="heart-icon" loading="lazy" alt="" src={heartIcon} />
      </div>
      <div className="item-details">
        <div className="listing-info">
          <div className="listing-cont">
            <div className="listing-title" style={listingTitleStyle}>
              {listingTitle}
            </div>
            <div className="listing-subtitle" style={listingSubtitleStyle}>
              {listingSubtitle}
            </div>
          </div>
          <div className="rating-cont">
            <div className="rating">{rating}</div>
            <img className="star-icon" loading="lazy" alt="" src={starIcon} />
          </div>
        </div>
        <div className="bottom-container" style={bottomContainerStyle}>
          <div className="price-per-night" style={pricePerNightStyle}>
            <div className="price">{price}</div>
            <div className="night">/night</div>
          </div>
          {showBestTime && (
            <div className="best-time">
              <img
                className="trend-icon1"
                loading="lazy"
                alt=""
                src={trendIcon}
              />
              <div className="price-chart" style={priceChartStyle}>
                Price chart
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListingItem;
