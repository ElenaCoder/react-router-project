// import { useParams } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export default function CareerDetails() {
    // const { id } = useParams();

    const career = useLoaderData();

    return (
        <div className='career-details'>
            <h2>Career Details for {career.title}</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className='details'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum dolor assumenda, quas odio optio, distinctio ab sunt
                    unde incidunt ipsum omnis amet magnam accusantium aut!
                    Excepturi, cupiditate iusto!
                </p>
            </div>
        </div>
    );
}

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch(`https://careers-5f87f-default-rtdb.europe-west1.firebasedatabase.app/careers/${id-1}.json`);

    if (!res.ok) {
        throw Error('Career not found.');
    }

    return res.json();
};
