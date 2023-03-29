import {HeartOutlined, HeartFilled} from "@ant-design/icons";
import {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sampleRelation} from "../../store/Actions/relationActions";

export const Favorite = (props) => {
    const state = useSelector(state => state.pack.samples[props.index])
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

    //if (props.rels[0]?.fav) {
    if (state.rels[0]?.fav) {
        console.log('TRUE')
        return (
            <Fragment>
                <HeartFilled onClick={() => handleRemoveFromFavorite(props.id)}/>
            </Fragment>
        )
    } else {
        console.log('FALSE')
        return (
            <Fragment>
                <HeartOutlined onClick={() => handleAddToFavorite(props.id)}/>
            </Fragment>
        )
    }
}