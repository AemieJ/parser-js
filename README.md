# Parser 
> A step by step guide on writing a parser. 

## Introduction 

A parsing application merely provides the means of taking some input and transforming it into works that computers can understand. The ability to write parsers is to programming as the ability to write is to literacy, which is to say that learning to write a simple parsing application opens new worlds of instant capabilities. The methods and approaches are expressed according to JavaScript language.

## Terminology 

### Abstract syntax tree (AST)

An AST is a single organized body of output that describes tokens according to descriptors provided by the parser in an organization that defines the relationships of those tokens according the grammar(s) of the desired consuming application. This is often a big object where each data facet is a token with descriptions and child objects for each token as organized according to a language grammar. This is the most common output format provided by parsers.

eg => var answer = 6*7; 

```
{
    "body"      : [
        {
            "declarations": [
                {
                    "id"  : {
                        "name": "answer",
                        "type": "Identifier"
                    },
                    "init": {
                        "left"    : {
                            "raw"  : "6",
                            "type" : "Literal",
                            "value": 6
                        },
                        "operator": "*",
                        "right"   : {
                            "raw"  : "7",
                            "type" : "Literal",
                            "value": 7
                        },
                        "type"    : "BinaryExpression"
                    },
                    "type": "VariableDeclarator"
                }
            ],
            "kind"        : "var",
            "type"        : "VariableDeclaration"
        }
    ],
    "sourceType": "script",
    "type"      : "Program"
}

```

### Grammar 

A second set of rules, after syntax, to determine how parsed tokens come together to form output that is intelligble to the consuming application. An example is that syntax determines how to form words and sentences in human written language, but grammar determines how those words and sentences come together in a way that provides understandability.

### Lexer 

A lexer is a utility that scans input looking for syntax rules in order to organize the input into tokens. The lexer will determine when a part of the input forms a code comment, for example, and where that comment ends so as to begin something else.

### Parallel Array 

The term parallel array is a recognized computer science term that is used in this guide, but it is not terminology commonly associated with parsing. Parallel arrays are a technique for quickly populating data.

### Parser 

A parser is an analysis scheme to examine a list of tokens produced by a lexer to determine a variety of qualities like: data types, token relationships, validation, and other higher order qualities.

### Parser table 

An alternative output format, compared to AST. Instead of arranging data in a single giant object representing a tree of tokens a parse table outputs data in a table. The parse tables formed by Pretty Diff and demonstrated in this guide are formed using a technique called parallel arrays.

### Syntax 

A fancy term that refers to the defining rule set to determine the expected out. Syntax most commonly refers to the rules necessary to form a programming language, but represent the bounds by which any lexer applies even if not to form a programming language.

### Token 

A token is an element of output formed from examining the input against a set of rules.

### Type 

A type, commonly referred to as a language data type, is a categorical label for a given token. Some common examples of data types are: string, comment, object, null, and number.