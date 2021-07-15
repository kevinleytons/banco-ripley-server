const axios = require('axios');

const db = require('../models');

function obtenerBancos(req, res) {
    let url = 'https://bast.dev/api/banks.php'
    axios.get( url ).then( resp => {
        res.json({ ok: true, ...resp.data })
    }).catch( error => {
        res.json({ ok: false, error })
    })
}

async function obtenerDestinatarios(req, res) {
    try {
        let destinatarios = await db.Destinatario.findAll();
        res.json( { ok: true, destinatarios } );
    } catch ( error ) {
        res.json( { ok: false, error } );
    }
}

async function registrarDestinatario(req, res) {
    try {
        let destinatario = await db.Destinatario.create({
            rut: req.body.rut,
            nombre: req.body.nombre,
            correo: req.body.correo,
            telefono: req.body.telefono,
            banco: req.body.banco.name,
            tipo_cuenta: req.body.tipoCuenta,
            numero_cuenta: req.body.numeroCuenta
        });
        res.json( { ok: true, destinatario } );
    } catch ( error ) {
        res.json( { ok: false, error } );
    }
}

async function registrarTransferencia(req, res) {
    try {
        let transferencia = await db.Transferencia.create({
            monto: req.body.monto.replace(/\D/g,''),
            fecha: req.body.fecha,
            destinatario_id: req.body.destinatario_id
        });
        res.json( { ok: true, transferencia } );
    } catch ( error ) {
        res.json( { ok: false, error } );
    }
}

async function obtenerHistorial(req, res) {
    const transferencias = await db.Transferencia.findAll({ include: db.Destinatario });
    try {
        res.json({ ok: true, transferencias });
    } catch( error ) {
        res.json({ ok: false, error });
    }
}

module.exports = {
    obtenerBancos,
    obtenerDestinatarios,
    registrarDestinatario,
    registrarTransferencia,
    obtenerHistorial
}