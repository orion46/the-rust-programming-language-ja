initSidebarItems({"fn":[["format","The format function takes a precompiled format string and a list of arguments, to return the resulting formatted string."],["radix","Constructs a radix formatter in the range of `2..36`."],["write","The `write` function takes an output stream, a precompiled format string, and a list of arguments. The arguments will be formatted according to the specified format string into the output stream provided."]],"struct":[["Arguments","This structure represents a safely precompiled version of a format string and its arguments. This cannot be generated at runtime because it cannot safely be done so, so no constructors are given and the fields are private to prevent modification."],["DebugList","A struct to help with `fmt::Debug` implementations."],["DebugMap","A struct to help with `fmt::Debug` implementations."],["DebugSet","A struct to help with `fmt::Debug` implementations."],["DebugStruct","A struct to help with `fmt::Debug` implementations."],["DebugTuple","A struct to help with `fmt::Debug` implementations."],["Error","The error type which is returned from formatting a message into a stream."],["Formatter","A struct to represent both where to emit formatting strings to and how they should be formatted. A mutable version of this is passed to all formatting traits."],["Radix","A radix with in the range of `2..36`."],["RadixFmt","A helper type for formatting radixes."]],"trait":[["Binary","Format trait for the `b` character."],["Debug","Format trait for the `?` character."],["Display","Format trait for an empty format, `{}`."],["LowerExp","Format trait for the `e` character."],["LowerHex","Format trait for the `x` character."],["Octal","Format trait for the `o` character."],["Pointer","Format trait for the `p` character."],["UpperExp","Format trait for the `E` character."],["UpperHex","Format trait for the `X` character."],["Write","A collection of methods that are required to format a message into a stream."]],"type":[["Result",""]]});