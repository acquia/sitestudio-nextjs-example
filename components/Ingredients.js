import {getFieldValue} from "./RenderComponent";
export default function Ingredients( props ) {
    const {field_data} = props;
    const ingredients = field_data[0].data.children;

    return <div>
        <h4>Ingredients:</h4>
        <ul>
            {ingredients.map((item, index) => (
                <li key={index}>{getFieldValue(item, 'ingredient')}: {getFieldValue(item, 'ingredient-quantity')}</li>
            ))}
        </ul>
        <hr/>
    </div>;
}
