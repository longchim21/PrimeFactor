function findPrimeFactors() {
    var number = parseInt(document.getElementById("numberInput").value);
    var factors = [];

    // Divide by 2 until it's odd
    while (number % 2 === 0) {
        factors.push(2);
        number /= 2;
    }

    // Check odd factors
    for (var i = 3; i <= Math.sqrt(number); i += 2) {
        while (number % i === 0) {
            factors.push(i);
            number /= i;
        }
    }

    // If the remaining number is greater than 2, it's a prime
    if (number > 2) {
        factors.push(number);
    }

    // Display the result
    var resultElement = document.getElementById("result");
    if (factors.length === 0) {
        resultElement.innerText = "No prime factors found.";
    } else {
        resultElement.innerText = "Prime factors: " + factors.join(", ");
    }
}
