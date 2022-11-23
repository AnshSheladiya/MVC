

function makeResponse (s, sts, m, d, t) {
    return {success: s, status: sts, msg: m,  result: d , token: t};
}

function makeErrorResponse (msg) {
    return {success: false, status: 501, msg: "SERVER ERROR",  err: msg ,};
}

module.exports = { makeResponse, makeErrorResponse };