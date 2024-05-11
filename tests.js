
  test("convertIntegerToRoman Test Cases", function(assert) {
    assert.propEqual(convertIntegerToRoman(12), {value: "XII", message: '', result: true}, "TC-1");
    assert.propEqual(convertIntegerToRoman(3999), {value: "MMMCMXCIX", message: '', result: true}, "TC-2");
    assert.propEqual(convertIntegerToRoman(0), {value: 0, message: "Out of range (1-3999)", result: false}, "TC-3");
    assert.propEqual(convertIntegerToRoman(4000), {value: 0, message: "Out of range (1-3999)", result: false}, "TC-4");
    assert.propEqual(convertIntegerToRoman("X"), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-5");
    assert.propEqual(convertIntegerToRoman(12.23), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-6");
    assert.propEqual(convertIntegerToRoman(-3), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-7");
    assert.propEqual(convertIntegerToRoman(245), {value: "CCXLV", message: '', result: true}, "TC-8");
    assert.propEqual(convertIntegerToRoman(-37.12), {value: 0, message: 'Please enter a valid integer', result: false}, "TC-9");
    assert.propEqual(convertIntegerToRoman(1), {value: "I", message: '', result: true}, "TC-10");
  });
  
  test("convertRomanToInteger Test Cases", function(assert) {
    assert.propEqual(convertRomanToInteger("IV"), {value: 4, message: '', result: true}, "TC-1");
    assert.propEqual(convertRomanToInteger("MMMCMXCIX"), {value: 3999, message: '', result: true}, "TC-2");
    assert.propEqual(convertRomanToInteger(""), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-3");
    assert.propEqual(convertRomanToInteger("IL"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-4");
    assert.propEqual(convertRomanToInteger("274"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-5");
    assert.propEqual(convertRomanToInteger("XIIII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-6");
    assert.propEqual(convertRomanToInteger("-IV"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-7");
    assert.propEqual(convertRomanToInteger("IIV"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-8");
    assert.propEqual(convertRomanToInteger("CCXVII"), {value: 217, message: '', result: true}, "TC-9");
    assert.propEqual(convertRomanToInteger("MXMCCXVII"), {value: 0, message: 'Please enter a valid roman', result: false}, "TC-10");
  });
