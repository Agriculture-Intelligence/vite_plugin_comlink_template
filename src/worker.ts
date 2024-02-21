export async function workerWithStorageCall() {
  console.log("Web worker working");
  return { workerOutput: 1 };
}
