import React from "react";
import Img4 from "../../assets/img4.jpg";

const Blogg1 = () => {
  return (
    <div>
      <div className="flex flex-col h-full items-center bg-white">
        <div className="flex flex-row h-96 w-full bg-slate-400 border-b-8 border-black mb-8">
          <img className="object-cover" src={Img4} alt="" />
          {/* <img
          className="absolute"
          src="https://i.imgur.com/Jy2uNry.png"
          alt=""
        /> */}
        </div>
        <div className="w-8/12">
          <header class="mb-4 lg:mb-6 not-format">
            <address class="flex items-center mb-6 not-italic">
              <div class="inline-flex items-center mr-3 text-sm text-black">
                {/* <img
              class="mr-4 w-16 h-16 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
              alt="Jese Leos"
            /> */}
                <div>
                  <a href="#" rel="author" class="text-3xl font-bold text-black">
                    Aditya Kashyap
                  </a>
                  <p class="text-lg font-medium text-gray-800 ">
                    Writer, Story-teller
                  </p>
                  <p class="text-lg font-medium text-gray-800 ">
                    <time
                      pubdate
                      datetime="2022-02-08"
                      title="February 8th, 2022"
                    >
                      Oct. 8, 2022
                    </time>
                  </p>
                </div>
              </div>
            </address>
            <h1 class="mb-4 text-3xl font-extrabold leading-tight text-black lg:mb-6 lg:text-5xl">
              Digital Arts Conclave
            </h1>
          </header>
          <p className="mb-8 text-xl">
            The idea behind the event was to celebrate the diverse luxuriance of
            the digital arts we practice and cherish. A two-day long event where
            eminent professionals from the fields of photography and design came
            together to deliver the vital essence of the matter. We had Mr. Jai
            Thakur, and Mr. Vidit Goswami as photography mentors and Mr. Nishant
            Dubey, and Ms. Deepika Dutta Kapoor as mentors in design.
          </p>
          <p className="mb-8 text-xl">
            The attendees of the photography seminar gained a perspective on
            genres in photography, with special emphasis on black and white
            photography. The technical balance between the camera and snapshot
            was discussed thoroughly. The mentors interacted with the students,
            giving them the goodies they brought along. All crucial yet
            intriguing aspects of photography were covered in great detail.
          </p>
          <p className="mb-8 text-xl">
            The design mentors took hands-on workshops for UX motion graphics
            and creative design thinking. Various platforms over which design
            can be worked were critically evaluated. The mentors gave wonderful
            insights into pursuing it professionally, they also personally
            looked over the attendees' portfolios and guided them so as to make
            them more influential.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogg1;
