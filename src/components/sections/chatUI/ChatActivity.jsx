// import { isCookie } from "react-router-dom"
import { useSelector } from 'react-redux';

export default function ChatActivity(props) {
    const isClicked = useSelector((state) => state.click_redux_slice.isClicked);
    const people = props.connects ?? [];

    return (
      <ul
        role="list"
        className={isClicked ? 'divide-y bg-white p-4 rounded-3xl divide-gray-100' : 'divide-y p-4 rounded-3xl divide-gray-100 bg-black text-white'}
      >
        {people?.map((person, index) => (
          <li key={index} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <img
                alt=""
                src={person.imageUrl}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
              />
              <div className="min-w-0 flex-auto">
                <p className={isClicked ? 'text-sm font-semibold leading-6 text-gray-900':'text-sm font-semibold leading-6 text-gray-300'}>
                  {person.name}
                </p>
                <p className={isClicked ? 'mt-1 truncate text-xs leading-5 text-gray-500':'mt-1 truncate text-xs leading-5 text-gray-700'}>
                  {person.email}
                </p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className={isClicked ? 'text-sm leading-6 text-gray-900':'text-sm leading-6 text-gray-300'}>{person.role}</p>
              {person.lastSeen ? (
                <p className={isClicked ? 'mt-1 text-xs leading-5 text-gray-500':'mt-1 text-xs leading-5 text-gray-700'}>
                  Last seen{" "}
                  <time dateTime={person.lastSeenDateTime}>
                    {person.lastSeen}
                  </time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-500">Online</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  }