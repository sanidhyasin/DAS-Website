import React from "react";
import Img4 from "../../assets/img4.jpg";

const Blogg2 = () => {
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
                  <a
                    href="#"
                    rel="author"
                    class="text-3xl font-bold text-black"
                  >
                    Adidev Mohanty
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
              The 15s Disaster
            </h1>
          </header>
          <p className="mb-8 text-xl">
            Tik Tok, formerly Musical.ly, was an instant hit among the masses
            and still has its charm by holding over a billion monthly active
            users. These numbers could be very well more than double or triple
            of what is known if we take into consideration its hunting grounds,
            the short video format. Vastly popular among the meta users as
            reels, these videos exist in the portrait orientation of the mobile
            phones and could be a maximum of 60 seconds long to 3 minutes long
            depending on the platform.
          </p>
          <p className="mb-8 text-xl">
            It simply tricks our brains by targeting its reward centres into
            releasing dopamine with such a short stimulus. A widespread method
            to convey information or vine-like videos in a short paced form in a
            hurried lifestyle. Everything just fits perfectly doesn’t it? Makes
            you doubt. But not everyone is able to take a step back and observe
            how it actually is affecting society and the global working
            altogether.
          </p>
          <p className="mb-8 text-xl">
            So this article is dedicated to you gullible people whose
            vertebrates are crying under the constant pressure of looking down
            to your information spewing device.
          </p>
          <p className="mb-8 text-xl">
            An average student among us, continuously scrolling through reels
            for hours with his/her undivided attention. Just to experience
            something they already did fifteen seconds ago and on repeat. This
            algorithm is making a slave out of people. Instead of labour, it
            demands your undivided attention. Always in a need to experience the
            big funny. And we feel devoid of all happiness the moment we close
            our application to put our phones down. Got to work too you know.
            And in less than a five minute gap, there you go again, scrolling
            through those godforsaken reels. Makes you feel trapped, doesn’t it?
            This constant need to look at memes, trends and whatnot. Mindlessly
            scrolling just for the slightest hit of dopamine.
          </p>
          <p className="mb-8 text-xl">
            As a result, you have consumed too much of it already. Too much
            information to process. Information not even worthy of consideration
            or acknowledgement altogether. Hitting you in the form of
            tsunami-like waves. The sigma grindset epidemic, the fact that the
            gymming lifestyle is now starting to be associated by the weeb
            culture, just the fact that to gain views people are resorting to
            recording the most absurd form of behaviour. The masses have now
            lost their ability to think and comprehend simple or complex social
            and emotional problems or face them. Unable to spend even a single
            hour alone with their thoughts. Because they don’t have any left.
            Unable to cook even a single thought in their minds. In constant
            search for easy to digest spoon-fed material.
          </p>
          <p className="mb-8 text-xl">
            Are those influencers making you dream of a different lifestyle? You
            too must want to look dreamy. Gaining people’s eyes by vomiting the
            most obvious statements to dreamy songs. Oh, what a life they have.
            Makes one want to be aware. Even kids are now getting hooked to
            these people through applications like youtube. Yearning for a
            different life than their parents are providing them with. The
            average influencer owns this big mansion, a number of Teslas which
            are basically pumped with electricity from burning the same oil as
            any other vehicle, consuming more electricity and energy than
            countries altogether. On top of that the majority is now resorting
            to softcore porn and gore to be highlighted. Definitely seems to be
            a lifestyle to thrive for, eh?
          </p>
          <p className="mb-8 text-xl">
            Apart from this all, short videos have reduced the attention span of
            the average human significantly. Which leads to consumption of more
            of such mindless content. Promoting creators to create more of it.
            Even up and coming companies are bound to use this format to
            advertise their product for how efficient it is. As a result the
            multitude of social media platforms have implemented this format.
            Commercialising it all is too beneficial for their pockets. For
            example, most of the reddit users expressed displeasure towards this
            particular form of media but now have to use it cause the makers
            introduced it nonetheless.
          </p>
          <p className="mb-8 text-xl">
            According to the "Tik Tok 2020 Short Video Content Report for the
            First Half of 2020", Tik Tok video content types with the fastest
            annual growth rate do not have knowledge categories. The top three
            categories are beautiful women, handsome guys, and funny stories. In
            the top500 bloggers of these short video platforms, knowledge
            accounts for less than 5%, replaced by food, beauty, games,
            storytelling and funny, which account for 31.66%.
          </p>
          <p className="mb-8 text-xl">
            Naturally, no one wants to perform activities with less pleasure and
            more work anymore like thinking. It is easy for people to gradually
            fall into this vicious cycle and spend a hefty amount of time on
            these softwares. But people need to be farsighted to see the damages
            it brings with its prolonged usage. Talk to people about the
            observations they make naturally. Explore off the grid. And
            experience time together to develop into a holistic being.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogg2;
