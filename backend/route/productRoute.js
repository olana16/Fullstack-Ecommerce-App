import express from "express"
import { addProduct,listProduct,removeProduct,singleProduct } from "../controllers/productController.js"
import upload from "../middleware/multer.js"

const productRoute = express.Router()

productRoute.post('/add',upload.fields([{name:"image1", maxCount:1},
    {name:"image2", maxCount:1},
    {name:"image3", maxCount:1},
    {name:"image4", maxCount:1}
]),addProduct)
productRoute.post('/remove',removeProduct)
productRoute.post('/single',singleProduct)
productRoute.get('/',listProduct)

export default productRoute