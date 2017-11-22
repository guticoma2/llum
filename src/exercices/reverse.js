/* eslint-disable */
const arr = [
	'Hello world', // -> 'world Hello'
	'I hate doing technical tests', // -> 'tests technical doing hate I'
	'Holaluz is a great place to work', // -> 'work to place great a is Holaluz'
];


const reverseWordsInSentence = (str) => {
	console.log(str.split('').reverse().join(''));
};

for (let i in arr) {
	reverseWordsInSentence(arr[i]);
}

