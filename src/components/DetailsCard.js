import { useMemo } from "react";
import "./DetailsCard.css";

const DetailsCard = ({
  amenityCardRows,
  dedicatedWorkspace,
  aPrivateRoomEquippedWithW,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
}) => {
  const dedicatedWorkspaceStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const aPrivateRoomStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  return (
    <div className="detailscard">
      <img
        className="amenity-card-rows"
        loading="lazy"
        alt=""
        src={amenityCardRows}
      />
      <div className="amenity-icons">
        <div className="dedicated-workspace" style={dedicatedWorkspaceStyle}>
          {dedicatedWorkspace}
        </div>
        <div className="a-private-room" style={aPrivateRoomStyle}>
          {aPrivateRoomEquippedWithW}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
