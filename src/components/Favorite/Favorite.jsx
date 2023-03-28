import {HeartOutlined, HeartFilled} from "@ant-design/icons";
import {Fragment, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export const Favorite = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {},[])

    const handleAddToFavorite = () => {

    }

    const handleRemoveFromFavorite = () => {

    }

    if (props.rels[0].fav) {
        return (
            <Fragment>
                <HeartFilled/>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <HeartOutlined/>
            </Fragment>
        )
    }
}