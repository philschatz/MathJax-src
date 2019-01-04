require('./lib/tex.js');
const selectOptionsFromKeys = require('../../../../../mathjax3/util/Options.js').selectOptionsFromKeys;

if (MathJax.startup) {
    const TeXFont = MathJax._.output.chtml.fonts.tex_ts.TeXFont;
    const options = selectOptionsFromKeys(MathJax.config.chtml || {}, TeXFont.OPTIONS);
    MathJax.config.chtml = {font: new TeXFont(options)};
}
