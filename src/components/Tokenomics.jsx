const Tokenomics = () => {
  return (
    <div className="bg-white rounded-md px-6 py-6 pb-14 my-6 relative">
      <h2 className="text-[24px] font-semibold">Tokenomics</h2>
      <h2 className="mt-6 text-[20px] font-semibold text-gray-600">
        Initial Distribution
      </h2>
      <div>
        <div className="flex items-center gap-[20px]">
          <div className="mt-6 relative">
            <img
              src="/Ellipse.png"
              alt=""
              className="absolute w-[70px] h-[110px]"
            />
            <img
              src="/Ellipse-chart.png"
              alt=""
              className="w-[150px] h-[150px]"
            />
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[20px]">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <h6>Crowdsale investors: 80%</h6>
            </div>

            <div className="flex items-center gap-[20px]">
              <div className="w-4 h-4 bg-orange-400 rounded-full"></div>
              <h6>Foundation: 20%</h6>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quaerat similique modi et, odit dolorem porro soluta accusantium accusamus! Eius voluptatum tempora quas sequi. Fuga voluptates aperiam nisi minus facere. Distinctio, obcaecati, consequatur sequi voluptas veritatis facilis aspernatur facere totam tempore perferendis quo repudiandae. Eius quidem adipisci ut, harum aliquid tempore, sequi quia, fugiat nemo inventore maiores nesciunt incidunt dolor voluptatibus. Omnis veniam ullam, ea illum accusamus enim consequuntur magnam repudiandae adipisci cumque dicta reiciendis eos nisi error. Asperiores, officia eveniet alias illo voluptatum natus ipsa nobis suscipit est animi cumque vel molestias facilis quis ut quae, ratione distinctio impedit?</p>
    </div>
  );
};

export default Tokenomics;
