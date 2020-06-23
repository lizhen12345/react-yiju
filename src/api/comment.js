import base from "./base"
import { getData } from "../utils/http"

const comments = {
    commentsData(id){
        return getData(base.comment+"?id="+id);
    }
}

export default comments;