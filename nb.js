document.addEventListener("DOMContentLoaded", function () {
	const decimalInput = document.getElementById("decimal");
	const hexInput = document.getElementById("hexadecimal");
	const binaryInput = document.getElementById("binary");

	function updateFromDecimal() {
		const decimalValue = parseInt(decimalInput.value, 10);
		if (!isNaN(decimalValue)) {
			hexInput.value = decimalValue.toString(16).toUpperCase();
			binaryInput.value = decimalValue.toString(2);
		} else {
			hexInput.value = "";
			binaryInput.value = "";
		}
	}

	function updateFromHex() {
		const hexValue = parseInt(hexInput.value, 16);
		if (!isNaN(hexValue)) {
			decimalInput.value = hexValue;
			binaryInput.value = hexValue.toString(2);
		} else {
			decimalInput.value = "";
			binaryInput.value = "";
		}
	}

	function updateFromBinary() {
		const binaryValue = parseInt(binaryInput.value, 2);
		if (!isNaN(binaryValue)) {
			decimalInput.value = binaryValue;
			hexInput.value = binaryValue.toString(16).toUpperCase();
		} else {
			decimalInput.value = "";
			hexInput.value = "";
		}
	}

	decimalInput.addEventListener("input", updateFromDecimal);
	hexInput.addEventListener("input", updateFromHex);
	binaryInput.addEventListener("input", updateFromBinary);
});
