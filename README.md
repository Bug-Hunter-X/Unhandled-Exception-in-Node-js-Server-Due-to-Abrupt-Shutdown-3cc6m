# Unhandled Exception in Node.js Server

This repository demonstrates an uncommon bug in Node.js servers where unhandled exceptions can occur due to abrupt process termination. The bug arises from a race condition when handling multiple requests simultaneously.  If the server is stopped before all requests are processed, unhandled exceptions can result.

The `bug.js` file contains the problematic code, while `bugSolution.js` provides a solution to handle such scenarios gracefully.  The solution involves using appropriate event listeners and handling signals to ensure proper shutdown.

## Bug

The bug is caused by not handling signals like SIGINT (Ctrl+C) or SIGTERM. When the server receives one of these signals it will stop immediately without finishing the ongoing requests. This results in unhandled exceptions and potential data loss.

## Solution

The solution involves using the `process` module's event listeners for `SIGINT` and `SIGTERM` to gracefully shut down the server. This allows the server to finish processing ongoing requests before exiting.