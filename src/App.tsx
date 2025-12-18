import Preview from "./preview/Preview"

const PREVIEW_PATH = "/preview"

function App() {
  if (typeof window !== "undefined" && window.location.pathname === PREVIEW_PATH) {
    return <Preview />
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-xl py-6 text-foreground">
      <div className="mx-auto w-full max-w-2xl space-y-lg rounded-lg border border-border bg-card px-lg py-xl text-center shadow-sm">
        <div className="space-y-sm">
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Benefits BSharp Design System
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            This workspace bootstraps the shared component library serving all module teams.
            Install shadcn/ui components and reference them from here as the single source of truth.
          </p>
        </div>
        <div className="space-y-2xs">
          <a
            href={PREVIEW_PATH}
            className="inline-flex items-center justify-center text-sm font-medium text-primary underline underline-offset-4"
          >
            Internal UI Preview
          </a>
          <p className="text-sm text-muted-foreground">
            Navigate to the internal preview gallery to validate shared components via the public API.
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
