import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styles from "./EditorialStory.module.css";

const stories = [
  {
    id: "01",
    numberKey: "editorialStory.story1.number",
    defaultNumber: "01",
    eyebrowKey: "editorialStory.story1.eyebrow",
    defaultEyebrow: "INTELLIGENT ROUTING",
    titleKey: "editorialStory.story1.title",
    fallbackTitleKey: "pinnedPanels.panel1.title",
    descKey: "editorialStory.story1.desc",
    fallbackDescKey: "pinnedPanels.panel1.desc",
    defaultDesc:
      "Intelligent route optimization that factors in battery levels, elevation, charger availability, and real-time traffic across Egypt.",
    tag1Key: "editorialStory.story1.tag1",
    tag2Key: "editorialStory.story1.tag2",
    badgeKey: "editorialStory.story1.badge",
    image: "/images/panels/panelfour.webp",
    alt: "Watt Route Intelligent EV Navigation and Route Planning",
    width: 1912,
    height: 823,
  },
  {
    id: "02",
    numberKey: "editorialStory.story2.number",
    defaultNumber: "02",
    eyebrowKey: "editorialStory.story2.eyebrow",
    defaultEyebrow: "NATIONAL IMPACT",
    titleKey: "editorialStory.story2.title",
    fallbackTitleKey: "pinnedPanels.panel2.title",
    descKey: "editorialStory.story2.desc",
    fallbackDescKey: "pinnedPanels.panel2.desc",
    defaultDesc:
      "Join 25,000+ EV drivers reducing carbon emissions across Egypt. Every charge brings us closer to cleaner air and a sustainable tomorrow.",
    tag1Key: "editorialStory.story2.tag1",
    tag2Key: "editorialStory.story2.tag2",
    badgeKey: "editorialStory.story2.badge",
    image: "/images/panels/panelone.webp",
    alt: "Driving Egypt's Green Future with Electric Mobility",
    width: 1370,
    height: 672,
  },
  {
    id: "03",
    numberKey: "editorialStory.story3.number",
    defaultNumber: "03",
    eyebrowKey: "editorialStory.story3.eyebrow",
    defaultEyebrow: "CONNECTED ECOSYSTEM",
    titleKey: "editorialStory.story3.title",
    fallbackTitleKey: "pinnedPanels.panel3.title",
    descKey: "editorialStory.story3.desc",
    fallbackDescKey: "pinnedPanels.panel3.desc",
    defaultDesc:
      "One app, endless possibilities. Find stations, check availability, start charging, and pay all seamlessly integrated. Your complete EV charging companion.",
    tag1Key: "editorialStory.story3.tag1",
    tag2Key: "editorialStory.story3.tag2",
    badgeKey: "editorialStory.story3.badge",
    image: "/images/panels/paneltwo.webp",
    alt: "DOMEv Unified Smart Connected Charging Ecosystem",
    width: 1024,
    height: 909,
  },
  {
    id: "04",
    numberKey: "editorialStory.story4.number",
    defaultNumber: "04",
    eyebrowKey: "editorialStory.story4.eyebrow",
    defaultEyebrow: "FASTGRID INFRASTRUCTURE",
    titleKey: "editorialStory.story4.title",
    fallbackTitleKey: "pinnedPanels.panel4.title",
    descKey: "editorialStory.story4.desc",
    fallbackDescKey: "pinnedPanels.panel4.desc",
    defaultDesc:
      "Seamlessly connect to Egypt's network of ultra-fast DC charging stations up to 160kW operated by partner CPOs. DOMEv guides you to verified high-speed chargers along your route, enabling fast charging from 10% to 80% in around 45 minutes with live stall availability and unified payment.",
    tag1Key: "editorialStory.story4.tag1",
    tag2Key: "editorialStory.story4.tag2",
    badgeKey: "editorialStory.story4.badge",
    image: "/images/panels/panelthree.webp",
    alt: "Ultra-Fast 160kW DC Charging Infrastructure Network",
    width: 1537,
    height: 640,
  },
];

// subtle easing for editorial motion
const transitionConfig = {
  duration: 0.75,
  ease: [0.22, 1, 0.36, 1],
};

const textAnimation = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitionConfig,
  },
};

const imageAnimation = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      ...transitionConfig,
      duration: 0.85,
    },
  },
};

const EditorialStory = () => {
  const { t } = useTranslation();

  return (
    <section
      className={styles.section}
      id="editorial-story"
      aria-label="Watt Route Editorial Stories"
    >
      <div className={styles.container}>
        {/* Editorial Section Lead */}
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={transitionConfig}
        >
         
          <h2 className={styles.sectionTitle}>
            {t(
              "editorialStory.sectionTitle",
              "Intelligent Electric Mobility, Refined for Egypt"
            )}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t(
              "editorialStory.sectionSubtitle",
              "A curated editorial journey through the four pillars powering Egypt's electric vehicle transition."
            )}
          </p>
        </motion.div>

        {/* Vertically Stacked Editorial Story Sequence */}
        <div className={styles.storiesStack}>
          {stories.map((story, index) => {
            const resolvedNumber = t(story.numberKey, story.defaultNumber);
            const resolvedEyebrow = t(story.eyebrowKey, story.defaultEyebrow);
            const resolvedTitle = t(story.titleKey, t(story.fallbackTitleKey));
            const resolvedDesc = t(story.descKey, story.defaultDesc || t(story.fallbackDescKey));
            const tag1 = t(story.tag1Key, "");
            const tag2 = t(story.tag2Key, "");
            const badge = t(story.badgeKey, "");

            return (
              <div key={story.id} className={styles.storyBlock}>
                {/* Horizontal Divider separating stacked sections */}
                {index > 0 && (
                  <div className={styles.dividerWrapper} aria-hidden="true">
                    <span className={styles.dividerLine} />
                  </div>
                )}

                <motion.article
                  className={styles.storyRow}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {/* Left Column: Number, Eyebrow, Heading, Paragraph & Tags */}
                  <motion.div
                    className={styles.narrativeCol}
                    variants={textAnimation}
                  >
                    <div className={styles.numberMeta}>
                      <span className={styles.largeNumber}>
                        {resolvedNumber}
                      </span>
                      <span className={styles.numberDivider} aria-hidden="true">
                        /
                      </span>
                      <span className={styles.editorialEyebrow}>
                        {resolvedEyebrow}
                      </span>
                    </div>

                    <h3 className={styles.storyTitle}>{resolvedTitle}</h3>

                    <p className={styles.storyDesc}>{resolvedDesc}</p>

                    {(tag1 || tag2) && (
                      <div className={styles.tagsContainer}>
                        {tag1 && (
                          <span className={styles.pillTag}>
                            <span
                              className={styles.pillDot}
                              aria-hidden="true"
                            />
                            {tag1}
                          </span>
                        )}
                        {tag2 && (
                          <span className={styles.pillTag}>
                            <span
                              className={styles.pillDot}
                              aria-hidden="true"
                            />
                            {tag2}
                          </span>
                        )}
                      </div>
                    )}
                  </motion.div>

                  {/* Right Column: Prominent Visual */}
                  <motion.div
                    className={styles.visualCol}
                    variants={imageAnimation}
                  >
                    <div className={styles.visualFrame}>
                      <img
                        src={story.image}
                        alt={story.alt}
                        className={styles.visualImage}
                        width={story.width}
                        height={story.height}
                        loading={index === 0 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                  </motion.div>
                </motion.article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EditorialStory;

