import { useRouteError, isRouteErrorResponse } from "react-router-dom"

import { Sidebar } from "./components"

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className="flex w-screen min-h-screen">
      <Sidebar />
      <div className="flex flex-1 bg-surfaceVariant min-h-screen items-end">
        <div className="bg-surface rounded-t-3xl h-[90%] w-5/6 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl text-onSurface">Sorry, some error occured</h1>
          {isRouteErrorResponse(error) ? (
            <div className="flex flex-col gap-2 rounded-xl bg-errorContainer p-6">
              <p className="text-base tracking-[0.15px] font-medium text-onErrorContainer">
                Error Status: {error.status} {error.statusText}
              </p>
              <p className="text-base tracking-[0.15px] font-medium text-onErrorContainer">
                {error.data}
              </p>
            </div>
          ) : (
            <div>Ooops.</div>
          )}
        </div>
      </div>
    </div>
  )
}
