import {HeartOutlined, HeartFilled} from "@ant-design/icons";
import {Fragment} from "react";
import {useDispatch} from "react-redux";
import {sampleRelation} from "../../store/Actions/relationActions";

export const Favorite = (props) => {
    const dispatch = useDispatch()

    const handleAddToFavorite = (data) => {
        return dispatch(sampleRelation({
            sampleId: data,
            fav: true
        }))
    }

    const handleRemoveFromFavorite = (data) => {
        return dispatch(sampleRelation({
            sampleId: data,
            fav: false
        }))
    }

    if (props.rels[0]?.fav) {
        return (
            <Fragment>
                <HeartFilled onClick={() => handleRemoveFromFavorite(props.id)}/>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <HeartOutlined onClick={() => handleAddToFavorite(props.id)}/>
            </Fragment>
        )
    }
}