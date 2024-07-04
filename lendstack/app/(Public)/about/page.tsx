// About Page for Open Source Fintech Platform

// Import Types
// Import External Packages
// Import Components
import DiscordWidget from '@/app/_components/DiscordWidget';
import GitHubWidget from '@/app/_components/GitHubWidget';
import CardStack from '@/app/_components/_ui/CardStack';
import Breadcrumps from '@/ui/Breadcrumps';
import {
  SectionOuterContainer,
  SectionTitle,
  SectionDescription,
  SubSectionOuterContainer,
  SubSectionInnerContainer,
} from '@/ui/Section';
// Import Functions & Actions & Hooks & State
// Import Data
// Import Assets & Icons

export default async function AboutPage() {
  return (
    <SectionOuterContainer className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumps />
      <SectionTitle>About Us</SectionTitle>
      <SectionDescription>
        Empowering developers and designers to build innovative financial solutions with ease.
      </SectionDescription>
      
      <SubSectionOuterContainer>
        <SubSectionInnerContainer className="space-y-8">
          
          {/* Our Mission Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">Our Mission</h2>
              <p className="py-2 dark:text-white">
                At Finance Chest, we are dedicated to providing a comprehensive suite of tools and resources to help you create your own financial features or platforms quickly and efficiently. Whether you are a developer, designer, or both, our platform offers a variety of code snippets, GitHub repositories, and widgets to accelerate your development process.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
			<CardStack />
            </div>
          </div>
          
          {/* What We Offer Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
			 <GitHubWidget username="Paygeon" repoName="loanapp" />            
			</div>
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">What We Offer</h2>
              <ul className="py-2 dark:text-white list-disc list-inside">
                <li>Ready-to-use code snippets for common financial components.</li>
                <li>Access to our curated GitHub repositories with complete project examples.</li>
                <li>Customizable widgets to integrate directly into your applications.</li>
              </ul>
            </div>
          </div>
          
          {/* Join Our Community Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">Join Our Community</h2>
              <p className="py-2 dark:text-white">
                Join our growing community of developers and designers who are leveraging our open-source platform to innovate and create impactful financial solutions. Contribute to our projects, share your ideas, and collaborate with like-minded professionals.
              </p>
              <p className="py-2 dark:text-white">
                Get started today and see how Finance Chest can transform your development workflow.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
			  <DiscordWidget />
            </div>
          </div>
          
        </SubSectionInnerContainer>
      </SubSectionOuterContainer>
    </SectionOuterContainer>
  );
}
