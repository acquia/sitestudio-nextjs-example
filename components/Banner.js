import {getFieldValue} from "./RenderComponent";
import Image from "next/image";
import styles from './Banner.module.css';

export default function Banner( props ) {
    const {field_data} = props;
    const imageUrl = getFieldValue(field_data, 'banner-image').replace('public://', 'http://jsonapi.ac-uat.sitestudio.acquia.com/sites/default/files/')
    return <div>
        <div className={styles.container} style={{
            backgroundColor: getFieldValue(field_data, 'banner-color').value.rgba
        }}>
            <Image src={imageUrl} alt={'Banner image'} width='594' height='400' />
            {getFieldValue(field_data, 'banner-text')}
        </div>
    </div>;
}
