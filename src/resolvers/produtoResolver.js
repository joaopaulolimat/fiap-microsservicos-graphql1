const Produto = require("../models/Produto");
const produtoResolver = {
  Query: {
    async produtos() {
      return await Produto.find();
    },
    async produto(_, { id }) {
      return await Produto.findById(id);
    },
  },
  Mutation: {
    createProduto(_, { produto }) {
      const newProduto = new Produto(produto);
      return newProduto.save();
    },
    async updateProduto(_, { id, produto }) {
      return await Produto.findByIdAndUpdate(id, produto, { new: true });
    },
    async deleteProduto(_, { id }) {
      return await Produto.findOneAndDelete(id);
    },
  },
};
module.exports = produtoResolver;
