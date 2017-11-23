
function words(text) {
  if (typeof text === 'string') {
    const words = text.split(' ');
    const count = {};
    for (const word of words) {
      if (count[word]) {
        count[word] = 1 + count[word];
      } else {
        count[word] = 1;
      }
    }
    return count;
  }
}


export default words;