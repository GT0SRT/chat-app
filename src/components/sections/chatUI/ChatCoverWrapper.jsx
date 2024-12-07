import { Link } from "react-router-dom";

export default function ChatCoverWrapper() {
  return (
    <div className="flex flex-col h-screen justify-center items-center w-full">
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-pink-400 to-indigo-700 w-full h-full">
        <div className="pb-80 pt-7 sm:pb-40 sm:pt-7 lg:pb-48 lg:pt-7">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
                Lets Start With Creating a Group
              </h1>
              <p className="mt-4 text-[1rem] text-white">
                Group allow users to collaborate together and then can share
                their ideas in text based communication manner.
              </p>
            </div>
            <div>
              <div className="mt-5">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className=" mt-[40vh] md:mt-0 absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-48 w-32 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            alt=""
                            src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-48 w-32 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://ik.imagekit.io/ably/ghost/prod/2023/01/build-a-realtime-chat-app-from-scratch--1-.png?tr=w-1728,q-50"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-48 w-32 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://media.licdn.com/dms/image/D4D12AQF4wPzUFfzVlQ/article-cover_image-shrink_600_2000/0/1715864980954?e=2147483647&v=beta&t=tNg7VcV8mPDYPi-7U86jFmNHdMjytZv_LoOChd5E9ZI"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-48 w-32 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCTgpziS36V9RzFgKbafV80pwFKcOSEtrYEA&s"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-48 w-32 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://herobot.app/wp-content/uploads/2022/11/11-Reasons-Why-A-Chat-Application-Is-Great-For-Business_1.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-48 w-32 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://m.media-amazon.com/images/G/31/amazonservices/Blog/What_is_an_E-commerce_business.jpg"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-48 w-32 overflow-hidden rounded-lg">
                          <img
                            alt=""
                            src="https://www.tidio.com/_next/image/?url=https%3A%2F%2Fwww.tidio.com%2Fwp-content%2Fuploads%2Flive-chat-for-ecommerce.png&w=3840&q=75"
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start gap-4">
                  <input
                    placeholder="Provide a Group Name"
                    type="text"
                    className="bg-pink-200 placeholder:text-pink-600 text-pink-600 inline-block w-96 border border-transparent px-8 py-3 text-center font-medium text-indigo shadow-lg rounded-xl mr-5"
                  />
                  <input
                    placeholder="Provide your Creator Name"
                    type="text"
                    className="bg-pink-200 placeholder:text-pink-600 text-pink-600 inline-block w-96 border border-transparent px-8 py-3 text-center font-medium text-indigo shadow-lg rounded-xl mr-5"
                  />
                  <div className="flex flex-row justify-start items-center gap-4 text-white">
                    <input
                      placeholder="Provide Group Limit"
                      type="number"
                      defaultValue={5}
                      className="bg-pink-200 placeholder:text-pink-600 text-pink-600 inline-block border border-transparent px-8 py-3 text-center font-medium text-indigo shadow-lg rounded-xl"
                    />
                    Defaults to 5
                  </div>
                  <div className="flex flex-row justify-start items-center gap-4 text-white">
                    <input type="checkbox" />I Agree To React-Chat Terms
                    and Conditions
                  </div>
                  <Link to="/chat-room" className="inline-block rounded-3xl border border-transparent bg-yellow-400 py-4 w-96 text-center font-medium text-black hover:bg-slate-200">
                    Create & Take Me To Chat Room
                  </Link>
                  <Link to="/" className="inline-block rounded-md border border-transparent py-1 w-96 text-center font-medium text-white">
                    Navigate back to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}