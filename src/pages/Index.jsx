import { useState, useEffect } from 'react';
import { ArrowDown, GitHub, Twitter, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#F4A261] text-[#22223B] min-h-screen">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#E76F51] z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-8 relative">
        <h1 className="text-6xl font-bold mb-4">Guillaume</h1>
        <h2 className="text-4xl mb-8">Founder of Vercel</h2>
        <p className="text-xl max-w-2xl mb-12">Pioneering the future of web development and deployment</p>
        <Button className="bg-[#E76F51] hover:bg-[#E9C46A] text-white">
          Learn More
        </Button>
        <ArrowDown className="absolute bottom-8 animate-bounce" size={32} />
      </section>

      {/* About Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-[#264653] text-white p-8">
        <h2 className="text-4xl font-bold mb-8">About Guillaume</h2>
        <div className="max-w-3xl text-center">
          <p className="mb-6">
            Guillaume is a visionary entrepreneur and the founder of Vercel, a groundbreaking platform revolutionizing the way developers build, deploy, and scale web applications.
          </p>
          <p className="mb-6">
            With a passion for performance and user experience, Guillaume has led Vercel to become a leader in the Jamstack ecosystem, empowering developers worldwide to create faster, more efficient websites and applications.
          </p>
          <p>
            His innovative approach to serverless deployment and edge computing has set new standards in the industry, making web development more accessible and powerful than ever before.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-[#2A9D8F] p-8">
        <h2 className="text-4xl font-bold mb-12 text-white">Key Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Vercel Founding</h3>
            <p>Established Vercel, transforming the landscape of web deployment and development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Next.js Framework</h3>
            <p>Spearheaded the development of Next.js, a powerful React framework used by millions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Edge Computing Pioneer</h3>
            <p>Introduced innovative edge computing solutions, enhancing web performance globally.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Developer Community</h3>
            <p>Built a thriving developer community, fostering collaboration and innovation.</p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-[#E9C46A] p-8 text-center">
        <h2 className="text-4xl font-bold mb-8">Guillaume's Vision</h2>
        <div className="max-w-3xl">
          <p className="text-xl mb-8">
            "I envision a world where every developer, regardless of their background or resources, can bring their ideas to life on the web instantly. Vercel is not just a platform; it's a movement towards a more accessible, performant, and enjoyable web development experience."
          </p>
          <Button className="bg-[#E76F51] hover:bg-[#264653] text-white">
            Join the Movement
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-[#22223B] text-white p-8">
        <h2 className="text-4xl font-bold mb-12">Connect with Guillaume</h2>
        <div className="flex space-x-8 mb-12">
          <a href="#" className="hover:text-[#E76F51] transition-colors">
            <Twitter size={32} />
          </a>
          <a href="#" className="hover:text-[#E76F51] transition-colors">
            <GitHub size={32} />
          </a>
          <a href="#" className="hover:text-[#E76F51] transition-colors">
            <Linkedin size={32} />
          </a>
          <a href="#" className="hover:text-[#E76F51] transition-colors">
            <Mail size={32} />
          </a>
        </div>
        <p className="text-xl max-w-2xl text-center">
          Interested in collaborating or learning more about Vercel? Don't hesitate to reach out. Guillaume is always excited to connect with fellow innovators and visionaries.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-[#264653] text-white py-8 text-center">
        <p>&copy; 2023 Guillaume - Vercel Founder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
