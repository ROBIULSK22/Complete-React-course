let FoodItem = ({ Item }) => {
  return (
    <ul class="list-group">
        {Item.map((Item)=><li key = {Item} class="list-group-item">{Item}</li>
        )}
    </ul>
  );
};
export default FoodItem;
