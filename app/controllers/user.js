const User = require('../models/Users.js')

exports.register = async (req, res) => {
  const { name } = req.body

  const filter = await User.findOne({ name })

  if (!filter) {
    const user = new User({ ...req.body })
    await user.save()

    return res.send(user)
  }
  else {
    res.status(400).send({ error: 'User not create.' })
  }
}

exports.getAll = async (req, res) => {
 
  const fill = await User.find()
  if(res.status(200).send){
    return res.send(fill)
  }
  else {
    res.status(400).send({ error: 'user not found.' })
  }
}

exports.delete = async (req, res) => {
  try {
    const {_id} = req.params
    await User.findOneAndDelete({_id: _id});
    res.send({
      status: 200,
      message: "deletado com sucesso"
    });
  } catch (dadosDoErro) {
    return res.status(400).send({
      message: "Falha ao deletar",
      Error: dadosDoErro.message,
    });
  }
}