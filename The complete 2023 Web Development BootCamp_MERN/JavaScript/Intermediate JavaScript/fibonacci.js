function fibonacciGenerator(n) {
	let fib = [0, 1];
	for (i = 2; i <= n; i++) {
		fib[i] = fib[i - 1] + fib[i - 2];
	}
	return fib[n];
}
console.log(fibonacciGenerator(10));

function fibonacciGenerator(n) {
	let a = 0, b = 1, c, i;
	if (n == 0){
		return a;
	}
	for(i = 2; i <= n; i++) {
		c = a + b;
	a = b; b = c;
	}
	return b;
}
console.log(fibonacciGenerator(10))
