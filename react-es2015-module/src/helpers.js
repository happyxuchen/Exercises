/* choice(items): returns a randomly selected item from array of items **/

function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

/* remove(items, item): removes the first matching item from items, if item exists, and returns the array. Otherwise returns undefined. **/

function remove(items, item) {
  if (items.includes(item)) {
    let idx = items.indexOf(item);
    console.log("This is index" + idx);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  }
  return undefined;
}
