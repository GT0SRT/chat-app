import PageWrapper from "../../PageWrapper";
import CreateAnAccount from "./CreateAnAccount";
import ContinueSignin from "./ContinueSignin";
import ChatAnonymous from "./ChatAnonymous";
import BrandsIncluded from "../../BrandsIncluded";
import TeamSection from "../../TeamSection";
import BlogsSection from "../../BlogsSection";
import ApplicationCover from "../../ApplicationCover";
import { useSelector } from 'react-redux';

function Dashboard() {
  const isClicked = useSelector((state) => state.click_redux_slice.isClicked);

  return (
    <>
      <PageWrapper
        heading={
          <h1 className="text-2xl md:text-7xl my-3 pt-3 font-semibold text-shadow-2xl">
            Choose Your Strategy
          </h1>
        }
      >
      <div className="md:flex gap-5">
        <div className="p-3"><CreateAnAccount /></div>
        <div className="p-3"><ContinueSignin /></div>
        <div className="p-3"><ChatAnonymous /></div>
      </div>
      </PageWrapper>
      <TeamSection />
      <div className="flex flex-col justify-center items-center h-64">
        <h1 className={isClicked ? 'text-7xl font-semibold text-black':'text-white text-7xl font-semibold'}>Strategies Explained</h1>
      </div>
      <ApplicationCover />
      <div className="flex flex-col md:flex-row justify-evenly items-center p-14 mt-10 pb-8 gap-20">
        <div className="w-96 shadow-lg flex flex-col justify-center items-center gap-10 text-white bg-slate-400 p-6 rounded-2xl">
          <CreateAnAccount hideButton />

          <div className="bg-slate-200 rounded-3xl shadow-md p-6 text-black text-xl">
          Quickly set up your profile and join our growing community. Enjoy easy access to all features and start connecting with others in no time. Your privacy and security are our top priority.
          </div>
        </div>
        <div className="w-96 shadow-lg flex flex-col justify-center items-center gap-10 text-white bg-slate-400 p-6 rounded-2xl">
          <ContinueSignin hideButton />

          <div className="bg-slate-200 rounded-3xl shadow-md p-6 text-black text-xl">
          Pick up right where you left off by signing in securely. Stay connected and have seamless access to your messages, preferences, and conversations, without any hassle.
          </div>
        </div>
        <div className="w-96 shadow-lg flex flex-col justify-center items-center gap-10 text-white bg-slate-400 p-6 rounded-2xl">
          <ChatAnonymous hideButton />
          
          <div className="bg-slate-200 rounded-3xl shadow-md p-6 text-black text-xl">
          Talk freely and securely with others without revealing your identity. Our platform ensures full anonymity, allowing you to express yourself comfortably while staying protected.
          </div>
        </div>
      </div>
      <BlogsSection />
      <BrandsIncluded />
     
    </>
  );
}

export default Dashboard;
