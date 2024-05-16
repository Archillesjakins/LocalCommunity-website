import { useMemo } from "react";
import "./ReviewCard.css";

const ReviewCard = ({
  avatars,
  johnnyCash,
  june2023,
  stars,
  michellesPlaceWasSoGreatA,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="reviewcard">
      <div className="reviewer-details">
        <div className="reviewer-info">
          <img className="avatars-icon" loading="lazy" alt="" src={avatars} />
          <div className="reviewer-names">
            <div className="johnny-cash" style={johnnyCashStyle}>
              {johnnyCash}
            </div>
            <div className="june-2023" style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className="ratings">
          <div className="stars">{stars}</div>
          <img className="quote-icons" alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className="michelles-place-was">{michellesPlaceWasSoGreatA}</div>
    </div>
  );
};

export default ReviewCard;
