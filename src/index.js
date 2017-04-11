import vnode from '../libs/vnode';


function isPrimitive(s) {
    return typeof s === 'string' || typeof s === 'number';
}


function isObject(val) {
    return val != null && typeof val === 'object' && Array.isArray(val) === false;
};


function addNS(data, children, sel) {
    data.ns = 'http://www.w3.org/2000/svg';
    if (sel !== 'foreignObject' && children !== undefined) {
        for (var i = 0; i < children.length; ++i) {
            var childData = children[i].data;
            if (childData !== undefined) {
                addNS(childData, children[i].children, children[i].sel);
            }
        }
    }
}

const assembly = (tagName) => {
    return function inner(props, b) {
        let sel = `${tagName}`;
        let selectorName = tagName;
        let d = {};


        if (isObject(props)) {
            if (props.hasOwnProperty('id')) {
                selectorName += '#' + props.id;
            }
            if (props.hasOwnProperty('class') || props.hasOwnProperty('_')) {
                selectorName += '.' + props.class;
            }

            for (let prop in props) {
                if (prop !== 'class' && prop !== 'id' && prop !== '_') {
                    if (prop === 'event') {
                        d.on = props.event;
                    } else {
                        d[prop] = props[prop];
                    }
                }
            }

        } else {
            throw new Error('Props is not an object')
        }

        var children, text, i;
        if (b !== undefined) {
            if (Array.isArray(b)) {
                children = b;
            } else if (isPrimitive(b)) {
                text = b;
            } else if (b && b.sel) {
                children = [b];
            }
        }



        if (Array.isArray(children)) {
            for (i = 0; i < children.length; ++i) {
                if (isPrimitive(children[i]))
                    children[i] = vnode(undefined, undefined, undefined, children[i]);
            }
        }
        if (selectorName[0] === 's' && selectorName[1] === 'v' && selectorName[2] === 'g' &&
            (selectorName.length === 3 || selectorName[3] === '.' || selectorName[3] === '#')) {
            addNS(d, children, selectorName);
        }

        return vnode(selectorName, d, children, text, undefined);
    }
}


export const a = assembly('a');
export const abbr = assembly('abbr');
export const address = assembly('address');
export const area = assembly('area');
export const article = assembly('article');
export const aside = assembly('aside');
export const audio = assembly('audio');
export const b = assembly('b');
export const base = assembly('base');
export const bdi = assembly('bdi');
export const bdo = assembly('bdo');
export const blockquote = assembly('blockquote');
export const body = assembly('body');
export const br = assembly('br');
export const button = assembly('button');
export const canvas = assembly('canvas');
export const caption = assembly('caption');
export const cite = assembly('cite');
export const code = assembly('code');
export const col = assembly('col');
export const colgroup = assembly('colgroup');
export const command = assembly('command');
export const dd = assembly('dd');
export const del = assembly('del');
export const dfn = assembly('dfn');
export const div = assembly('DIV');
export const dl = assembly('dl');
export const doctype = assembly('doctype');
export const dt = assembly('dt');
export const em = assembly('em');
export const embed = assembly('embed');
export const fieldset = assembly('fieldset');
export const figcaption = assembly('figcaption');
export const figure = assembly('figure');
export const footer = assembly('footer');
export const form = assembly('form');
export const h1 = assembly('h1');
export const h2 = assembly('h2');
export const h3 = assembly('h3');
export const h4 = assembly('h4');
export const h5 = assembly('h5');
export const h6 = assembly('h6');
export const header = assembly('header');
export const hgroup = assembly('hgroup');
export const hr = assembly('hr');
export const html = assembly('html');
export const i = assembly('i');
export const iframe = assembly('iframe');
export const img = assembly('img');
export const input = assembly('input');
export const ins = assembly('ins');
export const kbd = assembly('kbd');
export const keygen = assembly('keygen');
export const label = assembly('label');
export const legend = assembly('legend');
export const li = assembly('li');
export const link = assembly('link');
export const map = assembly('map');
export const mark = assembly('mark');
export const menu = assembly('menu');
export const meta = assembly('meta');
export const nav = assembly('nav');
export const noscript = assembly('noscript');
export const object = assembly('object');
export const ol = assembly('ol');
export const optgroup = assembly('optgroup');
export const option = assembly('option');
export const p = assembly('p');
export const param = assembly('param');
export const pre = assembly('pre');
export const progress = assembly('progress');
export const q = assembly('q');
export const rp = assembly('rp');
export const rt = assembly('rt');
export const ruby = assembly('ruby');
export const s = assembly('s');
export const samp = assembly('samp');
export const script = assembly('script');
export const section = assembly('section');
export const select = assembly('select');
export const small = assembly('small');
export const source = assembly('source');
export const span = assembly('span');
export const strong = assembly('strong');
export const style = assembly('style');
export const sub = assembly('sub');
export const sup = assembly('sup');
export const table = assembly('table');
export const tbody = assembly('tbody');
export const td = assembly('td');
export const textarea = assembly('textarea');
export const tfoot = assembly('tfoot');
export const th = assembly('th');
export const thead = assembly('thead');
export const title = assembly('title');
export const tr = assembly('tr');
export const ul = assembly('ul');
export const v = assembly('var');
export const video = assembly('video');
