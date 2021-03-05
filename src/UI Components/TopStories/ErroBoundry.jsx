
import React from 'react';
export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    componentDidCatch(error, errorInfo) {
    //   log(error, errorInfo);
    }
    render() {
      if (this.state.hasError) {
        return <span>Something went wrong.</span>;
      }
      return this.props.children; 
    }
  }