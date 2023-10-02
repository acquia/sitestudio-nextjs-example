import RenderComponent, {getFieldValue} from "./RenderComponent";

export default function Header( props ) {
    const {field_data, children} = props;

    return <div>
        <h1>{getFieldValue(field_data, 'recipe-name')}</h1>
        <h5>By {getFieldValue(field_data, 'author')} </h5>
        {Array.isArray(children) &&  children.map((child) => (
            Array.isArray(child.data) && child.data.map((childField)=>(
                <RenderComponent component={childField} />
            ))
        ))}
        <p>{getFieldValue(field_data, 'intro-text')}</p>
    </div>;
}