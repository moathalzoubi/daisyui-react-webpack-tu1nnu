import React from 'react';

export const Chat = (props) => {
  return (
    <div className="p-10">
      <div className="flex w-full flex-col border-opacity-50">
        <div className="bg-purple-100 rounded-box my-2 flex h-14 place-items-center">
          <div className="avatar online p-2">
            <div className="w-11 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
        </div>

        <div className="mockup-window border bg-slaste-800">
          <div className="flex justify-end ">
            <div className="chat chat-start">
              <div className="chat-bubble chat-bubble-info">
                What kind of nonsense is this
              </div>
            </div>
          </div>

          <div className="flex ">
            <div className="chat chat-end">
              <div className="chat-bubble chat-bubble-primary">
                What kind of nonsense is a
              </div>
            </div>
          </div>

          <div className="flex p-2">
            <input
              type="text"
              placeholder="Type here"
              className="input-bordered input input-accent w-full"
            />
            <div className="p-0.5"></div>
            <span className="badge badge-secondary indicator-item indicator-middle py-6 hover:cursor-pointer">
              send
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
