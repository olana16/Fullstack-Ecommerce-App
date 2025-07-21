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

  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = userData.cartData;

    cartData[itemId][size] = quantity;
    await userModel.findByIdAndUpdate(userId, { cartData: cartData });
    res.json({ success: true, message: "cart updated successfully" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error updating cart" });
  }

}





// get  user's cart

const getCart = async (req, res) => {


  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }
    let cartData = userData.cartData;
    res.json({ success: true, cartData });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "error fetching cart" });

  }

}


export { addToCart, updateCart, getCart };