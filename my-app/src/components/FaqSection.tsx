

const faq =() => {


return(
<div
  className="mx-auto relative   md:bg-[linear-gradient(180deg,_#0C0D11_0%,_#07080A_12.66%)] md:pt-[120px] pt-[60px] md:pb-[240px] pb-[100px]"
//   style="border-image-source: linear-gradient(180deg, #171923 0%, rgba(23, 25, 35, 0) 100%); border-image-slice: 1;"
>
<div className="absolute right-[20px] lg:bottom-[160px] md:bottom-[60px]">
  {/* <img src={FaqImg.src}  className="max-w-[196px]  lg:block hidden h-auto" alt="faq flower image" /> */}
</div>
  <div className=" mx-auto max-w-[1270px] md:p-[40px] p-[16px]">
    <div className="flex justify-center mb-[24px]">
      <div className="bg-[#67E0F926] rounded-[24px]">
        {/* <SectionTitleV3
        iconSrc={Faq.src}alt="Faq Icon"
        heading="FAQs"
        /> */}
      </div>
    </div>
    <div
      className="isolate overflow-hidden mb-[56px] px-0 sm:px-0 lg:flex flex-col lg:gap-x-[0] gap-x-[44px] lg:pl-[44px] pr-[0px] lg:pt-0"
    >
      {/* <SectionHeader heading="Got questions? Find answers here" /> */}
    </div>
    <div className="flex justify-center">
      <div className="relative lg:max-w-[850px] md:max-w-[740px] max-w-[540px]">
        <FaqItem
        question="What is Hootz AI?"
        answer=" Hootz is your friendly AI companion for Mac that helps you focus. Like a supportive friend, it blocks distractions, plays focus music, and gently nudges you to stay on track."
        />
        <FaqItem
        question="Who is Hootz for?"
        answer="Hootz is for anyone who wants to in increase their focus and productivity - whether you're a student, writer, developer, designer, founder, or just someone who wants to get more done."
        />
        <FaqItem
        question="How does it block distractions?"
        answer=" When you start a focus session, Hootz automatically blocks distracting apps and websites you've selected. It stays active until your session ends."
        />
        <FaqItem
        question="Can I customize which apps and sites to block?"
        answer="Yes! You can create your own blocklist of apps and websites that distract you."
        />       
        <FaqItem
        question="How does it track my productivity?"
        answer=" Hootz gives you insights about your focus sessions, showing when you're most productive and how well you stay focused."
        />        
        <FaqItem
        question="Is my data private?"
        answer="Yes, your data is stored locally on your Mac and is never shared."
        />
        
        <FaqItem
        question="Is there a free trial?"
        answer=" Yes, you can try Hootz free for 7 days with all features included."
        />
        
        <FaqItem
        question="What happens after the trial?"
        answer="You can subscribe monthly or annually to continue using all features."
        />
      </div>
    </div>
  </div>
</div>
)
}
export default faq