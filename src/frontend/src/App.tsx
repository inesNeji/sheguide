import { Skeleton } from "@/components/ui/skeleton";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import { Layout } from "./components/Layout";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Buddies = lazy(() => import("./pages/Buddies"));
const Deadlines = lazy(() => import("./pages/Deadlines"));
const Forms = lazy(() => import("./pages/Forms"));
const Rights = lazy(() => import("./pages/Rights"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 },
  },
});

function PageFallback() {
  return (
    <div className="p-8 space-y-4">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-96" />
      <div className="grid grid-cols-3 gap-4 mt-6">
        <Skeleton className="h-40 rounded-xl" />
        <Skeleton className="h-40 rounded-xl" />
        <Skeleton className="h-40 rounded-xl" />
      </div>
    </div>
  );
}

const rootRoute = createRootRoute({ component: Layout });

const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <Dashboard />
    </Suspense>
  ),
});

const buddiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/buddies",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <Buddies />
    </Suspense>
  ),
});

const deadlinesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/deadlines",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <Deadlines />
    </Suspense>
  ),
});

const formsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/forms",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <Forms />
    </Suspense>
  ),
});

const rightsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/rights",
  component: () => (
    <Suspense fallback={<PageFallback />}>
      <Rights />
    </Suspense>
  ),
});

const routeTree = rootRoute.addChildren([
  dashboardRoute,
  buddiesRoute,
  deadlinesRoute,
  formsRoute,
  rightsRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
