import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ label, selectTopic, topicId }) => {
  return (
    <div className="topic-list__item" onClick={() => selectTopic(topicId)}>
      <span>
        {label}
      </span>
    </div>
  );
};

export default TopicListItem;
