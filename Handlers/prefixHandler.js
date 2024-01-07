async function loadPrefixs(client){
    const { loadFiles } = require("../Functions/fileLoader");
    const ascii = require("ascii-table");
    const table = new ascii().setHeading("Commands", "Status");

    await client.prefixs.clear();

    const Files = loadFiles("ComandosPrefixs");

    ;(await Files).forEach((file) => {
        const prefixs = require(file);
        client.prefixs.set(prefixs.name, prefixs);

        table.addRow(prefixs.name, "🟩");
    })

    return console.log(table.toString(), "\nComandos Prefix Cargados");
}

module.exports = { loadPrefixs };