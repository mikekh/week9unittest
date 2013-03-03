/**
 * @author charles.calvert
 */
/*
FUNTCTIONS TO TEST
*/
function add(a, b) {"use strict";
	return a + b;
}

function subtract(a,b) {"use strict";
	return a - b;
}

function multiply(a, b) {"use strict";
	return a * b;
}

function divide(a, b) {"use strict";
	return a / b;
}

function square(a) {"use strict";
	return a * a;
}

function addFail(a, b) {"use strict";
	return a + b + b;
}

/*
TEST FUNTIONS
*/
test("Test01", function() {"use strict";
	ok(true, true);
});

test("TestAdd", function() {"use strict";
	var expected = 11;
	var actual = add(3, 8);
	equal(actual, expected, "We expected to get: " + expected);
});

test("TestSubtract", function() {"use strict";
	var expected = 6;
	var actual = subtract(9, 3);
	equal(actual, expected, "We expected to get: " + expected);
});

test("TestMultiply", function() {"use strict";
	var expected = 24;
	var actual = multiply(3, 8);
	equal(actual, expected, "We expected to get: " + expected);
});

test("TestDivide", function() {"use strict";
	var expected = 5;
	var actual = divide(15,3);
	equal(actual, expected, "We expected to get: " + expected);
});

test("TestSquare", function() {"use strict";
	var expected = 25;
	var actual = square(5);
	equal(actual, expected, "We expected to get: " + expected);
});

//This should fail
test("TestAddFail", function(){"use strict";
	var expected = 7;
	var actual = addFail(3, 4);
	equal (actual, expected, "We expected to get: " + expected);
});	
