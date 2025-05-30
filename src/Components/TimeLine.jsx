import React from "react";

const Education = () => {
  return (
    <div className="">
      <div className="py-10 container mx-auto px-5">
        <div class="relative">
          <div
            className="border-r-4 border-black absolute h-full top-0"
            style={{ left: "9px" }}
          ></div>
          <ul class="list-none m-0 p-0">
            <li class="mb-5  ">
              <div class="flex group items-center ">
                <div class="bg-gray-900 group-hover:bg-green-500 z-10 rounded-full border-4 border-black  h-5 w-5">
                  <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                </div>
                <div class="flex-1 ml-4 z-10 font-medium">
                  <div class="order-1 space-y-2 bg-gray-900 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                    <div className="flex justify-between gap-4 items-center">
                      <div>
                        <h3 class="mb-3 font-bold text-white text-2xl">
                          SSC in Science
                        </h3>
                        <p class="pb-4 text-sm text-gray-100">
                          Moulovi Nogor High School (2023 - 2024)
                        </p>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-green-500">
                          4.94/5
                        </h3>
                      </div>
                    </div>
                    <hr />
                    <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="mb-5  ">
              <div class="flex group items-center ">
                <div class="bg-gray-900 group-hover:bg-green-500 z-10 rounded-full border-4 border-black  h-5 w-5">
                  <div class="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                </div>
                <div class="flex-1 ml-4 z-10 font-medium">
                  <div class="order-1 space-y-2 bg-gray-900 rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                    <h3 class="mb-3 font-bold text-white text-2xl">
                      Diploma in Engineering (CST)
                    </h3>
                    <p class="pb-4 text-sm text-gray-100">
                      Mymensingh Polytechnic Institute (2024 - Running)
                    </p>
                    <hr />
                    <p class="text-sm font-medium leading-snug tracking-wide text-gray-300 text-opacity-100">
                      The education should be very interactual. Ut tincidunt est
                      ac dolor aliquam sodales. Phasellus sed mauris hendrerit,
                      laoreet sem in, lobortis mauris hendrerit ante.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
