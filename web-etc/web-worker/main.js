function startWorker() {
    let worker = new Worker('worker.js');
    worker.postMessage("hello");
}
