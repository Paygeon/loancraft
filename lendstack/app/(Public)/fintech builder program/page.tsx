import React from 'react';
import { SectionOuterContainer, SectionTitle, SectionDescription, SubSectionOuterContainer, SubSectionInnerContainer } from '@/ui/Section';
import Breadcrumps from '@/app/_components/_ui/Breadcrumps';


export default async function FintechBuilderProgramPage() {
  return (
    <SectionOuterContainer className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumps />
      <SectionTitle>Fintech Builder Program</SectionTitle>
      <SectionDescription>
        Finance Chest will build your fintech product for you, from sourcing the right vendors and partners to creating the specs and roadmap, and building your fintech product and startup with unlimited assistance after the product is built.
      </SectionDescription>
      
      <SubSectionOuterContainer>
        <SubSectionInnerContainer className="space-y-8">
          
          {/* Sourcing Vendors Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">Sourcing the Right Vendors</h2>
              <p className="py-2 dark:text-white">
                We identify and partner with the best vendors to ensure your product is built to the highest standards.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img src="/path-to-image-1.jpg" alt="Sourcing Vendors" className="rounded-lg shadow-lg" />
            </div>
          </div>
          
          {/* Creating Specs Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <img src="/path-to-image-2.jpg" alt="Specs and Roadmap" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">Creating the Specs and Roadmap</h2>
              <p className="py-2 dark:text-white">
                Our team works closely with you to create detailed specifications and a comprehensive roadmap.
              </p>
            </div>
          </div>
          
          {/* Unlimited Assistance Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">Unlimited Assistance Post-Launch</h2>
              <p className="py-2 dark:text-white">
                We provide continuous support to ensure your fintech product thrives in the market.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img src="/path-to-image-3.jpg" alt="Unlimited Assistance" className="rounded-lg shadow-lg" />
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">What Our Clients Say</h2>
              <p className="py-2 dark:text-white">
                "Finance Chest made our fintech dream a reality. Their team is incredible!"
              </p>
              <p className="py-2 dark:text-white">
                - Client Name
              </p>
              <p className="py-2 dark:text-white">
                "Their support and expertise are unmatched. Highly recommend!"
              </p>
              <p className="py-2 dark:text-white">
                - Client Name
              </p>
            </div>
          </div>
          
          {/* Call to Action Section */}
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-lg font-semibold dark:text-white">Ready to Build Your Fintech Product?</h2>
              <p className="py-2 dark:text-white">
                Contact us today to get started on your journey to success.
              </p>
              <button className="mt-6 px-8 py-3 bg-blue-600 text-white font-semibold rounded">Contact Us</button>
            </div>
          </div>
          
        </SubSectionInnerContainer>
      </SubSectionOuterContainer>
    </SectionOuterContainer>
  );
}
