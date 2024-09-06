import { IMAGES } from '../../assets';

const ProductImages = () => {
    const productImages = [IMAGES.child1, IMAGES.child2, IMAGES.child3, IMAGES.child4]
    return (
        <div className="hidden md:grid grid-cols-2 gap-5 w-full lg:w-[60%] h-fit">
        {
        productImages.map((image, index) => 
            <div key={index} className="bg-[#F6F6F6] rounded-lg h-[310px] lg:h-[415px] overflow-hidden font-Montserrat relative max-w-[370px]">
        <img
          src={image}
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