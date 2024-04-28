import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import TourismSection from "../addTouristPage/TourismSection";

const Home = () => {

    // const loadedCoffees = useLoaderData();
    // const [coffees, setCoffees] = ustourism(loadedCoffees);

    const tourisms = useLoaderData()


    return (
        <div>
            <Banner></Banner>

            <section className="mt-12 md:mt-24 mb-24">
                <div>
                    <h3 className="text-3xl font-bold text-center ">  Our tourisms</h3>
                    <p className="text-xl mx-8 text-center mb-12 mt-2"> You can find your dream resort where you can live and enjoy the beautiful atmosphere. Buy or Rent it for your cozy vacation</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-4">
                    {
                        tourisms.map(tourism => <TourismSection key={tourism._id} tourism={tourism}></TourismSection>)
                    }
                </div>
            </section >

        </div>
    );
};

export default Home;