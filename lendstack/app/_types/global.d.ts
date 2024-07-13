interface LoanWidgetLibraryType {
    create: (options: {
      partnerId: string;
      themeColor: string;
      partnerLogo: string;
      fontColor: string;
      typography: string;
      mode: string;
    }) => {
      initializeButton: (selector: string) => void;
    };
  }
  
  interface Window {
    LoanWidgetLibrary: LoanWidgetLibraryType;
  }