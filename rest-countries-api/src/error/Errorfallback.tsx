import type { FallbackProps } from "react-error-boundary";
import "./ErrorFallback.css";

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" className="error">
      <p>Something went wrong:</p>
      <pre>{error instanceof Error ? error.message : "Unknown error"}</pre>
      <button onClick={resetErrorBoundary}>Retry</button>
    </div>
  );
}
