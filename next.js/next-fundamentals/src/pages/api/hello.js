

export default function handler(req, res){
    res.status(200).json({name: 'Teste API',
    method: req.method  
})
}