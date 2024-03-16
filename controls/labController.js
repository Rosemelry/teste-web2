
const dados = require('../models/labModel');
const fs = require('fs');
const pdfDoc = require('pdfkit');
let cont=0

function getLab(req, res){
    return res.status(200).json(dados);
}

function postLab (req, res){
    const novoLaboratorio = req.body;
    dados.push(novoLaboratorio);
    res.status(201).send('Laboratório Cadastrado!');
}

function gerarRelatorio (req, res){
    try {
        const doc = new pdfDoc();
        doc.pipe(fs.createWriteStream(`relatorio_pdf${cont}.pdf`));
        doc.font('Helvetica-Bold').fontSize(15).text('Relatório de Laboratórios', { align: 'center' }).moveDown(2);

        dados.forEach((value, index) => {
            doc.font('Helvetica').fontSize(13).text(`Nome: ${value.nome} Capacidade: ${value.capacidade}  Descrição: ${value.descrição}`).moveDown(1);
        });
        doc.end();

        res.download(`relatorio_pdf${cont}.pdf`, `relatorio_pdf${cont}.pdf`, (err) => {
            if (err) {
                console.error('Erro ao Gerar Relatório:', err);
                return res.json('Download ConcluÍdo com Sucesso');
            } else {
                console.log('Relatório Gerado com Sucesso.');
                return res.json('Download Concluído com Sucesso');
            }
        });

        cont++

    } catch (error) {
        console.error('Erro ao Gerar Relatório:', error); 
    }
}

module.exports = {
    getLab,
    postLab,
    gerarRelatorio
}