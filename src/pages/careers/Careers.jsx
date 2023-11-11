import { Link, useLoaderData } from 'react-router-dom';

export default function Careers() {
    const careers = useLoaderData();
    return (
        <div className='careers'>
            {careers.map((career) => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    );
}

// loader function
export const careersLoader = async () => {
    const res = await fetch('https://careers-5f87f-default-rtdb.europe-west1.firebasedatabase.app/careers/.json');

    if (!res.ok) {
        throw Error('Could not fetch the list of careers.');
    }

    return res.json();
};
