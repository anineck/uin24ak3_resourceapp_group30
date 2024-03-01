import { resources } from '../assets/ressurser';

const Resources = ({ category }) => {
    const filtrerResources = resources.filter(resource => resource.category === category)

    return (
        <div className='content'>
            <h2>{category.toUpperCase()} </h2>
            <ul className='resource-links'>
                {filtrerResources.map((resource, index) => (
                    <li key={index}>
                        <a href={resource.url} target="_blank">{resource.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Resources;