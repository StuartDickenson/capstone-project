import Footprint from '../models/footprint.js'
async function getAllFootprint(_req, res, next) {
  try {
    const footprint = await Footprint.find()
    return res.status(200).json(footprint)
  } catch (err) {
    next(err)
  }
}
async function createFootprint(req, res, next) {
  try {
    const newFootprint = await Footprint.create(req.body)
    return res.status(201).send(newFootprint)
  } catch (err) {
    next(err)
  }
}
async function getFootprint(req, res, next) {
  const { id } = req.params
  try {
    const footprint = await Footprint.findById(id)
    res.status(200).send(footprint)
  } catch (err) {
    next(err)
  }
}
async function deleteFootprint(req, res, next) {
  const { id } = req.params
  try {
    const footprint = await Footprint.findByIdAndDelete(id)
    if (!footprint) {
      return res.status(404).send({ message: 'Footprint does not exist' })
    }
    return res.status(200).json(footprint)
  } catch (err) {
    next(err)
  }
}
async function updateFootprint(req, res, next) {
  const { id } = req.params
  const { body } = req
  try {
    const footprint = await Footprint.findById(id)
    if (!footprint) {
      return res.send({ message: 'No Footprint found' })
    }
    footprint.set(req.body)
    const savedFootprint = footprint.save()
    res.status(200).json(footprint)
  } catch (err) {
    next()
  }
}
export default {
  getAllFootprint,
  createFootprint,
  getFootprint,
  deleteFootprint,
  updateFootprint,
}
