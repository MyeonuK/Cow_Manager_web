class MainUI {
  $mainDiv = null;
  $tabs = {
    $cowTab: null,
    $houseTab: null,
    $vaccinTab: null,
  };
  data = null;

  constructor($target) {
    const $mainDiv = document.createElement("div");
    $mainDiv.className = "MainDiv";

    this.$mainDiv = $mainDiv;
    $target.appendChild(this.$mainDiv);

    this.render();
  }

  getColor(color) {
    switch (color) {
      case "choose":
        return "#ff0000";
      case "unchoose":
        return "#f5f5dc";
    }
  }

  hideAllTab($buttonList) {
    $buttonList.forEach((button) => (button.style.fontWeight = "normal"));
    this.$tabs.$cowTab.hide();
    this.$tabs.$houseTab.hide();
    this.$tabs.$vaccinTab.hide();
  }

  setTabs($contentDiv, $buttonList) {
    return new Promise(() => {
      setTimeout(() => {
        this.$tabs.$cowTab = new CowTab($contentDiv, this.data.parsedData);
        this.$tabs.$houseTab = new HouseTab($contentDiv, this.data.parsedData);
        this.$tabs.$vaccinTab = new VaccinTab(
          $contentDiv,
          this.data.parsedData
        );

        this.hideAllTab($buttonList);
        $buttonList[0].style.fontWeight = "bold";
        this.$tabs.$cowTab.show();

        const $tabList = [
          this.$tabs.$cowTab,
          this.$tabs.$houseTab,
          this.$tabs.$vaccinTab,
        ];
        for (let i = 0; i < $buttonList.length; i++) {
          $buttonList[i].addEventListener("click", () => {
            $tabList[i].show();
          });
        }
      }, 300);
    });
  }

  async render() {
    this.data = new ReadXlsx("data/data_final.xlsx");

    // header
    const $header = document.createElement("header");
    $header.className = "Header";

    // title
    const $title = document.createElement("h1");
    $title.className = "Title";
    $title.innerText = "Cow_Manager3";

    // nav
    const $nav = document.createElement("nav");
    $nav.className = "Nav";

    // navBtn
    const $cowBtn = document.createElement("button");
    const $houseBtn = document.createElement("button");
    const $vaccinBtn = document.createElement("button");
    $cowBtn.innerText = "Cow";
    $houseBtn.innerText = "House";
    $vaccinBtn.innerText = "Vaccin";

    const $buttonList = [$cowBtn, $houseBtn, $vaccinBtn];

    $buttonList.forEach((button) => {
      button.className = "Button";
      button.addEventListener("click", () => {
        this.hideAllTab($buttonList);
        button.style.fontWeight = "bold";
      });
    });

    const $tool = document.createElement("span");
    $tool.className = "Tool";

    // contentDiv
    const $contentDiv = document.createElement("div");
    $contentDiv.className = "ContentDiv";

    // append
    $header.appendChild($title);
    $nav.appendChild($cowBtn);
    $nav.appendChild($houseBtn);
    $nav.appendChild($vaccinBtn);
    $header.appendChild($nav);
    $header.appendChild($tool);
    this.$mainDiv.appendChild($header);
    this.$mainDiv.appendChild($contentDiv);

    await this.setTabs($contentDiv, $buttonList);
  }
}
