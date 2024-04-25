import sandia from '../../actions/event/event'

exports.threshold = (ctx) => {
    console.log(ctx.query.tiempo)
    ctx.status = 200
    ctx.body = {status: "OK", message: 'Epic'}
    console.log(ctx.query.tiempo)
    ctx =sandia.limpiador(ctx) 
    return ctx
}

