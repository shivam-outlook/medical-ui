import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <main className='d-flex flex-column align-items-center justify-content-center vh-100'>
                    {/* <Alert
                        variant="warning"
                        className="gap-3 d-flex flex-column align-items-center justify-content-center">
                        <ExclamationCircle size={50} />
                        <span className='fs-2'>Oops!</span>
                        <span>Something went wrong.</span>
                    </Alert> */}
                </main>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
