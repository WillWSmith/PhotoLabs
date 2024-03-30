import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ label }) => {
  return (
    <div className="topic-list__item">
      <span>
        {label}
      </span>
    </div>
  );
};

export default TopicListItem;
