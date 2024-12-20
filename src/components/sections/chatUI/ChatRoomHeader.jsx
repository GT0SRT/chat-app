import { Link } from "react-router-dom";

export default function ChatRoomHeader() {
  return (
    <>
      <div className="flex flex-row w-full pt-5 p-3 md:px-10 pb-0 mb-0">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight w-full text-left">
          Chat Room
        </h1>
        <div className="flex">
          <Link
            to="/"
            className="inline-flex items-center w-fit text-nowrap px-2 md:px-4 py-0 text-sm md:text-lg font-medium text-center  border rounded-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-100"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
      <div className="p-3 md:px-10 w-full">
        <p className="bg-blue-50 text-black rounded-2xl px-3 w-full py-5">
          <span className="font-semibold">Please Note:</span> Current Profile
          allocated as{" "}
          <span className="font-semibold text-blue-800">Anonymous User</span>.
          To use a well defined profile consider registering yourself as a new
          user for our react-chat app
        </p>
      </div>
    </>
  );
}
