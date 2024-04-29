
import { MdStarBorder } from "react-icons/md";


const Section2 = () => {
    return (
        <div>
             <div className="text-center my-4 mx-4 md:mx-24">
                <h3 className="text-4xl font-semibold mb-4">Review about our website</h3>
                <p className="text-xl ">We understand the importance of providing timely and informative responses to inquiries and feedback, especially in the tourism industry where customer satisfaction is paramount. Our team is dedicated to promptly addressing any concerns or queries raised by visitors, ensuring that their experience on our tourism page is both enjoyable and rewarding.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center m-auto">
                <div className="m-8">
                    <div className="w-96 bg-base-100 shadow-xl p-8 my-4">
                        <div className="font-bold text-xl mb-2">Excellent Service</div>
                        <p className="text-gray-700 text-base">
                            I had a great experience with this company. The service was exceptional, and the staff was very friendly and helpful. They went above and beyond to meet my needs, and I would highly recommend them to anyone looking for top-notch service.
                        </p>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#CustomerService</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#FriendlyStaff</span>
                        </div>

                        <div className="flex text-4xl justify-around ">
                            <MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" />
                            <MdStarBorder className="text-yellow-400" />
                            <MdStarBorder />
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="w-96 bg-base-100 shadow-xl p-8 my-4">
                        <div className="font-bold text-xl mb-2">Highly Recommend</div>
                        <p className="text-gray-700 text-base">

                            I am extremely satisfied with the tour that I purchased from this company. It exceeded my expectations in terms of quality . The ordering process was seamless, and the service was prompt. I would definitely took tour from them again.
                        </p>
                        <div className="px-6 py-4">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#WebsiteQuality</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#PromptService</span>
                        </div>
                        <div className="flex text-4xl justify-around ">
                            <MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" />
                            <MdStarBorder className="text-yellow-400" />
                            <MdStarBorder />
                        </div>
                    </div>
                </div>

                <div className="m-8">
                    <div className="w-96 bg-base-100 shadow-xl p-8 my-4">
                        <div className="font-bold text-xl mb-2">Great Experience</div>
                        <p className="text-gray-700 text-base">
                            I recently visited their tour and eat from their restaurant and had a wonderful dining experience. The food was delicious, and the atmosphere was cozy. The staff was attentive and provided excellent service. I will definitely be coming back!
                        </p>
                        <div className="px-6 py-6">
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#GreatExperience</span>
                            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#DeliciousFood</span>
                        </div>
                        <div className="flex text-4xl justify-around ">
                            <MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" /><MdStarBorder className="text-yellow-400" />
                            <MdStarBorder className="text-yellow-400" />
                            <MdStarBorder className="text-yellow-400" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Section2;