## Preference 

This file describes on the preferred method to create a parsing application.

The parsers used combines the lexer and parser into a single operation. The lexer scans the input looking for syntax and once a token is identified it is immediately parsed before the lexer progresses forward. This allows for advanced decisions, such as code correction and grammar analysis, to occur immediately. These advanced features make the total execution time of the parsing operation slower. Despite that this approach is substantially faster and more simple than attempting to apply any such advanced analysis as a separate process outside the parser.

This approach produces output in the form of parallel arrays instead of an AST format. The idea is that an AST can be created from a parse table approach provided one of the categories of data is structure and placement information, but a parse table cannot be created from an AST without running another parsing operation. The parse table approach also allows for sorting and analysis by selectively targeting various areas and data types without consideration for the output as a whole.