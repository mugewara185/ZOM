export function fakeFetch<T>(data: T, delay = 500): Promise<T> {
  return new Promise((resolve) => {
    console.log('fakeFetch-Data:',data)
    setTimeout(() => resolve(data), delay);
  });
}
