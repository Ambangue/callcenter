import React, { Component, ErrorInfo, ReactNode } from 'react';
import { logError } from '../utils/logger';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logError(error, {
      errorInfo: errorInfo,
      component: 'ErrorBoundary'
    });
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Une erreur est survenue
            </h1>
            <p className="text-gray-600">
              L'application a rencontré une erreur inattendue. Veuillez rafraîchir la page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              Rafraîchir la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;