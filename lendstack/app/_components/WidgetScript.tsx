"use client"
// components/WidgetScript.js
import { useEffect } from 'react';

const WidgetScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://d2bttqbsvfwlg9.cloudfront.net/widget.js";
    script.async = true;
    script.setAttribute('data-tabs', 'Start, Start with our tool, General, Product, Knowledge Hub');
    script.setAttribute('data-channels', 'Welcome, Onboarding, Roadmap, What\'s new, Discussions, Product feedback, Feature Suggestions, Bugs, Announcements, Help center, For developers');
    script.setAttribute('data-community-id', '369');
    script.setAttribute('data-public-base-img-url', 'https://d34zu6t0zlvykw.cloudfront.net/');

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default WidgetScript;
