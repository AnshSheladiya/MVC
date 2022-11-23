const path = require("path");

let getImgUrl = function( imgs ) {

        let imgpath = path.resolve('../../public/uploads/');
        let arr = [];

        imgs.forEach(img => {
            arr.push(`${imgpath}/${img}`)
        });
        return arr;
}

module.exports = getImgUrl