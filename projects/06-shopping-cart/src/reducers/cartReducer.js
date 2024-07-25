export function cartReducer(state, action) {
  const CART_ACTION_TYPES = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    CLEAR_CART: "CLEAR_CART",
  };
  const { type: actionType, product: actionProduct } = action;

  // action specific state updater
  // get this from state in cart context
  // return newState, dont set it
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_TO_CART: {
      const productIndexInCart = state.findIndex((item) => item.id === actionProduct.id);
      // Product is not in the cart
      if (productIndexInCart === -1) {
        return [
          ...state,
          {
            ...actionProduct,
            quantity: 1,
          },
        ];
      }

      // Product is in cart
      return [
        ...state.slice(0, productIndexInCart),
        {
          ...actionProduct,
          quantity: state[productIndexInCart].quantity + 1,
        },
        ...state.slice(productIndexInCart + 1),
      ];
    }

    case CART_ACTION_TYPES.REMOVE_FROM_CART: {
      return state.filter((item) => item.id !== actionProduct.id);
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      return [];
    }
  }
}
