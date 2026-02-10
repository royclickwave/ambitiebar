import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { Quiz } from './components/Quiz';
import { EmailCapture } from './components/EmailCapture';
import { Results } from './components/Results';
import { AppView, UserAnswers, UserDetails } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.LANDING);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [userDetails, setUserDetails] = useState<UserDetails>({ name: '', email: '', company: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [blobId, setBlobId] = useState<string | null>(null);
  const [isFirstView, setIsFirstView] = useState(false);

  // Load results from URL if ID is present
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    if (id) {
      const fetchResults = async () => {
        setIsLoading(true);

        // MOCK FETCH FOR LOCALHOST
        if (id.startsWith('mock-')) {
          console.warn('⚠️ LOCALHOST: Mock fetching results (fake data).');
          setTimeout(() => {
            const mockData = {
              answers: {}, // Mock empty answers or default
              userDetails: { name: 'Roy (Test)', email: 'test@example.com', company: 'Clickwave' }
            };
            setAnswers(mockData.answers);
            setUserDetails(mockData.userDetails);
            setBlobId(id);
            setIsFirstView(false); // Show full report
            setCurrentView(AppView.REPORT);
            setIsLoading(false);
          }, 500);
          return;
        }

        try {
          // If ID contains ~, it's a new style 'storeId~fileId'
          // Otherwise, assume it's the old style and the user is on the old store (or local)
          let fetchUrl;
          if (id.includes('~')) {
            const [storeId, fileId] = id.split('~');
            fetchUrl = `https://${storeId}.public.blob.vercel-storage.com/results/${fileId}.json`;
          } else {
            // Fallback for old IDs (local or existing)
            // Default to the known store if no prefix
            const defaultStoreId = 'ucwgphbtstrr2khv';
            fetchUrl = `https://${defaultStoreId}.public.blob.vercel-storage.com/results/${id}.json`;
          }

          const response = await fetch(fetchUrl);
          if (response.ok) {
            const data = await response.json();
            setAnswers(data.answers);
            setUserDetails(data.userDetails);
            setBlobId(id);
            setIsFirstView(false);
            setCurrentView(AppView.REPORT);
          } else {
            console.error('Failed to load results');
            // Remove bad ID from URL
            window.history.replaceState({}, '', '/');
          }
        } catch (error) {
          console.error('Error fetching results:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchResults();
    }
  }, []);

  const handleStartQuiz = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(AppView.QUIZ);
  };

  const handleQuizComplete = (finalAnswers: UserAnswers) => {
    setAnswers(finalAnswers);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentView(AppView.EMAIL_CAPTURE);
  };

  const handleEmailSubmit = async (details: UserDetails) => {
    setUserDetails(details);
    setIsLoading(true);

    // MOCK SUBMIT FOR LOCALHOST (Since API routes don't work in Vite dev server)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.warn('⚠️ LOCALHOST DETECTED: Mocking API submission (data not saved to database).');
      setTimeout(() => {
        const id = 'mock-' + Math.random().toString(36).substr(2, 9);
        setBlobId(id);
        const newUrl = `${window.location.origin}${window.location.pathname}?id=${id}`;
        window.history.pushState({ id }, '', newUrl);
        setIsFirstView(true);
        setCurrentView(AppView.REPORT);
        setIsLoading(false);
      }, 1000);
      return;
    }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          answers,
          userDetails: details,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const id = data.id;
        setBlobId(id);
        // Update URL without reloading
        const newUrl = `${window.location.origin}${window.location.pathname}?id=${id}`;
        window.history.pushState({ id }, '', newUrl);
        // Show full report immediately
        setIsFirstView(false);
        setCurrentView(AppView.REPORT);
      } else {
        console.error('Server responded with error');
        setCurrentView(AppView.REPORT);
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setCurrentView(AppView.REPORT);
    } finally {
      setIsLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderView = () => {
    if (isLoading) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-workon-bg">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-workon-yellow mb-4"></div>
          <p className="text-workon-dark font-title font-bold">Analyse laden...</p>
        </div>
      );
    }

    switch (currentView) {
      case AppView.LANDING:
        return <LandingPage onStart={handleStartQuiz} />;
      case AppView.QUIZ:
        return <Quiz onComplete={handleQuizComplete} />;
      case AppView.EMAIL_CAPTURE:
        return <EmailCapture onSubmit={handleEmailSubmit} />;
      case AppView.REPORT:
        return <Results answers={answers} userDetails={userDetails} isFirstView={isFirstView} />;
      default:
        return <LandingPage onStart={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen bg-workon-bg font-sans text-neutral-darkGray">
      {renderView()}
    </div>
  );
};

export default App;