module.exports = [
	{
		_id: 1,
		type: "multiple choice",
		teaching:
			"A variable is like a box that holds data that you can use and manipulate in your program. Think of it as a labelled bag where you can store different types of information.",
		question: "What is a variable?",
		options: ["a container to store data", "an ordered list", "an unordered list", "a set of items"],
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_variables.asp",
	},
	{
		_id: 2,
		type: "multiple choice",
		teaching: "In Python, assigning a value to a variable is straightforward. You use the equals sign (=) to do this.",
		question: "How would you assign a value to a variable?",
		options: ["let a = 7", "var a = 7", "a = 7", "const a = 7"],
		answer: 2,
		help_url: "https://www.w3schools.com/python/python_variables.asp",
	},
	{
		_id: 3,
		type: "multiple choice",
		teaching: "Tuple assignment allows for the assignment of multiple values to multiple variables. Example: a, b = 1, 2 assigns 1 to a and 2 to b.",
		question: "Multiples values can be assigned to multiple variables at once.",
		options: ["true", "false"],
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_variables.asp",
	},
	{
		_id: 4,
		type: "drag and drop",
		teaching: `In Python, comparison operators allow you to compare values and determine relationships between them. Let's break down each operator:\n== This operator checks if two values are equal. For example, 5 == 5 returns True.\n! The exclamation mark (!) stands for "not" in Python. It's used in combination with = to form the != operator, which checks if two values are not equal. For instance, 5 != 3 returns True.\n> This operator checks if the value on the left is greater than the value on the right. For example, 7 > 5 returns True.\n< This operator checks if the value on the left is less than the value on the right. For instance, 3 < 5 returns True.`,
		question: "Drag the following to the correct definition:",
		options: ["<=", "!=", "<", "==", ">=", ">"],
		answer_options: [
			"is equal to",
			"not equal to",
			"greater than",
			"less than",
			"greater than or equal to",
			"less than or equal to",
		],
		answer: ["==", "!=", ">", "<", ">=", "<="],
		help_url: "https://www.w3schools.com/python/python_operators.asp",
	},
	{
		_id: 5,
		type: "fill in the blank",
		teaching:  `In Python, define the type of data that a variable can store. Understanding different data 
		types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`,
		question: "________ is the data type in Python that holds a sequence of characters.",
		answer: "string",
		help_url: "https://www.w3schools.com/python/python_strings.asp",
	},
	{
		_id: 6,
		type: "fill in the blank",
		teaching: `In Python, define the type of data that a variable can store. Understanding different data 
		types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`,
		question: "A data type that holds either a True or False value is called a ________.",
		answer: "boolean",
		help_url: "https://www.w3schools.com/python/python_booleans.asp",
	},
	{
		_id: 7,
		type: "multiple choice",
		teaching: `In Python, define the type of data that a variable can store. Understanding different data 
		types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`,
		question: "Which of the following data types category holds values such as integers, floats, and complex numbers",
		options: ["Numeric", "String", "Sequence", "Mapping"],
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_numbers.asp",
	},
	{
		_id: 8,
		type: "multiple choice",
		teaching: `In Python, define the type of data that a variable can store. Understanding different data 
		types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`,
		question: "Which of the following data types holds a collection of items?",
		options: ["Numeric", "String", "Sequence", "Mapping"],
		answer: 2,
		help_url: "https://www.w3schools.com/python/python_datatypes.asp",
	},
	{
		_id : 9,
		type: "multiple choice",
		teaching: `In Python, define the type of data that a variable can store. Understanding different data types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`, 
		question : "Which data type holds data in key-value pair form",
		options: ["Numeric", "String", "Sequence", "Mapping"], 
		answer: 3,
		help_url: "https://www.w3schools.com/python/python_datatypes.asp",
	},
	{
		_id : 10,
		type: "multiple choice",
		teaching: `In Python, define the type of data that a variable can store. Understanding different data types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`,
		question : "Which data type holds data in an unordered collection of unique items?",
		options: ["Sequence", "Mapping", "Set", "Boolean"], 
		answer: 2,
		help_url: "https://www.w3schools.com/python/python_datatypes.asp",
	},
	{
		_id : 11,
		type: "multiple choice",
		teaching: `In Python, define the type of data that a variable can store. Understanding different data types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`,
		question : "Data types can be converted from one type to another",
		options: ["true", "false"], 
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_datatypes.asp",
	},
	{
		_id : 12,
		type: "multiple choice",
		teaching: `In Python, define the type of data that a variable can store. Understanding different data types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`,
		question : "Which data type in Python is used to represent decimal numbers, including both integers and fractions?",
		options: ["int", "str", "float", "list"], 
		answer: 2,
		help_url: "https://www.w3schools.com/python/python_datatypes.asp",
	},
	{
		_id : 13,
		type: "multiple choice",
		teaching: `In Python, define the type of data that a variable can store. Understanding different data types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`,
		question : " Which of the following is an example of a complex number?",
		options: ['1+7j', '50002939302939022432', '-2', '3.0930'], 
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_numbers.asp",
	},
	{
		_id : 14,
		type: "multiple choice",
		teaching: `In Python, define the type of data that a variable can store. Understanding different data types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`,
		question : "In Python, a list is _____",
		options: ['An ordered collection of items within square brackets and separated by commas', ' A sequence of characters enclosed in quotation marks', 'A set of key-value pairs separated by colons', ' A container to hold items'], 
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_numbers.asp",
	},
	{
		_id : 15,
		type: "multiple choice",
		teaching: `In Python, define the type of data that a variable can store. Understanding different data types is essential for effective programming. Let's explore some common data types:\nNumeric\nData Types: int, float, complex\nDescription: Holds numeric values.\nExample:5, 3.14, 1+7j\nUsage: Mathematical calculations and representing numbers.\nString\nData Type: str\nDescription: Holds sequences of characters.\nExample: "Hello"\nUsage: Textual data like words and sentences.\nSequence\nData Types: list, tuple, range\nDescription: Holds a collection of items.\nExamples: [1, 2, 3], (1, 2, 3), range(0, 10)\nUsage: Storing and manipulating sequences of data.\nMapping\nData Type: dict\nDescription: Holds data in key-value pair form.\nExample: {"name": "Alice", "age": 25}\nUsage: Storing data with associated keys for efficient retrieval.\nBoolean\nData Type: bool\nDescription: Holds either True or False.\nExample: True\nUsage: Logical operations and conditional expressions.\nSet\nData Types: set, frozenset\nDescription: Holds a collection of unique items.\nExample: {1, 2, 3}`,
		question : "Which one of these is immutable?",
		options: ['List', 'Dictionary', 'Set', 'Tuple'], 
		answer: 3,
		help_url: "https://www.w3schools.com/python/python_datatypes.asp",
	},
	{
		_id : 16,
		type: "multiple choice",
		teaching: "In Python, there are tools to help us determine the type of data we're working with. We can achieve this using functions and methods. \nIdentifying Data Types with type(). The type() function in Python allows us to identify the data type or class to which a value belongs. It returns the class type of the argument passed to it",
		question : "Which function enables us to identify the data type or class to which a value belongs?",
		options: ['typeof x', 'type(x)'],
		answer: 1,
		help_url: "https://www.w3schools.com/python/python_datatypes.asp",
	},
	{
		_id: 17,
		type: "multiple choice",
		teaching: "Dictionaries are a fundamental data structure in Python used to store key-value pairs. \nSyntax for Creating Dictionaries\n Thecorrect syntax for creating a dictionary in Python is using curly braces {} with key-value pairs separated by colons :",
		question: "What is the correct syntax to create a dictionary in Python?",
		options: ["dict = [key1: value1, key2: value2]", "dict = {key1: value1, key2: value2}", "dict = (key1: value1, key2: value2)", "dict = (key1,value1, key2, value2)"],
		answer: 1,
		help_url: "https://www.w3schools.com/python/python_dictionaries.asp",
	},
	{
		_id: 18,
		type: "multiple choice",
		teaching: "Understanding Decision-Making If statements are crucial in Python for making decisions based on specific conditions. Here's abreakdown:\nCondition Evaluation:\nThe if statement starts with a condition, typically a Boolean expression that evaluates to True or False.\nExecution:If the condition is True, the indented code block beneath the if statement is executed; otherwise, it's skipped. \nSyntax:\nThe ifstatement begins with the keyword if. \nIt's followed by a condition, which usually involves comparisons or logical operations. \nA colon :marks the end of the condition and the start of the code block. \nThe indented code block contains the instructions to execute if thecondition is True. \nExample:\nx = 10 \nif x > 5:\nprint('x is greater than 5')",
		question: "What is the correct syntax for an if statement?",
		options: ["if {condition}", "if [condition]", "if (condition) { }", "if condition:"],
		answer: 3,
		help_url: "https://www.w3schools.com/python/python_conditions.asp",
	},
	{
		_id: 19,
		type: "multiple choice",
		teaching: "Sets are powerful data structures in Python for storing unique elements. Let's explore some common methods for manipulating setsand understand how they work. \nAdding Items to Sets: \nadd(item): This method adds a single element to the set. \nupdate(iterable): Thismethod adds multiple elements from another iterable (such as a list or tuple) to the set. \n Removing Items from Sets: \nremove(item): \nThismethod removes a specified element from the set. If the element is not present, it raises a KeyError. \ndiscard(item): \nThis method removes aspecified element from the set if it is present. If the element is not present, it does nothing. \npop(): This method removes and returns anarbitrary element from the set. If the set is empty, it raises a KeyError. \nOther Set Operations: \nunion(other_set): This method returns anew set containing all unique elements from both sets. \nintersection(other_set): This method returns a new set containing only the elementsthat are common to both sets. \ndifference(other_set): \nThis method returns a new set containing elements that are present in the first setbut not in the second set. \nUnderstanding these methods allows you to manipulate sets effectively in Python, performing tasks such as addingor removing elements, and performing set operations.",
		question: "What method could be used to add an item to a set?",
		options: ["shift()", "extend()", "add()", "pop()"],
		answer: 2,
		help_url: "https://www.w3schools.com/python/python_sets_add.asp",
	},
	{
		_id: 20,
		type: "multiple choice",
		teaching: "Lists in Python are ordered collections, meaning each element has an index associated with it. \nIndexing starts from 0 for thefirst element, 1 for the second element, and so on. \nNegative indexing allows you to access elements from the end of the list, starting with-1 for the last element, -2 for the second-to-last element, and so forth.",
		question: "Which index number would enable us to access the first item within this list?",
		additional_text: 'Languages = ["Javascript", "Java", "Python", "Swift"]',
		options: [0, 1, -1, 3],
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_lists.asp",
	},
	{
		_id: 21,
		type: "multiple choice",
		teaching: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique et egestas quis ipsum suspendisse ultrices.",
		question: "Lorem Ipsum is the single greatest threat?",
		additional_text: 'Languages = ["Javascript", "Java", "Python", "Swift"]',
		options: [0, 1, -1, 3],
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_lists.asp",
	},
	{
		_id: 22,
		type: "multiple choice",
		teaching: "orem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen.",
		question: "Does everybody know that pig named Lorem Ipsum?",
		additional_text: " An 'extremely credible source' has called my office and told me that Barack Obama's placeholder text is a fraud.",
		options: [0, 1, -1, 3],
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_lists.asp",
	},
	{
		_id: 23,
		type: "multiple choice",
		teaching: "Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye.",
		question: "Does everybody know that pig named Lorem Ipsum?",
		additional_text: " Doner spare ribs andouille bacon sausage.",
		options: [0, 1, -1, 3],
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_lists.asp",
	},
	{
		_id: 24,
		type: "multiple choice",
		teaching: "Cupcake ipsum dolor. Sit amet marshmallow topping cheesecake muffin. Halvah croissant candy canes bonbon candy. Apple pie jelly beans topping carrot cake danish tart cake cheesecake.",
		question: "Does everybody know that pig named Lorem Ipsum?",
		additional_text: "Lemon drops tootsie roll marshmallow halvah carrot cake.",
		options: [0, 1, -1, 3],
		answer: 0,
		help_url: "https://www.w3schools.com/python/python_lists.asp",
	},
];

