// add product to user's cart

const addToCart = async (req, res) => {

  try {

    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1
      }

    } else {
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }
    await userModel.findByIdAndUpdate(userId, { cartData: cartData }, { new: true });
    res.json({ success: true, message: "item added to cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error adding item to cart" });


  }


}


// update cart

const updateCart = async (req, res) => {


}


// get  user's cart

const getCart = async (req, res) => {


}


export { addToCart, updateCart, getCart };