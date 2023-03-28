import Header from "../components/Header";

const Main = () => {
  return (
    <div className="bg-[#F5F4F9] font-sans min-h-screen">
      <Header />
      <div className="w-full h-[100vh] flex items-center justify-center text-center px-4">
        <div>
          <svg
            className="mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="50"
            height="50"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z" />
          </svg>
          <p className="mt-3 text-lg md:text-2xl">
            This is the home page for Innoloft Dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
