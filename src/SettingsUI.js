import styles from "./SettingsUI.css";
const SettingsUI = () => {
  return (
    <div className={styles.day1509AccountSettingsUiC}>
      <div className={styles.day1509AccountSettingsUiCChild} />
      <div className={styles.frameParent}>
        <div className={styles.finishSettingUpYourPageParent}>
          <b className={styles.finishSettingUp}>Finish setting up your page</b>
          <div className={styles.completeActionsTo}>
            Complete actions to unlock new features along the way. On average,
            completed pages get 30% more traffic.
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild} />
          <div className={styles.frameChild3} />
          <div className={styles.frameChild4} />
          <div className={styles.frameChild3} />
          <div className={styles.frameChild4} />
        </div>
        <div className={styles.remainingToCompleteParent}>
          <i className={styles.remainingToComplete}>4 remaining to complete</i>
          <img className={styles.groupIcon} alt="" src="/groupIcon/group-2.png" />
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.howWouldYouLikeTheSubscriParent}>
          <b className={styles.finishSettingUp}>
            How would you like the subscription to help?
          </b>
          <div className={styles.wellRecommendThe}>
            We’ll recommend the right plan for you.
          </div>
        </div>
        <div className={styles.finishSettingUpYourPageParent}>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild7} />
            <div className={styles.finishSettingUp}>
              To job search with confidence
            </div>
          </div>
          <div className={styles.rectangleGroup}>
          <img className={styles.frameChild8} alt="" src="/groupIcon/group-3.png" />
            <div className={styles.finishSettingUp}>
              To develop my professional skills
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild7} />
            <div className={styles.finishSettingUp}>
              To grow my network or manage my reputation
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild7} />
            <div className={styles.finishSettingUp}>
              To find leads more effectively
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild7} />
            <div className={styles.finishSettingUp}>
              To find and hire talent faster
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.frameWrapper}>
            <div className={styles.skipWrapper}>
              <div className={styles.finishSettingUp}>Skip</div>
            </div>
          </div>
          <div className={styles.nextWrapper}>
            <div className={styles.finishSettingUp}>Next</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsUI;
