import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination} from "swiper";
const Testimonial = () => {
  return (
    <div id="testimonail" className="max-w-7xl m-auto lg:px-2 px-4 my-40">
      <div className="w-max mx-auto">
        <h1 className="text-[2rem] text-center mt-10 px-6 font-medium">
        <span className="text-primary">Testim</span>onial</h1>

        <div className="border-b-2 border-primary"></div>
      </div>

      <div className="mt-16">
        <p className="text-xl">Our Clients Say</p>
        <div className="">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            <SwiperSlide>
              <section className="text-gray-600 body-font">
                <div className="container px-3 py-7 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="py-4 pr-4 md:w-1/2 w-full">
                      <div className="h-full bg-[#19282F] p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-white mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed text-[#EEEEEE] mb-6">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie s
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="/Asstes/picture/man1.jfif"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-white">
                              Ridwan Ahmed
                            </span>
                            <span className="text-[#EEEEEE] text-sm">
                              Dhaka, Bangladesh
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="py-4 pl-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed mb-6">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="/Asstes/picture/man8.jfif"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Tanvir Ahmed
                            </span>
                            <span className="text-gray-500 text-sm">India</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
          
              <section className="text-gray-600 body-font">
                <div className="container px-3 py-7 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="py-4 pr-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed mb-6">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie s
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="/Asstes/picture/man3.jfif"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Fahim Madani
                            </span>
                            <span className="text-gray-500 text-sm">
                              Chittagon, Bangladesh
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="py-4 p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed mb-6">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="/Asstes/picture/man4.jfif"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Ariful Islam
                            </span>
                            <span className="text-gray-500 text-sm">
                              Borishal, Bangladesh
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
           
              <section className="text-gray-600 body-font">
                <div className="container px-3 py-7 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed mb-6">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie s
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="/Asstes/picture/woman5.jfif"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Sarmin Akter
                            </span>
                            <span className="text-gray-500 text-sm">
                              Chittagong, Bangladesh
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed mb-6">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="/Asstes/picture/woman6.jfif"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Tamanna Tanha
                            </span>
                            <span className="text-gray-500 text-sm">
                              Kolkata, India
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
          
              <section className="text-gray-600 body-font">
                <div className="container px-3 py-7 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed mb-6">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie s
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="/Asstes/picture/woman7.jpg"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Binte Islam Fahi
                            </span>
                            <span className="text-gray-500 text-sm">
                              Dhaka, Bangladesh
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed mb-6">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="/Asstes/picture/man8.jfif"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Alper Kamu
                            </span>
                            <span className="text-gray-500 text-sm">USA</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
            
              <section className="text-gray-600 body-font">
                <div className="container px-3 py-12 mx-auto">
                  <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed mb-6">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie s
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="/Asstes/picture/man9.jpg"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Md Raihan
                            </span>
                            <span className="text-gray-500 text-sm">USA</span>
                          </span>
                        </a>
                      </div>
                    </div>
                    <div className="p-4 md:w-1/2 w-full">
                      <div className="h-full bg-gray-100 p-8 rounded">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="block w-5 h-5 text-gray-400 mb-4"
                          viewBox="0 0 975.036 975.036"
                        >
                          <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed mb-6">
                          Synth chartreuse iPhone lomo cray raw denim brunch
                          everyday carry neutra before they sold out fixie
                          microdosing. Tacos pinterest fanny pack venmo,
                          post-ironic heirloom try-hard pabst authentic iceland.
                        </p>
                        <a className="inline-flex items-center">
                          <img
                            alt="testimonial"
                            src="/Asstes/picture/man3.jfif"
                            className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          <span className="flex-grow flex flex-col pl-4">
                            <span className="title-font font-medium text-gray-900">
                              Talha Raj
                            </span>
                            <span className="text-gray-500 text-sm">India</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
