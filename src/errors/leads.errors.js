class LeadsErrors {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const errorTag = document.querySelector(
        "#__layout > div > div.vue-notification-group.notifications > span > div > span > div > div.m-alert__content > p.m-alert__description.font-weight-light"
      );

      if (errorTag) {
        return true;
      }
    });
    if (isError) {
      return true;
    }
    return false;
  };
}

export default new LeadsErrors();
