// Full Documentation - https://docs.turbo360.co
const turbo = require('turbo360')({ site_id: process.env.TURBO_APP_ID })
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const router = vertex.router()
const controllers = require('../controllers');

router.get('/:resource', (req, res) => {
	const resource = req.params.resource;
	const controller = controllers[resource];
	const filters = req.query;

	if( controller == null ){
		res.json({
			confirmation: 'fail'
		})
		return;
	}
	controller.get(filters)
	.then( data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	}).catch( error => {
		res.json({
			confirmation: 'error',
			message: error.message
		})
	})

})
router.get('/:resource/:id', (req, res) => {
	const resource = req.params.resource;
	const controller = controllers[resource];
	const id = req.params.id;

	if( controller == null ){
		res.json({
			confirmation: 'fail'
		})
		return;
	}
	controller.getById(id)
	.then( data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	}).catch( error => {
		res.json({
			confirmation: 'error',
			message: error.message
		})
	})
})
router.post('/:resource', (req, res) => {
	const resource = req.params.resource;
	const controller = controllers[resource];
	const body = req.body;

	if( controller == null ){
		res.json({
			confirmation: 'fail'
		})
		return;
	}
	controller.post(body)
	.then( data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	}).catch( error => {
		res.json({
			confirmation: 'error',
			message: error.message
		})
	})

})
router.put('/:resource/:id', (req, res) => {
	const resource = req.params.resource;
	const controller = controllers[resource];
	const id = req.params.id;
	const body = req.body;
	if( controller == null ){
		res.json({
			confirmation: 'fail'
		})
		return;
	}
	controller.put(id, body)
	.then( data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	}).catch( error => {
		res.json({
			confirmation: 'error',
			message: error.message
		})
	})
})
router.delete('/:resource/:id', (req, res) => {
	const resource = req.params.resource;
	const controller = controllers[resource];
	const id = req.params.id;

	if( controller == null ){
		res.json({
			confirmation: 'fail'
		})
		return;
	}
	controller.deleteById(id)
	.then( data => {
		res.json({
			confirmation: 'success',
			data: data
		})
	}).catch( error => {
		res.json({
			confirmation: 'error',
			message: error.message
		})
	})
})
module.exports = router
