class LinkanaError {
  error = async (page) => {
    const isError = await page.evaluate(() => {
      const findTag = document.querySelector("#app > div > main > div > p");

      if (findTag.textContent === "Nenhuma empresa foi encontrada") {
        return {
          status: true,
          error: "Invalid CNPJ, please try another one",
        };
      }

      return { status: false };
    });

    return isError;
  };
}

export default new LinkanaError();
