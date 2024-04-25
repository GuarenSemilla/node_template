import Router from 'koa-router'
import eventos from './event/event'
const router = new Router()


router.post('/api/user/:tiempo', eventos.threshold)
export default router
