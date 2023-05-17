export default function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      const { text } = action;
      return [...items, { item: text, id: Date.now(), isChecked: false }];
    }
    case 'deleted': {
      const { id } = action;
      return items.filter((item) => item.id != id);
    }
    case 'checked': {
      const { id, isChecked } = action;

      return items.map((item) => {
        if (item.id == id) {
          return { ...item, isChecked };
        } else return item;
      });
    }
    default: {
      throw Error(`알 수 없는 타입:${action.type}`);
    }
  }
}
