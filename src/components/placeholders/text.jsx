export default function Text() {
    return (
        <>
            <div role="status" className="max-w-sm animate-pulse">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                <span className="sr-only">
                    Loading...
                </span>
            </div>
        </>
    )
}