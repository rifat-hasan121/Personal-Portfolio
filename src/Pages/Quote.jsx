import React from 'react';
import { FcFlashAuto } from "react-icons/fc";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router";


const Quote = () => {
    return (
      <div className="w-2xl mx-auto pb-8 my-12 bg-gray-950 p-4 rounded-sm shadow-2xl shadow-gray-800">
        <div className="flex justify-end items-center gap-4 mb-8">
          <div className=""></div>
          <Link to="/">
            <div className="">
              <MdCancel size={38} style={{ color: "red" }} />
            </div>
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-sm"
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/09/pretty-curly-young-woman-writing-notes-startup-project-800x450.jpg"
            alt=""
          />
        </div>
        <small className="text-[12px] text-gray-400 my-4">
          May 17, 2025
        </small>
        <h3 className="text-2xl font-semibold mb-6">
          The Easiest Way to Become a Successful Writer and Authors.
        </h3>
        <p className="text-[18px] text-gray-700 mb-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum. You need to be sure
          there isn’t anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend toitrrepeat predefined
          chunks.
        </p>
        <div className="flex flex-col justify-center items-center">
          <img
            className="rounded-sm mb-2"
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2022/08/bl-big-01-1220x600.jpg"
            alt=""
          />
        </div>

        <p className="text-[12px] text-center text-gray-800 my-8">
          Image Caption
        </p>
        <p className="text-[18px] text-gray-700 mb-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum. You need to be sure
          there isn’t anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend toitrrepeat predefined
          chunks.
        </p>
        <h1 className="text-2xl font-bold my-6">
          First, solve the problem. Then write the code.
        </h1>
        <p className="text-[18px] text-gray-700 mb-6">
          Necessary, making this the first true generator on the Internet. It re
          are many variations of passages of Lo rem Ipsum available, but the
          majority have suffered alteration in some form, by injectedeed
          eedhumour, or randomised words which don’t look even slightly
          believable.
        </p>
        <div>
          <div className="flex gap-6 items-center">
            <div>
              <FcFlashAuto size={38} />
            </div>
            <div>
              <h2 className=" font-semibold">
                A programming language is for thinking about programs, not for
                expressing programs you’ve already thought of. It should be a
                pencil, not a pen.
              </h2>
            </div>
          </div>
        </div>
        <p className="text-[18px] text-gray-700 mb-6 mt-6">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum. You need to be sure
          there isn’t anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend toitrrepeat predefined
          chunks. Necessary, making this the first true generator on the
          Internet. It re are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by
          injectedeed eedhumour, or randomised words which don’t look even
          slightly believable. There are many variations of passages of Lorem
          Ipsum available, but the majority have suffered alteration in some
          form, by injected humour, or randomised words which don’t look even
          slightly believable. If you are going to use a passage of Lorem Ipsum.
          You need to be sure there isn’t anything embarrassing hidden in the
          middle of text. All the Lorem Ipsum generators on the Internet tend
          toitrrepeat predefined chunks. Necessary, making this the first true
          generator on the Internet. It re are many variations of passages of
          Lorem Ipsum available, but the majority have suffered alteration in
          some form, by injectedeed eedhumour, or randomised words which don’t
          look even slightly believable. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo .
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum. You need to be sure
          there isn’t anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend toitrrepeat predefined
          chunks. Necessary, making this the first true generator on the
          Internet. It re are many variations of passages of Lorem Ipsum
          available, but the majority have suffered alteration in some form, by
          injectedeed eedhumour, or randomised words which don’t look even
          slightly believable. Necessary, making this the first true generator
          on the Internet. It re are many variations of passages of Lo rem Ipsum
          available, but the majority have suffered alteration in some form, by
          injectedeed eedhumour, or randomised words which don’t look even
          slightly believable.
        </p>
      </div>
    );
};

export default Quote;