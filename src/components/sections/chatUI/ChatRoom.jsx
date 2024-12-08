import { useSelector, useDispatch } from 'react-redux';
import {  useState } from "react";
import { toggleClick } from '../../../redux/clickSlice';
import Chats from './Chats';
import ChatTextArea from './ChatTextArea';
import ChatRoomHeader from './ChatRoomHeader';
import ChatActivityArea from './ChatActivityArea';
import { addANewComment } from '../../../redux/commentsSlice';
import { FaToggleOn } from 'react-icons/fa';
import { FaToggleOff } from 'react-icons/fa';

export default function ChatRoom() {
  const isClicked = useSelector((state) => state.click_redux_slice.isClicked);
  const dispatch = useDispatch();
  
  const connects = useSelector((state) => state.connects_redux_slice);
  const comments = useSelector((state) => state.comments_redux_slice);
  
  const [newComment, setNewComment] = useState('');

  function onHandleUserComment(event) {
    setNewComment(event.target.value);
  }

  function onAddNewComment() {
    if (!newComment) {
      alert('Please provide a valid comment.');
      return;
    }

    const comment = {
      chat_owner: 'Anonymous User',
      chat_time: new Date().toISOString(),
      chat_message: newComment,
      chat_profile:
        'https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80',
      chat_author: 'green',
    };

    dispatch(addANewComment(comment));
    setNewComment('');
  }

  const handleToggle = () => {
    dispatch(toggleClick()); 
  };

  return (
    <div className={isClicked ? 'flex flex-col justify-start gap-3 items-center w-full p-5 bg-gradient-to-l bg-white' : 'flex flex-col justify-start gap-3 items-center w-full p-5 bg-gradient-to-l bg-black text-white'}>
      <div className='ml-auto cursor-pointer'>
        {isClicked ? (
          <FaToggleOn size={32} onClick={handleToggle} />
        ) : (
          <FaToggleOff className='text-white' size={32} onClick={handleToggle} />
        )}
      </div>
      <ChatRoomHeader />
      <div className='flex flex-col md:grid md:grid-cols-2 md:grid-rows-1 md:w-full md:px-10 gap-10 mt-0 pt-0'>
        <div className='col-end-2 bg-blue-100 p-5 rounded-3xl shadow-xl'>
          <div className='w-full'>
            <h3 className='mb-4 text-lg font-semibold text-gray-900'>Comments</h3>

            <Chats comments={comments} />
            <ChatTextArea
              defaultValue={newComment}
              onPostNewComment={onAddNewComment}
              onChange={onHandleUserComment}
            />
          </div>
        </div>

        <ChatActivityArea connects={connects} />
      </div>
    </div>
  );
}
