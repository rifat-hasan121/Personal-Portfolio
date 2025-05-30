import React, { useRef } from "react";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Link from "flyonui/components/link";
import Swal from "sweetalert2";


const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const ContactCard = () => {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
            .then(
                (result) => {
                  Swal.fire({
                    title: "Message sent successfully!",
                    icon: "success",
                    draggable: true,
                  });
                    formRef.current.reset(); // clear form
                },
                (error) => {
                    alert("Failed to send message. Please try again.");
                    console.error(error);
                }
            );
    }
  return (
    <div className="mt-28">
      <div className="text-center mb-12">
        {" "}
        <small className="text-green-500">CONTACT</small>
        <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold">
          Contact With <span className="text-green-500">Me</span>
        </h3>
      </div>
      <div className="min-h-scree flex items-center justify-center p-4">
        <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center text-center md:items-start md:text-left">
            <img
              src="https://i.ibb.co/8gF60LMm/android-chrome-512x512.png"
              alt="Profile"
              className="rounded-md mb-4"
            />

            <h2 className="text-white text-2xl font-bold">
              Rifat <span className="text-green-500">Hasan</span>
            </h2>
            <p className="text-gray-400 text-sm mb-2">Frontend Developer</p>
            <p className="text-gray-300 text-sm mb-4">
              I am available for freelance work. Connect with me via and call in
              to my account.
            </p>
            <p className="text-sm text-gray-400">
              <strong className="text-white">Phone:</strong> +880 1602944969
            </p>
            <p className="text-sm text-gray-400 mb-4">
              <strong className="text-white">Email:</strong>{" "}
              rifathasannetrakona@gmail.com
            </p>
            <p className="text-sm text-gray-400 mb-2">FIND WITH ME</p>
            <div className="flex gap-4">
              <a href="https://x.com/rifathasan1211" target="_blank">
                <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md">
                  <FaTwitter className="text-green-500" />
                </button>
              </a>

              <a
                href="https://www.facebook.com/rabularafatpappu.pappu"
                target="_blank"
              >
                <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md">
                  <FaFacebookF className="text-green-500" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/md-rifat-hasan-46256b325/"
                target="_blank"
              >
                <button className="p-3 bg-gray-800 hover:bg-gray-700 rounded-md">
                  <FaLinkedinIn className="text-green-500" />
                </button>
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg md:col-span-2">
            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-1">Your Name</label>
                <input
                  className="bg-gray-800 text-white p-3 rounded-md outline-none"
                  type="text"
                  name="user_name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-1">
                  Phone Number
                </label>
                <input
                  className="bg-gray-800 text-white p-3 rounded-md outline-none"
                  type="text"
                  name="user_phone"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm text-gray-400 mb-1">Email</label>
                <input
                  className="bg-gray-800 text-white p-3 rounded-md outline-none"
                  type="email"
                  name="user_email"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm text-gray-400 mb-1">Subject</label>
                <input
                  className="bg-gray-800 text-white p-3 rounded-md outline-none"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm text-gray-400 mb-1">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  name="message"
                  className="bg-gray-800 text-white p-3 rounded-md outline-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-gray-800 hover:bg-gray-700 text-green-500 rounded-md font-semibold"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
