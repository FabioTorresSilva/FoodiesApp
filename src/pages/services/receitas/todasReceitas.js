const { findReceitas } = require("@/pages/data/receitas/todasReceitas")

async function procurarReceitas() {
    const res = await findReceitas()
    return res
}

module.exports = { procurarReceitas }

