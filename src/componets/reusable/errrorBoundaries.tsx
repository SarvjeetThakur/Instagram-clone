import { ErrorBoundary } from "react-error-boundary";
import Button from "./button";
import { ReactNode, memo } from "react";

interface FallbackRenderProps {
  error: Error;
  resetErrorBoundary: () => void;
}

function FallbackRender({ error, resetErrorBoundary }: FallbackRenderProps) {
  return (
    <div role="alert" className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center border border-gray-400 p-6 rounded-md">
        <p className="text-xl font-bold mb-2">Something went wrong</p>
        <span className="text-red-500">{error.message}</span>
        <Button className="bg-red-500 mt-4 hover:!bg-red-600" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </div>
  );
}

const GlobalErrorBoundary = ({ children }: ReactNode | any) => {
  return (
    <ErrorBoundary fallbackRender={FallbackRender}>
      {children}
    </ErrorBoundary>
  );
};

export default memo(GlobalErrorBoundary);
