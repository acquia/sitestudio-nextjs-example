import RenderComponent from "./RenderComponent";
export default function CanvasRenderer(props) {
    const {canvasData} = props;

    return (
        <div className="canvasRenderer">
            {canvasData.map((child, index) => (
                <RenderComponent key={index} component={child} />
            ))}
        </div>
    )
}