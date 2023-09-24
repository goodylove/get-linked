function SingleFaq({ ques, answer, handleShowAnswer }) {
  return (
    <div className="mt-10 transition-all">
      <div className=" border-b-[1px] border-custom-pink cursor-pointer mt-3">
        <div className="flex justify-between  items-center my-5">
          <h4 className="text-white text-[12px] md:text-[14px]">
            {ques.question}
          </h4>

          <span
            className=" text-custom-highlight text-[25px]"
            onClick={() => handleShowAnswer(ques.id)}
          >
            {answer === ques.id ? "-" : "+"}
          </span>
        </div>
        <p
          className={`text-white ${answer === ques.id ? "visible" : "hidden"}`}
        >
          yes
        </p>
      </div>
    </div>
  );
}

export default SingleFaq;
