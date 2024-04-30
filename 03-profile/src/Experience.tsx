import {FC} from 'react';

interface prop{
    title: string;
    description: string;
    date: string;
}

const Experience: FC<prop> = ({title, description, date}) =>{
    return (
        <div className='ml-10'>
            <div className='flex justify-between'>
                <h1>{title}</h1>       <h1 className=''>{date}</h1>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default Experience;