import {getFieldValue} from "./RenderComponent";

export default function Method( props ) {
    const {field_data} = props;

    return <div>
        <h4>Method:</h4>
        <div dangerouslySetInnerHTML={{__html: getFieldValue(field_data, 'method').text}}></div>
    </div>;
}
