const Together = () => {
  return (
    <div className="mt-12 lg:mt-36 px-4 md:px-6 lg:px-6">
      <div>
        <h2 className="text-5xl lg:text-[65px] font-semibold text-center pb-10 lg:pb-4 -leading-4 lg:leading-0">
          Lets Design Together
        </h2>
        <p className="text-xl font-normal md:text-center pb-12 text-justify">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus <br /> netus in. Aliquet donec morbi convallis pretium
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="w-full lg:w-[672px]">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full pl-6 text-xl font-normal outline-none border-2 focus:border-primary py-5 rounded-xl"
            />
          </div>
          <button className="bg-primary text-white text-2xl md:text-lg lg:text-2xl font-semibold py-5 px-4 lg:px-9 rounded-xl">
            Contact Me{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Together;
