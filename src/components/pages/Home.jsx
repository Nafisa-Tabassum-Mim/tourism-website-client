import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TourismSection from "../addTouristPage/TourismSection";
import Section1 from "./Section1";
import Section2 from "./Section2";

const Home = () => {

    const tourisms = useLoaderData()


    return (
        <div>
            <Banner></Banner>

            <section className="mt-12 md:mt-24 mb-24">
                <div>
                    <h3 className="text-3xl font-bold text-center ">  Our tourisms</h3>
                    <p className="text-xl mx-8 text-center mb-12 mt-2"> You can find your dream resort where you can live and enjoy the beautiful atmosphere. It's for your cozy vacation</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4">
                    {
                        tourisms.slice(0, 6).map(tourism => <TourismSection key={tourism._id} tourism={tourism}></TourismSection>)
                    }
                </div>
            </section >
            <Section1></Section1>
            <Section2></Section2>
        </div>
    );
};

export default Home;