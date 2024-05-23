import React, { useContext, useRef, useState } from "react";
import Input from "../../../../components/Input/Input";
import { HomeContext } from "../../../../context/HomeContext/HomeContext";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const Contact = ({ position, zIndex }) => {
  const { showContact } = useContext(HomeContext);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const handleFormFieldChange = (e) => {
    console.log(e.target.name, e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  console.log(formData);
  function isValidEmail(email) {
    // Regular expression to validate email format
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isValidEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    emailjs
      .sendForm(
        "service_uv1f95g",
        "template_188rqvl",
        formRef.current,
        "AArrxq1S6Ul3yYZIk"
      )
      .then(
        (result) => {
          setSuccess(true);
          toast.success("Email sent successfully");
        },
        (error) => {
          setError(true);
          console.log(error);
          toast.error("Something went wrong, please try again later");
        }
      );
  };
  return (
    <div
      style={{ position, zIndex: zIndex || "-1" }}
      className="bg-[inherit] overflow-y-scroll hide-scrollbar max-h-[90vh] bottom-[0] left-[50%] translate-x-[-50%] z-[-1] w-[100%] lg:w-[95%] px-[24px] pb-[18px] m-auto text-white"
    >
      <div>
        <p className="text-textPink text-size-contact font-bold ml-[-3px] py-[24px]">
          Get in touch
        </p>
      </div>

      <form className="flex flex-col" onSubmit={sendEmail} ref={formRef}>
        <div className="flex flex-col lg:flex-row items-center lg:gap-[82px]">
          <Input
            placeholder="Write Your Name"
            label="Name *"
            required
            name="name"
            onChange={handleFormFieldChange}
          />
          <Input
            placeholder="Write Your Email"
            label="Email *"
            required
            name="email"
            onChange={handleFormFieldChange}
          />
        </div>
        <div className="flex items-end flex-col lg:flex-row  lg:gap-[82px]">
          <Input
            placeholder="Your Budget"
            type="number"
            label="Budget *"
            required
            name="budget"
            onChange={handleFormFieldChange}
          />
          <div className="py-[12px] w-full flex flex-col gap-[6px] md:gap-[12px]">
            <label className="text-black text-[16px] font-semibold">
              About Your Project *
            </label>
            <textarea
              rows={5}
              className="w-full border-[2px] p-[12px] text-black border-neutral-900 rounded-md"
              placeholder="Project Info"
              label="About Your Project *"
              required
              name="message"
              onChange={handleFormFieldChange}
            />
          </div>
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="bg-black w-full rounded-md py-[16px] md:py-[26px] mt-[24px] hover:bg-bgPink transition-all ease-in duration-300 font-bold text-white text-[32px]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
