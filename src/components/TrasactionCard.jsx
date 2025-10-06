import React from 'react';

function TransactionCard({ title, value }) {
  return (
    <div className="flex flex-col justify-center content-center text-white p-8 w-60 h-28 shadow-md bg-gray-200 border-x-black rounded-md">
      <div className="flex-1 justify-center p-2 ml-2">
        <h2 className="text-black text-2xl font-medium ml-1 uppercase tracking-wide">
          {title}
        </h2>
      </div>
      <div className="flex-1 justify-center align-middle ml-2 p-2">
        <p className="text-black text-xl font-medium ">{value}</p>
      </div>
    </div>
  );
}

export default TransactionCard;
