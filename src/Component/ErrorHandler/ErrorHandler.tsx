import { useRouteError } from "react-router-dom";
type ErrorType = {
    data: string,
    status: number
    statusText: string
}

const ErrorHandler = () => {
    const {data,status,statusText} = useRouteError() as ErrorType
    return (
        <div className=" flex flex-col h-full mt-20 text-center">
            <h1 className="text-4xl font-semibold">{status}</h1>
            <div>
                <p>{statusText}</p>
                <p>{data}</p>
            </div>
        </div>
    );
};

export default ErrorHandler;