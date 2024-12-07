

function PageWrapper({ children, heading }) {
  return (
   <div className="p-12">
     <div className="bg-gradient-to-r from-blue-900 via-pink-400 to-indigo-700
      text-white p-1 w-[80vw] md:w-full rounded-3xl flex flex-col gap-6 justify-center items-center shadow-xl">
      {heading}
      <div className="flex flex-row justify-evenly items-center gap-10 p-1">
        {children}
      </div>
    </div>
   </div>
  );
}

export default PageWrapper;