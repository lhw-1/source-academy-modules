/**
 * The module `tracer` provides functions for tracing programs in source.
 * @module tracer
 */

// =============================================================================
// Tracer Functions
// =============================================================================

/**
 * Function to allow tracing of a function call
 *
 * @category Main
 */
export function trace_function(f, ...args: any[]) {
  console.log(f);
  console.log(args);
}

export function trace_expression(e) {
  console.log(e);
}