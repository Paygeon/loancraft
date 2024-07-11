// components/CustomHead.js

import Head from 'next/head';

const CustomHead = () => (
  <Head>
    {/* AdSense script */}
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6524431799974410"
      crossOrigin="anonymous"
    ></script>
  </Head>
);

export default CustomHead;
