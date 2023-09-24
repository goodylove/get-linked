import React, { useState } from "react";
import { SVG } from "./../../constants/Icons/index";
import { frequentlyAskQues } from "./questiondata";
import SingleFaq from "./singleFaq";
import Title from "./../Title/index";

export default function FrequentlyAskQuestion() {
  const [activeAnswer, setActivateAnswer] = useState(1);

  const handleActivateAnswer = (num) => {
    setActivateAnswer(activeAnswer == num ? null : num);
  };

  return (
    <>
      <div className="h-[1px] w-full  bg-line"></div>

      <section className="w-full flex justify-center items-center relative p-5">
        <div className="bg-custom-light w-[15rem]  absolute md:w-[20rem] h-[17rem]  hidden md:flex   top-0  rounded-full      blur-2xl opacity-[0.3]"></div>
        <div className="w-[80%] flex justify-center items-center flex-col md:flex-row gap-8">
          <div>
            <img src={SVG.pinkstart} alt="" />
            <div className="heading">
              <Title title=" Frequently Ask" text="Question" />

              <h5 className="text-white">
                We got answers to the questions that you might want to ask about
                getlinked Hackathon 1.0
              </h5>
            </div>
            <div>
              {frequentlyAskQues.map((question) => {
                return (
                  <SingleFaq
                    key={question.id}
                    ques={question}
                    handleShowAnswer={handleActivateAnswer}
                    answer={activeAnswer}
                  />
                );
              })}
            </div>
          </div>

          <div>
            <img src={SVG.faqman} alt="" className="f-img" />
          </div>
          <div>
            <img src={SVG.star2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}
