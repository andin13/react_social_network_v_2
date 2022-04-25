import { IUserItem } from '../commonTypes/IUserItem';

export const updateObjectInArray = (
  items: Array<IUserItem>,
  itemId: number,
  objPropName: 'id',
  newObjProps: {
    followed: boolean;
  },
) => items.map((u) => {
  if (u[objPropName] === itemId) {
    return { ...u, ...newObjProps };
  }
  return u;
});
