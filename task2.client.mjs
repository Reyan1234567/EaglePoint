const asyncDataFetcher = async () => {
  let maxCount = 5;
  while (maxCount > 0) {
    maxCount--;
    const res = await fetchingFunction();
    if (res.status == 400) {
      console.log(`Retried, now ${maxCount} are left`);
      await delay();
      continue;
    }
    return res;
  }
};

const fetchingFunction = async () => {
  const res = await fetch("http://localhost:3000");
  return res;
};

const delay = () => {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000)
  );
};

console.log(await asyncDataFetcher());
