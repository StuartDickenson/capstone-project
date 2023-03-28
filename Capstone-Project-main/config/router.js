import express from 'express'
import carbonController from '../controllers/carbonController.js'
const Router = express.Router()
Router.route('/footprint')
  .get(carbonController.getAllFootprint)
  .post(carbonController.createFootprint)
Router.route('/footprint/:id')
  .get(carbonController.getFootprint)
  .put(carbonController.updateFootprint)
  .delete(carbonController.deleteFootprint)
export default Router
