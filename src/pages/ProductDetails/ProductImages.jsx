

const ProductImages = ({images}) => {
    return (
        <div className="hidden md:grid grid-cols-2 gap-5 w-full lg:w-[60%] h-fit">
        {
        images?.slice(0,4).map((image) => 
            <div key={image?._id} className="bg-[#F6F6F6] rounded-lg h-[310px] lg:h-[415px] overflow-hidden font-Montserrat relative max-w-[370px]">
        <img
          src={image?.url}
          alt="Item Image"
          className="w-full h-full object-cover"
        />
      </div>
        )
        }
      </div>
    );
};

export default ProductImages;