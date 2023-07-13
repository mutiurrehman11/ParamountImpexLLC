import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/Wrapper";
import submenu from "@/components/Submenu";
// import ProductCard from "@/components/ProductCard";
import { fetchDataFromApi } from "@/utils/api";
import Submenu from "@/components/Submenu";
import CTA from "@/components/CTA";


export default function Home({ products }) {

    return <main>
        <HeroBanner />
        <Wrapper>
                {/* heading and paragaph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Paramount Impex LLC
                    </div>
                    <div className="text-md md:text-xl">
                        Shop With Us and Discover the Beauty of Accessibility and Freedom.
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">    
                    {
                    products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}

                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> 
                </div>*/}
                {/* products grid end */}
                <Submenu></Submenu>
                <CTA/>
                <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
                <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
                    More Than 3 Years We Provide Service <br className="md:block hidden" />
                    in Sales Industry
                </h1>
                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
                        <p className="text-3xl font-semibold text-gray-800">200+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Products Listed</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-full bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
                        <p className="text-3xl font-semibold text-gray-800">100+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Active Buyers</p>
                    </div>
                    <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
                        <p className="text-3xl font-semibold text-gray-800">15K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently Sold Productss</p>
                    </div>
                </div>
            </div>
            </Wrapper>
    </main>;
}

export async function getStaticProps() {
    const products = await fetchDataFromApi("/api/products?populate=*");

    return {
        props: { products },
    };
}
