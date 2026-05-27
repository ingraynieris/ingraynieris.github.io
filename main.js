var _0x4d2a = ['versiculo', 'innerText', '>> TODO LO PUEDO EN CRISTO QUE ME FORTALECE <<', 'getDate', 'getMonth', 'push', 'alert', 'SOLICITUD DE ACCESO:\nIngrese su llave de autorización:', 'modalCuentas', 'style', 'display', 'flex', 'ACCESO DENEGADO: Llave inválida o expirada.', 'clipboard', 'writeText', 'Número copiado: ', 'product-display', 'opacity', 'json', 'sort', 'random', 'slice', 'innerHTML', 'product-card', 'img', 'product-img', 'product-info', 'nombre', 'link', 'btn-amazon', '[ VER DETALLES ]', 'join', 'imeiField', 'value', 'length', 'Error: Se requiere un IMEI de 15 dígitos.', 'https://wa.me/18098647903?text=', '>> TICKET_SOLICITUD\n>> IMEI: ', '\n>> ESTADO: PENDIENTE', 'encodeURIComponent'];
(function(_0x5b3a8a, _0x4d2a1b) {
    var _0x3b1c6c = function(_0x4e6d42) {
        while (--_0x4e6d42) { _0x5b3a8a['push'](_0x5b3a8a['shift']()); }
    };
    _0x3b1c6c(++_0x4d2a1b);
}(_0x4d2a, 0x14e));

function validarAcceso() {
    const _0x1a2b3c = new Date();
    const _0x4d5e6f = _0x1a2b3c['getDate']();
    const _0x7a8b9c = _0x1a2b3c['getMonth']() + 0x1;
    const _0x1d2e3f = (_0x4d5e6f * 0x64) + (_0x7a8b9c * 0x32) + 0x7d;
    const _0x4a5b6c = prompt(_0x4d2a[0x7]);
    if (_0x4a5b6c == _0x1d2e3f) {
        document.getElementById(_0x4d2a[0x8])[_0x4d2a[0x9]][_0x4d2a[0xa]] = _0x4d2a[0xb];
    } else if (_0x4a5b6c !== null) {
        alert(_0x4d2a[0xc]);
    }
}

function copiarTexto(_0x5e6f7a) {
    navigator[_0x4d2a[0xd]][_0x4d2a[0xe]](_0x5e6f7a)['then'](() => {
        alert(_0x4d2a[0xf] + _0x5e6f7a);
    });
}

async function rotarProductos() {
    try {
        const _0x2a3b4c = await fetch('productos.json');
        const _0x5d6e7f = await _0x2a3b4c[_0x4d2a[0x12]]();
        const _0x8a9b0c = document.getElementById(_0x4d2a[0x10]);
        _0x8a9b0c[_0x4d2a[0x9]][_0x4d2a[0x11]] = '0';
        setTimeout(() => {
            const _0x1c2d3e = _0x5d6e7f[_0x4d2a[0x13]](() => 0.5 - Math[_0x4d2a[0x14]]())[_0x4d2a[0x15]](0x0, 0x3);
            _0x8a9b0c[_0x4d2a[0x16]] = _0x1c2d3e['map'](_0x4f5g6h => `
                <div class="${_0x4d2a[0x17]}">
                    <img src="${_0x4f5g6h[_0x4d2a[0x18]]}" class="${_0x4d2a[0x19]}">
                    <div class="${_0x4d2a[0x1a]}">
                        <div style="margin-bottom:5px;">${_0x4f5g6h[_0x4d2a[0x1b]]}</div>
                        <a href="${_0x4f5g6h[_0x4d2a[0x1c]]}" class="${_0x4d2a[0x1d]}" target="_blank">${_0x4d2a[0x1e]}</a>
                    </div>
                </div>
            `)[_0x4d2a[0x1f]]('');
            _0x8a9b0c[_0x4d2a[0x9]][_0x4d2a[0x11]] = '1';
        }, 0x12c);
    } catch (_0x9f0e1d) {}
}

function sendWhatsApp() {
    var _0x2b3c4d = document.getElementById(_0x4d2a[0x20])[_0x4d2a[0x21]];
    if (_0x2b3c4d[_0x4d2a[0x22]] < 0xf) {
        alert(_0x4d2a[0x23]);
        return;
    }
    window.location.href = _0x4d2a[0x24] + _0x4d2a[0x27](_0x4d2a[0x25] + _0x2b3c4d + _0x4d2a[0x26]);
}

setInterval(rotarProductos, 0x3a98);
rotarProductos();
document.getElementById(_0x4d2a[0x0])[_0x4d2a[0x1]] = _0x4d2a[0x2];
