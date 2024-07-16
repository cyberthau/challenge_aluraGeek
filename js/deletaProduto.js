// DELETE PRODUCT

import { connectApi } from "./connectApi.js";

async function deletaProduto(productId) {
    try {
        await connectApi.deletaProduto(productId);
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
    }

    window.location.reload(true);
}

export { deletaProduto };