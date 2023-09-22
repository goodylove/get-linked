import React from "react";
import { FaqWrapper } from "./faqstyle";
import { SVG } from "./../../constants/Icons/index";
import { frequentlyAskQues } from "./questiondata";
import SingleFaq from "./singleFaq";

export default function FrequentlyAskQuestion() {
  return (
    <FaqWrapper>
      <div>
        <img src={SVG.pinkstart} alt="" />
        <div className="heading">
          <h2>Frequently Ask </h2>
          <h3>Question</h3>
          <h5>
            We got answers to the questions that you might want to ask about
            getlinked Hackathon 1.0
          </h5>
        </div>
        <div>
          {frequentlyAskQues.map((question) => {
            return <SingleFaq key={question.id} ques={question} />;
          })}
        </div>
      </div>

      <div>
        <img src={SVG.faqman} alt="" className="f-img" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          textAlign: "end",
        }}
      >
        <img src={SVG.star2} alt="" />
      </div>
    </FaqWrapper>
  );
}
