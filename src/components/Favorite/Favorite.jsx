import {HeartOutlined, HeartFilled} from "@ant-design/icons";
import {Fragment} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sampleRelation} from "../../store/Actions/relationActions";

export const Favorite = (props) => {
    const state = useSelector(state => state.pack.samples[props.index])
    const dispatch = useDispatch()

    const handleChangeFavorite = (data) => {
        return dispatch(sampleRelation({
            request: {
                sampleId: props.id,
                ...data
            },
            sampleIndex: props.index
        }))
    }

    /*const handleRemoveFromFavorite = (data) => {
        return dispatch(sampleRelation({
            sampleId: data,
            fav: false
        }))
    }*/

    if (state.rels[0]?.isFavorite) {
        return (
            <Fragment>
                <HeartFilled onClick={() => handleChangeFavorite({isFavorite: false})}/>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <HeartOutlined onClick={() => handleChangeFavorite({isFavorite: true})}/>
            </Fragment>
        )
    }
}