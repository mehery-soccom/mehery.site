const { marked } = require("marked");
const fm = require("front-matter");
const { createDirectives, presetDirectiveConfigs } = require("marked-directive");

function preprocess(markdown) {
    const { attributes, body } = fm(markdown);
    for (const prop in attributes) {
        if (prop in this.options) {
            this.options[prop] = attributes[prop];
        }
    }
    return body;
}
marked.use({ hooks: { preprocess } });

/*
const walkTokens = token => {
    if (token.attrs) { // token.type includes 'directiveContainer'
        let str = Object.entries(token.attrs).reduce((acc, [k, v], i) => {
            return acc.concat(` ${k}="${v}"`).trim();
        }, "");
        token.attrs = str;
    }
    return token;
};
marked.use({ walkTokens });

const tokenizer = {
    html(src) {
        // return false to use original codespan tokenizer
        return false;
    }
};
marked.use({ tokenizer });
*/

const CustomDirective = {
    level: "container", // 'container', 'block', or 'inline'.
    marker: "::::", // marker string that identifies the directive in the source text.
    tag: "section", // An optional HTML tag that the directive should be rendered as. If not provided, the default tag is used based on the directive level.
    renderer(token) {
        return false;
    }
};
marked.use(
    createDirectives([
        ...presetDirectiveConfigs,
        { level: "container", marker: "::::" },
        { level: "container", marker: ":::::" }
    ])
);

const MD = {
    fm,
    marked,
    parseTokens(tokens) {
        /**
         *
         */
        let html = null;
        if (!(Array.isArray(tokens) && tokens.length)) return html;
        try {
            console.log("parseTokens > entry", { tokens });
            html = marked.parser(tokens);
        } catch (error) {
            console.error("parseTokens", error);
        } finally {
            return html;
        }
    }
};

if (module) module.exports = MD;
