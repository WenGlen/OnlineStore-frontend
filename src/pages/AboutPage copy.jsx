import AboutHero from '../components/sections/About/AboutHero';
import TextSection from '../components/sections/TextSection';
import ImageTextSection from '../components/sections/ImageTextSection';
import BrandNameSection from '../components/sections/About/BrandNameSection';
import ContactSection from '../components/sections/About/ContactSection';

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <AboutHero />

      {/* 我們在做的，不只是植物 */}
      <TextSection title="我們在做的，不只是植物">
        <p>
          綠蕨飾成立於八年前。<br />
          一開始，我們並沒有打算經營一個「植物品牌」。
        </p>
        <p>
          我們只是反覆注意到一件事：
        </p>
        <p>
          真正耐看的空間裡，<br />
          植物從來不是主角，<br />
          卻也從未缺席。
        </p>
        <p>
          它們安靜地存在，<br />
          不炫耀、不搶戲，<br />
          卻讓整個空間站得住。
        </p>
        <p>
          這樣的存在方式，<br />
          正是我們想留下的東西。
        </p>
      </TextSection>

      {/* 低調奢華，從來不是風格 */}
      <ImageTextSection 
        title="低調奢華，從來不是風格"
        imagePosition="right"
      >
        <p>
          對我們而言，<br />
          低調奢華不是視覺選擇，<br />
          而是一種判斷方式。
        </p>
        <p>
          我們不追求最大、最稀有、最引人注目。<br />
          我們在意的是：
        </p>
        <div className="space-y-2 text-secondary">
          <p>• 是否適合這個空間</p>
          <p>• 是否能長時間被觀看</p>
          <p>• 是否在多年後依然成立</p>
        </div>
        <p>
          真正好的存在，<br />
          不需要被反覆說明。
        </p>
        <p>
          它會在時間裡被理解。
        </p>
      </ImageTextSection>

      {/* Verdant Noble 的名字 */}
      <BrandNameSection />

      {/* 我們如何工作 */}
      <TextSection title="我們如何工作">
        <p>
          我們很少談「系列」或「爆款」。<br />
          更多時候，我們在做的是選擇與刪除。
        </p>
        <p>
          每一株植物，<br />
          都經過體態、比例與成熟度的判斷。
        </p>
        <p>
          每一次安置，<br />
          都考量觀看角度、空間高度與留白。
        </p>
        <p>
          我們相信，<br />
          被理解過的植物，<br />
          會自然地融入生活。
        </p>
      </TextSection>

      {/* 合作，來自信任而非曝光 */}
      <ContactSection />

      {/* 最後 */}
      <TextSection className="pb-32">
        <p className="text-center text-lg md:text-xl leading-[2.2]">
          綠蕨飾存在的理由，<br />
          不是讓植物變得昂貴。
        </p>
        <p className="text-center text-lg md:text-xl leading-[2.2] pt-6">
          而是讓真正好的東西，<br />
          不必解釋太多。
        </p>
      </TextSection>
    </div>
  );
}
