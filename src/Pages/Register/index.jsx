import { SVG } from "../../constants/Icons";

function Register() {
  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex w-full justify-center items-center">
        <div>
          <img src={SVG.register} alt="" />
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Register;
