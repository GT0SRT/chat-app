import { useSelector } from 'react-redux';

function otherSenderJSX(commentProp, index) {
    return (
      <div className="flex" key={index}>
        <div className="flex-1 bg-blue-500 border rounded-3xl px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
          <strong className="text-white">{commentProp.chat_owner}</strong>{" "}
          <span className="text-xs text-gray-100">{commentProp.chat_time}</span>
          <p className="text-sm text-slate-200">{commentProp.chat_message}</p>
        </div>
        <div className="flex-shrink-0 ml-5">
          <img
            className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
            src={commentProp.chat_profile}
            alt=""
          />
        </div>
      </div>
    );
  }
  
  function senderJSX(commentProp, index) {
    return (
      <div className="flex" key={index}>
        <div className="flex-shrink-0 mr-5">
          <img
            className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10"
            src={commentProp.chat_profile}
            alt=""
          />
        </div>
        <div className="flex-1 bg-green-600 border rounded-3xl px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
          <strong className="text-white">{commentProp.chat_owner}</strong>{" "}
          <span className="text-xs text-gray-100">{commentProp.chat_time}</span>
          <p className="text-sm text-slate-200">{commentProp.chat_message}</p>
        </div>
      </div>
    );
  }
  
  export default function Chats(props) {

  const isClicked = useSelector((state) => state.click_redux_slice.isClicked);
  
    return (
      <div className={isClicked ? 'space-y-4 p-10 bg-white m-2 rounded-3xl mb-6' : 'space-y-4 p-10 m-2 rounded-3xl mb-6 bg-black'}>
        {props.comments?.length ? props.comments.map((comment, index) => {
          const isOtherUser = comment.chat_author === "blue";
          return isOtherUser ? otherSenderJSX(comment, index) : senderJSX(comment, index);
        }) : <span className="font-semibold text-xl text-red-700">No Comments Posted</span>}
      </div>
    );
  }
