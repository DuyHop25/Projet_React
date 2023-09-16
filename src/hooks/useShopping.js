import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/shoppingCart";

const useShopping = () => {
    const shoppingCart = useSelector((state) => state.shopping);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item.ticket));
    };

    const handleRemoveItem = () => {};

    const handleEditItem = () => {};

    return { shoppingCart , handleAddItem}
}

export default useShopping;