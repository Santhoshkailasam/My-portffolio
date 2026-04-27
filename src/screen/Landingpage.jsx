import React, { Suspense, lazy } from 'react';
import Navbar from '../component/navbar';
import Hero from '../component/Hero';
import BackgroundVideo from '../component/bgvideo';
import ErrorBoundary from '../component/ErrorBoundary';
import { DevModeProvider } from '../context/DevModeContext';
import Skeleton from '../component/Skeleton';

const About = lazy(() => import('../component/About'));
const Education = lazy(() => import('../component/Education'));
const Projects = lazy(() => import('../component/Projects'));
const GitHubActivity = lazy(() => import('../component/GitHubActivity'));
const GamifiedSection = lazy(() => import('../component/GamifiedSection'));
const Terminal = lazy(() => import('../component/Terminal'));
const Experience = lazy(() => import('../component/Experience'));
const Contact = lazy(() => import('../component/Contact'));
const ResumeViewer = lazy(() => import('../component/ResumeViewer'));
const LinkedInSection = lazy(() => import('../component/LinkedInSection'));
const KonamiManager = lazy(() => import('../component/KonamiManager'));
const DevHUD = lazy(() => import('../component/DevHUD'));

const LoadingFallback = () => (
  <div className="min-h-screen bg-black p-4 md:p-10">
    <div className="max-w-7xl mx-auto space-y-12">
      {/* Hero Skeleton */}
      <div className="flex flex-col md:flex-row items-center gap-12 pt-20">
        <div className="flex-1 space-y-6">
          <Skeleton className="w-32 h-6 rounded-full" />
          <Skeleton className="w-full h-16 md:h-24" />
          <Skeleton className="w-2/3 h-16 md:h-24" />
          <div className="flex gap-4 pt-6">
            <Skeleton className="w-40 h-14 rounded-2xl" />
            <Skeleton className="w-40 h-14 rounded-2xl" />
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <Skeleton className="w-64 h-64 md:w-96 md:h-96 rounded-3xl" />
        </div>
      </div>
      
      {/* Section Skeleton */}
      <div className="space-y-8 pt-20">
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="w-48 h-12" />
          <Skeleton className="w-24 h-2 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Skeleton className="aspect-video w-full rounded-3xl" />
          <Skeleton className="aspect-video w-full rounded-3xl" />
        </div>
      </div>
    </div>
  </div>
);
const LandingPage = () => {
    const [showResume, setShowResume] = React.useState(false);

    return (
      <DevModeProvider>
        <div className="relative min-h-screen overflow-hidden">
          <BackgroundVideo />
          <Navbar />
          <Hero setShowResume={setShowResume} />
          <Suspense fallback={<LoadingFallback />}>
            <About />
            <ErrorBoundary>
              <GamifiedSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <GitHubActivity />
            </ErrorBoundary>
            <Education />
            <Projects />
            <Experience />
            {showResume && <ResumeViewer />}
            <ErrorBoundary>
              <Terminal />
            </ErrorBoundary>
            <LinkedInSection />
            <KonamiManager />
            <DevHUD />
            <Contact />
          </Suspense>
          <footer className="bg-gray-800 text-white text-center p-4">
            <p>
              &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </footer>
        </div>
      </DevModeProvider>
    );
}
export default LandingPage;