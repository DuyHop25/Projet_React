import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, editItem } from "../redux/slices/shoppingCart";

const useShopping = () => {
  const shoppingCart = useSelector((state) => state.shopping);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item.ticket));
  };

  const handleRemoveItem = (id) => {
    // Dispatch the removeItem action with the item ID to remove it from the shopping cart
    dispatch(removeItem(id));
  };

  const handleEditItem = (id, updatedItem) => {
    // Dispatch the editItem action with the item ID and updated item data
    dispatch(editItem({ id, updatedItem }));
  };

  return { shoppingCart, handleAddItem, handleRemoveItem, handleEditItem };
};

export default useShopping;
