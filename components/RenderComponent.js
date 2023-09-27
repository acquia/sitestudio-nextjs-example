import Header from "./Header";
import Ingredients from "./Ingredients";
import Method from "./Method";
import Banner from "./Banner";

export function getFieldValue(field_data, machine_name) {
    const field = field_data.find(field=>field.machine_name === machine_name);

    if(field) {
        return field.data.value;
    }
}

export default function RenderComponent({ component }) {
    switch (component.data.uid) {
        case 'cpt_recipe_header':
            return <Header {...component.data} >{component.data.children}</Header>;
        case 'cpt_recipe_ingredients':
            return <Ingredients {...component.data} />;
        case 'cpt_recipe_method':
            return <Method {...component.data} />;
        case 'cpt_recipe_banner':
            return <Banner {...component.data} />;
        // Add more cases for other component types as needed
        default:
            return null;
    }
};