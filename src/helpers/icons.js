import {
    faTrash, 
    faSignOutAlt, 
    faEdit, 
    faSpinner, 
    faPlus,
    faPhone,
    faEnvelope,
    faMapMarkedAlt,
    faLock,
    faSignInAlt,
    faUserPlus

} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faSpinner, 
        faPlus, 
        faPhone,
        faEnvelope,
        faMapMarkedAlt,
        faLock,
        faSignInAlt,
        faUserPlus
    );
};

export default Icons;