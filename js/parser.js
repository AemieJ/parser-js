let initialParser = (options) => {
    let token = [],
        type = [],
        // Writing a lexer
        parse = () => {
            let data = options.input
            .input
            .toString()
            .split(""),
            len = data.length,
            start = 0,
            commentBlock = () => {

            };
            for (start = 0; start < len; ++start) {
                if (data[start] === "/" && data[start+1] === "*") {
                    commentBlock();
                }
            }
        };
};

