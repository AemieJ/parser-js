let initialParser = (options) => {
    let token = [],
        types = [],
        // Writing a lexer
        parse = () => {
            let data = options.input
            .input
            .toString()
            .split(""),
            len = data.length,
            start = 0,
            commentBlock = () => {
                let comment = [],
                    anotherStart = 0;
                for(anotherStart = 0; anotherStart < len; ++anotherStart) {
                    comment.push(data[anotherStart]);
                    if (data[anotherStart] === "/" && data[anotherStart-1] === "*") break;
                }
                start = anotherStart;
                token.push(comment.join(""));
                types.push("comment-block");
            };
            for (start = 0; start < len; ++start) {
                if (data[start] === "/" && data[start+1] === "*") {
                    commentBlock();
                }
            }
        };
    parse();
    return {token: token, types: types};
};

