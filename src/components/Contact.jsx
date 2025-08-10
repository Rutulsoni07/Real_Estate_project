import React from "react";
import { toast } from "react-toastify";
import { motion } from "motion/react";

export default function Contact() {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d86ce5f5-4c00-4185-bb13-ba407d9f39af"
);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully!!");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
}
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      
      className="text-center p-6 py-32  w-full overflow-hidden"
      id="contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center ">
        Contact
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80  mx-auto">
        Ready to make move? Let's Build Your Future Together
      </p>

      <form
        onSubmit={onSubmit}
        className="mx-auto text-gray-600 pt-8 max-w-2xl"
      >
        <div className="flex flex-wrap">
          <div className="w-full text-left md:w-1/2">
            Your Name
            <input
              type="text "
              placeholder="Enter Your Name"
              className="w-full border border-gray-300 rounded py-3 px-2 mt-2 "
              name="Name"
              required
            />
          </div>

          <div className="w-full text-left md:w-1/2 md:pl-4">
            Your Email
            <input
              type="Email "
              placeholder="Enter Your Email"
              className="w-full border border-gray-300 rounded py-3 px-2 mt-2 "
              name="Email"
              required
            />
          </div>
        </div>

        <div>
          <textarea
            name="message"
            id="message"
            className="w-full rounded border border-gray-300 py-3 px-4 mt-2 h-48 resize-none"
            required
          >
            Message
          </textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mt-5  rounded">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}
