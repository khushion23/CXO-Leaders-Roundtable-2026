import SectionWrapper from "@/components/SectionWrapper";

function Queries() {
  return (
    <SectionWrapper id="queries">
      <div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#222] bg-[#11131a] shadow-xl flex flex-col md:flex-row items-center p-6 md:p-8 gap-4 mt-0 mb-0">
        {/* Left: Contact Info */}
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">For More Queries</h2>
          <div className="h-1 w-48 bg-[#a259ff] rounded mb-6" />
          <div className="text-white text-lg mb-1">Drishti Arora </div>
          <div className="text-[#a259ff] text-base mb-1">+91 9667305596</div>
          <div className="text-blue-300 text-base">drishti@observenow.com</div>
        </div>
        {/* Right: GIF/Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src="/data/Untitled design (4).gif"
            alt="Contact Illustration"
            className="w-full h-48 md:h-56 object-contain object-right rounded-2xl"
            draggable="false"
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Queries;
